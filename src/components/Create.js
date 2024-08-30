import Form from 'react-bootstrap/Form';

function Create() {
  return (
   <div>
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Enter the title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author</Form.Label>
        <Form.Control type="email" placeholder="Enter author's name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" name='body' rows={3} />
      </Form.Group>
       <Form.Group>
        <button variant="primary" type="submit">save blog</button> 
        </Form.Group>
    </Form>
   </div>
  );
}

export default Create;