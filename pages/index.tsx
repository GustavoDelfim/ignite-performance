import type { NextPage } from 'next'
import { FormEvent, useCallback, useState } from 'react'
import { ProductItem } from '../components/ProductItem'
import { SearchResults } from '../components/SearchResults'
import axios from 'axios'

type Results = {
  totalPrice: number
  data: ProductItem[]
}

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Results>({
    data: [],
    totalPrice: 0
  })
  
  async function handleSearch (event: FormEvent) {
    event.preventDefault()
    
    if (!search.trim()) {
      return
    }

    const { data } = await axios.get<ProductItem[]>(`http://localhost:3333/products?q=${search}`)

    const formarter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    
    const products = data.map(product => {
      return {
        ...product,
        priceFormatted: formarter.format(product.price)
      }
    })
    
    const totalPrice = data.reduce((current, product) => {
      return current + product.price
    }, 0)

    setResults({ totalPrice, data: products })
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, [])
  
  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type='submit'> Buscar </button>
      </form>

      <SearchResults
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishList={addToWishList}
      />
    </div>
  )
}

export default Home
