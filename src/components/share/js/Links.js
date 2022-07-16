import styles from '../../share/css/Links.module.css'    

function Links({ Icon, text, href}) {                               {/* Was: { children, text, href} */}
    return (
        <a href={href} className={styles.links}>                    {/* Was: className="links" */}
            <Icon className={styles.icon} />                        {/* Was: {children} */}
            {text && <span className={styles.text}>{text}</span>}   {/* With the {text &&} we usea conditional to avoid the white space in the profile icon */}
        </a>

    );
}

export default Links;