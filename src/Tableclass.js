import { Component } from "react";

class Tableclass extends Component{
    render(){
        const {userData}=this.props;
        const storeData=userData.map((e,i)=>{
            return(
                <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.profession}</td>
                </tr>
            )
        })
        return(
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Profession</th>
                </thead>
                <tbody>
                    {storeData}
                </tbody>
            </table>
        )
    }
}
export default Tableclass;