import React, {Component} from 'react'
import StartFirebase from './../Todo/index';
import {ref, onValue} from "firebase/database";
const db =StartFirebase();
class FetchData extends Component {
    constructor(){
        super();
        this.state={
            tableData:[]
        }
    } 

    componentDidMount = () => {
      const dbref = ref(db,"data");
      onValue(dbref,(snapshot)=>{
        let records =[];
        snapshot.forEach(childsnapshot=>{
            let keyName= childsnapshot.key;
            let data = childsnapshot.val();
            records.push({"key":keyName,"data":data}); 
        });
        this.setState({tableData:records});

      })
    }
    
    render() { 
        return (
            <table>
              <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Fullname</th>
                    <th>Phone Number</th>
                    <th>Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.tableData.map((rowd,index)=>{
                    return(
                        <tr>
                            <td>{index}</td>
                            <td>{rowd.key}</td>
                            <td>{rowd.data.fullname}</td>
                            <td>{rowd.data.phonenumber }</td>
                            <td>{rowd.data.dataofbirth}</td>

                         </tr>
                    )
                  })}
              </tbody>

            </table>
        );
    }
}
 
export default FetchData; 
