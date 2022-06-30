import classes from './Section.module.css';

const FullWidthSection = (props) => {
  return <section className={classes.fullWidthSection}>{props.children}</section>;
};

export default FullWidthSection;
