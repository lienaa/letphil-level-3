import './Newsletter.css';

export const Newsletter = ({ image, children}) => {
    return (
        <>
            <div className="newsletter">
                <img src={image.src} alt={image.alt}/>
                <div>{children}</div>
                <form className="email">
                    <input type="email" placeholder="Enter your email address" required/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
};