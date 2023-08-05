import getCategory from "@/actions/get-category"
import getColors from "@/actions/get-colors"
import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0 //여기서는 캐시저장을 하지 않는다는 의미

interface CategoryPageProps {
  params: {
    categoryId: string
  },
  searchParams: {
    colorId: string
    sizeId: string
  }
}
const CategoryPage:React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  })
  const colors = await getColors()
  const sizes = await getSizes()
  const category = await getCategory(params.categoryId)

  return (
    <div className="bg-white">
      <Container>
        <Billboard 
          data={category.billboard}
        />
      </Container>
      
    </div>
  )
}

export default CategoryPage