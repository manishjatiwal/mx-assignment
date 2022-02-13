import React from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  margin: 0;
  padding: 15px 0 8px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  li {
    font-size: 16px;
    border-bottom: 3px solid transparent;
    text-transform: uppercase;
    margin-right: 50px;
    padding-bottom: 8px;
    cursor: pointer;

    &.selected {
      border-bottom-color: #3c8cf0;
    }
  }
`

function Tabs({ category, categories, setCategory }) {
  return (
    <Container>
      {categories.map((item) => (
        <li
          className={category === item ? 'selected' : ''}
          key={item}
          onClick={() => {
            setCategory(item)
          }}
        >
          {item}
        </li>
      ))}
    </Container>
  )
}

export default Tabs
