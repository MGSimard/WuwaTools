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
// Could consider moving all into one array with region name, location, beacons in region, misc in region
export const beacons: Array<MapIconTypes["pos"]> = [
  [57.1, 64.9],
  [48.3, 93],
  [67, 98.7],
  [86.7, 98.1],
  [57.2, 123.7],
  [18.9, 81.6],
  [23, 60.64],
  [5.1, 48.9],
  [20.35, 29.9],
  [41.7, 21.5],
  [45.7, 39.9],
  [1.5, 8.5],
  // Mt. Firmament
  [-226.3, 215.1],
  [-239.2, 220.4],
  [-245.8, 230.2],
  [-252.7, 230.5],
  [-262.6, 240.1],
  [-239.85, 242.63],
  [-253.3, 256],
  [-265, 262.8],
  [-261.7, 271.5],
  [-246.1, 293.3],
  [-247.25, 279.9],
  [-240.4, 278.18],
  [-217.2, 281.8],
  [-234.3, 264.4],
  [-230.5, 266.4],
  [-222.8, 262.7],
  [-218.6, 247.4],
  // Whining Aix's Mire
  [-214, 143.5],
  [-192.8, 128],
  [-207.7, 120.6],
  [-227, 118.3],
  [-240.2, 128.6],
  [-243.45, 105.5],
  [-233.9, 88],
  [-218.4, 79.1],
  [-198.2, 74.2],
  [-215.2, 103.7],
  [-186.7, 94.93],
  // Dim Forest
  [-238.8, 61.5],
  [-222.8, 58.2],
  [-210, 53.4],
  [-236.4, 39.25],
  [-221.8, 26.7],
  [-210.6, 30.2],
  [-188.6, 17.3],
  [-192.6, -6.2],
  // Port City of Guixu
  [-172.9, 16],
  [-173.8, -15],
  [-160.5, -23.5],
  [-159.3, -37.4],
  [-128.6, -38.7],
  [-134.7, -12.5],
];
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
