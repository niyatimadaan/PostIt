import useSWR from "swr";
import { UserPublic, getLoggedInUser } from "../lib/user";

export default function useUser() {
  const {
    data,
    isLoading, 
    mutate
  } = useSWR<UserPublic | undefined>('/api/user', getLoggedInUser, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  return {
    user: data,
    isLoading,
    mutate
  }
}