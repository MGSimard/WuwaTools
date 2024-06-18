import { createFileRoute, Link } from "@tanstack/react-router";
import charactersData from "../assets/characters.json";
import { CharacterCard } from "../Components/CharacterCard";

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

  const { name, rarity, attribute, weapon, profile, skills } = charData;

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
      <section>
        <h2>Profile Data</h2>
        <div className="profile-container">
          <CharacterCard character={charData} />
          <div className="profile-data">
            <ul>
              <li>
                <strong>Name:</strong> {name}
              </li>
              <li>
                <strong>Rarity:</strong> {rarity}*
              </li>
              <li>
                <strong>Attribute:</strong> {attribute}
              </li>
              <li>
                <strong>Weapon:</strong> {weapon}
              </li>
            </ul>
            <ul>
              <li>
                <strong>Birthplace:</strong> {profile.birthplace}
              </li>
              <li>
                <strong>Affiliation:</strong> {profile.affiliation}
              </li>
              <li>
                <strong>Info:</strong> {profile.info}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
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
                    <p>{highlight(attribute, value as string)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
