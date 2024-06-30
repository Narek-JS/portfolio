import { Skill } from '../Skill';
import { SKILLS } from '@/consts/skills';
import { WORDS } from '@/consts/words';

import classes from './style.module.css';

const WrapperSkills = () => {
    const skills = SKILLS.map((skill, i) => (
        <div key={i}>
            <Skill
                skill={skill.name}
                width={skill.percent}
            />
            <div className={classes.padding15} />
        </div>
    ));

    return (
        <div className={classes.wrapperSkills} >
            <div className={classes.wrapperCodingSkillsText} >
                <span className={classes.codingText} >{WORDS.CODING}</span>
                <div className={classes.paddingLeft5} />
                <span className={classes.skillsText} >{WORDS.SKILLS}</span>
            </div>
            <div className={classes.padding20} />
            <div className={classes.divGrid} children={skills} />
        </div>
    );
};

export { WrapperSkills };