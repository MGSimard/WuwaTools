import { flatnamed } from "../utils/flatnamed";

export function MapPopup({ imgSrc, title, rewards }: { imgSrc: string; title: string; rewards: string[] }) {
  return (
    <>
      <div className="popup-header">
        <div className="ph-img-container">
          <img src={`/images/map/icons/icon_${imgSrc}.png`} />
        </div>
        <div className="ph-title">{title}</div>
      </div>
      {rewards.length > 0 && (
        <div className="popup-body">
          <div className="pb-title">Rewards:</div>
          <div className="pb-rewards">
            {rewards.map((reward) => (
              <div key={reward} className="pr-reward">
                <img src={`/images/rewards/${flatnamed(reward)}.png`} alt={reward} />
                <div className="pr-tooltip">{reward}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
