import { loadExternalScript } from "@/lib/loadExternalScript";
import { useEffect, useState } from "react";

type Props = {
  scriptUrl: string;
  children: React.ReactNode;
};

const BookingWidgetLoader = ({
  scriptUrl,
  children,
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        setLoaded(false);

        // cleanup previous widgets
        document.querySelectorAll("booking-widget").forEach((el) => {
          el.innerHTML = "";
        });

        // cleanup old script
        document
          .querySelectorAll(`script[src="${scriptUrl}"]`)
          .forEach((s) => s.remove());

        await loadExternalScript(scriptUrl, true);

        if (mounted) {
          setLoaded(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    init();

    return () => {
      mounted = false;
    };
  }, [scriptUrl]);

  // The widget boots with a placeholder "Default Toast Message" toast. Hide only
  // that one, so genuine validation toasts still reach the user.
  useEffect(() => {
    if (!loaded) return;

    const syncToasts = () => {
      document.querySelectorAll("booking-widget app-toast").forEach((toast) => {
        const el = toast as HTMLElement;
        if (el.textContent?.includes("Default Toast Message")) {
          el.style.display = "none";
        } else {
          el.style.removeProperty("display");
        }
      });
    };

    syncToasts();

    const observer = new MutationObserver(syncToasts);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [loaded]);

  if (!loaded) return null;

  return <>{children}</>;
};

export default BookingWidgetLoader;