import * as React from 'react';

import {ListGroup} from "reactstrap";

const TodoList = (props: any) => (
    <ListGroup>
        {props.children}
    </ListGroup>
);

export default TodoList;