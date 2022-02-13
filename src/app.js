import React, { useState } from 'react'
import GlobalStyle from './styles'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {
  const [search, setSearch] = useState("")

  return (
    <>
      <GlobalStyle />
      <Header>
        <SearchBar value={search} onChange={setSearch} />
      </Header>
    </>
  )
}

export default App
