import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Pills from './components/Pills'
import Tabs from './components/Tabs'
import Cards from './components/Cards'
import datastore from '../datastore'
import { useSearchParams } from 'react-router-dom'

function App() {
  const [search, setSearch] = useState('')
  const [retainData, setRetainData] = useState(false)
  const [list, setList] = useState([])
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('all')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('q')
    setSearch(query)
  }, [])

  useEffect(() => {
    setSearchParams({ q: search })
  }, [search])

  useEffect(() => {
    function fetchData() {
      if (retainData) return

      if (search.length > 1) {
        const response = datastore(search)
        setList(response)
        const tempCategories = ['all']
        for (const item of response) {
          if (tempCategories.indexOf(item.type) === -1)
            tempCategories.push(item.type)
        }
        setCategories(tempCategories)
      }
    }
    fetchData()
  }, [search, retainData])

  return (
    <>
      <Header>
        <SearchBar
          list={list}
          value={search}
          onChange={(value, shouldFetch = false) => {
            setRetainData(shouldFetch)
            setTimeout(() => {
              setSearch(value)
            }, 1)
          }}
          onCrossClick={() => {
            setSearch('')
            setList([])
            setRetainData(false)
            setCategories([])
            setCategory('all')
          }}
        />
        <Pills
          list={list}
          selectItem={(value, shouldFetch = false) => {
            setRetainData(shouldFetch)
            setTimeout(() => {
              setSearch(value.title)
            }, 1)
            setList([value])
          }}
        />
        <Tabs
          category={category}
          categories={categories}
          setCategory={setCategory}
        />
      </Header>
      <Cards list={list} category={category} search={search} />
    </>
  )
}

export default App
