import { Container } from "@/components/Container";
import { Main } from "@/components/Home/Main";
import { About } from "@/components/Home/About";
import { Info } from "@/components/Home/Info";

import classes from './page.module.css';

const Home = () => (
    <Container>
        <div className={classes.rounder}> 
            <Main />
            <div className={classes.wrappereAboutInfo}>
                <About />
                <Info />
            </div>
        </div>
    </Container>
);

export default Home;