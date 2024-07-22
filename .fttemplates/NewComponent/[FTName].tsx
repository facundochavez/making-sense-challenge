import styles from "./[FTName].module.scss";

const [FTName] = () => {
  
  //// COMPONENT
  return (
    <div className={styles.[FTName | snakecase]}>
      [FTName]
    </div>
  );
};

export default [FTName];
