export const loadExternalScript = (
  src: string,
  forceReload = false
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(
      `script[src="${src}"]`
    ) as HTMLScriptElement | null;

    if (existing && forceReload) {
      existing.remove();
    }

    if (existing && !forceReload) {
      resolve();
      return;
    }

    const script = document.createElement("script");

    script.src = src;
    script.async = true;

    script.onload = () => resolve();

    script.onerror = () =>
      reject(new Error(`Failed to load script: ${src}`));

    document.body.appendChild(script);
  });
};