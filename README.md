# Topia Frontend Coding Challenge

### Premise

Topia is a combination of several front-end technologies. There is a graphical canvas, a user interface, and a streaming system. All 3 interact to deliver a unique experience.

This test is designed to touch on the elements of all 3.

While topia runs on a user’s computer, peer avatars are added or removed from the canvas depending on whether or not the peer avatar falls within the range of the user’s viewport. A user’s screen height and width determine how much of the Topia a user can see centered on their own avatar.

In this test, you will rewrite the central algorithm that runs in Topia to maintain which peer avatars are on canvas and which ones are not.

You will wrap the results of this algorithm in a user interface of your own design.

- At the root level of this project, in `App.js`, you are expected to present a button named `Create User List`.
- Pressing this button will launch a modal that will display input fields for current position with default values of `x = 800; y = 400`
- `x, y` (the user’s current position) should be editable in the modal and as it changes it should update the results of the list.
- The list of users can be found in `/src/utils/constants.js`
- Upon closing the modal and when current position and screen size update state, run a utility located in `/src/utils/listUsersInView.js` called `listUsersInView`. This function should return an array of the users in view. `more details about the functionality of this utility are below`
- From this array, list the users in a table, sorted by distance to the center `x,y`
- Columns for the table should be: username, distance, and a visual indication whether this user is a broadcaster or not. For this, there is a field called `is_broadcaster` in the user object.
- For purposes of this test and for use in `listUsersInView` assume the avatar height and width for each user is `height = 125px` and `width = 50px` and that the position of each user is the center point of the avatar

### User List Functionality

Your task is to complete the function `listUsersInView`. It has 5 arguments:

- `users` - a map of users to search through. Each user is indexed by the user’s ID. Each object of the indexed user contains an x, y, width and height.

- `positionX`, `positionY` - The X and Y coordinate of the user’s own avatar

- `screenWidth`, `screenHeight` - The width and height of the user’s screen

You are to use these arguments to determine whether or not a peer avatar in `users` is indeed in the user’s viewport of `screenWidth` width and `screenHeight` height centered at `positionX` and `positionY`

For each peer avatar that appears in the viewport, add the ID of that user to the array `usersInView` which is currently declared and empty at the top of the function `listUsersInView`.

### How to complete

Please submit this completed project to a new github repo. We can coordinate our own use and download of the completed code when you let us know you’re done!

To run this repository, run: `npm start` from the project directory at your terminal and test your progress at `http://localhost:3000/`. Please ensure `node` and `npm` are installed on your computer

##### Happy Coding!

### Mark Arenz Topia Code Test

Using a useContext hook to manage global state allowed me to clean up the App.js JSX and avoid prop drilling. Mimicking a TDD process, I started with the `listUsersInView()` function and its associated sub-functions and wrote the tests before anything else. This helped me make sure the foundation was sound before adding UI. I also included an extra feature that allows you to switch between the user list table and a "canvas preview" that displays the mock users within a hypothetical viewport. Sorry, I couldn't help it. The feature was fairly low lift since the trickier aspects of it had already been done as part of the main assignment.

#### How to Use
- After starting the app with `npm run start` view the page in a browser at `localhost:3000`
- Click on the `Create User List` button and set the X and Y position to generate a list of users within the window's viewport.
- The results will appear in a table with an icon to indicate which users are broadcasters
- Click on the switch on the upper right to toggle between the user list and "canvas preview" mode where you can see the users in their relative positions.

#### Caveats and Future Improvements

- **More detailed styling.** If I had extra time, I would have leaned more into the custom MUI theme to manage the text variants and colors. This would have allowed me to use fewer `style` & `sx` props.
- **More component tests**. I put together some unit tests, but with more time or in a "real" situation, I'd add more useful component tests. For this exercise, I focused mainly on the functional unit tests.
- **More comments** to clarify rationale for various code patterns
- **Dark mode**, of course

This was a lot of fun to put together. Thanks!