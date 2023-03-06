import styles from "./avatar.module.css";

export const Avatar = ({ src, hasBorder = true }) => {
  console.log("HasBorder", hasBorder);
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
