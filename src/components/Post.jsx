import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <Avatar
            className={styles.avatar}
            src="https://this-person-does-not-exist.com/img/avatar-112a8a01001705d3d653e00b03c74898.jpg"
          />
          <div className={styles.authorInfo}>
            <strong>Rodolfo Bohn</strong>
            <span>Software Developer</span>
          </div>
        </div>
        <time title="01 de março as 21:40" dateTime="2023-03-01 21:40:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          tempora unde quo quaerat consequatur reiciendis iure quam facere saepe
          repellat ab, asperiores possimus sed assumenda et aperiam itaque.
          Temporibus, dignissimos?
        </p>
      </div>
      <form className={styles.commentForm}>
        <label>Deixe seu feedback</label>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
};
