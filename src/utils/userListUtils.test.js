import { sortByDistanceToPlayer, calcDistanceToPlayer } from './userListUtils'

describe('sortByDistanceToPlayer', () => {
  // Happy Path
  it('returns sorted array of users', () => {
    const mockUsers = [
      {id: 1, distanceToPlayer: 10},
      {id: 2, distanceToPlayer: 7},
      {id: 3, distanceToPlayer: 12},
      {id: 4, distanceToPlayer: 2},
      {id: 5, distanceToPlayer: 8},
    ]

    const result = sortByDistanceToPlayer(mockUsers)
    const resultIds = result.map((user) => user.id)
    expect(resultIds).toEqual([4,2,5,1,3])
  })

    // Negative Path
  it('returns null for invalid arguments', () => {
    const mockUsers = {
      id: 1,
      distanceToPlayer: 13
    }

    const result = sortByDistanceToPlayer(mockUsers)
    expect(result).toBe(null)
  })
})

describe('calcDistanceToPlayer', () => {
  // Happy Path
  it('returns distance to player from x, y point', () => {
    const result = calcDistanceToPlayer(50, 50, 90, 80)
    expect(result).toEqual(50)
  })

  // Negative Path
  it('returns null if any arguments are not numbers', () => {
    const result = calcDistanceToPlayer('50', 50, null, 80)
    expect(result).toEqual(null)
  })
})
