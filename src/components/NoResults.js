import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    color: #505a78;
    text-align: center;
    font-size: 24px;

    p {
      margin: 24px 0;
    }

    span {
      font-size: 14px;
      color: #96a2ba;
    }
  }
`

function NoResults({ search }) {
  if (search.length < 2) return null
  return (
    <Container>
      <div>
        <p>Oops! No Results Found</p>
        <span>We couldn't find any results for 'asdfasdfasdf'.</span>
      </div>
    </Container>
  )
}

export default NoResults
