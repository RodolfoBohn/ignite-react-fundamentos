import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://this-person-does-not-exist.com/img/avatar-112a8a01001705d3d653e00b03c74898.jpg",
      name: "Rodolfo Bohn",
      role: "DEV Frontend",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-05 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://this-person-does-not-exist.com/img/avatar-112a8a01001705d3d653e00b03c74898.jpg",
      name: "Carlos Sampaio",
      role: "DEVOps",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-02 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
