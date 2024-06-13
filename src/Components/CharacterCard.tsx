interface Props {
  character: {
    id: number;
    name: string;
    rarity: number;
    attribute: string;
    weapon: string;
    image: {
      icon: string;
      portrait: string;
    };
  };
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <div className={"character-card glass"}>
      <div className={`cc-portrait-container ${character.rarity ? "cc-r" + character.rarity : null}`}>
        <img className="cc-portrait" src={`/characters/${character.image.portrait}`} alt="" />
      </div>
      <div className="cc-name">{character.name}</div>
    </div>
  );
};
