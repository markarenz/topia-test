import { calcDistanceToPlayer, sortByDistanceToPlayer } from "./userListUtils";

export default function listUsersInView(users, positionX, positionY, screenWidth, screenHeight) {
  const usersInView = [];

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE
  const avatarWidth = 50
  const avatarHeight = 125

  // Gen the boundary of the canvas based on our position and the screen dimensions
  const canvasBoundaries = {
    l: positionX - Math.floor(screenWidth / 2),
    r: positionX + Math.ceil(screenWidth / 2),
    t: positionY - Math.floor(screenHeight / 2),
    b: positionY + Math.ceil(screenHeight / 2),
  }
  // Function to determine if a point is within the canvas boundary
  const pointWithinBoundary = (x, y) => x >= canvasBoundaries.l
    && x <= canvasBoundaries.r
    && y >= canvasBoundaries.t
    && y <= canvasBoundaries.b

  // Map through the keys of the user hash table
  Object.keys(users).forEach((userKey) => {
    const user = users[userKey]
    // Determine the user's avatar boundaries
    const userBoundaries = {
      l: user.x - Math.floor(avatarWidth / 2),
      r: user.x + Math.ceil(avatarWidth / 2),
      t: user.y - Math.floor(avatarHeight / 2),
      b: user.y + Math.ceil(avatarHeight / 2),
    }

    // If any corner is within the bounds, it is visible within the canvas
    if (
      pointWithinBoundary(userBoundaries.l, userBoundaries.t)
      || pointWithinBoundary(userBoundaries.r, userBoundaries.t)
      || pointWithinBoundary(userBoundaries.l, userBoundaries.b)
      || pointWithinBoundary(userBoundaries.r, userBoundaries.b)
    ) {

      user.distanceToPlayer = calcDistanceToPlayer(user.x, user.y, positionX, positionY)

      // Add the user ID to the array of users in the canvas view
      usersInView.push(user)
    }
    sortByDistanceToPlayer(usersInView)
  })

  // END SOLUTION SECTION

  return usersInView;
}
