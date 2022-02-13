import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NoResults from './NoResults'

const Container = styled.ul`
  margin: 0;
  padding: 15px 0 0 52px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  li {
    margin-bottom: 16px;
    margin-right: 16px;
    text-transform: capitalize;
  }
`

const Tile = styled.div`
  width: 198px;
  height: 111px;
  border-radius: 4px;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    135deg,
    rgba(
        ${(props) => props.red},
        ${(props) => props.green},
        ${(props) => props.blue},
        ${(props) => props.opacity}
      )
      0%,
    rgba(45, 253, 172, 1) 100%
  );
`

function Cards({ list = [], category, search }) {
  let filtered

  if (category === 'all') filtered = list
  else {
    filtered = list.filter((item) => {
      if (item.type === category) return true
      return false
    })
  }

  return (
    <Container>
      {filtered.length ? (
        filtered.map((item) => {
          const red = Math.floor(Math.random() * 255)
          const green = Math.floor(Math.random() * 255)
          const blue = Math.floor(Math.random() * 255)
          const opacity = Math.random()

          return (
            <li key={item.title}>
              <Tile red={red} green={green} blue={blue} opacity={opacity} />
              {item.title}
            </li>
          )
        })
      ) : (
        <NoResults search={search} />
      )}
    </Container>
  )
}

export default Cards
