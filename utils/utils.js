import { v4 as uuid } from "uuid";

export function generateRandomString() {
  return uuid().substring(0, 5);
}

export function formatDate(date) {
  if (date) return date.slice(0, 10);
}

export const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutes}:${returnedSeconds}`;
};
