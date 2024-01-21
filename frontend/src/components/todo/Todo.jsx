import React, { useEffect, useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";
const Todo = () => {



  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="my-2 p-2">
        </div>
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column todo-inputs-div w-lg-50 w-100 p-1">

            <input
              type="text"
              placeholder="TITLE"
              className="my-2 p-2 todo-inputs"
              name="title"
            />
            <input
              type="text"
              placeholder="TASKIMG"
              className="my-2 p-2 todo-inputs"

            />
            <textarea
              id="textarea"
              type="text"
              placeholder="BODY"

            />
          </div>
          <div className=" w-50 w-100 d-flex justify-content-end my-3">
            <button className="home-btn px-2 py-1">
              Add
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
           
          </div>
        </div>
      </div>
      <div className="todo-update " id="todo-update">
        <div className="container update">
        </div>
      </div>
    </>
  );
};

export default Todo;