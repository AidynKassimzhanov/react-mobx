import React, { useEffect } from 'react'
import counter from '../store/counter'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import todo from '../store/todo'

const MobxComponent = observer(() => {

  useEffect(() => todo.loadTodos(),[])

  return (
    // <div className='counter'>
    //   {counter.count}
    //   <div className='btns'>
    //     <Button onClick={() => counter.increment()}> + </Button>
    //     <Button onClick={() => counter.decrement()}> - </Button>
    //   </div>
    // </div>

      <div className='todos'>

        {/* <Button onClick={() => todo.loadTodos()}>Load</Button> */}

        {todo.todos.map((td) =>
          <div className='todo' key={td.id}>
            <input type="checkbox" checked={td.completed} onChange={() => todo.completedTodos(td)} />
            {td.title}
            <Button onClick={() => todo.removeTodo(td.id)}>x</Button>
          </div>
        )}
      </div>
    
  )
})

export default MobxComponent