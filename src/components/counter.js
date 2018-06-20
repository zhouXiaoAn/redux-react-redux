import React,{Component} from 'react'
import{connect} from 'react-redux'
import { increaseAction,jianAction } from '../store/actions';
class Counter extends Component {
    render() {
        console.log(this.props)
        let {value,onIncreaseClick,onJianClick} = this.props
        return(
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>增加</button>
                <button onClick={onJianClick}>减少</button>
            </div>
        )
    }
}
// function mapStateToProps(state) { 
//     console.log(state,'11111111111111')
//     return {
//         value:state.count
//     }
//  }
//  function mapDispatchToProps() {
//     (dispatch) => ({
//         onIncreaseClick:() => dispatch(increaseAction),
//         onJianClick:() => dispatch(jianAction)
//     })
//  }
export default connect(
    
    state => ({value:state.count}),
    dispatch => ({
        onIncreaseClick: () => dispatch(increaseAction),
        onJianClick: () => dispatch(jianAction)
    })
)(Counter)