import React,{Component} from "react";
import Product from "./Product";

class ShoppingCart extends Component{

    constructor(props){
        super(props)
        this.state={
        products:[
            
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
        if(allProducts[index].quantity !== min){
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
    componentDidMount = async() => {

        let response = await fetch("http://localhost:5000/products",{method:"GET"});
        let prods = await response.json()
        this.setState({products:prods})
    };
    
    // runs after didMount and only when changes are made
    componentDidUpdate(prevProps,prevState){
    
    };

    // runs when current component is being deleted from memory. ex. moving to another hyperlink or deleting specific product
    componentWillUnmount(){

    };

    componentDidCatch(error,info){
        console.log("error", error,info)
        localStorage.lastError = `${error}/n${JSON.stringify(info)}`
    }
}


export default ShoppingCart;