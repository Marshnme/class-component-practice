import React,{Component} from "react";

class Product extends Component{


    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="text-muted">#{this.props.product.id}</div>
                </div>
            </div>
        )
    }
}

export default Product;