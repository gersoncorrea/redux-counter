import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeCounter} from './../actions/index.actions';
import {bindActionCreators} from 'redux';

class RemoveCounter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container">
                <form>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-primary"
                            onClick={(e)=>{
                                e.preventDefault();
                                this.props.dispatch(removeCounter())
                            }}>
                                Remove
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        actions: bindActionCreators(removeCounter, dispatch)
    }
}
export default connect(mapDispatchToProps)(RemoveCounter);