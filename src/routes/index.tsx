import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <h1>WuwaTools - Work In Progress</h1>
      <section>
        <h2>Features:</h2>
        <ul>
          <li>- Roster (Character Profiles)</li>
          <li>- Tier List Creator</li>
          <li>- Interactive World Map</li>
        </ul>
      </section>
      <section>
        <h2>To Do:</h2>
        <ul>
          <li>- More features potentially</li>
          <li>- Figure out layout for character profile header</li>
          <li>- Look into character base & growth stats for profiles</li>
          <li>- Look into glob imports (vite feature)</li>
          <li>- Image optimization (later)</li>
        </ul>
      </section>
      <section>
        <h2>Tech</h2>
        <ul>
          <li>- React/Vite SWC</li>
          <li>- TypeScript</li>
          <li>- TanStack Router</li>
          <li>- @dnd-kit/react (Alpha dnd kit rewrite)</li>
          <li>- FontAwesome</li>
          <li>- html-to-image</li>
          <li>- downloadjs</li>
          <li>- Leaflet & React Leaflet</li>
          <li>- Firebase Hosting</li>
        </ul>
      </section>
      <section>
        <h2>AES Keys for resource extraction (version 1.2.0)</h2>
        <ul>
          <li>- Main: 0x4D65747EDEB74A1DE116B1DD147CF79CD6C082F0DB7908E1BBD37F0428426469</li>
          <li>- PAK5: 0xB8B2D6B3DE6DA30113D7139BA95BD62E5E91EEAAAA3EBA7F7CD8261EEAA7F992</li>
          <li>
            -{" "}
            <a className="linkDecorate" href="https://github.com/ClostroOffi/wuwa-aes-archive">
              https://github.com/ClostroOffi/wuwa-aes-archive
            </a>
          </li>
          <li>
            - Use{" "}
            <a className="linkDecorate" href="https://fmodel.app/" target="_blank">
              FModel
            </a>
          </li>
        </ul>
      </section>
      <section>
        <a className="linkDecorate" href="https://github.com/MGSimard/WuwaTools" target="_blank">
          <h2>Github Repo Link</h2>
        </a>
      </section>
    </>
  );
}
