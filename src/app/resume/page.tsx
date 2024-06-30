'use client'

import { WrapperSkills } from '@/components/Resume/WrapperSkills';
import { Achievements } from '@/components/Resume/Achievements';
import { Education } from '@/components/Resume/Education';
import { DownloadCv } from "@/components/DownloadCv";
import { Container } from "@/components/Container";
import { WORDS } from "@/consts/words";

import classes from './page.module.css';

const Resume = () => {
    return (
        <Container>
            <div className={classes.rounder}>
                <div>
                    <div className={classes.wrrapperTextRasume}>
                        <h2 className={classes.textRasume}>{WORDS.RESUME}</h2>
                    </div>
                    <WrapperSkills />
                </div>
                <div className={classes.padding50} />
                <Achievements />
                <Education />
                <div
                    className={classes.wrapperDownloadCv}
                    children={<DownloadCv />}
                />
            </div>
        </Container>
    );
};


export default Resume;