export enum PostStatus {
  DRAFT,
  PUBLISHED
}

export type Post = {
  id: string;
  title: string;
  description: string;
  owner: string;
  likes: number;
  comments: number;
  shares: number;
  status: PostStatus;
  published_at: Date;
}

export type PostCreate = {
  title: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  status: PostStatus;
  published_at: Date;
}

export type Posts = {
  posts: Post[],
  draft: Post[]
}

export async function createPost(post: PostCreate) {
  const res = await fetch('/api/posts/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })

  return res.ok;
}

export async function getPosts(): Promise<Posts> {
  const res = await fetch('/api/posts/', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })

  if ( res.ok ) {
    const body = await res.json() as Posts;
    return {
      posts: body.posts.map(post => ({
        ...post,
        published_at: new Date(post.published_at)
      })).sort((a, b) => (a.published_at > b.published_at ? -1 : 1)),
      draft: body.draft.map(post => ({
        ...post,
        published_at: new Date(post.published_at)
      })).sort((a, b) => (a.published_at > b.published_at ? -1 : 1))
    };
  }

  return {
    posts: [],
    draft: []
  }
}
