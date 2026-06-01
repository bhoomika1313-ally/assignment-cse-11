import Student from "./components/Student.jsx";

export default function App() {
  const students = [
    { name: "Rahul Sharma", course: "Computer Science", marks: 85 },
    { name: "Anita Verma", course: "information technology", marks: 92 },
    { name: "Rohan Gupta", course: "electronics ", marks: 78 }
  ];

  return (
    <div className="container">
      <h1>Student Information</h1>

      {students.map((s, i) => (
        <Student
          key={i}
          name={s.name}
          course={s.course}
          marks={s.marks}
        />
      ))}
    </div>
  );
}