import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState(["Muito bom, parabéns!"]);
  const [newCommentValue, setNewCommentValue] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCommentSubmit(event) {
    event.preventDefault();
    setComments((state) => {
      return [...state, newCommentValue];
    });
    setNewCommentValue("");
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function removeComment(commentToRemove) {
    setComments((state) =>
      state.filter((comment) => comment !== commentToRemove)
    );
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((contentItem) => {
          if (contentItem.type === "paragraph") {
            return <p key={contentItem.content}>{contentItem.content}</p>;
          } else if (contentItem.type === "link") {
            return (
              <p key={contentItem.content}>
                <a href="#">{contentItem.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
        <label>Deixe seu feedback</label>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentValue}
          onChange={(event) => setNewCommentValue(event.target.value)}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={newCommentValue.length === 0}>
            Publicar
          </button>
        </footer>
      </form>

      {comments.map((comment) => (
        <Comment
          key={comment}
          content={comment}
          onRemoveComment={removeComment}
        />
      ))}
    </article>
  );
};
