function PizzaList({ pizzaList }) {
    return (
        <ul >
            {
                pizzaList.map(pizza => {
                    return (


                        <li key={pizza.id}>
                            <div >
                                <img src={pizza.image_path} />
                            </div>
                            <br />
                            <br />
                            {pizza.name}: {pizza.description} Price: {pizza.price}
                            <br />
                            <br />
                            <button>Add</button>
                            <br />
                            <br />
                        </li>

                    )
                })
            }
        </ul>
    )
}

export default PizzaList;