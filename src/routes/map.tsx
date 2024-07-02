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
            zoom={4}
            zoomDelta={0.5}
            crs={L.CRS.Simple}
            zoomSnap={0.5}
            maxZoom={8}
            minZoom={4}
            attributionControl={false}
            zoomControl={false}>
            <TileLayer url="/map/{z}/{x}_{y}.png" noWrap={true} />
          </MapContainer>
        </div>
      </section>
    </>
  );
}
