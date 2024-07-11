import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import maplocs from "../assets/jsondb/maplocs.json";
import { LocationLabel } from "../Components/LocationLabels.tsx";
import { MapPopup } from "../Components/MapPopup.tsx";
import { flatnamed } from "../utils/flatnamed.ts";

export const Route = createFileRoute("/worldmap")({
  component: InteractiveMap,
});

const ZoomEventHandlers = ({ handleZoomEnd }: { handleZoomEnd: (e: any) => void }) => {
  useMapEvent("zoomend", handleZoomEnd);
  return null;
};

// Get click coordinates
// function Locate() {
//   const map = useMapEvent("click", (e) => {
//     console.log(`${e.latlng.lat.toFixed(2)}, ${e.latlng.lng.toFixed(2)}`);
//   });
//   return null;
// }

function InteractiveMap() {
  const initialZoom = 2;
  const [zoomLevel, setZoomLevel] = useState(initialZoom);

  const regions = maplocs.data;
  const subregions = regions.flatMap((region) => region.subregions);
  const beacons = regions.flatMap((region) => region.beacons);
  const nexuses = regions.flatMap((region) => region.nexuses);
  const bosses = regions.flatMap((region) => region.bosses);
  const tacetFields = regions.flatMap((region) => region["tacet fields"]);
  const tacticalHolograms = regions.flatMap((region) => region["tactical holograms"]);
  const forgeryChallenges = regions.flatMap((region) => region["forgery challenges"]);
  const domains = regions.flatMap((region) => region.domains);
  const misc = regions.flatMap((region) => region.misc);

  const getIcon = (iconType: string, size: [number, number]) =>
    L.icon({
      iconUrl: `/images/map/icons/icon_${iconType}.png`,
      iconSize: size,
    });

  const handleZoomEnd = (e: any) => {
    setZoomLevel(e.target.getZoom());
  };

  return (
    <>
      <h1>World Map</h1>
      <section>
        <div id="map">
          <MapContainer
            maxBounds={L.latLngBounds([-5024, -5024], [5024, 5024])}
            center={[-76, 32]}
            zoom={initialZoom}
            zoomSnap={0.5}
            zoomDelta={0.5}
            crs={L.CRS.Simple}
            maxZoom={6}
            minZoom={1}
            attributionControl={false}>
            <TileLayer
              url="/images/map/{z}/{x}_{y}.png"
              noWrap={true}
              tileSize={256}
              maxNativeZoom={2}
              minNativeZoom={2}
              minZoom={1}
              maxZoom={3}
            />
            <TileLayer
              url="/images/map/{z}/{x}_{y}.png"
              noWrap={true}
              tileSize={1024}
              maxNativeZoom={4}
              minNativeZoom={4}
              minZoom={3.5}
              maxZoom={6}
            />
            {/*<Locate /> Dev Only*/}
            <ZoomEventHandlers handleZoomEnd={handleZoomEnd} />
            {zoomLevel < 3.5 &&
              regions.map((region) => (
                <LocationLabel
                  key={region.region}
                  pos={region.pos as [number, number]}
                  text={region.region}
                  wrap={true}
                />
              ))}
            {zoomLevel >= 3.5 &&
              subregions.map((subregion) => (
                <LocationLabel
                  key={subregion.name}
                  pos={subregion.pos as [number, number]}
                  text={subregion.name}
                  wrap={false}
                />
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

              <LayersControl.Overlay checked name="Bosses">
                <LayerGroup>
                  {bosses.map((boss) => (
                    <Marker
                      key={boss.name}
                      position={boss.pos as [number, number]}
                      icon={getIcon(flatnamed(boss.name), [42, 42])}>
                      <Popup>
                        <MapPopup imgSrc={flatnamed(boss.name)} title={boss.name} rewards={boss.rewards} />
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>

              <LayersControl.Overlay checked name="Tactical Holograms">
                <LayerGroup>
                  {tacticalHolograms.map((holo) => (
                    <Marker
                      key={holo.name}
                      position={holo.pos as [number, number]}
                      icon={getIcon("tactical_hologram", [38, 38])}>
                      <Popup>
                        <MapPopup
                          imgSrc={"tactical_hologram"}
                          title={`Tactical Hologram: ${holo.name}`}
                          rewards={holo.rewards}
                        />
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>

              <LayersControl.Overlay checked name="Tacet Fields">
                <LayerGroup>
                  {tacetFields.map((field) => (
                    <Marker
                      key={field.pos[0] * field.pos[1]}
                      position={field.pos as [number, number]}
                      icon={getIcon("tacet_field", [32, 32])}>
                      <Popup>
                        <MapPopup imgSrc={"tacet_field"} title={"Tacet Field"} rewards={field.rewards} />
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>

              <LayersControl.Overlay checked name="Forgery Challenges">
                <LayerGroup>
                  {forgeryChallenges.map((chall) => (
                    <Marker
                      key={chall.name}
                      position={chall.pos as [number, number]}
                      icon={getIcon("forgery_challenge", [38, 38])}>
                      <Popup>
                        <MapPopup
                          imgSrc={"forgery_challenge"}
                          title={`Forgery Challenge: ${chall.name}`}
                          rewards={chall.rewards}
                        />
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>

              <LayersControl.Overlay checked name="Domains">
                <LayerGroup>
                  {domains.map((domain) => (
                    <Marker
                      key={domain.name}
                      position={domain.pos as [number, number]}
                      icon={getIcon("domain", [38, 38])}>
                      <Popup>
                        <MapPopup imgSrc={"domain"} title={domain.name} rewards={domain.rewards} />
                      </Popup>
                    </Marker>
                  ))}
                </LayerGroup>
              </LayersControl.Overlay>

              <LayersControl.Overlay checked name="Misc">
                <LayerGroup>
                  {misc.map((thing) => (
                    <Marker
                      key={thing.name}
                      position={thing.pos as [number, number]}
                      icon={getIcon(flatnamed(thing.name), [38, 38])}>
                      <Popup>
                        <MapPopup imgSrc={flatnamed(thing.name)} title={thing.name} rewards={thing.rewards} />
                      </Popup>
                    </Marker>
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
