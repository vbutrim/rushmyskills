import React from 'react';
import styled from 'styled-components';
import {EmptyProps} from '../../common/EmptyProps';

const Div = styled.div`
  margin: 40px;
  text-align: center;
`;

class ErrorNotFound extends React.Component<EmptyProps> {
    public render(): React.ReactNode {
        return (
            <Div>
                <div id="error">
                    <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
                    <p className="notFoundDesc">
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                    </p>
                </div>
            </Div>
        );
    }
}

export default ErrorNotFound;
