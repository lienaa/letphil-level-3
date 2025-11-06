import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { SubNav } from "./components/Nav/Nav";
import { Image } from "./components/Image/Image";
import { SlideShow } from "./components/SlideShow/SlideShow";
import { Search } from "./components/Search/Search";
import { Card } from "./components/Card/Card";
import { Promo } from "./components/Promo/Promo";
import { FeatureGrid } from "./components/FeatureGrid/FeatureGrid";
import { SocialBanner } from "./components/SocialBanner/SocialBanner";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";

function App() {
  const gridData1 = [
    {
      image: {
        src: "https://dwgkfo5b3odmw.cloudfront.net/img/manga_series_link_img/937-th-WSJ2023_Dosgred_Thumbnail_400x320.jpg",
        alt: "Dogsred",
      },
      title: "Dogsred",
      latest: "Latest Chapter 58, Nov 5",
    },
    {
      image: {
        src: "https://dwgkfo5b3odmw.cloudfront.net/img/manga_series_link_img/580-th-WSJ_Chainsaw_400x320.jpg",
        alt: "Chainsaw Man",
      },
      title: "Chainsaw Man",
      latest: "Latest Chapter 219, Nov 4",
    },
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/278-SeriesThumbnailsManga_BEX_400x320.jpg",
        alt: "Blue Exorcist",
      },
      title: "Blue Exorcist",
      latest: "Latest Chapter 163, Nov 3",
    },
    {
      image: {
        src: "https://dwgkfo5b3odmw.cloudfront.net/img/manga_series_link_img/796-th-Dandadan_Thumbnail_400x320.jpg",
        alt: "Dandadan",
      },
      title: "Dandadan",
      latest: "Latest Chapter 216, Nov 3",
    },
  ];
  const gridData2 = [
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/432-SeriesThumbnails_SM__400x320.jpg",
        alt: "Sailor Moon",
      },
      title: "Sailor Moon",
    },
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/3100-Thumb_PokemonGeneral_v3_400x320.jpg",
        alt: "Pokemon",
      },
      title: "Pokemon",
    },
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/15-SeriesThumbnailsAnime_INY_400x320.jpg",
        alt: "Inuyasha",
      },
      title: "Inuyasha",
    },
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/2465-Thumb_CSMAnime_400x320.jpg",
        alt: "Chainsaw Man",
      },
      title: "Chainsaw Man",
    },
  ];
  const gridData3 = [
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/438-ImprintThumbnails_ShojoBeat_400x320.jpg",
        alt: "Shojo Beat",
      },
      title: "Shojo Beat",
    },
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/435-ImprintThumbnails_Ghibli_400x320.jpg",
        alt: "Studio Ghibli Library",
      },
      title: "Pokemon",
    },
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/436-ImprintThumbnails_Haikasoru_400x320.jpg",
        alt: "Haikasoru",
      },
      title: "Haikasoru",
    },
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/2117-VIZOriginals_logo_400x320.jpg",
        alt: "VIZ Originals",
      },
      title: "VIZ Originals",
    },
  ];

  const listData1 = [
    [
      { link: "#", text: "About VIZ" },
      { link: "#", text: "Contact VIZ" },
      { link: "#", text: "FAQ" },
      { link: "#", text: "Redeem Gift" },
    ],
    [
      { link: "#", text: "Ratings" },
      { link: "#", text: "Copyrights" },
      { link: "#", text: "Jobs" },
    ],
    [
      { link: "#", text: "X (formerly Twitter)" },
      { link: "#", text: "Instagram" },
      { link: "#", text: "TikTok" },
      { link: "#", text: "YouTube" },
    ],
  ];

  const copyright = [
    { link: "#", text: "Terms of Use" },
    { link: "#", text: "Privacy Policy" },
    { link: "#", text: "California Privacy Notice" },
    { link: "#", text: "Do Not Sell Or Share My Information" },
    { link: "#", text: "Accessibility" },
  ];

  const slideshow = [
    {
      src: "https://de7i3bh7bgh0d.cloudfront.net/2025/10/31/17/59/32/f85fbe87-c86b-463d-9519-016512b81d6e/NARSHP_cookbook_Blog_1200x630.jpg",
      alt: "Ramen",
    },
    {
      src: "https://de7i3bh7bgh0d.cloudfront.net/2025/10/31/17/59/31/2330a977-f043-47ff-8ab4-e1709d554226/HLP_boxSet_blogsplash_1200x630.jpg",
      alt: "Jigokuraku",
    },
    {
      src: "https://de7i3bh7bgh0d.cloudfront.net/2025/10/31/17/59/32/df3d487e-c546-4729-8389-2e089794971d/Kagurabachi%20V5_blogsplash_1200x630.jpg",
      alt: "Kagurabachi",
    },
  ];

  return (
    <>
      <header>
        <Nav>
          <SubNav>
            <p>Manga & Anime</p>
            <a href="#">Naruto</a>
            <a href="#">Bleach</a>
            <a href="#">Jujutsu Kaisen</a>
            <a href="#">One-Punch Man</a>
            <a href="#">Read Free Manga!</a>
          </SubNav>
          <Nav>
            <SubNav>
              <div>
                <SubNav>
                  <a href="#">Log in</a>
                  <a href="#">Sign up</a>
                  <a href="#">❤️</a>
                  <a href="#">🛒</a>
                  <a href="#">My Library</a>
                  <Search placeholder="Author, title, character" />
                </SubNav>
                <SubNav>
                  <a href="#">Manga & Books</a>
                  <a href="#">Anime</a>
                  <a href="#">Shop</a>
                  <a href="#">Calendar</a>
                  <a href="#">More</a>
                </SubNav>
              </div>
              <Image
                className="logo"
                width={300}
                alt="Viz Logo"
                image="https://assets.viz.com/assets/logo@2x-b76f649f933ea15f45147ff5445a2501c85c7f863ba0aba5ea7bec93c3272cc6.png"
              />
            </SubNav>
          </Nav>
        </Nav>
        <SlideShow slideshow={slideshow} />
        <Image
          width={1000}
          alt="Ninja Ramen"
          image="https://de7i3bh7bgh0d.cloudfront.net/2025/10/31/17/59/32/f85fbe87-c86b-463d-9519-016512b81d6e/NARSHP_cookbook_Blog_1200x630.jpg"
        />
      </header>
      <main>
        <h1>Hot VIZ releases</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Card
            favoriteCount={4}
            image={{
              src: "https://dw9to29mmj727.cloudfront.net/products/782009248613.jpg",
              alt: "Naruto",
            }}
            type="TV Series"
            title="Naruto Shippuden, Set 8"
          />
          <Card
            favoriteCount={10}
            image={{
              src: "https://dw9to29mmj727.cloudfront.net/products/1974758745.png",
              alt: "Vagabond",
            }}
            type="Manga"
            title="Vagabond Definitive Edition, Vol."
          />
          <Card
            favoriteCount={29}
            image={{
              src: "https://dw9to29mmj727.cloudfront.net/products/197475829X.png",
              alt: "Hell's Paradise",
            }}
            type="Manga"
            title="Hell’s Paradise: Jigokuraku Complete Box Set"
          />
          <Card
            favoriteCount={32}
            image={{
              src: "https://dw9to29mmj727.cloudfront.net/products/1974758907.jpg",
              alt: "Jujutsu Kaisen",
            }}
            type="Manga"
            title="Jujutsu Kaisen, Vol. 28"
          />
        </div>
        <Promo
          image={{
            src: "https://de7i3bh7bgh0d.cloudfront.net/2022/10/10/16/20/47/ad351d6e-0172-42a6-84a8-aea8a6e6ba7c/Thumb_BleachTYBW_400x320.jpg",
            alt: "Bleach",
          }}
        >
          <p>
            Watch hit anime on your favorite streaming platform.{" "}
            <a href="#">Learn More</a>.
          </p>
        </Promo>
        <h1>Read free Shonen jump manga chapters!</h1>
        <FeatureGrid gridData={gridData1} />
        <SocialBanner>
          <h1>
            Follow us on <a href="#">TikTok</a>, <a href="#">Facebook</a>,{" "}
            <a href="#">Instagram</a>, or <a href="#">X (formerly Twitter)</a>.
          </h1>
          <p>Tag posts #viz to share</p>
        </SocialBanner>
        <h1>Check out our top series</h1>
        <FeatureGrid gridData={gridData2} />
        <h1>Brows our imprints</h1>
        <FeatureGrid gridData={gridData3} />
      </main>
      <footer>
        <Newsletter
          image={{
            src: "https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png",
            alt: "Naruto",
          }}
        >
          Get the latest manga & anime news!
          <span style={{ display: "block" }}>
            You'll never miss a beat when you subscribe to our newsletter.
          </span>
        </Newsletter>
        <Footer lists={listData1} copyright={copyright} />
      </footer>
    </>
  );
}

export default App;
