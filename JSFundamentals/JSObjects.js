let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

students.forEach((student, index) => 
{
    console.log("Name: " + student.name + ", Cohort: " + student.cohort);
})

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function characterCount(usersArr)
{
    console.log("EMPLOYEES")
    var characterLength = 0;
    for (var i = 0; i < usersArr.employees.length; i++)
    {
        characterLength = (usersArr.employees[i]['first_name'].length + usersArr.employees[i]['last_name'].length);
        console.log((i+1) + " - " + usersArr.employees[i]['last_name'] + ", " + usersArr.employees[i]['first_name'] + " - " + characterLength);
    }
    console.log("\nMANAGERS")
    for (var i = 0; i < usersArr.managers.length; i++)
    {
        characterLength = (usersArr.managers[i]['first_name'].length + usersArr.managers[i]['last_name'].length);
        console.log((i+1) + " - " + usersArr.managers[i]['last_name'] + ", " + usersArr.managers[i]['first_name'] + " - " + characterLength);
    }
}

characterCount(users);