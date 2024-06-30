"use client"

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { WORDS } from '@/consts/words';
import { Container } from '@/components/Container';

import classes from './style.module.css';

const Header = () => {
    const pathname = usePathname();

    const fullName = useMemo(() => (
        <div>
            <span className={classes.Name}>{WORDS.FIRST_NAME}</span>
            <span className={classes.lastName}>{WORDS.LAST_NAME}</span>
        </div>
    ), []);
    
    return (
        <header className={classes.HomeHeader}>
            <Container>
                <div className={classes.divInHeader}>
                    <Link
                        href="/"
                        className={classes.linkToHome}
                        children={fullName}
                    />
                    <nav>
                        <Link href="/" className={classes.linkToHome} > 
                            <span className={`${classes.HomeText} ${pathname === '/' ? classes.row: ''}` } >{WORDS.HOME}</span>                        
                        </Link>
                        <Link href='/resume' className={classes.linkToResume}>
                            <span 
                                className={`
                                    ${classes.ResumeText} 
                                    ${pathname === '/resume' ? classes.row: ''}
                                `} 
                            >{WORDS.RESUME}</span>
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export { Header };