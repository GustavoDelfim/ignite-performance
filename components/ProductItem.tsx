import { memo } from "react"

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
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>

      <button onClick={() => onAddToWishList(product.id)}>Add to wish list</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComp, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})