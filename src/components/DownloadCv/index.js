import Link from 'next/link';
import classes from './style.module.css';
import { WORDS } from '@/consts/words';

const DownloadCv = () => {
    return (
        <Link
            href='/cv/CV.pdf'
            download={WORDS.TEXTDOWNLOADCV}
            className={classes.downloadCv}
            children={WORDS.DOWNLOAD}
        />
    );
};

export { DownloadCv };