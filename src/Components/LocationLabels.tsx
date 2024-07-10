import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

export function LocationLabel({ pos, text, wrap }: { pos: [number, number]; text: string; wrap: boolean }) {
  const map = useMap();
  useEffect(() => {
    const icon = L.divIcon({
      className: `location-label ${wrap ? "llwrap" : "llwrap2"}`,
      html: `<div>${text}</div>`,
    });

    const loclabel = L.marker(pos, { icon }).addTo(map);

    return () => {
      map.removeLayer(loclabel);
    };
  }, []);

  return null;
}
