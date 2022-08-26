export type AddProductWishListProps = {
  onAddWishLIst: () => void
  onRequestClose: () => void
}

export function AddProductWishList ({
  onAddWishLIst,
  onRequestClose
}: AddProductWishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?

      <button onClick={onAddWishLIst}> Sim </button>
      <button onClick={onRequestClose}> Não </button>
    </span>
  )
}