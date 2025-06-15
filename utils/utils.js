import { v4 as uuid } from "uuid";

export function generateRandomString() {
  return uuid().substring(0, 5);
}

export function formatDate(date) {
  if (date) return date.slice(0, 10);
}
