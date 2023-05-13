import { useReducer, useState } from "react";
import Todo from "./Todo";
// import { AiOutlineMessage } from "react-icons/ai";
import { MdContacts } from "react-icons/md";

const initialState = [
  {
    id: Date.now(),
    name: "Ekere felix",
    email: "Babastanloo@gmail.com",
    complete: false,
  },
];

export const ACTIONS = {
  ADD_TODO: "addTodo",
  REMOVE_TODO: "removeTodo",
  COMPLETE_TODO: "completeTodo",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      return state;
  }
}

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const contacts = {
      id: Date.now(),
      name: name,
      email: email,
      complete: false,
    };
    dispatch({ type: ACTIONS.ADD_TODO, payload: contacts });
    setName("");
    setEmail("");
    console.log(contacts);
  }

  return (
    <div className="container">
      <small>
        {state.length}
        {/* <AiOutlineMessage className="icon" /> */}
        <MdContacts className="icon" />
      </small>
      <form onSubmit={handleSubmit} className="formDiv">
        <input
          type="text"
          placeholder="enter name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn">Add Contact</button>
      </form>
      {state.length > 0 && (
        <ul>
          {state.map((todo) => {
            return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
          })}
        </ul>
      )}
      {state.length === 0 && (
        <div
          style={{ textAlign: "center", color: "white", margin: "2rem auto" }}
        >
          <h2 style={{ color: "silver" }}>there are no contacts</h2>
          <p>start adding contacts to enjoy our app!!</p>
        </div>
      )}
    </div>
  );
}
