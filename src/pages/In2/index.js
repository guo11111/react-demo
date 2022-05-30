import React, {useState, createContext} from 'react'


import Ls from './ls'
export const CountCon = createContext();
// function CounCom(){
//   let count = useContext(CountCon)
//   return (<h2>{count}</h2>)
// }

function In2(props){
  console.log(props.sonTy)
  let {sonTy} = props
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <h3>'in2'</h3>
      <CountCon.Provider value={count}>
        <Ls item={count}/>
      </CountCon.Provider>
      <button onClick={()=>{sonTy('11')}}>子传父</button>
    </div>
  )
}
export default In2;