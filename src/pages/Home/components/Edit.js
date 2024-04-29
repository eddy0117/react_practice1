import { useState } from "react"

const Edit = ({add}) => {

    const [note, setNote] = useState("")

    function addItem() {
        add([1, 2, 3, 4]) 
    }

    return <div>
        <h1>note</h1>
        <p>desc :</p>
        <input type="text"/>
        <p>date :</p>
        <input type="date"/>
        <p>time :</p>
        <input type="time"/>
        <button onClick={addItem} className="add">add</button>
        </div>
}

export default Edit