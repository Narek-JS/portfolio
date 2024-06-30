import { DownloadCv } from '@/components/DownloadCv';
import { WORDS } from '@/consts/words';

import classes from './style.module.css';

const About = () => {
    const firstPice = WORDS.AVOUT_ME.split('__')[0];
    const secondPice = WORDS.AVOUT_ME.split('__')[1];
    const thredPice = WORDS.AVOUT_ME.split('__')[2]
        .replace('LinkedIn', `<a href="${WORDS.LINKDIN_URL}">LinkedIn</a>`)
        .replace('GitHub', `<a href="${WORDS.GITHUB_URL}">GitHub</a>`);

    const f = text => text[0].toUpperCase() +text.slice(1,text.length);

    return (
        <div className={classes.wrapperAbout} >
            <div className={classes.wrapperTextAboutMe}>
                <span className={classes.textAbout}>{f(WORDS.ABOUT)}</span>
                <div className={classes.paddingLeft5} />
                <span className={classes.textMe}>{f(WORDS.ME)}</span>
            </div>
            <div className={classes.padding20} />
            <div>
                <p className={classes.textAboutMe}>{firstPice}</p>
                <div className={classes.padding10} />
                <p className={classes.textAboutMe}>{secondPice}</p>
                <div className={classes.padding20} />
                <p className={classes.textAboutMe} dangerouslySetInnerHTML={{
                    __html: thredPice
                }}/>
                <div className={classes.padding20} />
                <div className={classes.padding20} />
                <DownloadCv />
            </div>
        </div>
    );
};

export { About };