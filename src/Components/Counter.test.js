import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';

import Counter from "./Counter";

describe('checking events and values in Counter', () => {
    afterEach(cleanup);

    it('increment the count', () => {
        // act
        const { getByTestId } = render(<Counter />);

        // when
        fireEvent.click(getByTestId('button-up'));

        // assertion
        expect(getByTestId('counter')).toHaveTextContent('1');
    });

    it('decremnet the count', () => {
        // act
        const { getByTestId } = render(<Counter />);

        // when
        fireEvent.click(getByTestId('button-down'));

        // assertion
        expect(getByTestId('counter')).toHaveTextContent('-1');
    });

    it('should be enabled', () => {
        const { getByTestId } = render(<Counter />);
        expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
    })
}) 
