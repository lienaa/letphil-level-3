import "./FeatureGrid.css";
import { GridItem } from "./GridItem";

export const FeatureGrid = ({ gridData }) => {
  return (
    <>
      <div className="feature-grid">
        {gridData.map((item, index) => (
          <GridItem
            key={index}
            image={item.image}
            title={item.title}
            latest={item.latest}
          />
        ))}
      </div>
    </>
  );
};