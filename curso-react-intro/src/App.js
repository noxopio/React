import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { useState } from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'create a todo app', completed: false },
  { text: 'create app with reack', completed: false },

];

function App() {

  const [todos, setTodos] = useState(defaultTodos);

  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  const todoChecked = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }


  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>TODO MACHINE</h2>
      </div>
      <div className="main-content">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchTodos.map(({ text, completed }) => (
            <TodoItem key={text} text={text} completed={completed}
              onCompleted={() => todoChecked(text)}
              onDeleted={() => deleteTodo(text)}

            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
