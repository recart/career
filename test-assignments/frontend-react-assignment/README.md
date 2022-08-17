# Recart

### Front-end Test Assignment

The goal of this exercise is to test your front-end development skills on a pre-defined project.

Don't stress if you can't get every part done -- spend a maximum of 5 hours on this assignment. Feel free to add comments or README notes to help us understand your thinking and decisions. If we like your code overall, we'll discuss the solution in person too so you'll get a chance to tell us what else you wanted to add and how you planned to implement those.

The main objective is that the code you submit is well-structured and covered with unit tests.

Submit your code through `BitBucket` by creating a private repository and sharing it with the `developer-account@recart.com` email address.

Please submit the base project as your initial commit and implement the tasks in separate commits to make the review easier.

## Tasks

- Create a new component which does a basic pagination.
  - This component should contain 2 buttons (Prev, Next) which can paginate the colleague list in the correct direction. The list should only show 5 elements at a time.
  - Hint: Try to use a Higher Order Component. Do NOT use a 3rd party library for the pagination feature itself but feel free to use any other package for the implementation.
- Collect the favorite colleagues in a separated list called the “favorites list” already seen on the UI.
  - Hint: The colleague objects already have a `favorite` boolean field.
  - Optional task: Make this list also pageable.
- Add a new input field on the UI to be able to record the title for a new colleague.
  - This field’s value should be presented in the colleague list.
- Write unit tests for every new code you write, with a testing framework of your choice.
  - Hint: Our recommended unit testing framework is Jest.

## Usage

Download / clone this repository and run these commands in this directory:

```
npm install
npm start
```
