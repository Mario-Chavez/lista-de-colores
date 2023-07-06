import { Button, Card } from "react-bootstrap";
import { deleteColor, obtenerColores } from "../helpers/queries";

const CarDeColor = ({ colores, setListadoColor }) => {
    const handleDelet = (id) => {
        deleteColor(id).then(() => {
            obtenerColores().then((res) => {
                setListadoColor(res);
            });
        });
    };
    return (
        <>
            {colores.map((color, index) => (
                <Card
                    border={color.color}
                    className="my-3 cards col-lg-3 col-md-4 m-1 "
                    key={index}
                >
                    <Card.Body>
                        <Card.Title className="text-center mb-3"> Colores </Card.Title>
                        <div className="">
                            <Card
                                bg={color.color}
                                style={{ width: "10rem", height: "10rem" }}
                                className="mx-auto mt-2"
                            ></Card>
                        </div>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-end">
                        <Button
                            className="col-7"
                            variant="danger"
                            type="submit"
                            onClick={() => handleDelet(color._id)}
                        >
                            Borrar
                        </Button>
                    </Card.Footer>
                </Card>
            ))}
        </>
    );
};

export default CarDeColor;
