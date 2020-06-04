import React,{Component} from 'react';
import DataTable from 'react-data-table-component';
class Tables extends Component{
    constructor(){
        super()
        this.state={
            'Name':'',
            'NickName':'',
            'Age':'',
            'record':[
                {
                    'Name':'kalam',
                    'NickName':"kalam",
                    'Age':'40'
                }
            ]
        }
    }
    handleChange=(event)=>{
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }
    handleAdd=(event)=>{
        let newRecord={
            'Name':this.state.Name,
            'NickName':this.state.NickName,
            'Age':this.state.Age
        }
        this.state.record.push(newRecord)
        this.setState(
            {
                'Name':'',
                'NickName':'',
                'Age':''
            }
        )
        //console.log(this.state.record)
    }
    renderTableData() {
        return this.state.record.map((student, index) => {
           const { Name,NickName } = student //destructuring
           return (
            <tr key={index}>
            <td>{Name}</td>
            <td>{NickName}</td>
         </tr>
           )
        })
     }
  
    render(){
           const column = [
            {
              name: 'Name',
              selector: 'Name',
              sortable: true,
            },
            {
              name: 'NickName',
              selector: 'NickName',
              sortable: true,
            },
            {
                name: 'Age',
                selector: 'Age',
                sortable: true,
            },
          ];
        const data=this.state.record
       
        return(
            <div className="container">
                <div className="row div-gap" style={{marginTop:30,paddingLeft:100}}>
                    <h4 style={{color:'blue'}}>Enter details for dynamically insert rows into DataTable</h4>
                </div>
                <div className="row div-gap" style={{marginTop:20}}>
                <div className="col-xs-offset-5 col-xs-1" name='lang'>
                    <label>Name:</label>
                    </div>
                    <div className="col-xs-3">
                    <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange}/>
                    </div>
                    
                </div>
                <div className="row div-gap">
                <div className="col-xs-offset-5 col-xs-1" name='lang'>
                    <label>NickName:</label>
                </div>
                <div className="col-xs-3">
                    <input type="text" name="NickName" value={this.state.NickName} onChange={this.handleChange}/>
                </div>
                    
                </div>
                <div className="row div-gap">
                <div className="col-xs-offset-5 col-xs-1" name='lang'>
                    <label>Age:</label>
                </div>
                <div className="col-xs-3">
                    
                    <input type="number" name="Age" value={this.state.Age} onChange={this.handleChange}/>
                </div>
                    
                </div>
                <div className="row div-gap ">
                <div className="col-xs-offset-5 col-xs-3">
                <button className="btn btn-primary" onClick={this.handleAdd} style={{marginTop:10}}>Add</button>
                </div>
                </div>
                <div className='row div-gap'>
                <div className="col-xs-offset-5 col-xs-4">
                <DataTable
        title="Records"
        columns={column}
        data={data}
      />
                </div>
               
      {/* <Tab data={this.state.record}/> */}
      {/* <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
              />  
       */}
       {/* <Table columns={columns} data={data} /> */}
                </div>
            </div>
        );
    }
}

export default Tables;