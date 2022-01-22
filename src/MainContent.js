import React,{ Component } from "react";


class MainContent extends Component{

    state = {
                pageTitle:"Customers",
                customersCount: 5,
                customers:[
                    {id:1,name:"Sosh",phone:null,address:{city:"Columbia"},photo:"https://picsum.photos/id/1010/60"},
                    {id:2,name:"Clara",phone:"123-123-123",address:{city:"Columbia"},photo:"https://picsum.photos/id/1011/60"},
                    {id:3,name:"Finn",phone:"123-123-123",address:{city:"Columbia"},photo:"https://picsum.photos/id/1025/60"},
                    {id:4,name:"Emma",phone:null,address:{city:"Columbia"},photo:"https://picsum.photos/id/1014/60"},
                ]
            };
    
    // Refresh button onclick
    onRefreshClick = () => {
        this.setState({
            customersCount:"7"
        })
    }

    getPhoneToRender = (cust) => {
       return cust.phone ? (cust.phone) : (<div className="bg-warning text-center p-2">No Phone</div>) 
    }

    getCustomerInfo = () =>{
        return(
            this.state.customers.map((cust) => {
                return(
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td><img src={cust.photo} alt="Customer"></img></td>
                        <td style={{backgroundColor:(cust.name.startsWith("S")) ? "green" : "red"}}>{cust.name}</td>
                        <td>{this.getPhoneToRender(cust)}</td>
                        <td>{cust.address.city}</td>
                    </tr>
                ) 
            })
        )
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
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerInfo()}
                    </tbody>
                </table>
            </div>
        ) 
    }
}

export default MainContent;