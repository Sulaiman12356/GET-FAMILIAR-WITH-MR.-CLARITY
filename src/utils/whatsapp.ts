export const DEFAULT_WHATSAPP_NUMBER = "2348051780169";

export const DEFAULT_PREFILLED_MESSAGE = 
  "Hello Mr. Clarity, my name is [Name] from [Department]. I would like to join The Auspicious Era movement.";

export function getWhatsAppUrl(
  number = DEFAULT_WHATSAPP_NUMBER, 
  message = DEFAULT_PREFILLED_MESSAGE
): string {
  // Strip non-digits from number
  const cleanNumber = number.replace(/\D/g, '') || DEFAULT_WHATSAPP_NUMBER;
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
