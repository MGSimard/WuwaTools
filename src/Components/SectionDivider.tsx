import lineDecor from "../assets/ui/star_gold.png";

export const SectionDivider = ({ title }: { title: string }) => {
  return (
    <div className="section-divider">
      <h2>▸ {title}</h2>
      <div className="sd-line">
        <img className="sd-line-decor" src={lineDecor} alt="" />
      </div>
    </div>
  );
};
