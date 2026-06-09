import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import yaml from "js-yaml"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function downloadYaml(data: object, filename = "cv.yaml") {
  const yamlString = yaml.dump(data);

  if ("showSaveFilePicker" in window) {
    try {
      const handle = await (window as Window & typeof globalThis & { showSaveFilePicker: (opts: object) => Promise<FileSystemFileHandle> }).showSaveFilePicker({
        suggestedName: filename,
        types: [{ description: "YAML file", accept: { "application/octet-stream": [".yaml", ".yml"] } }],
      });
      const writable = await handle.createWritable();
      await writable.write(yamlString);
      await writable.close();
      return;
    } catch (err) {
      if ((err as DOMException).name === "AbortError") return;
    }
  }

  const blob = new Blob([yamlString], { type: "text/yaml" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
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
