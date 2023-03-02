import styles from "./avatar.module.css";

export const Avatar = ({ src }) => {
  return (
    <img
      className={styles.avatar}
      src="https://this-person-does-not-exist.com/img/avatar-112a8a01001705d3d653e00b03c74898.jpg"
    />
  );
};
