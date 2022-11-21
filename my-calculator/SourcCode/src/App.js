import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [result, setResult] = useState("");
    

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const sin = () => {
     const   x1 = parseInt(result)
     const x =  Math.sin(x1*(Math.PI/180))
    setResult (x.toString())
    }
    const cos = () => {
     const   x1 = parseInt(result)
     const x =  Math.cos(x1*(Math.PI/180))
    setResult (x.toString())
    }
    const Tan =()=>{
        const x1 = parseInt(result)
        const x =  Math.tan(x1*(Math.PI/180))
        setResult(x.toString())
    }
    const Absluot  =()=>{
        const x1 = parseInt(result)
        const x = Math.abs(x1)
        setResult(x.toString())
    }
    const Square   =()=>{
        const x1 = parseInt(result)
        const x = Math.sqrt(x1,2)
        setResult(x.toString())
    }
    const Power    =()=>{

        if (result.length===1) {
            setResult(result.concat('^'));
        }
        else {
            const x1 = parseInt(result[0])
        const x2 = parseInt(result[2])
        const x = Math.pow(x1,x2);
        setResult(x.toString())
        }
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1)); // Or -1
    }
    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Error")
        }        
    }
    return (
     

        <div className="App">
        <div className="calc-wrapper">
       
       <div className='row'>
       <form>
        <input className='input-wrapper' type="text" value={result} />
       </form>
       </div>
        <div className="row">
        
        <button className="button-fun" name="Sin" onClick={sin}>sin</button>
        <button className="button-fun" name="Cos" onClick={cos}>cos</button>
        <button className="button-fun" name="Tan" onClick={Tan}>Tan</button>
        <button className="button-fun" name="Square" onClick={Square}>Sqre</button>
        
        </div>

        <div className="row">
        <button name="7" className="button-wrapper" onClick={handleClick}>7</button>
        <button name="8" className="button-wrapper" onClick={handleClick}>8</button>
        <button name="9" className="button-wrapper" onClick={handleClick}>9</button>
        <button className="button-wrapper" name="/" onClick={handleClick}>&divide;</button>
        
        </div>
        <div className="row">
        <button name="4" className="button-wrapper"  onClick={handleClick}>4</button>
        <button name="5" className="button-wrapper" onClick={handleClick}>5</button>
        <button name="6" className="button-wrapper" onClick={handleClick}>6</button>
        <button className="button-wrapper" name="*" onClick={handleClick}>&times;</button>
        </div>
        <div className="row">
        <button name="1" className="button-wrapper"onClick={handleClick}>1</button>
        <button name="2"  className="button-wrapper"onClick={handleClick}>2</button>
        <button name="3" className="button-wrapper" onClick={handleClick}>3</button>
        <button className="button-wrapper" name="+" onClick={handleClick}>+</button>
      
        </div>
        <div className="row">
        <button name="0"  className="button-wrapper" onClick={handleClick}>0</button>
        <button name="." className="button-wrapper" onClick={handleClick}>.</button>
        <button className="button-equal" onClick={calculate} id="result">=</button>
        <button className="button-wrapper" name="-" onClick={handleClick}>&ndash;</button>
        </div>
        <div className="row">
        <button   className="button-clear" onClick={clear} id="clear">Clear</button>
        <button   className="button-clear" onClick={backspace} id="backspace">C</button>
        <button   className="button-fun" name="Power" id='pow' onClick={Power}>Pow</button>
        <button   className="button-fun" name="Absluot " id='abs' onClick={Absluot}>Abs</button>
        </div>
        
       
        </div>
        </div>
          
       
   
    );
}

export default App;
