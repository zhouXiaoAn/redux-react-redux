import React,{Component} from "react"
import {store} from '../redux/index'
// import reducers from '../redux/reducers'
// import {store} from '../redux'
import {jia,jian} from '../redux/actions'
export default class Counter extends Component {
    _jia = () => {
        let num  = document.getElementsByClassName('App-title')[0].innerText - 0
        store.dispatch(jia(num))
    }
    _jian = () => {
        let num  = document.getElementsByClassName('App-title')[0].innerText - 0
        store.dispatch(jian(num))
    }
    render() {
        return (
            <div>
                <span></span>
                <button onClick={this._jia}>增加</button>
                <button onClick={this._jian}>减少</button>  
            </div>
        )
    }
}