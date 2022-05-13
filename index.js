//Factory Function
function createCircle(radius) {
    let defaultLocation = { x: 0, y: 0 }

    return {
        radius,
        getDiameter() {
            return `This circle diameter is ${this.radius * 2} km`
        },

        draw() {
            console.log(defaultLocation)
        }
    }
}

const circle1 = createCircle(5)

//Constructor function
function Circle(radius) {
    this.radius = radius

    let = defaultLocation = { x: 2, y: 5 }

    let computeOptimumLocation = function () {
        return null
    }

    this.getDiameter = function () {
        return `This circle diameter is ${radius * 2} km`
    }

    this.draw = function () {
        computeOptimumLocation()
        console.log(defaultLocation)
    }

    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation
        },

        set: function (value) {
            if (!value.x || !value.y) throw new Error("invalid number")
            defaultLocation = value
        }
    })
}

const ballCircle = new Circle(2)
let circleDiameter = ballCircle.getDiameter()

// Adding and deleting properties from an object
ballCircle["id"] = Math.random()

delete ballCircle.id

//Enumerating properties in an object
for (let key in ballCircle) {
    if (typeof ballCircle[key] === "function") continue
    // console.log(key);
}

let entries = Object.entries(ballCircle)


//Testing properties in am object
let testProp = "radius" in ballCircle
let testProp2 = ballCircle.hasOwnProperty("radius")


//Abstraction
let defaultLocation1 = ballCircle.defaultLocation

ballCircle.defaultLocation = { x: 2, y: 5 }
