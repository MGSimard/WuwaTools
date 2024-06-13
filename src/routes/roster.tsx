import { createFileRoute } from "@tanstack/react-router";
import { CharacterCard } from "../Components/CharacterCard";
import charactersData from "../assets/characters.json";

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

const Roster = () => {
  const charListData = charactersData.data;

  return (
    <>
      <h1>Character Roster</h1>
      <section>
        <div className="characters-container">
          {charListData &&
            charListData.map((char: CharDataInterface) => <CharacterCard key={char.id} character={char} />)}
        </div>
      </section>
    </>
  );
};

export const Route = createFileRoute("/roster")({
  component: Roster,
});
