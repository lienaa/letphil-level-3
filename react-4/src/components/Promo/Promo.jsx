import './Promo.css'

export const Promo = ({ image, children}) => {
    return (
        <>  
        <div className="promo">
            <img src={image.src} alt={image.alt}/>
            {children}
        </div>
        </>
    );
};