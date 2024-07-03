import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import beacon from "../../assets/mapicons/icon_beacon.png";
import beaconDisabled from "../../assets/mapicons/icon_beacon_disabled.png";
import nexus from "../../assets/mapicons/icon_nexus.png";
import nexusDisabled from "../../assets/mapicons/icon_nexus_disabled.png";

export interface MapIconTypes {
  pos: [number, number];
  iconType: keyof typeof icons;
  size: [number, number];
}

const icons = {
  beacon,
  beaconDisabled,
  nexus,
  nexusDisabled,
};

export const beacons: Array<MapIconTypes["pos"]> = [];
export const nexuses: Array<MapIconTypes["pos"]> = [
  [-75.7, 27.1],
  [-59.3, 84.98],
  [-22.25, 22.65],
  [-3.6, 30.24],
  [-32, -33.7],
  [-128.5, 24.9],
  [-143.95, 67.16],
  [-151.9, 1],
  [-219.38, 4.88],
  [-208, 86.15],
  [-185.14, 115.3],
  [-209.06, 195.82],
  [-231.5, 232.65],
];

export function MapIcon({ pos, iconType, size }: MapIconTypes) {
  const map = useMap();

  useEffect(() => {
    const icon = L.icon({
      iconUrl: icons[iconType],
      iconSize: size,
    });

    const marker = L.marker(pos, { icon }).addTo(map);

    return () => {
      map.removeLayer(marker);
    };
  }, []);
  return null;
}
