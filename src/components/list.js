import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { getData } from '../actions';

class List extends Component {
    componentDidMount(){
        this.props.getData();
    }

    render(){

        const listElements = this.props.list.map( item => {
            return <li className="collection-item" key={item._id}>{item.title}</li>
        });

        return (
            <div>
                <h1 className="center">To Do List with Redux</h1>
                <ul className="collections">
                {listElements}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        list: state.list.all
    }
}

export default connect(mapStateToProps, {getData})(List);