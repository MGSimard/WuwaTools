import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import beacon from "../assets/mapicons/icon_beacon.png";
import beaconDisabled from "../assets/mapicons/icon_beacon_disabled.png";
import nexus from "../assets/mapicons/icon_nexus.png";
import nexusDisabled from "../assets/mapicons/icon_nexus_disabled.png";

const icons = {
  beacon,
  beaconDisabled,
  nexus,
  nexusDisabled,
};

export function MapIcon({
  pos,
  iconType,
  size,
}: {
  pos: [number, number];
  iconType: keyof typeof icons;
  size: [number, number];
}) {
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
