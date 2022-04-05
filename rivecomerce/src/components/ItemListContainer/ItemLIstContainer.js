import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"


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
            <ItemList></ItemList>      
        </div>
    )
}

export default ItemListContainer