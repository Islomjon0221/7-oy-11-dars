import { useRef } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const NameRef = useRef()
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  console.log(todos);

  function validate() {
    if(!NameRef.current.value){
      NameRef.current.focus()
      alert("Todo kiriting")
      return false
    }
    return true
  }

  function handleAdd(e) {
    e.preventDefault();
    if (validate()) {
      const todoItem = {
        id: Date.now(),
        name: NameRef.current.value
      }
  
      dispatch({type: "ADD", payload: todoItem})
      NameRef.current.value = ''
    }
  }

  function handleDelete(id) {
    dispatch({type:"REMOVE", payload:id})
  }

  return (
  <>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="card shrink-0 w-auto min-w-[700px] shadow-2xl bg-base-100">
      <form  className="card-body">
        <div className="form-control">
          <input type="text" ref={NameRef} placeholder="Enter your todo" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button onClick={handleAdd} className="btn btn-primary">Add Todo</button>
        </div>
      </form>
      <div className=" overflow-x-auto mx-auto">
  <table className="table">
    {/* head */}
    <tbody>
      
       {
        todos.length > 0 && todos.map((el, i) => {
          return(
            <tr className=' flex justify-between p-2 min-w-[680px]' key={i}>
        <th className='text-xl'>
        {el.name}
        </th>
        <th><button className='btn btn-sm btn-primary mr-4'>Edit</button> <button onClick={() => {handleDelete(el.id)}} className='btn btn-sm btn-primary'>Delete</button></th>
      </tr>
          )
        })
      }

    {/* {
      todos.map((todo) => {
        return(
          <li
          key={i}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        ></li>
        )
      })
    }  */}
    </tbody>
      </table>
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default App
