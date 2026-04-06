let employees = [];
let employee = {};

let i1 = document.getElementById("name");
let i2 = document.getElementById("id");
let i3 = document.getElementById("salary");
let i4 = document.getElementById("dept");

function addemployee() {
    employee = {
        name: i1.value,
        id: i2.value,
        salary: i3.value,
        dept: i4.value};
    employees.push(employee);
    i1.value = "";
    i2.value = "";
    i3.value = "";
    i4.value = "";}

    let total = 0;
    function totalsalary(){
    for(let i=0; i<employees.length; i++){
        total += parseFloat(employees[i].salary);
    }};

    let avg;
    function avgsalary(){
    avg = total / employees.length;};

    function displayall(){
        document.write("total salary:"+ total + "<br>");
        document.write("average salary:"+ avg + "<br>");
        let j;
        for(j=0; j<employees.length; j++){
            document.write(
                employees[j].name + "</br>"+
                employees[j].id + "</br>"+
                employees[j].salary + "</br>"+
                employees[j].dept + "</br>"
            )
    };};

function filtersalary(){
    let em = employees.filter((employee) => employee.salary > 50000);
    let n = em.length;
    for(let i = 0; i < n; i++){
        document.write(
            "name" + em[i].name + "|" + "salary" + em[i].salary + em[i].salary + "</br>");
    };};

    function deptwise(){
        let dept = prompt("Enter the department name:");
        let count = 0;
        for(let i = 0; i < employees.length; i++){
            if(employees[i].dept === dept){
                count++;
            }}
        document.write("Number of employees in " + dept + " department: " + count);
    };