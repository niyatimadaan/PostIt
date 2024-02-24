import PostEditor from "../components/editor";
import PostDisplay from "../components/post";
import usePosts from "../hooks/usePosts";

export default function HomePage() {
  const { posts } = usePosts();

  return (
    <>
      <PostEditor />
      <hr className="border-neutral-400 border-1" />
      {
        posts ?
          posts.map(post => (
            <PostDisplay key={post.id} post={post} />
          )) :
          <></>
      }
    </>
  )
}