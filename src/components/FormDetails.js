import React,{Component} from 'react';

export class FormDetails extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let langs;
        const listItems = this.props.data.lang.map((d) => <div key={d.id}>
            
            { d.checked ? d.name: ''}
            </div>);
        
        return(
            <div className="container">
                <div className="row">
                <h2>Form Filled Details:</h2>
                </div>
                <div className="row">
                    <div className="col-xs-offset-5 col-md-1">
                    <label>Name:</label>
                    </div>
                    <div className="col-md-2">
                    <label>{this.props.data.Name}</label>
                    </div>                   
                </div> 
                <div className="row">
                    <div className="col-xs-offset-5 col-md-1">
                    <label>DOB:</label>
                    </div>
                    <div className="col-md-2">
                    <label>{this.props.data.dob}</label>
                    </div>                   
                </div> 
                <div className="row">
                    <div className="col-xs-offset-5 col-md-1">
                    <label>Address:</label>
                    </div>
                    <div className="col-md-2">
                    <label>{this.props.data.address}</label>
                    </div>                   
                </div> 
                <div className="row">
                    <div className="col-xs-offset-5 col-md-1">
                    <label>Gender:</label>
                    </div>
                    <div className="col-md-2">
                    <label>{this.props.data.gender}</label>
                    </div>                   
                </div>
                <div className="row">
                    <div className="col-xs-offset-5 col-md-1">
                    <label>Qualification:</label>
                    </div>
                    <div className="col-md-2">
                    <label>{this.props.data.qualification}</label>
                    </div>                   
                </div>  
                <div className="row">
                    <div className="col-xs-offset-5 col-md-1">
                    <label>Languages:</label>
                    </div>
                    <div className="col-md-2">
                    {listItems}
                    </div>                   
                </div> 
               
            </div>
        );
    }
} 