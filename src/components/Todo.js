import React, { useState } from "react";
//TODO: Import all the files from your action
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css";

export default function Todo() {
  const [inputData, setInputData] = useState("");
  //TODO: need to create this hook provided by redux
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  return (
    <>
      <div className="py-4">
        <div className="container">
          <div className="main-div">
            {/* Section 1 : Title */}
            <div className="fig-title text-center my-4">
              <h1 className="text-warning">ADD YOUR LIST HERE✌</h1>
            </div>
            {/* Section 2: Form */}
            <div className="fig-form">
              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  className="form-control my-input"
                  placeholder="✍Click here to add your todo"
                  value={inputData}
                  //? We need to call onChange method for set state || must for input
                  onChange={(event) => setInputData(event.target.value)}
                />
                <i
                  className="fa-solid fa-plus btn btn-danger d-flex align-items-center"
                  title="Add item"
                  // ? we need to create onClick for btn and call the function using dispatch
                  onClick={() => {
                    dispatch(addTodo(inputData), setInputData(""));
                  }}
                ></i>
              </div>
            </div>
            {/* Section 3: Output */}
            <div className="out-put my-4">
              {list.map((element) => {
                return (
                  <div className="row" key={element.id}>
                    <div className="col-md-6 offset-3">
                      <div className="d-flex justify-content-center">
                        <div className="card mb-2">
                          <div className="card-header text-truncate">
                            {element.data}
                          </div>
                        </div>
                        <i
                          className="fa-solid fa-trash-alt btn btn-danger d-flex align-items-center mb-2"
                          title="Delete item"
                          onClick={() => {
                            dispatch(deleteTodo(element.id));
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Section 4: Remove All Button */}
            <div className="remove-all">
              <i className="fa-solid fa-eraser btn btn-outline-info remove-all-btn"
              onClick={
                ()=>{
                  dispatch(removeTodo())
                }
              }
              >
                _Remove All
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
