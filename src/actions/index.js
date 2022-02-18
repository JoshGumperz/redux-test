export const increment = (number) => {
    return{
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = (number) => {
    return{
        type: 'DECREMENT',
        payload: number
    }
}

export const apiCall = (input) => {
    return{
        type: 'HELLO',
        payload: input
    }
}