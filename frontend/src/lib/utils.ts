import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    month: 'long',
    day: "2-digit"
  }).format(d)
}

export function addHours(d: Date, hrs: number): Date {
  d.setHours(d.getHours() + hrs);
  return d;
}
