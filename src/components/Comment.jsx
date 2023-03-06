import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <header className={styles.header}>
            <div className={styles.author}>
              <strong>Rodolfo Bohn</strong>
              <time title="06 de março as 21:40" dateTime="2023-03-06 21:40:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
