import React from 'react'
import Item from './Item'
const ItemList = () => {
    return (
    <> 
        {productos.map((p) =>{
            return (
                <Item 
                    key={p.id}
                    id={p.id}
                    nombre={p.nombre}
                    description={p.description}
                    stock={p.stock}
            />
        )
            })
        }
        </>
        )
}

export default ItemList