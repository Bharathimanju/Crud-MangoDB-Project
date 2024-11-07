import './App.css';
import { useState ,useEffect} from 'react';
import Axios from 'axios';

function CrudApp() {
  const[foodName, setFoodName]=useState('');
  const[description,setDescription]=useState('');

  //fetch data
  const[foodList,setFoodList]=useState([]);
  //Edit
  const[newFoodName, setNewFoodName]=useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/read')
    .then((response) => {
      setFoodList(response.data);
    })

  }, [])

  const addFoodData = () =>{
    Axios.post("http://localhost:3001/insert",
    {
      foodName:foodName, 
      description:description
    });
  };

const UpdateFoodData = (id) =>{
    Axios.put("http://localhost:3001/update", {
      id:id, newFoodName:newFoodName})
  }

  const DeleteData = (id) =>{
    Axios.delete(`http://localhost:3001/delete/${id}`)
      
  };

  return (
    <div className="App"><br/>
      <h1 style={{color:"teal"}} >Manage Travel Destinations</h1><br></br>
      <input type="text" placeholder="Destination" required 
      onChange={(event) => {setFoodName(event.target.value)}}/>
      <br></br><br></br>
      <input type="text" placeholder="Description" required
     onChange={(event) => {setDescription(event.target.value)}}/>
      <br></br><br></br>
      <button onClick={addFoodData}className='but'>Submit</button>
      <br></br><br></br>
      <table>
        <h3 style={{color:"teal"}}>Travel Destinations</h3>
        <tr>
          <th>Destination</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
       
          {foodList.map((val,key) => {
            return    <tr>
       <td>{val.foodName}</td>
       <td>{val.description}</td>  
       <td>
        <input type="text" placeholder="update Destination"
        onChange={(event) => {
          setNewFoodName(event.target.value);
        }}></input>
        <button onClick={()=> UpdateFoodData(val._id)} className="btn btn-warning" style={{marginLeft:"4px"}}>Edit</button>
        </td>
        <td>
          <button onClick={()=> DeleteData(val._id)} className="btn btn-danger">Delete</button>
          </td> 
        
  
        </tr>
          })}
      </table>
    </div>
  );
}

export default CrudApp;

