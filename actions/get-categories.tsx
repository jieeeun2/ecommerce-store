import { Category } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL/* , { next: { revalidate: 0 } } */) 
  /* revalidate 이렇게 쓰는게 맞는건지 모르겠음 
  navbar에서 export const revalidate = 0 이렇게 하면 자꾸 옛날 데이터가 나오는데 왜이럼??
  그리고 이게 category가 admin에서 변경될때마다 store에서도 변경사항 바로 반영되게 하고싶은데
  그렇게 하면 이걸쓰면 된댔는데 왜 안되지
  */
  
  return res.json()
}

export default getCategories