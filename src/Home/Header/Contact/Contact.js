import React, {useState} from 'react'
import Header from '../Header'
import Style from '../CSS/Style.css'

function Contact() {

    const [state, setState] = useState({});
    

    const updateState = (e) => {
        e.preventDefault();
        state[e.target.id] = e.target.value;
        setState({...state});
    }

    const getData = (e) => {
        e.preventDefault();
        console.log(state);
        localStorage.setItem("John_Data", JSON.stringify(state));
        const myData = (localStorage.getItem("John_Data"));
        console.log(myData);
        }

        return(
            <div>
                <Header />
                This is the Contact component.

<h1>Please Fill in the form</h1>

<p>Name: <input type="text" className="form" id="brand" onChange = {updateState}/></p>
<p>Email: <input type="email" className="form" id="color" onChange = {updateState}/>  </p>
<p>Message: <input type="text" className="form" id="year" onChange = {updateState}/> </p>

{/* <h3 style={{color: 'navy'}}>{carBrand}, {color}, from {year}</h3> */}


<button onClick={getData}>GetData</button>


<h4 style={{color: 'navy'}}>{state.brand} {state.color} {state.year}</h4>

            </div>
        )
    }

export default Contact