import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";
import { shapeIntersection } from "@dnd-kit/collision";
import { ReactNode } from "@tanstack/react-router";

interface Props {
  children: ReactNode;
  id: string;
}

export const TierListRow = ({ children, id }: Props) => {
  const { ref } = useDroppable({
    id,
    type: "row",
    accept: "item",
    collisionPriority: CollisionPriority.Low,
    collisionDetector: shapeIntersection,
  });

  return (
    <div className={`tlt-row glass${id === "BANK" ? " tlt-bank" : ""}`}>
      {id !== "BANK" && <div className={`tlt-head tlt-${id}`}>{id}</div>}
      <div ref={ref} className={"tlt-data"}>
        {children}
      </div>
    </div>
  );
};
