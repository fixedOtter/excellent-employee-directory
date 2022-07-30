--
-- made by fixedOtter on 29.7.2022
--

-- first declaring the database we will use
CREATE DATABASE employee_dir;

-- telling sql what datbase i'm talking to
USE employee_dir;

-- creating department grandparent table
CREATE TABLE IF NOT EXISTS department(
  department_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- creating occupation child / parent table
CREATE TABLE IF NOT EXISTS occupation(
  occupation_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);

-- creating grandchild table
CREATE TABLE IF NOT EXISTS employee(
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  occupation_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (occupation_id) REFERENCES occupation(occupation_id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);