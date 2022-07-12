import {getCurrentYear} from "../../scripts.js"

function Footer() {
  return (
    <footer> 
        <p>Developt and Design by Iv&aacute;n Villanueva &copy; {getCurrentYear()} {/*{new Date().getFullYear()}*/} All rights Reserverd</p>
    </footer>
  );
}

export default Footer;