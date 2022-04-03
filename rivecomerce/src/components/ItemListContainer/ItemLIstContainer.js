import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (props) => {
    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`)
      }

    return (
        <div>
            <h1>
                {props.greetings}
            </h1> 
            <div>
                <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/> 
            </div>      
        </div>
    )
}

export default ItemListContainer