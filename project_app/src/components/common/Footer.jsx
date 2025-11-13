import FacebookIcon from "../../images/square-facebook-brands-solid-full.svg.svg";
import TwitterIcon from "../../images/square-x-twitter-brands-solid-full.svg.svg";
import instagramLogo from "../../images/instagram-brands-solid-full.svg.svg";

function Footer() {
  return (
    <footer>
      <section className="footer">
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" width={24} height={24} />
            </a>
          </li>
        </ul>
        <p className="span-footer">
          &copy; The Traveling Capybara All Rights Reserved 2025
        </p>
      </section>
    </footer>
  );
}

export default Footer;
