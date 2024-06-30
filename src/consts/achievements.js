
import Image from 'next/image';
 
export const ACHIEVEMENTS = [
    {
        contentStyle:{ background: 'nune', border:'2px solid rgba(46,202,127)' },
        contentArrowStyle: { borderRight: '7px solid  rgba(46,202,127)' },
        iconStyle:{ background: '#FFFFFF', color: '#fff' },
        name: 'Logix Software',
        date: <span> &nbsp; 22.02.2023 - present</span>,
        info: `
            At Logix Software,
            I actively contribute to various projects,
            including the production-ready ifta.online.
            I adhere to software engineering principles such as the
            Single Responsibility Principle, Open-Closed Principle,
            and Liskov Substitution Principle. I prioritize writing
            clean code and participate in code reviews to ensure code quality and
            best practices. My work primarily involves using Javascript, React/Next.js
        `,
        icon: <Image
            alt='Logix Software Logo'
            src='/images/logixLogo.png'
            width={55}
            height={55}
            style={{ transform: 'translate(2.5px, 6px)' }}
        />,
    },
    {
        contentStyle:{ background: 'nune', border:'2px solid rgba(46,202,127)' },
        contentArrowStyle: { borderRight: '7px solid  rgba(46,202,127)' },
        iconStyle:{ background: '#FFFFFF', color: '#fff' },
        name: 'Iguan Systems',
        date: <span> 10.01.2022 - 22.02.2023 &nbsp;</span>,
        info: `
            At Iguan System, I served as a React.js Developer and played a
            pivotal role in developing an online tree shop.
            The project involved creating websites such as descamps.com,
            jalla.com, and hypsi.waveum.io.
            My responsibilities included using
            Javascript, React, Redux, Saga, and SCSS with BEM Methodology.
        `,
        icon: <Image
            alt='Iguan Systemns Logo'
            src='/images/iguan-logo.png'
            width={55}
            height={55}
            style={{ transform: 'translate(2.5px, 6px)', objectFit: "contain" }}
        />,
    },
    {
        contentStyle:{ background: 'nune', border:'2px solid rgba(46,202,127)' },
        contentArrowStyle: { borderRight: '7px solid  rgba(46,202,127)' },
        iconStyle:{ background: '#FFFFFF', color: '#fff' },
        name: 'CodeTime',
        date: <span> &nbsp; 01.02.2021 - 10.01.2022</span>,
        info: `
            At Code Time, I worked as a Javascript Developer,
            collaborating with my team to develop a constructor for creating landing
            pages, similar to Canva. My responsibilities included using
            Javascript, Next.js, Redux Toolkit, RTK Query, and Tailwind CSS.
        `,
        icon: <Image
            alt='Code Time Logo'
            src='/images/codeTimeLogo.png'
            width={55}
            height={55}
            style={{ transform: 'translate(2.5px, 6px)' }}
        />,
    }
];