import { createFileRoute, Link } from "@tanstack/react-router";
import charactersData from "../assets/characters.json";

export const Route = createFileRoute("/roster/$resonator")({
  component: Resonator,
});

function Resonator() {
  const { resonator } = Route.useParams();
  const charData = charactersData.data.find((char) => char.name.toLowerCase() === resonator);

  if (!charData) {
    return (
      <>
        <h1>Invalid Resonator! ({resonator})</h1>
        <Link to="/roster">&laquo; Go Back</Link>
      </>
    );
  }
  console.log(charData);

  return <div>Character Page: {resonator}</div>;
}
