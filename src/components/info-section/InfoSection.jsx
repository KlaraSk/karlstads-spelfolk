import clsx from "clsx";
import LocationMap from "../location-map/LocationMap";
import "./InfoSection.css";

function InfoSection({ children, imgSrc, isMap, title }) {
  return (
    <section className="grid info-section">
      <div className="info-section__text-div">
        <h2 className="heading-2 info-section__title">{title}</h2>
        {children}
      </div>
      <div className="flex info-section__img-div">
        {imgSrc && <img className="info-section__img" src={imgSrc} />}
        {isMap && <LocationMap />}
      </div>
    </section>
  );
}

export default InfoSection;
