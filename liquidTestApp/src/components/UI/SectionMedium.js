import classes from './Section.module.css';

const SectionMedium = (props) => {
  return <section className={classes.sectionMedium}>{props.children}</section>;
};

export default SectionMedium;
