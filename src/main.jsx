import ReactDOM from "react-dom/client"
import "./style.css"
import Tasbih from "./components/Tasbih"

import { Provider } from "react-redux"
import store from "./redux/store/store"

ReactDOM.createRoot(document.getElementById("root")).render(
   
   <Provider store={store} >
   <Tasbih />
   </Provider>
)





