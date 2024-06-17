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

  // Create a highlighter function which takes in a keyword and a string
  // For instance, the character attribute is "Aero"
  // So for each string we render, we feed it to our highlighter first
  // To detect any instance of "Aero", separate, add styler to separated, rejoin string then output the string
  // This avoids hardcoding HTML in the json

  const { id, name, rarity, attribute, weapon, skills, image } = charData;

  const highlight = (eleType: string, text: string) => {
    const toHL = `${eleType} DMG`;
    const parts = text.split(new RegExp(`(${toHL})`, "i"));

    return parts.map((part, i) =>
      part.toLowerCase() === `${toHL}`.toLowerCase() ? (
        <span key={i} className={`hl-${eleType.toLowerCase()}`}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

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

      {/* NORMAL ATTACK */}
      <div>
        <h3>Normal Attack: {skills?.normalAttack.attName}</h3>
        <ul>
          {skills &&
            Object.entries(skills.normalAttack.attTypes).map(([key, value]) => (
              <li key={key}>
                {key}: {highlight(attribute, value)}
              </li>
            ))}
        </ul>
      </div>

      {/* RESONANCE SKILL */}
      <div>
        <h3>Resonance Skill: {skills?.resonanceSkill.attName}</h3>
      </div>

      {/* FORTE CIRCUIT */}
      <div>
        <h3>Forte Circuit: {skills?.forteCircuit.attName}</h3>
      </div>

      {/* RESONANCE LIBERATION */}
      <div>
        <h3>Resonance Liberation: {skills?.resonanceLiberation.attName}</h3>
      </div>

      {/* INTRO SKILL */}
      <div>
        <h3>Intro Skill: {skills?.introSkill.attName}</h3>
      </div>

      {/* OUTRO SKILL */}
      <div>
        <h3>Outro Skill: {skills?.outroSkill.attName}</h3>
      </div>
    </div>
  );
}
