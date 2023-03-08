import React from 'react'

// function Food(props) {
// console.log(props)
//   return (
//     <div>Food {props.propsName} , {props.propsName2} , {props.propsName3}</div>
//   )
// }

//구조분해할당 1
// function Food(props) {
//   console.log(props)
//   const {propsName,propsName2,propsName3} = props;
//   return (
//     <div>Food {propsName} , {propsName2} , {propsName3}</div>
//   )
// }

//구조분해할당 2
function Food({propsName,propsName2,propsName3}) {

  return (
    <div>Food {propsName} , {propsName2} , {propsName3}</div>
  )
}

export default Food