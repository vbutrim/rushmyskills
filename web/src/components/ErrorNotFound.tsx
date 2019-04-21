import React from 'react';
import styled from 'styled-components';
import {EmptyProps} from '../common/EmptyProps';

const Div = styled.div`
  margin: 40px;
`;

class ErrorNotFound extends React.Component<EmptyProps> {
    public render(): React.ReactNode {
        return (
            <Div>
                aviv olds
            </Div>
        );
    }
}

export default ErrorNotFound;
