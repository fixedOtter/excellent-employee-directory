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
--     ON department.id = occupation.department_id; -- linking the two by their related ID's

-- SELECT * FROM department LEFT JOIN occupation ON department.id = occupation.department_id; -- same thing
-- LEFT join grabs everything from left table, RIGHT grabs all from right table
-- INNER is the default (just grabbing what columns have data)

SELECT
  COUNT(department_id) AS 'Amount of Departments'
  FROM department;
