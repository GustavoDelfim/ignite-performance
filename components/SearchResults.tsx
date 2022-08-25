import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: ProductItem[]
  totalPrice: number
  onAddToWishList: (id: number) => void
}

export function SearchResults ({ results, totalPrice, onAddToWishList }: SearchResultsProps) {
  return (
    <div>
      <h2>
        <> Total: {totalPrice} </>
      </h2>
      
      {results.map(item => {
        return (
          <ProductItem
            key={item.id}
            product={item}
            onAddToWishList={onAddToWishList}
          />
        )
      })}
    </div>
  )
}