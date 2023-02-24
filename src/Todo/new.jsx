import StartFirebase from './index';
import React, { Component } from 'react'
import '../App.css';

import { child, ref, remove, set, update, get } from 'firebase/database';
class New extends Component {
    constructor(props){
        super(props);
        this.state={db:"",
                    username:"",                 
                    fullname:"",                 
                    phonenumber:"",                 
                    dob:"" }
          this.interface= this.interface.bind(this);}
    componentDidMount = () => {
             this.setState({
                db:StartFirebase()
             });}
render() { 
        return (
            <>
                <div className='New-class'>
                    <div className='form-data'>
                    <h1>Control</h1>
                       <label >Enter Username :</label>
                       <input type="text"  id ="userbox" value={this.state.username}
                        onChange={e=>{this.setState({username:e.target.value});}}/>      
                         <br /><br />
                        <label >Enter Fullname :</label>
                      <input type="text"  id ="namebox" value={this.state.fullname}
                       onChange={e=>{this.setState({fullname:e.target.value});}}/>      
                       <br /><br />
                           <label >Enter PhoneNumber :</label>
                    <input type="number"  id ="phonebox" value={this.state.phonenumber}
                       onChange={e=>{this.setState({phonenumber:e.target.value});}}/>      
                        <br /><br />
                        <label >Enter DOB :</label>
                     <input type="date"  id ="datebox" value={this.state.dob}
                          onChange={e=>{this.setState({dob:e.target.value});}}/>      
                            <br /><br />   
                       <button id='addBtn' onClick={this.interface}>add data</button>                          
                       <button id='updataBtn' onClick={this.interface}>Update data</button>                          
                       <button id='deleteBtn' onClick={this.interface}>Delete data</button>                          
                       <button id='selectBtn' onClick={this.interface}>Select data</button>
                    </div>
                </div>                          
            </>
        );
    }
    interface(event){
        const id =event.target.id;
        if(id==='addBtn'){
            this.insertData();
        }else if(id==='updataBtn'){
            this.updateData();
        }else if(id==='deleteBtn'){
          this.deleteData();
        }
        else {
            this.selectData();
        
        }
    }
    getAllInputs(){
        return {
            username:this.state.username,
            name:this.state.fullname,
            phone:Number(this.state.phonenumber),
            dob:this.state.dob,
        }
    }

    insertData(){
        const db = this.state.db;
        const data = this.getAllInputs();
        set(ref(db, "data/"+data.username ),{
            fullname:data.name,
            phonenumber:data.phone,
            dataofbirth:data.dob,
        }).then(()=>{alert("date was added seccessfully!")})
        .catch((error)=>{alert("erorr somthing"+error)});

    }
    updateData(){
        const db = this.state.db;
        const data = this.getAllInputs();
        update(ref(db, "data/"+data.username ),{
            fullname:data.name,
            phonenumber:data.phone,
            dataofbirh:data.dob,
        }).then(()=>{alert("date was Updated seccessfully")})
        .catch((error)=>{alert("erorr somthing"+error)});

    }
    deleteData(){
        const db = this.state.db;
        const username = this.getAllInputs().username;
        remove(ref(db, "data/"+ username ))
        .then(()=>{alert("date was delete seccessfully")})
        .catch((error)=>{alert("erorr somthing"+error)});

    }
    selectData(){ 
        const dbref = ref(this.state.db);
        const username = this.getAllInputs().username;
        get(child(dbref, "data/"+ username )).then((snapshot)=>{
            if (snapshot.exists()){
                this.setState({
                    fullname:snapshot.val().fullname,
                    phonenumber:snapshot.val().phonenumber,
                    dob:snapshot.val().dataofbirth
                })
                alert("date was updated seccessfully")
            }else{ alert("no data found")}
        }).catch((error)=>{alert("erorr somthing"+error)});
        

    }
}
 
export default New;
