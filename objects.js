
function inherit(p) {
    if (p === null) throw TypeError()
    if (Object.create) return Object.create(p)

    const t = typeof p
    if (t !== "object" && t !== "function") throw new TypeError("This object is not supported")

    function construct() { }

    construct.prototype = p

    return new construct()
}


//inheritance
const o = {}
o.x = 1

const p = inherit(o)
p.y = 2

const q = inherit(p)
q.z = 3

// console.log(p.isPrototypeOf(q))



console.dir(Object.prototype)
//Deleting a prototype
var x = 1

this.x = 2

delete this.x

console.log(x)


//Testing for existence
q.propertyIsEnumerable("y")
q.hasOwnProperty("x")

console.log("x" in q)

//Enumerating an object
//* for (let key in q) console.log(q[key])

for (let key in q) {
    if (!q.hasOwnProperty(key)) continue
    if (typeof q[key]) continue

    console.log(key)
}

console.log(Object.getOwnPropertyNames(q));

// Getters and Setters

const car = {

    get brand() {
        return "Tesla"
    },

    set brand(newBrand) {

    },

    year: 2012,
    new: true,
    price: "2,000,000",
    getSummary() {
        summary = `This car was developed by ${this.brand} in the year ${2012}`

        console.log(summary)
    }
}

car.getSummary()

let carAttributes = Object.getOwnPropertyDescriptor(car, "year")

//! console.log("🚀 ~ file: objects.js ~ line 84 ~ carAttributes", carAttributes)


const human = Object.defineProperties({}, {
    handsome: {
        value: "true",
        writable: false,
        configurable: true,
        enumerable: true
    },

    name: {
        value: "kelvin",
        writable: false,
        configurable: false,
        enumerable: true
    },

    age: {
        get: () => {
            return 17
        },

        set: (newAge) => {
            if (newAge < 17) return new Error("cannot set wrong age")

            age = newAge
        },

        enumerable: true,
        configurable: false
    }

})

// Object.defineProperty(human, "age", {
//     configurable: true
// })

//non writable
// human.name = "seun"
// console.log(human.name)

// non configurable
// delete human.age
// console.log(human.age)
let humanProtoType = Object.getPrototypeOf(human)
const carProtoType = Object.getPrototypeOf(car)
console.log("🚀 ~ file: objects.js ~ line 132 ~ carProtoType", carProtoType)

Object.seal(human)
Object.freeze(car)

let obj = {

}








