import { useState, useCallback } from "react";

// Assuming a toast utility is available, e.g., from shadcn/ui's useToast or sonner
// If using shadcn/ui, you'd typically get `toast` from `useToast()` in your component.
// If using sonner, `toast` is a direct import.
// For this hook, we'll make it an optional parameter.
type ToastFunction = (options: {
  title: string;
  description: string;
  status?: "success" | "error";
}) => void;

interface EmailRecipient {
  email: string;
  name?: string;
}

interface EmailSender {
  email: string;
  name?: string;
}

interface UseSendEmailOptions {
  /** The API endpoint to send the email data to. */
  url?: string;
  /** Default sender information for the email. */
  defaultSender?: EmailSender;
  /** Default recipient(s) for the email. */
  defaultTo?: EmailRecipient[];
  /** Callback function to execute on successful email send. */
  onSuccess?: (message: string) => void;
  /** Callback function to execute on email send failure. */
  onError?: (message: string) => void;
  /** Callback function to execute after the email send attempt, regardless of success or failure. */
  onSettled?: () => void;
  /** Optional toast function for displaying notifications. */
  toast?: ToastFunction;
}

interface SendEmailParams {
  /** The data object to be formatted into the email body. */
  data: Record<string, any>;
  /** The subject line of the email. */
  subject: string;
  /** The main title displayed in the email body. */
  emailTitle?: string;
  /** Override default sender information for this specific email. */
  sender?: EmailSender;
  /** Override default recipient(s) for this specific email. */
  to?: EmailRecipient[];
  /** Email address to set as the reply-to. */
  replyTo?: EmailSender;
  /** Override hook's default success callback for this specific email. */
  onSuccess?: (message: string) => void;
  /** Override hook's default error callback for this specific email. */
  onError?: (message: string) => void;
  /** Override hook's default settled callback for this specific email. */
  onSettled?: () => void;
}

/**
 * Helper function to convert a string to Title Case.
 * Assumes camelCase input for better readability.
 */
function toTitleCase(str: string): string {
  return str
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (s) => s.toUpperCase()) // Capitalize the first letter
    .trim();
}

/**
 * Generates the HTML content for the email body based on provided data.
 */
function generateEmailHtml(data: Record<string, any>, emailTitle: string): string {
  let rowsHtml = "";
  for (const [label, value] of Object.entries(data)) {
    const valueStr: string = Array.isArray(value) ? value.join(", ") : String(value);
    if (!valueStr.trim()) continue; // Skip empty or whitespace-only values

    // Basic HTML escaping for display in email
    const escapedValue = valueStr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/\n/g, "<br>");

    rowsHtml += `
      <tr>
        <td class="label">${toTitleCase(label)}:</td>
        <td class="value">${escapedValue}</td>
      </tr>
    `;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #22311de6; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        table { width: 100%; border-collapse: collapse; border: 1px solid #ccc; }
        th, td { border: 1px solid #ccc; padding: 8px; }
        th { background-color: #22311de6; color: white; }
        td { padding: 8px; vertical-align: top; }
        .label { font-weight: bold; background-color: #22311de6; color: white; width: 30%; }
        .value { }
        .urgent { color: #D32F2F; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${emailTitle}</h2>
        </div>
        <div class="content">
          <table>
            ${rowsHtml}
          </table>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function useSendEmail(options?: UseSendEmailOptions) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = useCallback(async (params: SendEmailParams) => {
    setIsLoading(true);
    setError(null);

    const {
      data,
      subject,
      emailTitle = subject, // Default to subject if not provided
      sender = options?.defaultSender || { email: 'contact@reinhard.name.ng', name: 'Igwe Reinhard Chigozie' },
      to = options?.defaultTo || [{ email: 'contact@reinhard.name.ng', name: 'Reinhard Chigozie' }],
      replyTo,
      onSuccess,
      onError,
      onSettled,
    } = params;

    const emailHtmlContent = generateEmailHtml(data, emailTitle);

    const datalist = {
      sender: JSON.stringify(sender),
      to: JSON.stringify(to),
      subject,
      htmlContent: emailHtmlContent,
      replyTo: JSON.stringify(replyTo || {email: data.email, name: data.name}),
    };

    const fd = new FormData();
    Object.entries(datalist).forEach(([key, value]) => {
      if (value !== undefined) {
        fd.append(key, String(value));
      }
    });

    try {
      const response = await fetch(options?.url || "/form-handler.php", {
        method: "POST",
        body: fd
      });

      const result = await response.json();

      if (result.success) {
        const message = result.success || "Email sent successfully!";
        (onSuccess || options?.onSuccess)?.(message);
        options?.toast?.({ title: "Success", description: message, status: "success" });
      } else {
        const message = result.error || "Failed to send email.";
        setError(message);
        (onError || options?.onError)?.(message);
        options?.toast?.({ title: "Error", description: message, status: "error" });
      }
    } catch (err) {
      const message = "An unexpected error occurred while sending the email.";
      console.error("Error sending email:", err);
      setError(message);
      (onError || options?.onError)?.(message);
      options?.toast?.({ title: "Error", description: message, status: "error" });
    } finally {
      setIsLoading(false);
      (onSettled || options?.onSettled)?.();
    }
  }, [options]);

  return { sendEmail, isLoading, error };
}