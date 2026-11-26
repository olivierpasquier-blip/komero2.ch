export const SMS_STOP_SUFFIX = ' STOP 36180';
export const SMS_SINGLE_SEGMENT_MAX = 145;

export interface SmsMetrics {
  fullMessage: string;
  characterCount: number;
  remainingInLimit: number;
  isWithinLimit: boolean;
  segmentCount: number;
  estimatedOpens: number;
  estimatedShopVisits: number;
}

/**
 * Builds a compliant promotional SMS with shop prefix and STOP mention,
 * enforcing Komero's 145-character single-SMS budget and estimating local reach.
 */
export function computeSmsCampaignMetrics(
  shopPrefix: string,
  body: string,
  recipientCount: number
): SmsMetrics {
  const cleanPrefix = shopPrefix.trim();
  const cleanBody = body.trim();
  const baseText = cleanPrefix ? `${cleanPrefix} : ${cleanBody}` : cleanBody;
  const alreadyHasStop = /STOP\s+(au\s+)?\d+/i.test(baseText);
  const fullMessage = alreadyHasStop ? baseText : `${baseText}${SMS_STOP_SUFFIX}`;

  const characterCount = fullMessage.length;
  const remainingInLimit = SMS_SINGLE_SEGMENT_MAX - characterCount;
  const isWithinLimit = characterCount <= SMS_SINGLE_SEGMENT_MAX;
  const segmentCount = characterCount === 0 ? 0 : Math.ceil(characterCount / SMS_SINGLE_SEGMENT_MAX);

  const safeRecipients = Math.max(0, Math.round(recipientCount));
  const estimatedOpens = Math.round(safeRecipients * 0.95);
  const estimatedShopVisits = Math.max(1, Math.round(safeRecipients * 0.14));

  return {
    fullMessage,
    characterCount,
    remainingInLimit,
    isWithinLimit,
    segmentCount,
    estimatedOpens,
    estimatedShopVisits,
  };
}
