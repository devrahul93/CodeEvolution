import axios from "axios";
import { useEffect, useState } from "react";

const DataFetchingone = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.userId}
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DataFetchingone;
