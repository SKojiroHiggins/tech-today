import React from 'react';
const inventory = require('./inventory.json');

class Inventory extends React.Component {
    constructor() {
        // Required step: always call the parent class' constructor
        super();

        // Set the state directly. Use props if necessary.
        this.state = {
            inventory: inventory.inventory,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
       const cars = document.getElementById("cars").value
       console.log(cars)
    }
    
    
    
    
    
    render() {
        return (
            <div>
                <h1 className="JDM">Inventory</h1>
                <form>
                    <label for="cars">Choose Vehicle Type: </label>
                    <select onChange={this.handleChange} name="cars" id="cars">
                        <option id="Coupe" value="Coupe">1</option>
                        <option id="SUV" value="SUV">2</option>
                        <option id="Sedan" value="Sedan">3</option>
                    </select>
                    <input type="submit" value="submit" onClick={this.handleSubmit}/>
                </form>
                <div className="parent">
                    {this.state.inventory.map((item, key) => {
                        return (
                            <article className="child">
                                <img className="images" src={item.image} />
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <h5>Offer: ${item.price}</h5>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Inventory;