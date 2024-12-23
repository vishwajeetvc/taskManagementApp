import Opener from "./Opener";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export function Task({ projectName, title, name }) {
  const { tasks, setTasks } = useContext(TaskContext);
  return <>
    <div className={`p-2 bg-white relative rounded-lg border border-gray-300 w-full`}>

      <section className={`font-bold text-green-400 text-xl`}>{projectName}</section>
      <div className={`py-2 text-lg`}>{title}</div>
      <div className={`text-gray-400`}>{name}</div>


      <div className="flex justify-end">
        <div
          className="text-right border-2 px-2 rounded-xl  cursor-pointer"
          onClick={() => {
            const otherTasks = tasks.filter(item => {
              if (item.pn == projectName && item.title == title && item.name == name) {
                return false;
              }
              return true;
            })
            const thisTask = tasks.find(item => {
              if (item.pn == projectName && item.title == title && item.name == name) {
                return true;
              }
            })
            thisTask.status = thisTask.status + 1;
            setTasks([...otherTasks, thisTask]);
          }}
        >Done</div>
      </div>
    </div>
  </>
}

export default function TaskHolder({ children, type }) {
  let background =
    (type == 'Initial State') ? 'bg-red-400' :
      (type == 'Working') ? 'bg-purple-400' :
        (type == 'Testing') ? 'bg-purple-900' :
          (type == 'Final') ? 'bg-green-400' : '';

  return <>
    <div className={`p-5 w-[350px] border-2 border-white flex flex-col gap-5 rounded-xl`}>
      {type == 'Initial State' && <Opener />} <h1 className="text-white font-bold">{type}</h1>
      {children}
    </div>
  </>
}

