
import React,{useState, useRef} from 'react'

// ref 用法
function In3(props){
  console.log(props)
  const [d1, setD1] = useState();
  const refVal = useRef(0)
  // function btnFn(e) {
  //   console.log(e)
  // }
  const btnFn = (e) => {
    console.log(refVal.current.value)
    setD1(refVal.current.value)

  }
  // componentWillUnmount =()=>{
  //   console.log(refVal)
  // }
  

  return (
    <div>In3
      <button onClick={()=> {btnFn('bugn')}}>btn</button>
      {d1}
      <input  ref={refVal}/>
    </div>
  )
}

export default In3;