import { createFileRoute } from "@tanstack/react-router";
import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import maplocs from "../assets/jsondb/maplocs.json";
import { LocationLabel } from "../Components/MapLocations.tsx";

export const Route = createFileRoute("/worldmap")({
  component: InteractiveMap,
});

function InteractiveMap() {
  const regions = maplocs.data;
  const beacons = regions.flatMap((region) => region.beacons);
  const nexuses = regions.flatMap((region) => region.nexuses);
  const bosses = regions.flatMap((region) => region.encounters.bosses);

  console.log(bosses);

  const getIcon = (iconType: string, size: [number, number]) =>
    L.icon({
      iconUrl: `/map/icons/icon_${iconType}.png`,
      iconSize: size,
    });

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
            attributionControl={false}>
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
            {regions.map((region) => (
              <LocationLabel key={region.region} pos={region.pos as [number, number]} text={region.region} />
            ))}
            <LayersControl position="topright">
              <LayersControl.Overlay checked name="Nexus">
                <LayerGroup>
                  {nexuses.map((nexus) => (
                    <Marker
                      key={nexus[0] * nexus[1]}
                      position={nexus as [number, number]}
                      icon={getIcon("nexus", [32, 32])}
                    />
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>
              <LayersControl.Overlay checked name="Beacons">
                <LayerGroup>
                  {beacons.map((beacon) => (
                    <Marker
                      key={beacon[0] * beacon[1]}
                      position={beacon as [number, number]}
                      icon={getIcon("beacon", [24, 24])}
                    />
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>
              <LayersControl.Overlay checked name="Encounters">
                <LayerGroup>
                  {bosses.map((boss) => (
                    <Marker
                      key={boss.name}
                      position={boss.pos as [number, number]}
                      icon={getIcon(boss.name.toLowerCase().replace(/[^\wé-]+/g, "_"), [38, 38])}
                    />
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>
            </LayersControl>
          </MapContainer>
        </div>
      </section>
    </>
  );
}
