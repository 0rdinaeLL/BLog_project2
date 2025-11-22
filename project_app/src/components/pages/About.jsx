
import Header from "../common/Header";
import Footer from "../common/Footer";
import imgCapy from "../../images/Cpaivara1.png";

function About() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="article-main">
        <article className="article-container">
          <div className="article-header">
            <div className="article-authorRef">by Leo Santos</div>
            <div className="article-date">Fri Nov 21 2025</div>


          
          </div> 
   
          <div className="article-body">
            <h3>All about the Capybara wandering around the WORLD!</h3>
            <p>Welcome to The Traveling Capybara, a blog born in 2025 out of a passion for exploration, storytelling, and sharing the joy of travel. 
Whether you're a seasoned adventurer or someone dreaming of your first getaway, this space was created to inspire, inform, and connect travelers from all walks of life. 
The idea behind this blog is simple: to bring you practical travel tips, destination ideas, and cultural insights that help you plan meaningful journeys and discover the world with curiosity and confidence.</p>

<p>Here you'll find guides to hidden gems, advice on packing smart, reflections on local customs, and stories that celebrate the people and places that make travel unforgettable.</p>
<p>We also share tips on budgeting, solo travel, eco-friendly choices, and how to stay safe while exploring new environments.</p>
            <img src={imgCapy} alt="Capybara in Puerto Rico" width="400" height="400" />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default About;
