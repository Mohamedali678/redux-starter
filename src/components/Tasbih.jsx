import { useSelector, useDispatch } from "react-redux"
import { handleDecrement, handleIncrement, handleReset } from "../redux/reducer/counter"

function Tasbih(){

    const getValue = useSelector((state) => state.tasbih.startValue)

    const dispatch = useDispatch()

    const increment = () => {
        dispatch(handleIncrement())
    }
    const decrement = () => {
        dispatch(handleDecrement())
    }
    const reset = () => {
        dispatch(handleReset())
    }


    return <div className="text-center">
        <h1 className="text-9xl"> {getValue}  </h1>
        <button onClick={increment}  className="bg-red-500 px-10 py-2 m-4 text-2xl" >Increment</button>
        <button onClick={decrement}  className="bg-red-500 px-10 py-2 m-4 text-2xl" >Decrement</button>
        <button onClick={reset}  className="bg-red-500 px-10 py-2 m-4 text-2xl" >Reset</button>
    </div>
}

export default Tasbih