export default {
  title: 'Javascript/Primitives'
};

export const undefinedExample = () => {
  return `
  <div>
    ${console.log(typeof(undefined), "Undefined only ever type of undefined")}, only ever returns a value of undefined
    <br/>
    <code>console.log(typeof undefined) // returns only a value of undefined</code>
    <p>This is the concept of an unintentially missing value adn will break the program.</p>
  </div>`
}

export const nullExample = () => {
  return `
  <div>
    ${console.log(typeof(null))}, Null only ever type of object due to a bug in JS, only ever returns a value of object
    <br/>
    <code>console.log(typeof null) // returns only a value of object</code>
    <p>This is the concept of an intentionally missing value which is only by convention NOT by spec.</p>
  </div>`
}

export const booleanExample = () => {
  return `
  <div>
    ${console.log(typeof(true))}, True and False only ever type of boolean and returns 2 values, true or false
    <br/>
    <code>console.log(typeof true) // returns only a value of true or false</code>
    <p>This is the concept of an intentionally missing value which is only by convention NOT by spec.</p>
  </div>`
}

export const strings = () => {
  const myName = "Joe";
  return `
    <div>
      Stuff about strings...
      <code>${myName}</code>
    </div>
`}

export const numbers = () => {
  const myNumber = 5;
  return `<div>${myNumber * 5}
  <p>JS uses numbers with limited precision by way of floating point math.
    There is only one "4" as a number.
  </p>
  <ul><li>Nan, a numeric value but in floating point math, not a number</li><li>Infinity</li><li>-Infinity</li><li>-0</li></ul>
  </div>`
}

export const bigIntsExample = () => {
  return `
    <div>
      BigInts are JS's way of handling large inetegers with precision and are good for financial transactions.
    </div>
`}

export const symbolsExample = () => {
  return `
    <div>
      Symbols hide away some info inside and control what parts of the code can access it.
    </div>
`}
