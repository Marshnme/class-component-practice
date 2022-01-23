import React,{Component} from "react";
import Product from "./Product";

class ShoppingCart extends Component{

    state={
        products:[
            {id:1,productName:"Iphone",price:200,quantity:5},
            {id:2,productName:"Android",price:200,quantity:2},
            {id:3,productName:"Speaker",price:200,quantity:6},
            {id:4,productName:"Charger-Iphone",price:200,quantity:1},
            {id:5,productName:"Charger-Android",price:200,quantity:7},
            {id:6,productName:"Headphones",price:200,quantity:10},
    ]}
    render(){
        return(
            <div>
                <h4>Shopping Cart</h4>

                <div>
                    {this.state.products.map((product) => {
                        return <Product key={product.id} product={product}/>
                    })}
                </div>
            </div>
        )
    }
}

export default ShoppingCart;