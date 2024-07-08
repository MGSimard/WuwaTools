import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

export function MapIcon({ pos, iconType, size }: { pos: [number, number]; iconType: string; size: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    const icon = L.icon({
      iconUrl: `/map/icons/icon_${iconType}.png`,
      iconSize: size,
    });

    const marker = L.marker(pos, { icon }).addTo(map);

    return () => {
      map.removeLayer(marker);
    };
  }, []);
  return null;
}

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
