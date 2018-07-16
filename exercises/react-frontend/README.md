## Recart Frontend Exercise
The goal of this exercise is to test your front-end development skills on a predefined project. Your task is to complete every item of the tasklist listed below. We would like to ask you not to spend more than 5 hours on this test and see how far did you get in that maximum time range. Don’t worry it’s totally okay if you can’t finish every task. The main objective would be that the code you submit is well structured and covered with unit tests in terms of your current technical knowledge. Please do NOT use any 3rd party library or npm package other than the ones already presented in the `package.json` except for unit testing.

## Tasks
- Create a new component which does a basic paginating.
  - This component should contain 2 buttons (Prev, Next) which can paginate the colleague list in the correct direction. The list should only show 5 element at a time.
  - Hint: Try to use a Higher Order Component.
- Collect the favorite colleagues in a separated list called the “favorites list” already seen on the UI.
  - Hint: The colleague objects already have a “favorite” boolean field.
  - Optional task: Make this list also pageable.
- Add a new input field on the UI to be able to record the title for a new colleague.
  - This field’s value should be presented in the colleague list.
- Write unit test in any testing framework you prefer on every new code you write.
  - Hint: Our recommended unit testing framework is JEST.
  - Optional task: Write some tests for the AddColleagueInput component.

## Usage

Starting library: `career/exercises/react-frontend`

```
npm install
npm start
```
