// Write your solution in this file!
const employee = {
    name: "Guy Bob",
    streetAddress: "123 Jump Street",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}