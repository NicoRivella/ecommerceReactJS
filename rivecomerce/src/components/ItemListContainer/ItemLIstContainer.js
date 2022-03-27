const ItemListContainer = (props) => {
    console.log (props.greetings)
    return (
        <h1>
            {props.greetings}
        </h1>        
    )
}

export default ItemListContainer