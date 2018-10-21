import React from 'react';

import {storiesOf} from '@storybook/react';
import TodoList from "./TodoList";
import Todo from "../Todo/Todo";
import {withInfo} from "@storybook/addon-info";

storiesOf('TodoList', module)
    .add('Standard',
        withInfo({propTablesExclude: [TodoList, Todo]})
        (() =>
                <TodoList>
                    <Todo>Buy some food</Todo>
                    <Todo>Have the car fixed</Todo>
                    <Todo>Make a call to the client</Todo>
                    <Todo>Install app</Todo>
                </TodoList>
        )
    );