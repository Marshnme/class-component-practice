import React,{ Component } from "react";


class MainContent extends Component{

    state = {
                pageTitle:"Customers",
                customersCount: 5,
                customers:[
                    {id:1,name:"Josh",phone:null,address:{city:"Columbia"}},
                    {id:2,name:"Clara",phone:"123-123-123",address:{city:"Columbia"}},
                    {id:3,name:"Finn",phone:"123-123-123",address:{city:"Columbia"}},
                    {id:4,name:"Emma",phone:null,address:{city:"Columbia"}},
                ]
            };
    
    // Refresh button onclick
    onRefreshClick = () => {
        this.setState({
            customersCount:"7"
        })
    }

    render(){
        return(
            <div>
                <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
                <span className=" badge bg-secondary m-2">{this.state.customersCount}</span>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((cust) => {
                            return(
                                <tr key={cust.id}>
                                    <td>{cust.id}</td>
                                    <td>{cust.name}</td>
                                    <td>{cust.phone ? (cust.phone) : (<div className="bg-warning text-center p-2">No Phone</div>) }</td>
                                    <td>{cust.address.city}</td>
                                </tr>
                            ) 
                        })}
                    </tbody>
                </table>
            </div>
        ) 
    }
}

export default MainContent;