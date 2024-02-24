export type UserAuthParams = {
  username: string;
  password: string;
}

export type UserPublic = {
  username: string;
}

export async function registerUser({username, password}: UserAuthParams) {
  const res = await fetch('/api/register/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  })

  return res.ok;
}

export async function loginUser({username, password}: UserAuthParams) {
  const res = await fetch('/api/login/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  })

  return res.ok;
}

export async function getLoggedInUser(): Promise<UserPublic | undefined> {
  const res = await fetch('/api/user/', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })

  if ( res.ok ) {
    const body = await res.json();
    return body as UserPublic
  }

  return undefined;
}