import Banner from "./components/Banner/Banner";
import Choose from "./components/Choose/Choose";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Practices from "./components/Practices/Practices";
import Review from "./components/Review/Review";
import Team from "./components/Team/Team";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Introduction />
      <Choose />
      <Practices />
      <Review />
      <Team />
      <FAQ />
      <NewsLetter />
      <Footer />
    </div>
  );
}
