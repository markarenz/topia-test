import { USER_LIST } from "../utils/constants";
import listUsersInView from "./listUsersInView";

describe('listUsersInView', () => {
  it('returns a list of users within the canvas viewport - position 1', () => {
    const result = listUsersInView(USER_LIST, 800, 400, 1600, 800)
    const resultIds = result.map((user) => user.id)
    expect(resultIds).toEqual([3,2])
  })

  it('returns a list of users within the canvas viewport - position 2', () => {
    const result = listUsersInView(USER_LIST, 1200, 800, 1600, 800)
    const resultIds = result.map((user) => user.id)
    expect(resultIds).toEqual([7,3])
  })

  it('returns a list of users within the canvas viewport - very large canvas', () => {
    const result = listUsersInView(USER_LIST, 1600, 800, 5000, 5000)
    const resultIds = result.map((user) => user.id)
    expect(resultIds).toEqual([7,3,5,6,2,1,4])
  })
})
