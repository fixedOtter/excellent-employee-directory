--
-- made by fixedOtter on 29.7.2022
--

USE employee_dir;

-- SELECT * FROM department;

-- SELECT * FROM occupation;

-- SELECT
--   name AS 'Department Name',
--   title AS 'Occupation Title' -- which columns I'm grabbing
--   FROM department -- grabbing from department
--     LEFT JOIN occupation -- joining with occupational data
--     ON department.department_id = occupation.department_id; -- linking the two by their related ID's

-- SELECT * FROM department LEFT JOIN occupation ON department.department_id = occupation.department_id; -- same thing as above
-- -- LEFT join grabs everything from left table, RIGHT grabs all from right table
-- -- INNER is the default (just grabbing what columns have data)


-- grabs employee name with job title
SELECT
  first_name 'First Name',
  last_name 'Last Name',
  title 'Job Title'
  FROM employee
    LEFT JOIN occupation
    ON occupation.occupation_id = employee.occupation_id;

-- SELECT
--   COUNT(department_id) AS 'Amount of Departments'
--   FROM department;


SELECT
  first_name 'First Name',
  last_name 'Last Name',
  JSON_ARRAYAGG(JSON_OBJECT('Job Title', occ.title, 'Salary', occ.salary)) AS salaryInfo
  FROM employee emp
    JOIN occupation occ
    ON occupation.occupation_id = employee.occupation_id
  GROUP BY occupation.title;