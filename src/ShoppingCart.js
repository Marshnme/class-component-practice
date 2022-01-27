import React,{Component} from "react";
import Product from "./Product";

class ShoppingCart extends Component{

    constructor(props){
        super(props)
        this.state={
        products:[
            {id:1,productName:"Iphone",price:200,quantity:5},
            {id:2,productName:"Android",price:200,quantity:2},
            {id:3,productName:"Speaker",price:200,quantity:6},
            {id:4,productName:"Charger-Iphone",price:200,quantity:1},
            {id:5,productName:"Charger-Android",price:200,quantity:7},
            {id:6,productName:"Headphones",price:200,quantity:10},
    ]}
    }

    


    handleIncrement = (prod,max) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(prod)
        if(allProducts[index].quantity < max){
            allProducts[index].quantity++

            this.setState({
            products:allProducts
        })
        }
    }


    handleDecrement = (prod,min) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(prod)
        if(allProducts[index].quantity != min){
            allProducts[index].quantity--

            this.setState({
            products:allProducts
        })
        }
    }

    handleDelete = (prod) =>{
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(prod)
        if(window.confirm("Are you sure you want to delete?"))
        allProducts.splice(index,1)

        this.setState({
            products:allProducts,
        })
    }


    render(){
        return(
            <div className="container-fluid">
                <h4>Shopping Cart</h4>

                <div className="row">
                    {this.state.products.map((product) => {
                        return <Product key={product.id} product={product} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleDelete={this.handleDelete}>
                                <button className="btn btn-primary">Buy Now</button>
                            </Product>
                    })}
                </div>
            </div>
        )
    }

    // runs after  constructor and render method. Good for HTTPS requests
    componentDidCatch(){

    }
}

export default ShoppingCart;