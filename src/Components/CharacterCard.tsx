interface Character {
  name: string;
  rarity: number;
  attribute: string;
  image: {
    icon: string;
    portrait: string;
  };
}

interface CharacterProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <div className={"character-card glass"}>
      <div className={`cc-portrait-container ${character.rarity ? "cc-r" + character.rarity : null}`}>
        <img className="cc-portrait" src={`/characters/${character.image.portrait}`} alt="" />
        <img className="cc-attribute" src={`/attributes/${character.attribute}.png`} alt="" />
      </div>
      <div className="cc-name">{character.name}</div>
    </div>
  );
};
