import { Button, Card, Form } from "react-bootstrap";
// import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";
import CarDeColor from "./CardColores";
import { createColor, obtenerColores } from "../helpers/queries";

const Formulario = () => {
    const [selectColor, setSelectColor] = useState("");

    const [listadoDeColor, setListadoColor] = useState([]);

    useEffect(() => {
        obtenerColores().then((res) => {
            setListadoColor(res);
        });
    }, []);
    const handleColorChange = (e) => {
        setSelectColor(e.target.value);
    };

    const handleSubmit = () => {
        const colorNuevo = { color: selectColor };

        createColor(colorNuevo).then(() => {
            obtenerColores().then((res) => {
                setListadoColor(res);
            });
        });
    };

    return (
        <section>
            <Card className="cards">
                <Card.Body>
                    <Card.Title className="text-center mb-5">
                        Administrar Colores{" "}
                    </Card.Title>
                    <div className="row">
                        <div className="col-3">
                            <Card
                                bg={selectColor}
                                style={{ width: "10rem", height: "10rem" }}
                                className="mb-0"
                            ></Card>
                        </div>
                        <div className="col">
                            <Card.Text className="mt-5">
                                <Form.Select onChange={handleColorChange}>
                                    <option>Sellecione un color </option>
                                    <option value="primary">Azul</option>
                                    <option value="secondary">Gris</option>
                                    <option value="success">Verde</option>
                                    <option value="danger">Rojo</option>
                                    <option value="warning">Amarillo</option>
                                    <option value="info">Celeste</option>
                                    <option value="light">Blanco</option>
                                    <option value="dark">Negro</option>
                                </Form.Select>
                            </Card.Text>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end ">
                    <Button
                        className="col-3"
                        variant={selectColor}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Enviar
                    </Button>
                </Card.Footer>
            </Card>
            <section className="row justify-content-between mt-5">
                <CarDeColor colores={listadoDeColor} setListadoColor={setListadoColor} />
            </section>
        </section>
    );
};

export default Formulario;
