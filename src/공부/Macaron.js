//클래스형 컴포넌트 rce
// import React, { Component } from 'react'

// export class Macaron extends Component {
//   render() {
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron

//함수형 컴포넌트 rfce
// import React from 'react'

// function Macaron(props) {
//   console.log(props)
//   return (
//     <div>
//       <h1>NO. {props.propsid}</h1>
//       <h2>Name: {props.propsname}</h2>
//       <img src={props.propsimge} alt={props.propsname}></img>
//     </div>
//   )
// }

//구조분해할당 1
// function Macaron(props) {
//   console.log(props)
//   const {propsid,propsname,propsimge} = props;
//   return (
//     <div>
//       <h1>NO. {propsid}</h1>
//       <h2>Name: {propsname}</h2>
//       <img src={propsimge} alt={propsname}></img>
//     </div>
//   )
// }

//구조분해할당 2
function Macaron({propsid,propsname,propsimge}) {
  return (
    <div>
      <h1>NO. {propsid}</h1>
      <h2>Name: {propsname}</h2>
      <img src={propsimge} alt={propsname}></img>
    </div>
  )
}

export default Macaron;
