/* eslint-disable react/prop-types */
import { ACTIONS } from "./Todos";
const Todo = ({ todo, dispatch }) => {
  return (
    <div
      style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      className="card"
    >
      <div className="todoCard">
        <h3>{todo.name}</h3>
        <p>{todo.email}</p>
        <div className="btnCard">
          <button
            className="btn a1"
            onClick={() =>
              dispatch({
                type: ACTIONS.COMPLETE_TODO,
                payload: { id: todo.id },
              })
            }
          >
            complete
          </button>
          <button
            className="btn a2"
            onClick={() =>
              dispatch({
                type: ACTIONS.REMOVE_TODO,
                payload: { id: todo.id },
              })
            }
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
