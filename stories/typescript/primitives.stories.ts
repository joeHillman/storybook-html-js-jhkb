

export default {
  title: 'Typescript/Primitives'
};

export const strings = () => {
  const myName: string = "Joe";
  return `
    <div>
      <code><span class="js">const myName</span><span class="ts">: string</span><span class="js">= "Joe"</span></code>
      <ul>
        <li>Typescript will infer that myName is a string type, while you could annotate it, in this case it's unnecessary.</li>
        <li>Typescript will throw an error if you try to assign something that is a different type.</li>
      </ul>
      <a href="../../../zettelKasten/typescript">Typescript</a>
    </div>
    [Docymentation](?path=../../../zettelKasten/typescript/typescript/)
`}

export const numbers = () => { 
  const myNumber: number = 5;
  return `
    <div>
      <code><span class="js">const myNumber</span><span class="ts">: number</span><span class="js"> = 5</span></code>
      <ul>
        <li>Typescript will infer that myNumber is a number type, while you could annotate it, in this case it's unnecessary.</li>
        <li>Typescript will throw an error if you try to assign something that is a different type.</li>
      </ul>
    </div>
  `}
