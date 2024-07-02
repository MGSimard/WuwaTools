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
          <li>- Interactive Map (WIP)</li>
        </ul>
      </section>
      <section>
        <h2>To Do:</h2>
        <ul>
          <li>- More features potentially</li>
          <li>- Figure out layout for character profile header</li>
          <li>- Basic markers on interactive map, update boundaries, proper starting origin</li>
          <li>- Active route style similar to wuthering wave's menu</li>
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
        <h2>AES Keys for resource extraction (version 1.1.0)</h2>
        <ul>
          <li>- Main: 0x43C51CC2369B9DD195EDCF426C78E30E99D7514DC14E8C03A831E128A3941010</li>
          <li>- PAK5: 0x52B3F2003A28C3145C98866BEECC3F884051140E03CC42946A89DB126AD55E9C</li>
          <li>
            -{" "}
            <a className="linkDecorate" href="https://github.com/RealNath/wuwa-aes-archive">
              https://github.com/RealNath/wuwa-aes-archive
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
