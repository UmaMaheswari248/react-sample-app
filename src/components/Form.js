import React,{Component} from 'react';
import Header from './Header';
import { FormDetails } from './FormDetails';
import { Redirect } from 'react-router-dom';
export default class Form extends Component{
    constructor(){
        super()
        this.state={
            'initial_val':'',
            'Name':'',
            'dob':'',
            'address':'',
            'gender':'',
            'checked':false,
            'qualification':'',
            'tcheck':false,
            'echeck':false,
            'hcheck':false,
            'mcheck':false,
            'fcheck':false,
            'lang':[
                {
                    'id':1,'name':'Telugu','checked':false
                },
                {
                    'id':2,'name':'English','checked':false
                },
                {
                    'id':3,'name':'Hindi','checked':false
                }
            ],
            'data':[
                {
                    'Name':'',
                    'dob':'',
                    'address':'',
                    'gender':'',
                    'qualification':'',
                    'lang':[

                    ]
                }
            ],
            errors:{
                'nerror':'',
                'derror':'',
                'aerror':'',
                'gerror':'',
                'qerror':'',
                'lerror':''

            },
            'isSubmitted':false
        }
    }
    handleChange=(event)=>{
        let value=event.target.value
        let mcheck=this.state.mcheck
        let fcheck=this.state.fcheck
        if(event.target.name === 'gender'){
            if(event.target.value === 'male')
                mcheck=event.target.checked
            else
                fcheck=event.target.checked
        }
        this.setState(
            {
                [event.target.name]:event.target.value,
                errors:{
                    'nerror':'',
                    'derror':'',
                    'aerror':'',
                    'gerror':'',
                    'qerror':'',
                    'lerror':''
                },
                'mcheck':mcheck,
                'fcheck':fcheck
            }
        )
        this.setState({
            isSubmitted:false
        })
    }
    handleCheckBox=(event)=>{
        let langs = this.state.lang
        let tcheck=this.state.tcheck
        let hcheck=this.state.hcheck
        let echeck=this.state.echeck
        langs.forEach(lang =>{
            if (lang.name === event.target.value){
            lang.checked =  event.target.checked
            if(lang.name === 'Telugu'){
                tcheck=event.target.checked
            }
            else if(lang.name === 'English'){
                echeck=event.target.checked
            }
            else if(lang.name === 'Hindi'){
                hcheck=event.target.checked
            }
        }
        }) 
        this.setState({
            isSubmitted:false
        })
        let error=this.state.errors
        error.lerror=''
       this.setState({'lang': langs,
        errors:error,
        'tcheck':tcheck,
        'hcheck':hcheck,
        'echeck':echeck
    }
       )
       console.log(this.state.lang)
    }
    handleSubmit=(event)=>{
        let submit=true;
        
        event.preventDefault();
        let data=this.state.data
        //alert("submitted success fully")
        // alert(this.state.Name)
        let error=this.state.errors;
        if(this.state.Name.length<1){
            error.nerror='Name is Required'
            submit=false
        }
        if(this.state.dob===''){
            error.derror='DOB is Required';
            submit=false
        }
        if(this.state.address===''){
            error.aerror='Address is Required';
            submit=false
        }
        if(this.state.gender===''){
            error.gerror='Select Gender';
            submit=false
        }
        if(this.state.qualification===''){
            error.qerror='Select Qualification';
            submit=false
        }
        let langs=this.state.lang;
        let len=langs.length;
        let i=0;
        this.state.lang.forEach(lang =>{
            if (!lang.checked)
          i++;
        }) 
        if (i==len){
            error.lerror='Select any language';
            submit=false
        }
        if (submit){
        data.Name=this.state.Name
        data.dob=this.state.dob
        data.address=this.state.address
        data.gender=this.state.gender
        data.lang=this.state.lang
        data.qualification=this.state.qualification
        langs=this.state.lang
        this.setState({
            'Name':'',
            'dob':'',
            'qualification':'1',
            'address':'',
            'data':data,
            'mcheck':false,
            'fcheck':false,
            'tcheck':false,
            'echeck':false,
            'hcheck':false
        })
        }
        // langs.forEach(la=>{
        //     la.checked=false
        // })
        this.setState(
            {
                isSubmitted:submit,
                errors:error,
                data:data,
            }
        )
        
    }
   
    render(){
        
        let formelements;
        // alert(this.state.isSubmitted)
        if (this.state.isSubmitted){
            formelements= <FormDetails data={this.state.data}/>
        }
        return(
           
            <div className="container">
             <Header/>
            <form onSubmit={this.handleSubmit}>
                <div className="row col-xs-offset-4 col-md-4" style={{paddingLeft:10}}> 
                <h3 style={{color:'blue'}}>Fill the below form </h3>
                </div>
                
                <div className="row">
                    <div className="col-xs-offset-5 col-md-1">
                    <label>Name:</label>
                    </div>
                    <div className="col-md-2">
                    <input type="text" id="user" name="Name" value={this.state.Name} placeholder="enter name" onChange={this.handleChange}/><span style={{color: "red"}}>{this.state.errors.nerror}</span><br/>
                    </div>                   
                </div> 
               
                <div className="row div-gap">
                <div className="col-xs-offset-5 col-md-1">
                    <label>DOB:</label>
                    </div>
                    <div className="col-md-2">
                    <input type="text" name="dob" placeholder="enter DOB" value={this.state.dob} onChange={this.handleChange}/><span style={{color: "red"}}>{this.state.errors.derror}</span><br/>
                    </div>
                </div>
                <div className="row div-gap">
                <div className="col-xs-offset-5 col-md-1">
                    <label>Address:</label>
                    </div>
                    <div className="col-md-2">
                    <textarea name="address" value={this.state.address} onChange={this.handleChange} placeholder='enter address'></textarea><span style={{color: "red"}}>{this.state.errors.aerror}</span><br/>
                    </div>
                </div>
                <div className="row div-gap">
                <div className="col-xs-offset-5 col-xs-1">
                    <label>Gender:</label>
                    </div>
                    <div className="col-xs-2">
                    <input type="radio" value="male" name="gender" checked={this.state.mcheck} onChange={this.handleChange}/>Male &nbsp;
                    <input type="radio" value="female" name="gender" checked={this.state.fcheck} onChange={this.handleChange}/>Female<br/>
                    <span style={{color: "red"}}>{this.state.errors.gerror}</span><br/>
                    </div>
                </div>
                <div className="row div-gap">
                <div className="col-xs-offset-5 col-xs-1">
                <label className="padding">Qualification:</label>
                </div>
                <div className="col-md-2">
                <select className="btn" name='qualification' onChange={this.handleChange} value={this.state.qualification}> 
                    <option value="1">Select</option>
                    <option value="B.Tech" selectd="true">B.Tech</option>
                    <option value="MTech">M.Tech</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                </select><br/>
                <span style={{color: "red"}}>{this.state.errors.qerror}</span><br/>
                </div>
                </div>
                <div className="row div-gap">
                <div className="col-xs-offset-5 col-xs-1" name='lang'>
                    <label>languages:</label>
                    </div>
                    <div className="col-xs-3">
                    <input type="checkbox" value="Telugu" name="lang" onChange={this.handleCheckBox} checked={this.state.tcheck}/>Telugu &nbsp;
                    <input type="checkbox" value="English" name="lang" onChange={this.handleCheckBox} checked={this.state.echeck}/>English&nbsp;
                    <input type="checkbox" value="Hindi" name="lang" onChange={this.handleCheckBox} checked={this.state.hcheck}/>Hindi<br/>
                    <span style={{color: "red"}}>{this.state.errors.lerror}</span><br/>
                    </div>
                    
                </div>
                
                <div className="row div-gap">
                <button type="submit" className="btn btn-primary">submit</button>
                </div>
            </form>
            {formelements}
            </div>
        );

    }
}

