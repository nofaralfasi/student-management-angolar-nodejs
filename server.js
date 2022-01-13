const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 8888;

const students = [
  {
    id: 1,
    first_name: 'Nofar',
    last_name: 'Alfasi',
    address: 'Remez 20',
    city: 'Rishon-Lezion',
    state: 'Israel',
    grade: 12
  },
  {
    id: 2,
    first_name: 'Peter',
    last_name: 'Griffin',
    address: '31 Spooner Street',
    city: 'Quahog',
    state: 'Rhode Island',
    grade: 2
  },
  {
    id: 3,
    first_name: 'Lois',
    last_name: 'Griffin',
    address: '31 Spooner Street',
    city: 'Quahog',
    state: 'Rhode Island',
    grade: 11
  },
  {
    id: 4,
    first_name: 'Meg',
    last_name: 'Griffin',
    address: '31 Spooner Street',
    city: 'Quahog',
    state: 'Rhode Island',
    grade: 1
  },
  {
    id: 5,
    first_name: 'Chris',
    last_name: 'Griffin',
    address: '31 Spooner Street',
    city: 'Quahog',
    state: 'Rhode Island',
    grade: 3
  },
  {
    id: 6,
    first_name: 'Stewie',
    last_name: 'Griffin',
    address: '31 Spooner Street',
    city: 'Quahog',
    state: 'Rhode Island',
    grade: 12
  },
  {
    id: 7,
    first_name: 'Brian',
    last_name: 'Griffin',
    address: '31 Spooner Street',
    city: 'Quahog',
    state: 'Rhode Island',
    grade: 12
  }
];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/client/dist/"));

app.get('/', (req,res) => {
  console.log(`Server get on port::${port}`);
  res.sendFile(process.cwd()+"/client/dist/index.html")
});

app.get('/api', (req, res) => {
  console.log(`Server get on port::${port}`);
  res.json(students);
});

app.get('/api/getStudents', (req, res) => {
  // console.log(students);
  console.log(`Server getStudents on port::${port}`);
  res.json(students);
});

app.post('/api/createStudent', (req, res) => {
  const student = req.body.student;
  // console.log(students);
  students.push(student);
  console.log(`Server createStudent on port::${port}`);
  // res.json("user added");
  res.json(students);
});

app.post('/api/updateStudent', (req, res) => {
  const student = req.body.student;
  // console.log(students);
  students[student.id] = student;
  console.log(`Server updateStudent on port::${port}`);
  // res.json("user added");
  res.json(students);
});

app.delete(`/api/deleteStudent/:id`, (req, res) => {
  console.log(`Server deleteStudent on the port::${port}`);
 let id =  req.params.id;
  students.splice(id, 1);
  res.json(students);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
