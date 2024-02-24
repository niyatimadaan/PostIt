import { useState } from "react";
import AuthDialog from "./components/auth";
import Sidebar from "./components/sidebar";
import HomePage from "./pages/home";
import useUser from "./hooks/useUser";
import DraftsPage from "./pages/drafts";

const Pages = [
  {
    title: "Home",
    component: HomePage
  },
  {
    title: "Drafts",
    component: DraftsPage
  }
]

export default function App() {
  const [page, setPage] = useState<number>(0);
  const { user, isLoading } = useUser();
  const PageComponent = Pages[page].component;

  return (
    <div className="bg-white">
      { !user && !isLoading ? <AuthDialog /> : <></> }
      <div className="flex min-h-screen max-h-screen overflow-hidden">
        <Sidebar changePage={setPage} />

        <div className="w-3/5 border border-neutral-400 max-h-screen overflow-y-scroll  border-t-0 border-b-0">
          <div className="flex">
            <div className="flex-1 m-2">
              <h2 className="px-4 py-2 text-xl font-semibold text-neutral-900">{ Pages[page].title }</h2>
            </div>
          </div>
          <hr className="border-neutral-400" />
          { user ? <PageComponent /> : <></> }
        </div>

        <div className="w-2/5 h-12"></div>
      </div>
    </div>
  )
}