import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionDivider } from "../Components/SectionDivider";
import charactersData from "../assets/jsondb/characters.json";

export const Route = createFileRoute("/roster/$resonator")({
  component: Resonator,
});

function Resonator() {
  const { resonator } = Route.useParams();
  const charData = charactersData.data.find((char) => char.name.toLowerCase() === resonator.toLowerCase());

  if (!charData) {
    return (
      <>
        <h1>Invalid Resonator! ({resonator})</h1>
        <Link to="/roster">&laquo; Go Back</Link>
      </>
    );
  }

  const { name, rarity, attribute, weapon, profile, image, skills, resonanceChain } = charData;

  const highlight = (eleType: string, text: string) => {
    // Highlight instances of matching ELEMENT DMG to respective element colors
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

  const removeSpaces = (toModify: string) => {
    // For "Rover (Element)" cases
    return toModify.replace(/ /g, "_");
  };

  return (
    <div>
      <h1>
        Resonator // <span className="resoTitle">{name}</span>
      </h1>
      <section>
        <SectionDivider title={"Profile Data"} />
        <div className="profile-container glass">
          <div className="profile-portrait">
            <img src={`/images/characters/${image.portrait}`} alt={`${name} portrait`} />
            <img className="pp-attribute" src={`/images/attributes/${attribute}.png`} alt="" />
          </div>

          <div className="profile-data">
            <table className="pd-table">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th>Rarity:</th>
                  <td>{rarity} Stars</td>
                </tr>
                <tr>
                  <th>Attribute:</th>
                  <td>{attribute}</td>
                </tr>
                <tr>
                  <th>Weapon:</th>
                  <td>{weapon}</td>
                </tr>
                <tr>
                  <th>Birthplace:</th>
                  <td>{profile.birthplace}</td>
                </tr>
                <tr>
                  <th>Affiliation:</th>
                  <td>{profile.affiliation}</td>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <td>&nbsp;</td>
                </tr>
                <tr className="bio">
                  <th>Bio:</th>
                  <td>{profile.info}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <SectionDivider title={"Skills"} />
        <div className="skills-container">
          {Object.entries(skills).map(([skill, skillContents]) => (
            <div key={skill} className="skill-container glass">
              <div className="sc-head">
                <div className="sch-skillIcon-container">
                  <img src={`/images/characters/skills/${skillContents.skillIcon}`} alt="Skill Icon" />
                </div>
                <div>
                  <h3>{skill}</h3>
                  <h4>{skillContents.skillName}</h4>
                </div>
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

      <section>
        <SectionDivider title={"Resonance Chain"} />
        <div className="resonanceChain-container">
          {Object.entries(resonanceChain).map(([sequence, sequenceDesc], index) => (
            <div key={sequence} className="glass">
              <div className="sc-head">
                <div className="sch-skillIcon-container">
                  <img
                    src={`/images/characters/resonanceChains/${removeSpaces(name)}_ResonanceChain${index + 1}.webp`}
                    alt="Sequence Icon"
                  />
                </div>
                <div>
                  <h3>Sequence {index + 1}</h3>
                  <h4>{sequence}</h4>
                </div>
              </div>
              <div className="sc-body">
                <p className="scb-desc">
                  <strong>{highlight(attribute, sequenceDesc)}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
