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
          Rewards:
          <div className="popup-rewards">
            {rewards.map((reward) => (
              <div>{reward}</div>
            ))}
          </div>
        </div>
      )}

      {/*MAYBE -> <img src={`/images/materials/${chall.reward.replace(/[^\w-]+/g, "_")}`}/>*/}
    </>
  );
}
