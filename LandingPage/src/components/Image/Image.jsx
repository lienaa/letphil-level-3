import './Image.css'

export const Image = ({ className, image, width, alt }) => {
    return (
        <img className={className} style={{maxWidth: `${width}px`}} src={image} alt={alt}/>
    );
};