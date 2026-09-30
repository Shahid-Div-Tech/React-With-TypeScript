import { createContext, useContext, useState, type ReactNode } from "react";


export type TodosProviderProps = {
  children: ReactNode;
};

export type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}


export type TodosContext={
    todos:Todo[];
    handleAddToDo:(task:string)=>void
    toggleTodoAsCompleted:(id:string)=>void
    handleDeleteTodo:(id:string)=>void
  

}

export const todosContext=createContext<TodosContext | null>(null)


                        
export const TodosProvider=({children}:TodosProviderProps)=>{

    const [todos,setTodos]=useState<Todo[]>([])
    const handleAddToDo=(task :string)=>{
       setTodos((prev)=>{
        const newTodos:Todo[]=[
            {
                id:Math.random().toString(),
                task:task,
                completed:false,
                createdAt:new Date()
            },
            ...prev
        ]
        
        console.log(newTodos)
        return newTodos
     
       }
    )}


    const toggleTodoAsCompleted=(id:string)=>{
       setTodos((prev)=>{
        let newtodos=prev.map((todo)=>{
            if(todo.id===id){
                return {...todo,completed:!todo.completed}
            }
            return todo;
        }) 
        return newtodos
       })
    }

    const handleDeleteTodo=(id:string)=>{
      setTodos((prev)=>{
        let newtodo=prev.filter((todo)=>{
            return id!==todo.id
        })
        return newtodo
      })
    }

    return <todosContext.Provider value={{todos,handleAddToDo,toggleTodoAsCompleted,handleDeleteTodo}}>
        {children}
    </todosContext.Provider>

}


export const useTodos=()=>{
    const todoConsumer=useContext(todosContext);
    if(!todoConsumer){
        throw new Error("useTodos used outside of provider")
    
    }

    return todoConsumer;
}