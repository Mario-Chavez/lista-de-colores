const URL_COLOR = import.meta.env.VITE_API_COLOR;

export const obtenerProductos = async () => {
    try {
        const respuesta = await fetch(URL_COLOR);
        const colores = await respuesta.json();
        return colores;
    } catch (error) {
        console.log(error);
    }
};

// export const deleteColorApi = async (id) => {
//     try {
//         const respuesta = await fetch(`${URL_COLOR}/${id}`, {
//             method: "DELETE",
//         });
//         return respuesta;
//         // const productos = await respuesta.json();
//         // return productos;
//     } catch (error) {
//         console.log(error);
//     }
// };
export const createColor = async (color) => {
    try {
        const respuesta = await fetch(URL_PRODUCTOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(color),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
};
