import React, { useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-top: 16.5px;

  input {
    font-family: Muli, sans-serif;
  }

  .input-description {
    font-size: 12px;
    letter-spacing: 0.4px;
    color: #505a78;
    position: absolute;
    left: 0;
    top: 100%;

    &.top {
      bottom: 100%;
      top: auto;
    }
  }

  .cross-icon {
    position: absolute;
    font-size: 50px;
    top: 0;
    right: 20px;
    color: #e6e6e6;
    line-height: 30px;
    z-index: 10;
    cursor: pointer;
  }
`

const Input = styled.input`
  position: relative;
  width: calc(100% - 52px);
  height: 100%;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 0.5px;
  z-index: 10;
  background-color: transparent;
  border: 0;
  outline: 0;
  color: #3c8cf0;
  padding: 0;
`

const Placeholder = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 52px);
  height: 100%;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 0.5px;
  z-index: 1;
  background-color: transparent;
  border: 0;
  outline: 0;
  color: #3c8cf0;
  padding: 0;

  &::placeholder {
    color: #d3d3d3;
  }
`

function SearchBar({
  value,
  onChange = Function.prototype,
  list = [],
  onCrossClick = Function.prototype
}) {
  const { title: firstOption = '' } = list[0] || {}
  const placeholder = value ? firstOption : 'Search Videos'

  function onKeyDown(event) {
    if (event.code === 'ArrowRight') {
      onChange(firstOption, true)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [firstOption])

  return (
    <Container>
      <span className={`input-description ${value && 'top'}`}>
        {value
          ? 'Showing Results For'
          : 'Type to search or pick a recent search or suggested keywords below'}
      </span>
      <Placeholder placeholder={placeholder} />
      <Input
        value={value}
        onChange={(event) => {
          onChange(event.target.value)
        }}
      />
      <span
        className='cross-icon'
        onClick={() => {
          onCrossClick()
        }}
      >
        ×
      </span>
    </Container>
  )
}

export default SearchBar
