import { Link } from "react-router-dom";
import styles from '../../share/css/Links.module.css'    

function Links({ Icon, text, to}) {                                 {/* Was: { children, text, href} {Icon, text, href} */}
    return (
        <Link to={to} className={styles.links}>                     {/* Was: className="links" */}
            <Icon className={styles.icon} />                        {/* Was: {children} */}
            {text && <span className={styles.text}>{text}</span>}   {/* With the {text &&} we usea conditional to avoid the white space in the profile icon */}
        </Link>
    );
}

export default Links;