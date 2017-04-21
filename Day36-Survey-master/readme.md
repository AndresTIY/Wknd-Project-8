## Question Question Question Homework
Building a multipage application with react-router and redux
A Survey Taking Application

### Explorer Mode
- Using React components, create a Start Page, Question Page, and Results Page. There should be a minimum of 10 questions hard coded into the application
- Start page should welcome the user, tell them how many questions there are as well as link to each question, there should also be a START button on the page that takes them to question one
- Question page should include question being asked, an input field for writing in your answer, a previous question button, and a next button
- Results page should show user all of the questions and their answers in a tabular format. If they go to the Results page without answering a question, it should be highlighted in css
- App should be fully styled
- Once user hits submit, answered should be stored in backendless under a 'results' table
- App should have at least these Routes:
/, /start, /question/1, /question/2, #..., /results

### Plan it and Check it

Components
- [X] Start Page
- [X] Question Page
- [ ] Results Page

Start Page
- [X] Text that welcomes user
- [X] Tell them how many questions
- [X] Link to each question
- [X] Start Button
  - [X] Takes user to Question 1


Question Page
- [X] Question being asked
- [X] Input field for answer
  - [X] Capture Data from Input with Button
- [X] Next Question Button
- [X] Previous Question Button


Result Page
- [ ] Shows all questions and answers in tabular format
- [ ] If question isn't answered, use CSS to highlight it

Routes Required to use
- [X] /
- [X] /start/
- [X] /question/1
- [X] /question/2
- [X] #...
- [ ] /results


### Challenges
- Trying to make a button event take the user to the next link was a challenge. I couldn't figure it out but instead, created a `Link to` instead of a button which worked
- Had a difficult time trying to create an onClick event. I originally had all the questions outside of the `class Questions extends React.Component` set as a `const`. So within the `const`, I did `<button onClick = {this.buttonClick}>` in different variations but didn't far. I eventually just put each question in it's own class, and the button clicks worked. It's not very efficient or DRY but it worked.
