import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from './Async';

describe("Async component", () => {
  
  test("renders - posts from API", async () => {

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {id: 'p1', title: 'First post' },
        {id: 'p2', title: 'Second post' },
        {id: 'p3', title: 'Third post' },
        {id: 'p4', title: 'Fourth post' },
        {id: 'p5', title: 'Fifth post' }
      ]
    });

    render(<Async />);
    const listElements = await screen.findAllByRole('listitem', {}, {});
    //expect(listElements).not.toHaveLength(0);
    expect(listElements).toHaveLength(5);
  });
  
});
