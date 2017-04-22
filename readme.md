## Combine All The Things

### Basic Mode
- Combine _Markdown Editor_, _Quiz_, _Reactpardy_ assignments into a single app.
- 4 Routes needed: /, /game, /quiz, /editor
- Do not move every file to the new project
  - Copy over the components and actions from each assignment to this new project
- MAIN FOCUS
  - Start with most complete assignment
  - Once it's COMPLETELY working, move on to the next
  - Keep in mind you will have ONE reducer and ONE state for all 3 apps
- Once all old code is in the app and all 3 pages work, the way they did before, start writing tests

### Plan and Checklist
##### 4 Routes needed
- [ ] within app.js
  - [ ] "/"
  - [ ] "/game"
  - [ ] "/quiz"
  - [ ] "/editor"

##### Editor
- [X] Is this assignment complete?
- [X] Copy components/actions
  - [X] action: save_note.js - change name
  - [X] comp: button.js - change name
  - [X] comp: markdown_preview.js - change name
  - [X] comp: text_area.js - change name
  - [X] base: api.js
  - [X] reducer


##### Quiz
- [Nope] Is this assignment complete?
- [X] Copy components
- [X] Copy actions

##### Reactpardy
- [Nope] Is this assignment complete?
- [ ] Copy components
- [ ] Copy actions

##### Test: Once All Old Code Is In
- [ ] Minimum of 1 unit test per component
- [ ] Minimum of 1 unit per reducer action

##### Questions
- Use 3 Containers!
