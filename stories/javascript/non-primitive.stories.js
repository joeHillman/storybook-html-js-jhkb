export default {
  title: 'Javascript/Non-Primitives'
};

export const objects = () => {
  return `
  <div>
    ${console.log(typeof({}), typeof [], "Object")}, only ever returns a value of object
    <br/>
    <code>console.log(typeof Object) // returns only a value of object</code>
    <code>let myObject = {}; let mySecondObject = {} // these object literals create new and separate objects</code>
    <code>let myObject = []; let mySecondObject = [] // these array literals create new and separate arrays</code>
    <p></p>
  </div>`
}

export const functions = () => {
  return `
  <div>
    ${console.log(typeof(() => {}))}, function returns a value of function
    <br/>
    <code>console.log(typeof () => {}) // returns only a value of function</code>
    <code>
      const add5 = (x) => { return x + 5 }
      console.log(add5, add5(3)) // returns value of function, returns 8 due to function call '()'
    </code>
    <p><b>Note</b>: Functions are still objects.</p>
  </div>`
}
