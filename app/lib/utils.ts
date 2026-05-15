import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function getAssetPath(path: string) {
  const basePath = process.env.NODE_ENV === 'production' ? '/turn_it_up_site' : '';
  return `${basePath}${path}`;
}