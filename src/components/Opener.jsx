import { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function Opener() {

  const { tasks, setTasks } = useContext(TaskContext);

  const [projectName, setProjectName] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  return <>
    <div className="font-bold text-white">Add Task</div>
    <form className="w-full rounded-lg overflow-hidden">
      <input
        onChange={(e) => {
          setProjectName(e.target.value)
        }}
        value={projectName}
        className="p-2 outline-none w-full"
        type="text"
        placeholder="Project name" />
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        className="p-2 outline-none w-full"
        type="text"
        placeholder="Title of the project" />
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        className="p-2 outline-none w-full"
        type="text"
        placeholder="Employee Name" />
    </form>
    <button
      onClick={() => {
        if (projectName == '' || title == '' || name == '') {
          return;
        }
        setTasks((prev) => {
          return [...prev, {
            pn: projectName,
            title: title,
            name: name,
            status: 0,
          }]
        })
        setProjectName('')
        setTitle('')
        setName('')
      }}
      className=" hover:bg-purple-900/40 font-bold text-white p-2 border-2 px-5 my-2 rounded">Add</button >
  </>
}

