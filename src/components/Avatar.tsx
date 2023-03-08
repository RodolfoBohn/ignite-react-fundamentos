import { ImgHTMLAttributes } from "react";
import styles from "./avatar.module.css";

interface AvatarType extends ImgHTMLAttributes<HTMLIFrameElement> {
  hasBorder?: boolean;
}

export const Avatar = ({ src, hasBorder = true }: AvatarType) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
