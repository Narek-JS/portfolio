import Image from 'next/image';

export const EDUCATION = [
    {
        contentStyle:{ background: 'nune', border:'2px solid rgba(46,202,127)' },
        contentArrowStyle: { borderRight: '7px solid  rgba(46,202,127)' },
        iconStyle:{ background: '#FFFFFF', color: '#fff' },
        name:'Faculty of Finance',
        date: <span>&nbsp; 2018 - 2023</span>,
        info: `
            Bachelor of Science in the Faculty of Radiophysic,
            Yerevan State University
        `,
        icon: <Image
            alt='University Logo'
            src='/images/University.jpg'
            width={55}
            height={55}
            style={{ transform: 'translate(2.5px, 6px)', objectFit: "contain" }}
        />,
    },
    {
        contentStyle:{ background: 'nune', border:'2px solid rgba(46,202,127)' },
        contentArrowStyle: { borderRight: '7px solid  rgba(46,202,127)' },
        iconStyle: { background: '#FFFFFF', color: '#fff' },
        name: 'Military service',
        date: <span>2019 - 2021 &nbsp;</span>,
        info: '',
        icon: <Image
            alt='Military Logo'
            src='/images/Military.jpg'
            width={55}
            height={55}
            style={{ transform: 'translate(2.5px, 6px)', objectFit: "contain" }}
        />
    },
];