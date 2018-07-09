import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem } from '../actions';

class ViewItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            error: ''
        }
    }

    async componentDidMount(){
        const { item_id } = this.props.match.params;
        const newState = {
            loading: false,
            error: ''
        }

        try{
            const resp = await this.props.getSingleItem(item_id);

        } catch(err){
            newState.error = "Unable to load to do item"
        }
        this.setState(newState);
    }
    render(){
        
        const { item } = this.props
        const { loading, error } = this.state;

        if(!item && loading){
            return <h1>Loading...</h1>;
        }

        if(!loading && error){
            return <h1>{error}</h1>;
        }

        return (
            <div>
                <h1>{item.title}</h1>
                <p><b>DETAILS:</b>{item.details}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        item: state.list.single
    }
}

export default connect(mapStateToProps, { getSingleItem: getSingleItem })(ViewItem);