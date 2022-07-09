// object = a container for properties/methods

//property = values/variables that describe what an object has
// methods = functions that describe what an object can do

var human = {
    name: "Kaito",
    age : 18,

    eat : function(){
        console.log("Kaito is eating food")
    },

    drink : function(){
        console.log("Kaito is drinking water")
    },

    sleep : function(){
        console.log("Kaito is sleeping in bed")
    }
}

console.log(human.drink());