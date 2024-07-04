import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import * as htmlToImage from "html-to-image";
import downloadjs from "downloadjs";

import { TierListRow } from "../Components/TierListRow";
import { TierListElem } from "../Components/TierListElem";
import charactersData from "../assets/characters.json";

export const Route = createFileRoute("/tierlist")({
  component: TierList,
});

function TierList() {
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
  const canvasRef = useRef<HTMLDivElement>(null);

  const resetTierList = () => {
    const confirmed = window.confirm("Are you sure you want to reset?");

    if (confirmed) {
      setItems(initialState);
    }
  };
  const handleDragStart = () => {
    previousItems.current = items;
  };
  const handleDragOver = (e: any) => {
    const { source, target } = e.operation;
    setItems((items) => move(items, source, target));
    console.log(e.operation);
  };
  const handleDragEnd = (e: any) => {
    if (e.canceled) setItems(previousItems.current);
  };

  const handleSaveImg = () => {
    const canvas = canvasRef.current as HTMLElement;
    htmlToImage.toPng(canvas).then((dataUrl) => {
      downloadjs(dataUrl, "tierlist.png", "image/png");
    });
  };

  return (
    <>
      <h1>Character Tier List</h1>
      <section>
        <DragDropProvider onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
          <div className="tierlist-container">
            <div className="tl-table" ref={canvasRef}>
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
              <div className="tls-info">
                <h3>Planned Features:</h3>
                <ul>
                  <li>- ?</li>
                </ul>
              </div>
              <div className="tls-buttons">
                <button onClick={handleSaveImg}>Save Image</button>
                <button className="btn-danger" onClick={resetTierList}>
                  Reset
                </button>
              </div>
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
}
