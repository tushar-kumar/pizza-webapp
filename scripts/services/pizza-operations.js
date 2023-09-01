import makeNEtworkCall from "./api-client.js";
import { URL } from "../utils/config.js";
import Pizza from "../models/pizza-model.js";

const pizzaOperations = {
    pizzas:[],
    searchPizza(pizzaId){
        const pizzaObject = this.pizzas.find((pizza)=>pizza.id==pizzaId);
        pizzaObject.isAddedInCart = true;
    },
    async getPizzas() {
        
        // Api CLient (object (Pizza))
        const data = await makeNEtworkCall(URL);
        const pizzaJSON = data['Vegetarian'];

        const pizzas = pizzaJSON.map(singlePizza =>{
            const pizzaObject = new Pizza(singlePizza.id,
                singlePizza.name,
                singlePizza.price,
                singlePizza.assets.product_details_page[0].url,
                singlePizza.menu_description);
                return pizzaObject;
        })
        this.pizzas = pizzas;
        return pizzas;
        // Data Map to Model

        // return Model
    } 
    
    

}

export default pizzaOperations;