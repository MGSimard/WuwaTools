import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/map")({
  component: Map,
});

function Map() {
  return (
    <>
      <h1>World Map</h1>
      <section>
        <div id="map"></div>
      </section>
    </>
  );
}
