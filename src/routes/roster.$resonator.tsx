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

  const { id, name, rarity, attribute, weapon, skills, image } = charData;

  const highlight = (eleType: string, text: string) => {
    const toHL = `${eleType} DMG`;
    const parts = text.split(new RegExp(`(${toHL})`, "i"));
    return parts.map((part, i) =>
      part.toLowerCase() === `${toHL}`.toLowerCase() ? (
        <strong key={i} className={`hl-${eleType.toLowerCase()}`}>
          {part}
        </strong>
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

      <div className="skills-container">
        {Object.entries(skills).map(([skill, skillContents]) => (
          <div key={skill} className="skill-container">
            <div className="sc-head">
              <h3>{skill}</h3>
              <h4>{skillContents.skillName}</h4>
            </div>
            <div className="sc-body">
              {skillContents.skillDesc && (
                <p className="scb-desc">
                  <strong>{highlight(attribute, skillContents.skillDesc)}</strong>
                </p>
              )}
              {Object.entries(skillContents.skillVars).map(([key, value]) => (
                <div key={key}>
                  <h5>{key}</h5>
                  <p>{highlight(attribute, value)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
