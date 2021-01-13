import React, {useState} from 'react'

function Form() {


    const [state, setState] = useState({});
    

    const updateState = (e) => {
        e.preventDefault();
        state[e.target.id] = e.target.value;
        setState({...state});
    }

    const getData = (e) => {
        e.preventDefault();
        console.log(state);
        localStorage.setItem("John1_Data", JSON.stringify(state));
        const myData = (localStorage.getItem("John1_Data"));
        console.log(myData);
        }

    
    return (

<div>
<h3 style={{color: 'navy'}}>{state.username}, {state.fname}, {state.city}, {state.gender}</h3>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="username" onChange = {updateState}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Fname" aria-label="Fname" aria-describedby="basic-addon1" id="fname" onChange = {updateState}/>
</div>

<div class="input-group mb-3">

<label for="cars">City:</label>

<select name="city" id="city" onChange = {updateState}>
  <option>-select city-</option>
  <option value="Paris">Paris</option>
  <option value="Lahore">Lahore</option>
  <option value="Berlin">Berlin</option>
  
</select>

</div>


<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="gender" value="male" onChange = {updateState}/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="gender" value="female" onChange = {updateState}/>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>

<button onClick={getData}>GetData</button>

</div>

)}

export default Form
