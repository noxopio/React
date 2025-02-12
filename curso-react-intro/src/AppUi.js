import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';

export const AppUi = ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchTodos,
    todoChecked,
    deleteTodo,
}) => {
    return (
        <div className="app-container">
            <div className="sidebar">
                <h2>TODO MACHINE</h2>
            </div>
            <div className="main-content">
                <TodoCounter
                    completed={completedTodos}
                    total={totalTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TodoList>
                    {searchTodos.map(({ text, completed }) =>
                    (
                        <TodoItem
                            key={text} text={text}
                            completed={completed}
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



