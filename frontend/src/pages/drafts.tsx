import PostDisplay from "../components/post";
import usePosts from "../hooks/usePosts";

export default function DraftsPage() {
  const { draft } = usePosts();

  return (
    <>
      {
        draft ?
          draft.map(post => (
            <PostDisplay key={post.id} post={post} />
          )) :
          <></>
      }
    </>
  )
}