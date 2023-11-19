// 只作为一个请求工具，记得可以扩展，加上 token 之类的验证

export function usePost(url: string) {
  return fetch(url, {
    method: 'post'
  }).then(res => res.json())
}


export function usePostFile(url: string) {
  return fetch(url, {
    method: 'post'
  }).then(res => res.blob())
}


export function useGet(url: string): Promise<Record<string, any>> {
  return fetch(url, {
    method: 'get'
  }).then(res => res.json())
}

