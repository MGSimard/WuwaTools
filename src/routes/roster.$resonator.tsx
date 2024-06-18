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

  const { name, rarity, attribute, weapon, profile, skills, image } = charData;

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
        <h2>▸ Profile Data</h2>
        <div className="profile-container">
          <img className="profile-portrait" src={`/characters/${image.portrait}`} />
          <div className="profile-data">
            <table className="pd-table">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th>Rarity:</th>
                  <td>{rarity}</td>
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
                  <th>&nbsp;</th>
                  <td>&nbsp;</td>
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
                  <th>Bio:</th>
                  <td>{profile.info}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2>▸ Skills</h2>
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
