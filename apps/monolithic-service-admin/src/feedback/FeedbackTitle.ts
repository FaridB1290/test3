import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "clientNom";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.clientNom?.toString() || String(record.id);
};
