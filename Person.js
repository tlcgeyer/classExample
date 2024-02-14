//Making use of class
class Person {
    static count = 0 //we only want the variable to be dependent on the class
    constructor() {
        this.firstName =
        'Please provide first name'
        this.lastName =
        'Please provide last name'
        this.age = 0
        Person.count += 1 //to allow that every time you create a new object its gonna increase by one
    }
    //First name
    // created methods to update firstName 
    set FirstName(value) {
        this.firstName = value
    }
    //method to retrieve the values that were stored.
    get FirstName() {
        return this.firstName
    }

     //Last name
    set LastName(value) {
        this.lastName = value
    }
    get LastName() {
        return this.lastName
    }

    //Age
    set Age(value) {
        this.age = value
    }
    get Age() {
        return this.age
    }

    //Display method, its gonna display the user's information
    display() {
        console.log(`
        Person ID: ${Person.count}
        First name: ${this.FirstName}
        Last name: ${this.LastName}
        Age: ${this.Age}
        `);
    }
}
// have to export 
export {
    Person
}



function pushToArr(...args) {
    var arr = [];
    for (var i = 0; i <= args.length; i++) {
        setTimeout(() => {
            console.log(i)
            arr.push(i)
        }, 1000)
        return arr
    }
}

// expected output = 1, 2, 3, 4 ...

