import classes from './style.module.css';

const Container = ({ children }) => (
    <div className={classes.container}>
        {children}
    </div>
);

export { Container };