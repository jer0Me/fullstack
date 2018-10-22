import * as React from 'react';
import TodoList from '../components/TodoList/TodoList';
import './App.css';

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
