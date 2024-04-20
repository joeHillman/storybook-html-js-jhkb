export default {
  title: 'Javascript/Primitives'
};

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
  return `<div>${myNumber * 5}</div>`
}
