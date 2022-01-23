import React,{ Component } from "react";


class CustomerList extends Component{

    state = {
                pageTitle:"Customers",
                customersCount: 5,
                customers:[
                    {id:1,name:"Josh",phone:null,address:{city:"Columbia"},photo:"https://picsum.photos/id/1010/60"},
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


            // DEMONSTRTATION OF CONDITIONALLY RENDERING STYLES
    // customerNameStyle= (custName) =>{
    //         if(custName.startsWith("E")){
    //             return "green-highlight border-start"
    //         }else if(custName.startsWith("J")){
    //             return "darkgreen-highlight border-start"
    //         }else{
    //             return ""
    //         }
    //     }


  
    getCustomerInfo = () =>{
        return(
            this.state.customers.map((cust,index) => {
                return(
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>
                            <img src={cust.photo} alt="Customer"></img>
                            <div>
                                <button className="btn btn-sm btn-secondary" onClick={() => {
                                    this.onChangePictureClick(cust,index)
                                }}>Change Picture</button>
                            </div>
                        </td>
                        <td>{cust.name}</td>
                        <td>{this.getPhoneToRender(cust)}</td>
                        <td>{cust.address.city}</td>
                    </tr>
                ) 
            })
        )
    }

    // updates picture on click
    onChangePictureClick = (cust,index) => {

            // grabs entire array of customers
            let custArr = this.state.customers;
            // selects the single customer with index and updates only the photo
            custArr[index].photo = "https://picsum.photos/id/104/60"
            // updates customer array with new picture
            this.setState({
                customers:custArr
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

export default CustomerList;