import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export interface LocationLabelTypes {
  pos: [number, number];
  text: string;
}

export const regions: LocationLabelTypes[] = [
  { pos: [-81, 31], text: "Jinzhou" },
  { pos: [-136, 36], text: "Tiger's Maw" },
  { pos: [-156, -32], text: "Port City of Guixu" },
  { pos: [-42, -32], text: "Gorges of Spirits" },
  { pos: [-32, 32], text: "Central Plains" },
  { pos: [18, 42], text: "Desorock Highlands" },
  { pos: [78, 116], text: "Norfall Barrens" },
  { pos: [-124, 74], text: "Wuming Bay" },
  { pos: [-206, 32], text: "Dim Forest" },
  { pos: [-224, 106], text: "Whining Aix's Mire" },
  { pos: [-236, 252], text: "Mt. Firmament" },
];

export function LocationLabel({ pos, text }: LocationLabelTypes) {
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
