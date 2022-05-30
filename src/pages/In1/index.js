import './index.css'
import React from 'react'
import In2 from '../In2'
import In3 from '../In3'
function Demo(props){
  let ls = props.data.map((i) => 
    <li key={i}>{i}</li>
  )
  console.log(props)

  function sonTy(i){
    console.log(i)
  }
  return (
    <div>
      <h2 className='tit'>{ls}</h2>
      <In2 sonTy={sonTy}/>
      <In3 />
    </div>
  )
}
export default Demo;

