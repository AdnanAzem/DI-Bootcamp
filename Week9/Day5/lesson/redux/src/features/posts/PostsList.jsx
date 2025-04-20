import { useEffect } from "react";
import ReactionButton from "./ReactionButton";

import { usePostsSelector, usePostsStatus, useFetchPosts } from "./state/hooks";

const PostsList = () => {
  const posts = usePostsSelector();
  const status = usePostsStatus();
  const callFetchPost = useFetchPosts();

  useEffect(() => {
    callFetchPost();
  }, []);

  if (status === "loading") return <h2>Looding...</h2>;

  if (status === "failed") return <h2>Opps......</h2>;

  return (
    <>
      <h2>Posts</h2>
      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <ReactionButton {...post} />
              </article>
            );
          })}
      </section>
    </>
  );
};
export default PostsList;
