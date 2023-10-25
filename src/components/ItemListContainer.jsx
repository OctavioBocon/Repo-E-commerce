import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div>{greeting}</div>
        
        const datos = [
            { id: "1", name: "Producto A", description: "Descripcion del producto A", stock: 10 },
            { id: "2", name: "Producto B", description: "Descripcion del producto B", stock: 20 },
            { id: "3", name: "Producto C", description: "Descripcion del producto C", stock: 30 },
            { id: "4", name: "Producto D", description: "Descripcion del producto D", stock: 40 },
        
        ]
        
            const mostrarProductos = new Promise((resolve, reject) => {
                if (mostrarProductos.length > 0) {
                setTimeout(() =>{
                    resolve(productos)
                }, 2000)
                }
                }   
                else{
                    reject(new Error("No se encontraron productos"))
                }
            )

                return (
            <>
                {productos.map((P)) => {
                return(
                    <div key={p.id} 
                    <h1>Producto: {p.name}</h1>
                    <p>Descripcion : {p.descripcion}</p>
                    <p>Stock: {p.stock}</p>        
                    div/>
                )
            }
        }
        </>
    )        

}

export default ItemListContainer