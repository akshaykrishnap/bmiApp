
import './App.css';
import { Row, Col } from 'react-bootstrap';
import React,{useState} from 'react';




function App() {

  const [weight,setWeight] = useState(0);
  const[height,setHeight] = useState(0);
  const [bmi,setBMI]= useState('');
  const [message,setMessage] = useState('');
  const [mess1, setMess1]= useState('')

/* js code */



let CalcBMI = (event) =>{
  event.preventDefault();
  if(weight===0 || height===0 ){
    alert('Please Enter The Valid Data')
  }
  else{
    let bmi =(weight/(height*height))
    setBMI(bmi.toFixed(1))

  if (bmi<25) {
    setMessage('Your Are Underweight ')
    setMess1('Advice:- Eat healthy properly, visit a dietician and Excercise')
    
  }
  else if (bmi>=25 && bmi<=30) {
    setMessage('Your Are Healthy')
    setMess1('Advice:- Eat healthy properly and Excercise')
  }
  else{
    setMessage('Your Are Overweight')
    setMess1('Advice:- Eat properly, visit a dietician and Excercise')
  }

  }
}


//img



// reload
let reload =()=>{
  window.location.reload()
}


  return (
    <>

      <Row>



        <Col>

          <div id='app' className="row">
            <div className="col-md-3"></div>

            <div id='app1' className=" bg-light col-md-5 rounded  justify-content-center text-align-center align-items-centre ">
              <h1 id='app2' className='bg-light ' style={{ color: 'midnightblue' }}>BMI Calculator</h1><br />
          
              <div >
              <form className='bg-light' onSubmit={CalcBMI} >
                <div className='d-flex bg-light'>
                  <label className='bg-light' style={{ color: 'midnightblue' }} > Your Weight in Kilograms(kg) </label>
                  <input className='ms-2 form-control w-25' type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder='Enter Your Weight in Kilograms' />
                </div>
                <br />
                <div className='d-flex bg-light '>
                  <label className='bg-light' style={{ color: 'midnightblue' }} > Your Height in Meters(m) </label>
                  <input type="text" className='ms-2 form-control w-25' value={height} onChange={(e)=>setHeight(e.target.value)} placeholder='Enter Your Height in Inches ' />
                </div>
                <br />
                <div className='bg-light '>
                  <button className='btn btn-primary m-2' type='submit'>Submit</button>
                  <button className='btn btn-danger m-2' onClick={reload} type='submit'>Clear</button>
                </div>

              
      
                  <div className='border rounded w-30 bg-warning p-5  justify-content-center text-align-center align-items-centre'>
                  <h3 className='bg-transparent'>Your BMI Value is: {bmi}</h3>
                 
                 <p className='bg-transparent'>  {message}</p>
                 <p className='bg-transparent'>{mess1}</p>
                  

                  </div>
                  
               

              </form>
            </div>

            </div>
          
            <div className="col-md-3"></div>
          </div>

        </Col>



      </Row>

    </>
  )
}

export default App
