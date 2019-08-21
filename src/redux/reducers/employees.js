import axios from 'axios'

const GET_EMPLOYEES = 'GET_EMPLOYEES'
const GET_EMPLOYEES_FULFILLED = 'GET_EMPLOYEES_FULFILLED'

const HIRE_EMPLOYEES = 'HIRE_EMPLOYEES'
const HIRE_EMPLOYEES_FULFILLED = 'HIRE_EMPLOYEES_FULFILLED'

const FIRE_EMPLOYEES = 'FIRE_EMPLOYEES'
const FIRE_EMPLOYEES_FULFILLED = 'FIRE_EMPLOYEES_FULFILLED'

const UPDATE_EMPLOYEES = 'UPDATE_EMPLOYEES'
const UPDATE_EMPLOYEES_FULFILLED = 'UPDATE_EMPLOYEES_FULFILLED'

let initialState = {
  data: []
}

export default function ( state = initialState, action ){
  switch(action.type){
    case GET_EMPLOYEES_FULFILLED:
      return { ...state, data: action.payload.data }
    case HIRE_EMPLOYEES_FULFILLED:
      return { ...state, data: action.payload.data }
    case FIRE_EMPLOYEES_FULFILLED:
      return { ...state, data: action.payload.data }
    case UPDATE_EMPLOYEES_FULFILLED:
      return { ...state, data: action.payload.data }
    default:
      return state
  }
}

export function getEmployees(){
  return {
    type: GET_EMPLOYEES,
    payload: axios.get('/api/employees')
  }
}

export function hireEmployees(){
  return {
    type: HIRE_EMPLOYEES,
    payload: axios.post('/api/products')
  }
}

export function fireEmployees(id){
  return {
    type: FIRE_EMPLOYEES,
    payload: axios.delete(`/api/employees/${id}`)
  }
}

export function updateEmployees(id){
  return{
    type: UPDATE_EMPLOYEES,
    payload: axios.put(`/api/employees/${id}`)
  }
}