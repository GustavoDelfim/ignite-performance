export type ProductItem = {
  id: number
  price: number
  title: string
}

interface ProductItemProps {
  product: ProductItem
}

export function ProductItem ({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}