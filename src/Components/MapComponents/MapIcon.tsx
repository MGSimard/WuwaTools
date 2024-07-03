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
