import React, {useState} from "react"
//import {randomNumber}from "../utils/randomNumber"
import PropTypes from "prop-types" 
function Lottery({defaulNumber,onRandomNuber}){

const [lottery, setlottery] = useState(defaulNumber)

  const handleRandomLottery = ()=>{
    /*const newlottery =[
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber()
    ]*/
    const newlottery = Array.from({length:6},()=>{
      return onRandomNuber()
    })
    setlottery(newlottery)
  }
    console.log()



    return <>
    <div className='center--random'>
        <div>
    {
      lottery.map((item,index)=>{
        return(
          <span key={index}>{item}</span>
        )
      })
    }
    </div>
        <div>
            <button onClick={()=>handleRandomLottery()}>Random</button>
        </div>
    </div>
</>
    

}
Lottery.propTypes ={
    defaulNumber: PropTypes.arrayOf(PropTypes.number).isRequired,
    onRandomNuber:PropTypes.func.isRequired,
}
export default Lottery