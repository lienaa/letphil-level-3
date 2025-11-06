import "./GridItem.css";

export const GridItem = ({ image, title, latest }) => {
  return (
    <>
      <div className="grid-item">
        <img src={image.src} alt={image.alt} />
        <div>
            <h1>{title}</h1>
            <p>Latest: {latest}</p>
        </div>
      </div>
    </>
  );
};
