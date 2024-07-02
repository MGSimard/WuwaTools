import { createFileRoute } from "@tanstack/react-router";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export const Route = createFileRoute("/map")({
  component: InteractiveMap,
});

function InteractiveMap() {
  function CityLabel({ position, text }: { position: [number, number]; text: string }) {
    const map = useMap();

    const icon = L.divIcon({
      className: "city-label",
      html: `<div>${text}</div>`,
    });

    L.marker(position, { icon }).addTo(map);

    return null;
  }

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
            <Marker position={[-76, 27]}>
              <Popup>Work in Progress</Popup>
            </Marker>
            <CityLabel position={[-76, 27]} text="Jinzhou" />
            <CityLabel position={[-136, 36]} text="Tiger's Maw" />
            <CityLabel position={[-156, -32]} text="Port City of Guixu" />
            <CityLabel position={[-42, -32]} text="Gorges of Spirits" />
            <CityLabel position={[-32, 32]} text="Central Plains" />
            <CityLabel position={[18, 42]} text="Desorock Highlands" />
            <CityLabel position={[78, 116]} text="Norfall Barrens" />
            <CityLabel position={[-124, 74]} text="Wuming Bay" />
            <CityLabel position={[-206, 32]} text="Dim Forest" />
            <CityLabel position={[-224, 106]} text="Whining Aix's Mire" />
            <CityLabel position={[-236, 252]} text="Mt. Firmament" />
          </MapContainer>
        </div>
      </section>
    </>
  );
}
