import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import yaml from "js-yaml"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadYaml(data: object, filename = "cv.yaml") {
  const yamlString = yaml.dump(data);
  const dataUri = "data:text/plain;charset=utf-8," + encodeURIComponent(yamlString);

  const link = document.createElement("a");
  link.href = dataUri;
  link.download = filename;
  link.click();
}

export function uploadYaml<T = unknown>(): Promise<T> {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".yaml,.yml";

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        reject(new Error("No file selected"));
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          const data = yaml.load(content) as T;
          resolve(data);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    };

    input.click();
  });
}
