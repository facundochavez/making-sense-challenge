import { Switch } from "antd";
import styles from "./ModeToggle.module.scss";

const ModeToggle = () => {
  
  //// COMPONENT
  return (
    <div className={styles.mode_toggle}>
      <span>Dark Mode</span>
      <Switch />
    </div>
  );
};

export default ModeToggle;
