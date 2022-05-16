//object_literal
const book = {
    author: "john doe",
    title: "Book One",
    year: 2013,
    getSummary() {
        console.log(`${this.title} was written by ${this.author} in the year ${this.year}`)
    }
}

// function Book(author, title, year) {
//     this.author = author
//     this.title = title
//     this.year = year

//     this.getSummary = function () {
//         console.log(`${this.title} was written by ${this.author} in the year ${this.year}`)
//     }
// }


function Book(author, title, year) {
    this.author = author
    this.title = title
    this.year = year
}

Book.prototype.getSummary = function () {
    console.log(`${this.title} was written by ${this.author} in the year ${this.year}`)
}


function Magazine(author, title, year, month) {
    Book.call(this, author, title, year)

    this.month = month
}


Magazine.prototype = Object.create(Book.prototype)


const book1 = new Book("John", "Book one", 2012)
const book2 = new Book("Jane", "Book two", 2016)
const mag1 = new Magazine("kent", "Mag 1", 2000, "feb")


//Classes
class Paper {
    constructor(author, title, year) {
        this.author = author
        this.title = title
        this.year = year
    }

    getSummary() {
        console.log(`${this.title} was written by ${this.author} in the year ${this.year}`)
    }
}


const paper1 = new Paper("kent", "Book 1", 2012)


class Magazine2 extends Paper {
    constructor(author, title, year, month) {
        super(author, title, year)
        this.month = month
    }
}

const mag2 = new Magazine2("dc", "Good Liar", 2001, "jan")

mag2.getSummary()