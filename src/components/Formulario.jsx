import { Button, Card, Form } from "react-bootstrap";
// import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";
import CajaDeColor from "./CajaDeColor";



const Formulario = () => {
    
    const [tarea, setTarea] = useState("");
    const datosDelLocalStorage = JSON.parse( localStorage.getItem('myTarea')) || [];
    const [listadoTareas, setListadoTareas] = useState(datosDelLocalStorage);
    
 const color = [ 'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',]

    useEffect(() => {
      localStorage.setItem("myTarea",JSON.stringify(listadoTareas))
    }, [listadoTareas])
    
    
    const handlerSubmit = (e) => {
       e.preventDefault(); 
       !tarea == ""
       ?
            (setListadoTareas([...listadoTareas,tarea]),
            setTarea(""))
        :
            alert("debes agregar tarea");
    };
    
    const borrarTarea = (nombreTarea)=>{
    let arregloFiltrado = listadoTareas.filter((itemTarea)=>itemTarea !== nombreTarea)
    setListadoTareas(arregloFiltrado)
    }

    return (
        <section>
                               
            <Card>
            <Card.Body>
                <Card.Title className="text-center mb-5">Administrar Colores </Card.Title>
                    <div className="row">
                    <div className="col-3">
                    <CajaDeColor/>
                    </div>
                    <div className="col">
                        <Card.Text className="mt-5">
                        <Form.Select aria-label="Default select example">
                            <option>Sellecione un color </option>
                            <option value="Primary">Azul</option>
                            <option value="Secondary">Gris</option>
                            <option value="Success">Verde</option>
                            <option value="Danger">Rojo</option>
                            <option value="Warning">Amarillo</option>
                            <option value="Info">Celeste</option>
                            <option value="Light">Blanco</option>
                            <option value="Dark">Negro</option>
                        </Form.Select>
                        </Card.Text>
                    </div>
                    </div>
            </Card.Body>
             <Card.Footer className="d-flex justify-content-end ">
                        <Button className="col-3" variant="primary">Enviar</Button>
             </Card.Footer>
            </Card>
           
        </section>
    );
};
 

export default Formulario;