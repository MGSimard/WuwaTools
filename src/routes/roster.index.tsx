import { createFileRoute, Link } from "@tanstack/react-router";
import { CharacterCard } from "../Components/CharacterCard";
import charactersData from "../assets/characters.json";

export const Route = createFileRoute("/roster/")({
  component: Roster,
});

interface CharDataInterface {
  id: number;
  name: string;
  rarity: number;
  attribute: string;
  weapon: string;
  image: {
    icon: string;
    portrait: string;
  };
}

function Roster() {
  const charListData = charactersData.data;

  return (
    <>
      <h1>Character Roster</h1>
      <section>
        <div className="characters-container">
          {charListData &&
            charListData.map((char: CharDataInterface) => (
              <Link to="/roster/$resonator" params={{ resonator: char.name.toLowerCase() }}>
                <CharacterCard key={char.id} character={char} />
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
