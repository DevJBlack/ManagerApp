UPDATE employees 
SET
  first_name=${first_name},
  last_name=${last_name},
  email=${email},
  phone_number=${phone_number}
WHERE employees_id=${id};

SELECT * FROM employees;