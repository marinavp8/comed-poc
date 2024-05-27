import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function json(obj: any) {
  if (obj)
    return JSON.parse(JSON.stringify(obj))
  return null
}





