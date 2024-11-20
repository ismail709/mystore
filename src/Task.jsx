

export function Task({children,deleteTask,setDone}) {
    return (
        <div>
            <input type="checkbox" name="is_done" id="is_done" onChange={setDone}/>
            <span>{children}</span>
            <button onClick={deleteTask}>Delete</button>
        </div>
    )
}