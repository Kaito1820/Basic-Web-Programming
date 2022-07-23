// object = a container for properties/methods

//property = values/variables that describe what an object has
// methods = functions that describe what an object can do
var emailKey = 'email'

var human = {
    //key : value,
    name: "Kaito",
    // 'full-name' : 'Kaito'
    age : 18,

    eat : function(){
        console.log("Kaito is eating food")
    },

    drink : function(){
        console.log("Kaito is drinking water")
    },

    sleep : function(){
        console.log("Kaito is sleeping in bed")
    },

    getAge: function(){
        return this.age;
    },
    
    [emailKey] : 'khanh1820' // luc nay 1 key la email duoc tao ra, ko phai emailKey 
    // myKey: 'bbbbb'
}
human.email = 'nguyenduykhanh1820@gmail.com'
// or human['my-email'] = 'nguyenduykhanh1820@gmail.com'
human.drink()
console.log(human.email)

var myKey = 'aaaaa' 
// console.log(human.myKey)
console.log(human[myKey])

console.log('-------------------------------------')
delete human.name // xoa key
console.log(human)