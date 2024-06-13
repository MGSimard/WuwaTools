import { useSortable } from "@dnd-kit/react/sortable";

interface CharInterface {
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

interface Props {
  id: CharInterface;
  index: number;
  row: string;
}

export const TierListElem = ({ id, index, row }: Props) => {
  const { ref } = useSortable({
    id: id.id,
    index,
    type: "item",
    accept: "item",
    group: row,
  });

  return (
    <div ref={ref} id={id.name} className={`tl-char cc-r${id.rarity}`}>
      <img src={`/characters/${id.image.icon}`} alt={id.name} />
    </div>
  );
};
