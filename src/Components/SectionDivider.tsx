export const SectionDivider = ({ title }: { title: string }) => {
  return (
    <div className="section-divider">
      <h2>▸ {title}</h2>
      <div className="sd-line"></div>
    </div>
  );
};
