import "./App.scss";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Publication from "./components/Publication";
import Stacks from "./components/Stacks";

function App() {
  return (
    <>
      <Navigation />
      <Introduction />
      <Stacks />
      <Portfolio />
      <Publication />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
