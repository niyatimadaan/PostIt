import useUser from "../../hooks/useUser"

export default function Sidebar({ changePage }: { changePage: (v: number) => void }) {
  const { user } = useUser();

  return (
    <div className="w-2/5 pl-32 py-4 flex flex-col justify-between">
      <nav className="mt-5 px-2">
        <div onClick={() => changePage(0)} className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-neutral-200">
          <svg className="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
          </svg>
          Home
        </div>
        <div onClick={() => changePage(1)} className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-neutral-200">
          <svg className="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          Drafts
        </div>
      </nav>
        
      <div className="px-2 text-base leading-6 font-medium">
        @{ user?.username ?? "" }
      </div>
    </div>
  )
}