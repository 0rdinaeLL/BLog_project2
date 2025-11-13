
import Header from "../common/Header";
import Footer from "../common/Footer";

function ContactPage() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <h2>Contact Us</h2>
        <form className="blog-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;

