import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import { initialState, reducer } from '../reducer';
import CounterDec from './CounterDec'

const renderWithRedux = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}

afterEach(cleanup);

//testing events

it('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<CounterDec />)
    expect(getByTestId('counter')).toHaveTextContent('0')
})

it('increments the counter through redux', () => {
    //act
    const { getByTestId } = renderWithRedux(<CounterDec />,
        {
            initialState: { count: 5 }
        })

    // when
    fireEvent.click(getByTestId('button-up'))

    // assertions
    expect(getByTestId('counter')).toHaveTextContent('6')
})

it('decrements the counter through redux', () => {
    const { getByTestId } = renderWithRedux(<CounterDec />, {
        initialState: { count: 100 },
    })
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('99')
})