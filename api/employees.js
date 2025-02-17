const Employee = require('../models/employee');

const EmployeeResolvers = {
    Query: {
        async getAllEmployees(_, {}) {
            try {
                const employees = await Employee.find();
                return employees;
            } catch (err) {
                return err;
            }
        },
        async getEmployee(_, { id }) {
            try {
                const employee = await Employee.findById(id);
                return employee;
            } catch (err) {
                return err;
            }
        },
        async searchEmployees(_, { query }) {
            try {
                const employees = await Employee.find({ $text: { $search: query } });
                return employees;
            } catch (err) {
                return err;
            }
        },
    },
    Mutation: {
        async addEmployee(_, { employee }) {
            const newEmployee = new Employee(employee);
            try {
                await newEmployee.save();
                return newEmployee;
            } catch (ex) {
                return ex;
            }
        },
        async updateEmployee(_, { id, employee }) {
            try {
                const updatedEmployee = await Employee.findByIdAndUpdate(id, employee, { new: true });
                return updatedEmployee;
            } catch (err) {
                return err;
            }
        },
        async deleteEmployee(_, { id }) {
            const result = await Employee.findByIdAndDelete(id);
            if (!result) {
                return false;
            }
            return true;
        },
    },
};

module.exports = EmployeeResolvers;