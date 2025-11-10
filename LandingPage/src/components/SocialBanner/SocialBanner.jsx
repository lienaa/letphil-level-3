import './SocialBanner.css';

export const SocialBanner = ( {children} ) => {
    return (
        <>
            <div className="social-banner">
                {children}
            </div>
        </>
    );
};