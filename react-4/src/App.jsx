import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { SubNav } from "./components/Nav/Nav";
import { Image } from "./components/Image/Image";
import { Search } from "./components/Search/Search";
import { Card } from "./components/Card/Card";
import { Promo } from "./components/Promo/Promo";
import { FeatureGrid } from "./components/FeatureGrid/FeatureGrid";

function App() {
  const gridData1 = [
    {
      image: {
        src: "https://dwgkfo5b3odmw.cloudfront.net/img/manga_series_link_img/937-th-WSJ2023_Dosgred_Thumbnail_400x320.jpg",
        alt: "Dogsred",
      },
      title: "Dogsred",
      latest: "Chapter 58, Nov 5",
    },
    {
      image: {
        src: "https://dwgkfo5b3odmw.cloudfront.net/img/manga_series_link_img/580-th-WSJ_Chainsaw_400x320.jpg",
        alt: "Chainsaw Man",
      },
      title: "Chainsaw Man",
      latest: "Chapter 219, Nov 4",
    },
    {
      image: {
        src: "https://dw9to29mmj727.cloudfront.net/properties/2016/278-SeriesThumbnailsManga_BEX_400x320.jpg",
        alt: "Blue Exorcist",
      },
      title: "Blue Exorcist",
      latest: "Chapter 163, Nov 3",
    },
    {
      image: {
        src: "https://dwgkfo5b3odmw.cloudfront.net/img/manga_series_link_img/796-th-Dandadan_Thumbnail_400x320.jpg",
        alt: "Dandadan",
      },
      title: "Dandadan",
      latest: "Chapter 216, Nov 3",
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
        <Image
          width={800}
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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
