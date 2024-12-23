import { useContext } from "react";
import TaskHolder from "./components/TaskHolder";
import { Task } from "./components/TaskHolder";
import { TaskContext } from "./contexts/TaskContext";

import background from './assets/background.jpg'

function App() {

  const { tasks } = useContext(TaskContext);

  const newTasks = tasks.filter((item => item.status == 0))
  const working = tasks.filter((item => item.status == 1))
  const testing = tasks.filter((item => item.status == 2))
  const final = tasks.filter((item => item.status == 3))

  return (<div style={{
    backgroundImage: `url(${background})`,
    height: '100vh',
    overflow: 'auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',

  }}>
    <h1 className="text-center text-white text-5xl py-10 font-bold">Task Management Application!</h1>
    <div className="p-5 flex gap-5 items-start justify-center">

      <TaskHolder type="Initial State">
        {
          newTasks.map((item, i) =>
            <Task
              key={i}
              projectName={item.pn}
              title={item.title}
              name={item.name}
            />
          )
        }
      </TaskHolder>

      <TaskHolder type="Working">
        {
          working.map((item, i) =>
            <Task
              key={i}
              projectName={item.pn}
              title={item.title}
              name={item.name}
            />
          )
        }
      </TaskHolder>

      <TaskHolder type="Testing">
        {
          testing.map((item, i) =>
            <Task
              key={i}
              projectName={item.pn}
              title={item.title}
              name={item.name}
            />
          )
        }
      </TaskHolder>

      <TaskHolder type="Final">
        {
          final.map((item, i) =>
            <Task
              key={i}
              projectName={item.pn}
              title={item.title}
              name={item.name}
            />
          )
        }
      </TaskHolder>

    </div>
  </div>
  )
}

export default App
