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
        <li>- More stuff potentially</li>
        <li>- Mobile responsiveness might be done, could consider burger unfold if more tool icons come in</li>
      </ul>
    </>
  );
}
