import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export const Comment = ({ content, onRemoveComment }) => {
  const [counterLikes, setCounterLikes] = useState(0);

  function handleRemoveComment() {
    onRemoveComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://this-person-does-not-exist.com/img/avatar-112a8a01001705d3d653e00b03c74898.jpg"
      />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <header className={styles.header}>
            <div className={styles.author}>
              <strong>Rodolfo Bohn</strong>
              <time title="06 de março as 21:40" dateTime="2023-03-06 21:40:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Excluir comentário" onClick={handleRemoveComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => setCounterLikes((state) => state + 1)}>
            <ThumbsUp />
            Aplaudir <span>{counterLikes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
