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

  const { id, name, rarity, attribute, weapon, image } = charData;

  return (
    <div>
      <h1>Resonator // {name}</h1>
      <ul>
        <li>ID: {id}</li>
        <li>Name: {name}</li>
        <li>Rarity: {rarity}</li>
        <li>Attribute: {attribute}</li>
        <li>Weapon: {weapon}</li>
        <li>Icon: {image.icon}</li>
        <li>Portrait: {image.portrait}</li>
      </ul>
    </div>
  );
}
