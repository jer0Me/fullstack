import * as React from 'react';
import styled from 'styled-components'
import {ListGroupItem} from "reactstrap";

const StyledListGroupItem = styled(ListGroupItem)`
  :hover {
    background-color: #EEEEEE;
    color: black;
  }
`;

const Todo = (props: any) => (
    <StyledListGroupItem>{props.children}</StyledListGroupItem>
);

export default Todo;
