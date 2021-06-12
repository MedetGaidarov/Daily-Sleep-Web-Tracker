import React , {useState} from 'react'

const AddTask = () => {
    let [text, setText] = useState("");
    
    return (
        <form >
        <input type="text" placeholder="text" />
        <input type="submit" value="Add Task" />

      </form>
    );
    
}

export default AddTask
