import { Box } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = (props) => {
    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`)
      }

    return (
        <Box>
            <h1>
                {props.greetings}
            </h1> 
            <Box>
                <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/> 
            </Box>
            <ItemList></ItemList>      
        </Box>
    )
}

export default ItemListContainer