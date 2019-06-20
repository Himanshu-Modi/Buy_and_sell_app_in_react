import React from 'react';
import { Navbar, Nav,Form,Button,ButtonGroup,Carousel,Modal,Row,Col} from '../node_modules/react-bootstrap';
import {List,Grid,Header,Segment,Container} from 'semantic-ui-react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function MyVerticallyCenteredModal({show,onHide})
 {
return (<div>
<Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={()=>{onHide()}} >Close</Button>
        </Modal.Footer>
      </Modal>
</div>

);

}




/*function MyVerticallyCenteredModal(props) {
   console.log(props);
    return (<div>
        <Modal
        show={props.modal1Show}
        onHide={props.onHide}
         size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() =>{props.onHide()}}>Close</Button>
        </Modal.Footer>
      </Modal>
      
      </div>
    );
  }
  */


  export default MyVerticallyCenteredModal;