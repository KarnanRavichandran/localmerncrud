import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { FormLabel,TextField,Box, Button,Checkbox  } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const BookDetails = () => {
  const history = useNavigate();
  const [inputs,setInputs] =useState({})
  const id = useParams().id;
  const [checked,setChecked] = useState(false);
  console.log(id);
      useEffect(()=>{
        const fetchHandler= async () =>{
          await axios.get(`http://localhost:5000/books/${id}`).then((res)=>res.data).then(data=>setInputs(data.book))
        };

        fetchHandler()
      },[id]);
 
      const sendRequest = async() =>{
         await axios.put(`http://localhost:5000/books/${id}`, {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
          image: String(inputs.image),
          available: Boolean(checked)
      }).then(res => res.data);
  }

      const handleSubmit =(e) =>{
        e.preventDefault();
        sendRequest().then((data)=>history('/books'));
      }

      const handleChange = (e)=>{
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name] : e.target.value,
      }));
      }
      console.log(inputs)
  return (
    <div>
      {inputs && (
      <form onSubmit ={handleSubmit}>
        <Box display="flex"
         flexDirection="column" 
         justifyContent={'center'}
          maxWidth={700} 
          alignItems ={"center"}
          alignSelf={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={10}
          >
     <FormLabel>Name</FormLabel>
     <TextField  value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant='outlined' name ="name" />

     <FormLabel>Author</FormLabel>
     <TextField value={inputs.author} onChange={handleChange}   margin="normal" fullWidth variant='outlined' name ="author" />

     <FormLabel>Description</FormLabel>
     <TextField  value={inputs.description} onChange={handleChange}  margin="normal" fullWidth variant='outlined' name ="description" />

     <FormLabel>Prize</FormLabel>
     <TextField  value={inputs.price} onChange={handleChange}  margin="normal" type="number" fullWidth variant='outlined' name ="price" />

     <FormLabel>Image</FormLabel>
     <TextField  value={inputs.image} onChange={handleChange}  margin="normal"  fullWidth variant='outlined' name ="image" />
     <FormControlLabel control={<Checkbox checked ={checked} />} label="available" onChange ={()=>setChecked(!checked)} />


     <Button variant='contained' fullWidth type ="submit">Upadte Book</Button>
     </Box>

    </form>
    )}</div>
  )
}

export default BookDetails