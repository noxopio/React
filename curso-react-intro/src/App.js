import './App.css';

import { useState } from 'react';
import { AppUi } from './AppUi';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'create a todo app', completed: false },
  { text: 'create app with reack', completed: false },

];

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);

  const [searchValue, setSearchValue] = useState('');
  const saveTodos = (newTodos) => {

    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);

  }
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  const todoChecked = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  return (
    <AppUi

      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      todoChecked={todoChecked}
      deleteTodo={deleteTodo}


    />
  )



}

export default App;
