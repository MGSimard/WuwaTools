import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <h1>WuwaTools - Work In Progress</h1>
      <h2>To Do:</h2>
      <ul>
        <li>- More features potentially</li>
        <li>- Updating info in character profiles</li>
        <li>- Figure out layout for character profile header</li>
        <li>- Separate omni rover character into multiple ele rovers?</li>
      </ul>
    </>
  );
}
