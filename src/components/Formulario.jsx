import { Button, Card, Form } from "react-bootstrap";
// import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";
import CarDeColor from "./CardColores";

const Formulario = () => {
    const [selectColor, setSelectColor] = useState("");
    const coloresEnLocalStorage = JSON.parse(localStorage.getItem("misColores")) || [];
    const [listadoDeColor, setListadoColor] = useState(coloresEnLocalStorage);

    useEffect(() => {
        localStorage.setItem("misColores", JSON.stringify(listadoDeColor));
    }, [listadoDeColor]);

    const handleNuevoColor = () => {
        setListadoColor([...listadoDeColor, selectColor]);
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
                                <Form.Select
                                    onChange={(e) => setSelectColor(e.target.value)}
                                >
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
                        onClick={handleNuevoColor}
                    >
                        Enviar
                    </Button>
                </Card.Footer>
            </Card>
            <section className="row justify-content-between mt-5">
                <CarDeColor colores={listadoDeColor} />
            </section>
        </section>
    );
};

export default Formulario;
