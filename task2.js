const person = {
    name: "Igor",
    age: 21,
    city: "Moscow"
};

let keyName = "name";

function ifStrKey (obj, str) {
    let f = false;
    for (let key in obj){
        if (key === str){
            f = true;
        }
    }
    return f;
};

console.log(ifStrKey(person, keyName))