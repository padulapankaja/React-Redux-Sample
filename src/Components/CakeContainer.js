import React, { Component } from 'react';
import { connect } from 'react-redux'
import { buyCake } from './redux/index'
import { addCake } from './redux/index'


class CakeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="cacke_div">
                <center>
                    <h3>Number of Cakes  - {this.props.numOfCakes}</h3>
                    <button onClick={this.props.buyCake}>Buy Cake</button>
                    <button onClick={this.props.addCake}>Add Cake</button>
                </center>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);