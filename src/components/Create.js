import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';


function Create() {

  const [data, setData] =useState({
    title: '',
    author: '',
    body: ''
  })
  
  const handlechange = (e)=> {
    const {name, value} = e.target;
    setData ((prev) => {
      return {...prev, [name]:value}
  })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/blogs', data)
      .then(res => {
  
        toast.success('new blog added successfuly',{
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,

        })
      })
      .catch(err => {
        toast.error('An error occurred while adding the blog',{
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
         
        })

      })

  }
  
  return (
   <div>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title"   name="title"  onChange={handlechange}  placeholder="Enter the title" />
      </Form.Group>
      <Form.Group className="mb-3" onChange={handlechange}  controlId="exampleForm.ControlInput1">
        <Form.Label>Author</Form.Label>
        <Form.Control type="author"  name="author"   onChange={handlechange} placeholder="Enter author's name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" name="body" rows={3} onChange={handlechange} />
      </Form.Group>
       <Form.Group>
        <button variant="primary" type="submit">save blog</button> 
        <p>{data.title}</p>
        <p>{data.author}</p>
        <p>{data.body}</p>
        </Form.Group>
        <ToastContainer/>
    </Form>
   </div>
  );
}

export default Create;