const person = {
    name: "Igor",
    age: 21,
    city: "Moscow"
};

const employee = Object.create(person);
employee.company = "Google";
employee.grade = 17;

function outputInfo (obj) {
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key + ": " + obj[key])
        }
    }
};

outputInfo(employee)