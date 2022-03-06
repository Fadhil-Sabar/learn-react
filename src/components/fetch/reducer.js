export const reducer = (state = {user: '', pass: ''}, action) => {
    if(action.type === 'ADD'){
        return {
            ...state,
            user: 'Fadhil'
        }
    }
}