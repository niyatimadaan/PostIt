import { formatDate } from "../../lib/utils";
import { Post } from "../../lib/posts";

export default function PostDisplay({ post }: { post: Post }) {
  return (
    <div>
      <div className="flex flex-shrink-0 p-4 pb-0">
        <div className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-base leading-6 font-medium">
                @{post.owner} &nbsp; &nbsp;
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  {formatDate(post.published_at)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-7 pt-4">
        <h2 className="text-lg font-medium">{post.title}</h2>
        <p className="text-base width-auto flex-shrink">
          {post.description}
        </p>
      
      
        <div className="flex py-2">
            <div className="w-full">
                
                <div className="flex items-center">
                    <div className="flex-1 text-center">
                        <div className="mt-1 group flex items-center text-neutral-500 px-3 py-2 text-base leading-6 font-medium rounded-full">
                          <svg className="text-center h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                          <div className="ml-2">{post.comments ?? 0}</div>
                        </div>
                    </div>
      
                    <div className="flex-1 text-center">
                      <div className="mt-1 group flex items-center text-neutral-500 px-3 py-2 text-base leading-6 font-medium rounded-full">
                        <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        <div className="ml-2">{post.likes ?? 0}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center">
                      <div className="mt-1 group flex items-center text-neutral-500 px-3 py-2 text-base leading-6 font-medium rounded-full">
                        <svg className="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                        <div className="ml-2">{post.shares ?? 0}</div>
                      </div>
                    </div>
                </div>
            </div>
      
        
        </div>
        
      </div>
      <hr className="border-neutral-400" />
    </div>
  )
}