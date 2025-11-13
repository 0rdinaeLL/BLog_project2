
import Header from "../common/Header";
import Footer from "../common/Footer";
import imgCapy from "../../images/Cpaivara1.png";

function Article() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="article-main">
        <article className="article-container">
          <div className="article-header">
            <div className="article-authorRef">by Leo Santos</div>
            <div className="article-date">Tue Oct 30 2025</div>
          
          </div> 

          <div className="article-body">
            <h3>The Capybara goes goes around the WORLD and brings tips for you.</h3>
            <p>
              Check our <strong>Blog Posts</strong> page and get ready for your trip!.
            </p>
            <img src={imgCapy} alt="Capybara in Puerto Rico" width="400" height="400" />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default Article;
