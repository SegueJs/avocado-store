import { RootState } from "app/store"
import { useSelector } from "react-redux"

const totalCart = () => {
    const { cart }  = useSelector((state:RootState)=>state.cartReducer)
    const reducer = (accumulator: number, currentValue: TCartItem) => accumulator + currentValue.qty
    const sum = cart.reduce(reducer, 0)

    return sum
}

export default totalCart