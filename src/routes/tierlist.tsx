import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";

import { TierListRow } from "../Components/TierListRow";
import { TierListElem } from "../Components/TierListElem";
import charactersData from "../assets/characters.json";

const TierList = () => {
  // GET CHARACTER LIST & TIERS
  const initialState = {
    Z: [],
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
    BANK: [...charactersData.data],
  };

  const [items, setItems] = useState(initialState);
  const previousItems = useRef(items);

  const resetTierList = () => {
    const confirmed = window.confirm("Are you sure you want to reset?");

    if (confirmed) {
      setItems(initialState);
    }
  };
  const handleDragStart = () => {
    previousItems.current = items;
  };
  const handleDragOver = (e: any /*lol*/) => {
    const { source, target } = e.operation;
    setItems((items) => move(items, source, target));
  };
  const handleDragEnd = (e: any /*lol*/) => {
    if (e.canceled) setItems(previousItems.current);
  };

  return (
    <>
      <h1>Character Tier List</h1>
      <section>
        <DragDropProvider onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
          <div className="tierlist-container">
            <div className="tl-table">
              {Object.entries(items)
                .slice(0, -1)
                .map(([row, items]) => (
                  <TierListRow key={row} id={row}>
                    {items.map((char, index) => (
                      <TierListElem key={char.name} id={char} index={index} row={row} />
                    ))}
                  </TierListRow>
                ))}
            </div>
            <aside className="tl-sidebar glass">
              <h3>More</h3>
              <div>
                <h4>Planned Features:</h4>
                <ul>
                  <li>- Saving as image</li>
                  <li>- Sharing to social media</li>
                </ul>
              </div>

              <button className="btn-danger" onClick={resetTierList}>
                Reset
              </button>
            </aside>
          </div>
          <TierListRow key="BANK" id="BANK">
            {items["BANK"].map((char, index) => (
              <TierListElem key={char.name} id={char} index={index} row={"BANK"} />
            ))}
          </TierListRow>
        </DragDropProvider>
      </section>
    </>
  );
};

export const Route = createFileRoute("/tierlist")({
  component: TierList,
});
