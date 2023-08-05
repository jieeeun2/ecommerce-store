"use client"

import IconButton from "@/components/ui/icon-button"
import { Product } from "@/types"
import { ExpandIcon, ShoppingCartIcon } from "lucide-react"
import Image from "next/image"
import Currency from "@/components/ui/currency"
import { useRouter } from "next/navigation"

interface ProductCardProps {
  data: Product
}

const ProductCard:React.FC<ProductCardProps> = ({
  data
}) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${data.id}`) //data?.id 이렇게 해야하는 이유가 뭐지 저렇게 해도되는걸
  }
  
  return (
    <div 
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={() => {}}
              icon={<ExpandIcon size={20} className="text-gray-600"/>}
            />
            <IconButton 
              onClick={() => {}}
              icon={<ShoppingCartIcon size={20} className="text-gray-600"/>}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-semibold text-lg">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category?.name}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard