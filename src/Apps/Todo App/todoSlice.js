import { createSlice } from "@reduxjs/toolkit";



 const data = localStorage.getItem('todos')


const initialState = {
    todos:JSON.parse(data) || [],
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
            addTodo:{
                prepare(todo,priority,completed,date,){
                    return {payload:{
                        todo,
                        priority,
                        completed:false,
                        date:new Date().toDateString(),
                    }}
                },
                reducer(state,action){
                    
                state.todos.unshift(action.payload)
                
            }},

            completed(state,action){
                    state.todos[action.payload].completed = true
            },

            updateTodo(state,action){
                state.todos[action.payload.id].todo = action.payload.updateInput
            },
            
            deleteTodo(state,action){
                state.todos.splice(action.payload,1)

            }
    }
})


export const {addTodo,updateTodo,deleteTodo,completed} = todoSlice.actions

export default todoSlice.reducer