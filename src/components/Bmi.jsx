import React, { useState } from "react";
import './Bmistyle.css'

function Bmi(){

    const[weight,setWeight]=useState("");
    const[height,setHeight]=useState("");
    const[bmi,setBmi]=useState(null);
    const[message,setMessage]=useState("");
    const[display,setDisplay]=useState(false)

    function handleCalculate(){
        if(weight && height){
            //let htsquare=Math.pow(Number(height),2);
            let ht=Number(height)/100;
            //console.log(ht);
            let htsquare=Math.pow(ht,2);
            //console.log(htsquare);
            let val=(Number(weight))/htsquare;
            setBmi(val.toFixed(2));
            setDisplay(true);

            if(val<18.5)
            {
                setMessage("Result: UnderWeight");
            }
            else if(val>=18.5 && val<=24.9){
                setMessage("Result: Healthy Weight")
            }
            else if(val>=25 && val<=29.9)
            {
                setMessage("Result: OverWeight")
            }
            else
            {
                setMessage("Result: Obesity")
            }
        }
    else
    {
        alert("Enter both values");
    }
    }

    return(
        <>
            <div className="container">
                <header>
                    BMI Calculator
                </header>
                <form>
                    <label for="weight">Weight (in kgs)</label><br></br>
                    <input type="text" className="weight" placeholder="Enter weight" 
                    value={weight}
                    onChange={(e)=>setWeight(e.target.value)}>
                    </input><br></br>
                    <label for="height">Height (in cms)</label><br></br>
                    <input type="text" className="height" placeholder="Enter height"
                    value={height}
                    onChange={(e)=>setHeight(e.target.value)}>
                    </input><br></br>
                </form>
                <div className="btnClass">
                    <button className="calBtn" style={{cursor:'pointer'}} onClick={handleCalculate}>Calculate</button>
                </div>
                {display &&(
                    <div>
                        <p style={{textAlign:"center",color:'beige'}}>BMI: {bmi}</p>
                        <p style={{textAlign:"center",color:'beige'}}>{message}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Bmi;