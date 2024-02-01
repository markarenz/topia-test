import React from "react";
import { render } from "@testing-library/react";
import UserList from "./UserList";
import { mockUsers } from "./__fixtures__/mockUsers";

jest.mock('../context/UsersContext', () => ({
  useUsersContext: () => ({
    displayMode: 'userList',
    usersInView: mockUsers
  })
}));

describe("<UserList />", () => {

  it("renders correctly", () => {
    jest.mock('../context/UsersContext', () => ({
      useUsersContext: () => ({
        displayMode: 'userList',
        usersInView: mockUsers
      })
    }));
    const {container} = render(
      <UserList />
    );
    expect(container).toMatchSnapshot();
  });
});
