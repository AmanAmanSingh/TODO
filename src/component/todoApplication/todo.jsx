import { useState } from "react";
import "./style.css";
const Todolist = () => {

    // ALL states //
    const [todoText, setTodoText] = useState("");
    const [userData, setUserData] = useState([]);
    const [state, setState] = useState("ADD")
    const [id, setId] = useState("");

    // handling of Adding ToDo data//
    const handleAdd = () => {
        if (state == "ADD") {
            setUserData([...userData, todoText]);
            setTodoText("");
        } else {
            let arr = userData;
            for (let i = 0; i < arr.length; i++) {
                if (i == id) {
                    arr[i] = todoText;
                    setUserData(arr);
                    setTodoText("");
                    setState("ADD");
                }
            }
        }
        if (userData.length == 0) {
            setState("ADD")
        }
    }
    // Handle deleting the pre Written ToDo data//
    const handleDelete = (idx) => {
        const filterForDelete = userData.filter((user, index) => {
            return index != idx;
        })
        setUserData(filterForDelete);
    }

    // handle editing of ToDo Data//
    const handleEdit = (editval, idx) => {
        setTodoText(editval);
        setState("EDIT");
        setId(idx);
    }
    return (
        <>
            <div id="container">
                <h1>ToDo List</h1>
                <div className="header">
                    <input type="text" value={todoText} onChange={(e) => { setTodoText(e.target.value) }} />
                    <button id="add-btn" disabled={!todoText ? true : false} onClick={handleAdd}>{state}</button>
                </div>
                <ol>
                    {userData.map((user, index) => {
                        return (
                            <div className="notesSection" key={index}>
                                <li >{user}</li>
                                <button id="delete" onClick={() => handleDelete(index)}><i class="fa fa-trash fa-2x" aria-hidden="true"></i></button>
                                <button id="edit" onClick={() => handleEdit(user, index)}><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></button>
                            </div>
                        )
                    })}
                </ol>
            </div>

        </>

    )
}
export default Todolist;