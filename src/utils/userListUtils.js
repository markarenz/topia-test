export const calcDistanceToPlayer = (x, y, positionX, positionY) => {
  // If arguments are invalid, return null
  if (
    typeof x !== 'number'
    || typeof y !== 'number'
    || typeof positionX !== 'number'
    || typeof positionY !== 'number'
  ) {
    return null
  }

  // Use our old pal Pythagoras to get the distance
  // There are "cheaper" methods such as adding dx + dy, but they are less accurate
  return Math.sqrt(
    (Math.abs(x - positionX) ** 2)
    + (Math.abs(y - positionY) ** 2)
  )
}

export const sortByDistanceToPlayer = (usersInView) => {
  // If arguments are invalid, return null
  if (!Array.isArray(usersInView)) {
    return null
  }
  
  // Return the sorted array
  return usersInView
    .sort((a,b) => {
      if (a.distanceToPlayer > b.distanceToPlayer) {
        return 1
      }
      if (a.distanceToPlayer < b.distanceToPlayer) {
        return -1
      }
      return 0
    })
}
