import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { ProductItem } from '../components/ProductItem'
import { SearchResults } from '../components/SearchResults'
import axios from 'axios'

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<ProductItem[]>([])
  
  async function handleSearch (event: FormEvent) {
    event.preventDefault()
    
    if (!search.trim()) {
      return
    }

    const { data } = await axios.get<ProductItem[]>(`http://localhost:3333/products?q=${search}`)
    setResults(data)
  }
  
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

      <SearchResults results={results} />
    </div>
  )
}

export default Home
