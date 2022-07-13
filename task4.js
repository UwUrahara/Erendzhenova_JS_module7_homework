//-------------------------------------------------------------------------------------------------
// Определим родительскую функцию.

function Electrodevice(power){
    this.power = power,
    this.status = false,
    this.getPowerConsumption = function(){
        if (this.status) {
            console.log(`This device consumes ${this.power} W.В.`);
        } else {
            console.log(`This device doesn't work and doesn't consume anything`);
        }
    }
}

//-------------------------------------------------------------------------------------------------
// Определим метод для родительской функции, который включает/выключает прибор из розетки.

Electrodevice.prototype.switch = function () {
    if (this.status) {
        this.status = false;
    } else {
        this.status = true
    }
}


//-------------------------------------------------------------------------------------------------
// Создадим делегирующую связь [[Prototype]] для приборов: Чайники.

function Kettles(power, volume){
    this.power = power,
    this.volume = volume,
    this.timeBoil = function(){
        console.log(`A full kettle will boil water in ${369600*this.volume/this.power} seconds`)
    }
    this.getPowerConsumption = function(){
        if (this.status) {
            console.log(`This kettle consumes ${this.power} W.В.`);
        } else {
            console.log(`This kettle doesn't work and doesn't consume anything`);
        }
    }
}

Kettles.prototype = new Electrodevice ()


//-------------------------------------------------------------------------------------------------
// Создадим делегирующую связь [[Prototype]] для приборов: Компьютеры.

function Computers(power){
    this.power = power,
    this.getPowerConsumption = function(){
        if (this.status) {
            console.log(`This computer consumes ${this.power} W.В.`);
        } else {
            console.log(`This computer doesn't work and doesn't consume anything`);
        }
    }
}

Computers.prototype = new Electrodevice ()


//-------------------------------------------------------------------------------------------------
// Проверим и выведем в консоль.

const luminaire = new Electrodevice(220);
const kettle = new Kettles(300);
const myComputer = new Computers(600);
const broComputer = new Computers(1200);


luminaire.getPowerConsumption() // "This device doesn't work and doesn't consume anything"
luminaire.switch() // Включаем
luminaire.getPowerConsumption() // "This device consumes 220 W.В."

kettle.timeBoil() // Метод, отличный от родительского

kettle.switch() // Включим еще девайсы
myComputer.switch()

kettle.getPowerConsumption() // "This kettle consumes 300 W.В."
myComputer.getPowerConsumption() // "This computer consumes 600 W.В."
broComputer.getPowerConsumption() // Не включили, поэтому: "This device doesn't work and doesn't consume anything"


kettle.switch() // Выключим чайник
kettle.getPowerConsumption() // Проверим