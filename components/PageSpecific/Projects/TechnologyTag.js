// components/PageSpecific/Projects/TechnologyTag.js

import styles from "./TechnologyTag.module.scss"

const TechnologyTag = (props) => (
        
        <div className={styles.TechnologyTag}>
            {props.children}
        </div>
    );


export default TechnologyTag;