import { createContext, useState } from 'react'

export const TaskContext = createContext()



export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      pn: "Website-3",
      title: "Create a new Landing Page",
      name: "Adam",
      status: 0
    },
    {
      pn: "Nexa",
      title: "Fix call bugs",
      name: "Vishwajeet Kumar",
      status: 1
    },
    {
      pn: "Website-16",
      title: "Fix the offline connection bug",
      name: "vc",
      status: 2
    },
    {
      pn: "Website-3",
      title: "Change the ui design",
      name: "Mohan Singh",
      status: 2
    },
    {
      pn: "Website-3",
      title: "Create a new Home Page",
      name: "Sohan Kumar",
      status: 2
    },
    {
      pn: "Website-23",
      title: "Fix Dropdown of Navigation",
      name: "Rani Kumari",
      status: 3
    },
    {
      pn: "Snake Game",
      title: "Create a HardMode",
      name: "Vishwajeet Kumar",
      status: 3
    },
  ]);

  return (<>
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider >
  </>)


}

