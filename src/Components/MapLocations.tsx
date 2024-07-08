import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

export function LocationLabel({ pos, text }: { pos: [number, number]; text: string }) {
  const map = useMap();
  useEffect(() => {
    const icon = L.divIcon({
      className: "location-label",
      html: `<div>${text}</div>`,
    });

    const loclabel = L.marker(pos, { icon }).addTo(map);

    return () => {
      map.removeLayer(loclabel);
    };
  }, []);

  return null;
}
