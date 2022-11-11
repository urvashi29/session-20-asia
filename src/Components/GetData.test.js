import { GetData } from './GetData';
import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';

describe('expectedData', () => {
    it('checks if returned data from API rendered into component', async () => {
        render(<GetData />);

        await waitFor(() => {
            expect(screen.getByText("Sydnee")).toBeInTheDocument();
        });
    });
});

// describe('', () => {
//     it('', async () => {
//         render(<GetData />)

//         fireEvent().click(screen.getByTestId('button-up'));

//         await waitFor(() => {
//             expect((screen.getByText("Sydnee")).toBeInTheDocument())
//         })
//     })
// })