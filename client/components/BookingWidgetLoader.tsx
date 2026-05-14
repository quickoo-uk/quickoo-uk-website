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

  if (!loaded) return null;

  return <>{children}</>;
};

export default BookingWidgetLoader;