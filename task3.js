function emptyObjCreate () {
    const obj = Object.create(null);
    return obj;
};

emptyObj = emptyObjCreate ();
console.log(emptyObj); //проверка, что объект пустой
console.log(Object.getPrototypeOf(emptyObj)); //проверка на наличие прототипа


//проверка, что каждый раз будет создаваться именно новый объект, а не ссылка на тот же
testObj = emptyObjCreate ();
testObj.test = "test";
console.log(emptyObj);
console.log(testObj);