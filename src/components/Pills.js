import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 30px 0;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow-x: scroll;
    width: 100%;
    white-space: nowrap;
    
    li {
      width:
      max-width: 200px;
      font-size: 12px;
      padding: 10px 15px;
      line-height: normal;
      border-radius: 16px;
      background-color: #e6e6e6;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      margin-right: 16px;
      cursor: pointer;
    }
  }
`

function Pills({ list = [], selectItem }) {
  return (
    <Container>
      <ul>
        {list.map((item) => (
          <li
            key={item.title}
            onClick={() => {
              selectItem(item, true)
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Pills
