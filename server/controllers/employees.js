module.exports = {
  allEmployees: async (req, res) => {
    try {
        let db = req.app.get('db')
        let employees = await db.employees.get_all_employees()
        res.send(employees)
    } catch ( error ) {
      console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  },

  oneEmployee: async (req, res) => {
    try {
        let db = req.app.get('db')
        let { id } = req.params
        let employees = await db.employees.get_employees(id)
        let employee = employees[0]
        res.send(employee)
    } catch ( error ) {
      console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  },

  addEmployees: async (req, res) => {
    try {
        let db = req.app.get('db')
        const { first_name, last_name, email, phone_number } = req.body

        let employees = await db.employees.hire_employee({
          first_name,
          last_name,
          email,
          phone_number
        })

        res.send(employees)

    } catch ( error ) {
      console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  },

  fireEmployees: async (req, res) => {
    try {
        let db = req.app.get('db')
        const { id } = req.params
        console.log(req.params)

        let employees = await db.employees.fire_employee(id)
         res.send(employees)

    } catch ( error ) {
      console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  },

  updateEmployee: async (req, res) => {
    try {
        let db = req.app.get('db')
        let { first_name, last_name, email, phone_number } = req.body.edit
        let { id } = req.params
        console.log(req.body, req.params)
        id = +id

        let employees = await db.employees.update_employees({
          id,
          first_name, 
          last_name,
          email,
          phone_number
        })
        
        res.send(employees)

    } catch ( error ) {
      console.log('error fetching posts:', error)
        res.status(500).send(error) 
    }
  }
}