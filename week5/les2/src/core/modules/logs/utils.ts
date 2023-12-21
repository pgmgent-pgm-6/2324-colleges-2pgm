import isVoid from "@core/utils/isVoid";
import { format } from "date-fns";

export const formatDate = (date: Date) => {
  if (format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")) {
    return "Today";
  } else if (format(date, "yyyy") === format(new Date(), "yyyy")) {
    return format(date, "dd/MM");
  } else {
    return format(date, "dd/MM/yyyy");
  }
};

// e.g. 90 to "01:30"
export const formatTimeToString = (minutes: number, separator = ":") => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;

  return `${String(hours).padStart(2, "0")}${separator}${String(min).padStart(2, "0")}`;
};

// e.g. "01:30" to 90
export const parseStringToTime = (string: string) => {
  if (!isVoid(string)) {
    const parts = string.split(":");
    const hours = parts.length > 1 && !isVoid(parts[0]) ? parseInt(parts[0]) : 0;
    const minutes = Math.min(59, parseInt(parts[parts.length - 1]));
    // return minutes
    return hours * 60 + minutes;
  } else {
    return 0;
  }
};
