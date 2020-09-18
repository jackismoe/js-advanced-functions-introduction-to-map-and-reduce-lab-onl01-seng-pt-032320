const mapToNegativize = (source) => {
  let newArray = []
  for (let i = 0; i < source.length; i++) {
    newArray.push(-1 * source[i])
  }
  return newArray
} 

const mapToNoChange = (source) => {
  let newArray = []
  for (let i = 0; i < source.length; i++) {
    newArray.push(source[i])
  }
  return newArray
}

const mapToDouble = (source) => {
  let newArray = []
  for (let i = 0; i < source.length; i++) {
    newArray.push(2 * source[i])
  }
  return newArray
}

const mapToSquare = (source) => {
  let newArray = []
  for (let i = 0; i < source.length; i++) {
    newArray.push(source[i] * source[i])
  }
  return newArray
}

const reduceToTotal = (source, start = 0) => {
  let total = start
  for (let i = 0; i < source.length; i++) {
    total += source[i]
  }
  return total
}

const reduceToAllTrue = (source) => {
  for (let i = 0; i < source.length; i++) {
    if (!source[i]) return false
  }
  return true
}

const reduceToAnyTrue = (source) => {
  for (let i = 0; i < source.length; i++) {
    if (source[i]) return true
  }
  return false
}