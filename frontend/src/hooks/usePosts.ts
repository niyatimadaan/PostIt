import useSWR from "swr";
import { Posts, getPosts } from "../lib/posts";

export default function usePosts() {
  const {
    data,
    isLoading,
    mutate
  } = useSWR<Posts>('/api/posts', getPosts, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return {
    posts: data?.posts,
    draft: data?.draft,
    isLoading,
    mutate
  }
}