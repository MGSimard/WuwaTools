import { createFileRoute, Link } from "@tanstack/react-router";
import { CharacterCard } from "../Components/CharacterCard";
import charactersData from "../assets/jsondb/characters.json";

export const Route = createFileRoute("/roster/")({
  component: Roster,
});

function Roster() {
  const charListData = charactersData.data;

  return (
    <>
      <h1>Character Roster</h1>
      <section>
        <div className="characters-container">
          {charListData.map((char) => (
            <Link key={char.id} to="/roster/$resonator" params={{ resonator: char.name.toLowerCase() }}>
              <CharacterCard character={char} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
