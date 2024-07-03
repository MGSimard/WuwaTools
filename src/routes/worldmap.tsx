import { createFileRoute } from "@tanstack/react-router";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { LocationLabel, regions } from "../Components/MapComponents/LocationLabel";
import { MapIcon, nexuses } from "../Components/MapComponents/MapIcon";

export const Route = createFileRoute("/worldmap")({
  component: InteractiveMap,
});

function InteractiveMap() {
  return (
    <>
      <h1>World Map</h1>
      <section>
        <div id="map">
          <MapContainer
            maxBounds={L.latLngBounds([-5024, -5024], [5024, 5024])}
            center={[-76, 32]}
            zoom={2}
            zoomSnap={0.5}
            zoomDelta={0.5}
            crs={L.CRS.Simple}
            maxZoom={6}
            minZoom={1}
            attributionControl={false}
            zoomControl={false}>
            <TileLayer
              url="/map/{z}/{x}_{y}.png"
              noWrap={true}
              tileSize={256}
              maxNativeZoom={2}
              minNativeZoom={2}
              minZoom={1}
              maxZoom={3}
            />
            <TileLayer
              url="/map/{z}/{x}_{y}.png"
              noWrap={true}
              tileSize={1024}
              maxNativeZoom={4}
              minNativeZoom={4}
              minZoom={3.5}
              maxZoom={6}
            />

            {nexuses.map((nexus) => (
              <MapIcon key={nexus[0] * nexus[1]} pos={nexus} iconType={"nexus"} size={[32, 32]} />
            ))}
            {regions.map((region) => (
              <LocationLabel key={region.text} pos={region.pos} text={region.text} />
            ))}
          </MapContainer>
        </div>
      </section>
    </>
  );
}
