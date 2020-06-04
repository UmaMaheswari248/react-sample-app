import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Tables from './Tables';
export default class Header extends Component{
    render(){
        return(
            <div style={{marginTop:20}}>
            <nav>
                <Link to="/">Home</Link> | <Link to="/form">Form</Link> | <Link to="/table"> Table </Link>
            </nav>
            </div>
        );
    }
}