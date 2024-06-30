
import { WORDS } from "@/consts/words";

import classes from './style.module.css';
import Link from "next/link";
import { LinkedinIcon } from "@/assets/svg/linkedinIcon";
import { GithubIcon } from "@/assets/svg/GithubIcon";

const Main = () => (
    <div className={classes.aboveSection}>
        <div className={classes.divInSection}>
            <div className={classes.wrrapperMyImg}>
                <div className={classes.myImg}></div>
            </div>
            <div className={classes.textCenter}>
                <h2
                    children={`${WORDS.FIRST_NAME} ${WORDS.LAST_NAME}`} 
                    className={classes.myName}
                />
                <div className={classes.pd2} />
                <p className={classes.myDegree}>{WORDS.POSSITION}</p>
                <div className={classes.pd4} />
                <div className={classes.socialLinks}>
                    <Link
                        href={WORDS.LINKDIN_URL}
                        target="_blank" 
                        className={classes.linkToLinkdin}
                    >
                        <LinkedinIcon />
                    </Link>
                    <Link
                        href={WORDS.GITHUB_URL}
                        target="_blank" 
                        className={classes.linkToGithubn}
                    >
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export { Main };