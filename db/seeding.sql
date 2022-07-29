--
-- made by fixedOtter on 29.7.2022
--

USE employee_dir;

INSERT INTO department (name) VALUES
  ('Engineers'),
  ('Business Development'),
  ('Client Services'),
  ('Leadership');

INSERT INTO occupation (title, department_id) VALUES
  ('Project Engineer', 1),
  ('Salesperson', 2),
  ('Account Director', 2),
  ('Project Coordinator', 3),
  ('Project Manager', 3);