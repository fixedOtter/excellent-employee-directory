--
-- made by fixedOtter on 29.7.2022
--

USE employee_dir;

INSERT INTO department (name) VALUES
  ('Leadership'),
  ('Business Development'),
  ('Creative'),
  ('Engineers');

INSERT INTO occupation (title, salary, department_id) VALUES
  ('CEO', 999999, 1),
  ('CFO', 888888, 1),
  ('HR Director', 777777, 1),
  ('Sales Director', 666666, 2),
  ('Salesperson', 555555, 2),
  ('Creative Director', 444444, 3),
  ('UI Designer', 333333, 3),
  ('Fullstack Engineer', 222222, 4),
  ('Frontend Engineer', 111111, 4);

INSERT INTO employee (first_name, last_name, occupation_id, manager_id) VALUES
  ('baub', 'roberts', 1, null),
  ('jawnathin', 'floote', 2, 1),
  ('emily', 'turquoise', 3, 1),
  ('stivin', 'medly', 4, 1),
  ('tim', 'tam', 5, 4),
  ('boilly', 'letson', 6, 1),
  ('mickail', 'riste', 7, 6),
  ('jauwhn', 'sealson', 8, 1),
  ('saul', 'hajik', 9, 8);