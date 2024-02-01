import { render } from '@testing-library/react';
import { UsersContextProvider } from "./UsersContext";

describe('UsersContextProvider', () => {
  it('renders context provider', () => {
    const { container } = render(
      <UsersContextProvider>
        <div>Test</div>
      </UsersContextProvider>
    );
    expect(container).toMatchSnapshot();
  })
})