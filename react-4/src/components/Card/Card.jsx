import './Card.css'

export const Card = ({ favoriteCount, image, type, title}) => {
    return (
        <div className="card">
            <p>
                ❤️ +{favoriteCount}
            </p>
            <img src={image.src} alt={image.alt}/>
            <h2>
                {type}
            </h2>
            <h1>
                {title}
            </h1>
        </div>
    );
};