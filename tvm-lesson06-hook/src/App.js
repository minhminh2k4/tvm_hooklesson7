import React from 'react'

export default function App() {
  const tvm_listTasks = [
    { tvm_taskId:2201234, tvm_taskName:"Trần Văn Minh", tvm_level:"Small"},
    { tvm_taskId:1, tvm_taskName:"Học lập trình frontend", tvm_level:"Small"},
    { tvm_taskId:2, tvm_taskName:"Học lập trình reactjs", tvm_level:"medium"},
    { tvm_taskId:3, tvm_taskName:"Lập trình với frontend", tvm_level:"high"},
    { tvm_taskId:4, tvm_taskName:"Lập trình php", tvm_level:"Small"},
  ];
  const [tvmListTasks, settvmListTasks] = useState(tvm_listTasks);

  const tvmHandleSubmit = (tvmParam) =>{
    settvmListTasks(prev => {
      return[
        ...prev,
        tvmParam
      ]
    })
  }
  return (
    <div className='container border'>
      <h1>Trần Văn Minh- K22CNT2</h1>
      <hr/>
      <div>
        {/*Danh sach list task*/}
        <tvmListTask rendertvmListTasks = {tvmListTasks}/>
      </div>
      <div>
        <tvmTaskAddOrEdit tvmOnSubmit = {tvmHandleSubmit}/>
      </div>
    </div>
  )
}