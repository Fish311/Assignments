var employees = []
function Employee(name, jobTitle, salary, status = "Full-time") {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm  = function(){
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status)
    }
}
var fred = new Employee("Fred", "Sales", "70,000")
var steve = new Employee("Steve", "Customer Service", "40,000")
var erika = new Employee("Erika", "IT", "60,000", "Part-time")

fred.printEmployeeForm()
steve.printEmployeeForm()
erika.printEmployeeForm()
employees.push(fred, steve, erika)
console.log(employees)