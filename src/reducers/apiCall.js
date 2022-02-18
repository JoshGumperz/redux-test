const apiReducer = (state = null, action) => {
    switch (action.type){
        case 'HELLO':
            return action.payload
        default: return state
    } 
}
export default apiReducer