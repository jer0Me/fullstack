import * as React from 'react';
import {ListGroupItem} from "reactstrap";
import styled from 'styled-components'

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
