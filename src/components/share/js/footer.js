import { getCurrentYear } from "../../../scripts.js";
import "../../share/css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Developt and Design by Iv&aacute;n E. Villanueva &copy;{" "}
        {getCurrentYear()} {/*{new Date().getFullYear()}*/} All rights Reserverd
      </p>
    </footer>
  );
}

export default Footer;
