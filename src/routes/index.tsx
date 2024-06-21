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
        </ul>
      </section>
      <section>
        <h2>To Do:</h2>
        <ul>
          <li>- More features potentially</li>
          <li>- Find skill icon assets for character profiles</li>
          <li>- Figure out layout for character profile header</li>
          <li>- Make different icons for Rover element types</li>
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
        </ul>
      </section>
    </>
  );
}
