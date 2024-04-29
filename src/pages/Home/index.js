import { useState } from "react"
import Edit from "./components/Edit"
import List from "./components/List"
import './index.css'

const app = {
    color: 'red'
}

const Home = () => {
    // let a = 100
    const [data, setData] = useState([1, 2, 5])
    
    return <div className="app">
        <Edit add={setData}/>
        <List listData={data}/>
        
        
    </div>

}

export default Home