import * as React from 'react';
import './App.css';
import TodoList from '../components/TodoList/TodoList';

class App extends React.Component {
    public render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <TodoList/>
                </div>
            </div>
        );
    }
}

export default App;
