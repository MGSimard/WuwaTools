import { createFileRoute } from "@tanstack/react-router";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export const Route = createFileRoute("/map")({
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
            center={[0, 0]}
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
          </MapContainer>
        </div>
      </section>
    </>
  );
}
