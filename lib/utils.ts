import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberWithCommas(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const errors = {
  add: (error: unknown) => {
    // link to sentry here
    console.error(error);
  },
};

export function convertViewsToAbbreviation(num: number): string {
  const absNum = Math.abs(num);
  const million = 1000000;
  const thousand = 1000;

  if (absNum >= million) {
    return (num / million).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (absNum >= thousand) {
    return (num / thousand).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return num.toString();
  }
}
