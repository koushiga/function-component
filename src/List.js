const List=(props)=>{
    const {userFruit}=props
    const storeFruit=userFruit.map((k)=>{
        return(
                <li>{k.fname}<span>{k.price}</span></li>
        )
    })
    return(
        <div className="list">
            <h2>Fruits</h2>
        <ul>
            {storeFruit}
        </ul>
        </div>
    )
}

export default List;