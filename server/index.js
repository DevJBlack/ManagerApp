const express = require('express')
const massive = require('massive')
require('dotenv/config')

const EmployeesCtrl = require('./controllers/employees')

const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive( CONNECTION_STRING ).then(db => {
  app.set('db', db)
    console.log('DataBase Is Secure')
  app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))
})

app.use(express.json())

app.get('/api/employees', EmployeesCtrl.allEmployees)
app.post('/api/employees', EmployeesCtrl.addEmployees)
app.delete('/api/employees/:id', EmployeesCtrl.fireEmployees)
app.put('/api/employees/:id', EmployeesCtrl.updateEmployee)



const path = require('path'); // Usually moved to the start of file

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});