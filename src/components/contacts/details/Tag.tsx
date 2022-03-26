import classes from "./Tag.module.css";

type TagProps = {
  tag: string;
  deletable?: boolean;
  onRemove?: (tag: string) => void;
};
const Tag: React.FC<TagProps> = ({ tag, onRemove, deletable = false }) => {
  return (
    <div className={classes.tag}>
      <span>{tag}</span>
      {deletable && onRemove && (
        <span onClick={() => onRemove(tag)} className={classes.delete}>
          X
        </span>
      )}
    </div>
  );
};

export default Tag;
