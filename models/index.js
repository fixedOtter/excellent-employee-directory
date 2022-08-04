//
// made by fixedOtter on 3.8.2022
//

// Export an object that will hold all of our route files as properties
module.exports = {
  // Set our view_routes property to our required view_routes object
  Department: require('./Department.model'),
  Occupation: require('./Occupation.model'),
  Employee: require('./Employee.model')
}