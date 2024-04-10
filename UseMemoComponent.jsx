import React, { useMemo, useState } from 'react'

const UseMemoComponent = () => {
   let [count1,setCount1]=useState(0)
   let [count2,setCount2]=useState(0)
    let obj = {
        color:"white",
        backgroundColor:"blue",
        padding:"8px 20px",
        borderRadius:"10px",
        fontSize:"30px",
        textTransform:"uppercase",
        fontWeight:"700"
        }

        let obj2 = {
            fontSize:"30px",
            marginLeft:"20px"
        }
        let handleCounter1=()=>{
            setCount1(count1+1)
        }
        let handleCounter2=()=>{
            setCount2(count2+1)
        }

        let oddEven = useMemo(()=>{
            let i = 0;
            while(i<1000000000) i++
             return count1%2
        },[count1])
  return (
    <>
        <button style={obj} onClick={handleCounter1}>Counter1 - {count1}</button>
        <span style={obj2}>

        {oddEven?"Odd":"Even"}
        
        </span>
        <br /><br />
        <button style={obj} onClick={handleCounter2}>Counter2 - {count2}</button>
    </>
  )
}

export default UseMemoComponent