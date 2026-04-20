const courseTitle = "Web Development"

function App() {
  const studentName = "Nour Douzi"
const student = {
  name: "Nour",
  age: 20,
  track: "Computer Science"
}
function sayHello() {
  return "Hello " + studentName + "!"
}
  return (
    <div>
      <h1>Learning React</h1>
      <p>{studentName}</p>
      <p>{courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="studentInput">Enter your name: </label>
      <input type="text" id="studentInput" /><p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
    </div>
  )
}
// my mistake was that i forgot to press ctrl + s to save my work thus nothing changed so I learned to always save my work.
export default App