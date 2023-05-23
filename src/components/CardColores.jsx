import { Button, Card, } from "react-bootstrap";
// import ItemTarea from "./ItemTarea";

const CarDeColor = ({colores}) => {
    
    return (
        <Card className="my-5 cards">
            <Card.Body >
                <Card.Title className="text-center mb-3">Nombre De Color </Card.Title>
                    <div className="">
                        <Card
                            bg="red"
                            style={{ width: '10rem', height:"10rem" }}
                            className="mx-auto mt-2"
                            >
                        </Card>
                 </div>
                
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end ">
                        <Button className="col-5">Enviar</Button>
            </Card.Footer>
        </Card>
        
        );
    };
    
    /*   <ListGroup>
          {listaTarea.map((tarea,index)=> <ItemTarea key={index}  tarea ={tarea} borrarTarea ={borrarTarea} ></ItemTarea>)}
      </ListGroup> */
export default CarDeColor;