import React from "react";
import "./Todo.css";

export default function Todo() {
  return (
    <>
      <div className="py-4">
        <div className="container">
          <div className="main-div">
            <div className="fig-title text-center my-4">
              <h1 className="text-warning">ADD YOUR LIST HERE✌</h1>
            </div>
            <div className="fig-form">
              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  id="input-fig"
                  className="form-control my-input"
                  placeholder="Click here to add your todo✍"
                />
                <i className="fa-solid fa-plus btn btn-danger d-flex align-items-center"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
