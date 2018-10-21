import React from 'react';
import {storiesOf} from '@storybook/react';
import Todo from './Todo';
import {withInfo} from "@storybook/addon-info";

storiesOf('Todo', module)
    .add('Standard',
        withInfo({propTablesExclude: [Todo]})
        (() =>
            <Todo>This is my simple todo</Todo>
        )
    );