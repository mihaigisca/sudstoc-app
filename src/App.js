import "./style.css";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <AboutUs />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}

function Header() {
  const appTitle = "Sudstoc.md";

  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src="logo.png" alt="Sudstoc logo" />
          <h1>{appTitle}</h1>
        </div>
        <ul className="navigation">
          <li>
            <a href="#top">Acasă</a>
          </li>
          <li>Despre noi</li>
          <li>Galerie</li>
          <li>
            <a href="#contacts-box">Contacte</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Home() {}

function AboutUs() {}

function Gallery() {}

function Contacts() {
  return (
    <div className="contacts-box" id="contacts-box">
      <h2>Luați legătura cu noi!</h2>
      <div className="contacts-field">
        <div>
          <h3>Adresa</h3>
          <div>str. Miorița, 18</div>
          <div>or. Cantemir, r. Cantemir</div>
          <div>MD-7301</div>
          <div>Republica Moldova</div>
        </div>
        <div>
          <h3>Telefon</h3>
          <div>str. Miorița, 18</div>
          <div>-</div>
          <h3>E-mail</h3>
          <div>în curând!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
