import words from './words'

function getList(query) {
  const result = []
  const types = ['movie', 'show', 'live', 'music', 'video']
  let maxItems = 5;
  let startsWith = words.filter((item) => item.indexOf(query) === 0)
  if (startsWith.length === 0) {
    startsWith = [query.trim()]
    maxItems = 15
  }

  for (const item of startsWith) {
    const iterated = []
    for (let i = 0; i < maxItems; ) {
      let rand = Math.floor(Math.random() * words.length)
      if (iterated.indexOf(rand) > -1) continue
      i++
      iterated.push(rand)
      const randType = Math.floor(Math.random() * types.length)
      result.push({
        type: types[randType],
        title: `${item} ${words[rand]}`
      })
    }
  }

  return result
}

export default getList
