import React, { useState } from 'react'
import Header from './Components/Header'
import CommonContext from './Components/CommonContext'
import TaskForm from './Components/TaskForm';
import ShowTaskContainer from './Components/ShowTaskContainer';


export default function App() {
  const [showAddTaskSection, setShowAddTaskSection] = useState(false);
  const [listOfTask, setListOfTask] = useState([]);

  let objectOfValues = { showAddTaskSection, setShowAddTaskSection, listOfTask, setListOfTask }

  return (
    <>
      <CommonContext.Provider value={objectOfValues} >
        <Header />
        {showAddTaskSection && <TaskForm />}
        {!showAddTaskSection && <ShowTaskContainer />}
      </CommonContext.Provider>

    </>
  )
}


