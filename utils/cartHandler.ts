const cartHandler = (state: TCartItem[], payload: TCartItem) => {

    if (state.some(item => item.item.id === payload.item.id)) {

        const index = state.findIndex(item => item.item.id === payload.item.id)

        state[index].qty += payload.qty

        return state

    }

    return [...state, payload]

}

export default cartHandler