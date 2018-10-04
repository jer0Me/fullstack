import React from 'react';

import {storiesOf} from '@storybook/react';
import TodoList from "./TodoList";

storiesOf('TodoList', module).add('withTodos', () => {
    return <TodoList/>
});