import { memo, useState } from "react"
import dynamic from 'next/dynamic'
import { AddProductWishListProps } from "./AddProductWishList"
import lodash from 'lodash'

const AddProductWishList = dynamic<AddProductWishListProps>(() => {
  return import('./AddProductWishList').then(mod => mod.AddProductWishList)
}, {
  loading: () => <span>Carregando...</span>
})

export type ProductItem = {
  id: number
  price: number
  title: string
  priceFormatted: string
}

interface ProductItemProps {
  product: ProductItem
  onAddToWishList: (id: number) => void
}

function ProductItemComp ({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false)
  
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Add to wish list</button>

      {isAddingToWishList &&
        <AddProductWishList
        onAddWishLIst={() => onAddToWishList(product.id)}
        onRequestClose={() => setIsAddingToWishList(false)}
        />
      }
    </div>
  )
}

export const ProductItem = memo(ProductItemComp, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product)
})