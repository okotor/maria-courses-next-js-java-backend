import classes from './loading.module.css'

const CoursesLoadingPage = () => {
    return (
        <div>
            <p className={classes.loading}>Načítám...</p>
        </div>
    );
};

export default CoursesLoadingPage;