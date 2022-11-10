import React from "react";
import CounterDec from "./CounterDec";
import { createStore } from 'redux';
import { initialState, reducer } from '../reducer';
import { Provider } from 'react-redux';
import {render, cleanup, fireEvent} from '@testing-library/react';

const renderWithRedux = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>), store,
    }
}

afterEach(cleanup);
it('check initial state value to equal to 0', () => {
    const { getByTestId } = renderWithRedux(<CounterDec />)
    // assertion
    expect(getByTestId('counter')).toHaveTextContent('0')

}
)

// it('check initial state value to equal to 0', () => {
//     const { getByTestId } = renderWithRedux(<CounterDec />, {
//         initialState:
//             { count: 5 }
//     });

//     // when
//     fireEvent.click(getByTestId('button-up'))

//     // assertion
//     expect(getByTestId('counter')).toHaveTextContent('6')

// }
// )
