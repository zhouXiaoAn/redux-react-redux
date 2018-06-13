export default (state=0,action) => {
    console.log(state,action)
    switch(action.type) {
        case "JIA":
        return state+1
        case "JIAN":
        return state-1
        default :
        return state
    }
}