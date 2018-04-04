class Student {

    fullName: String;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
     
        this.fullName = firstName + " " + middleInitial + " "  + lastName
    }
}

interface Person{

firstName : String,
lastName  : String
}



function greeter(person : Person) {
    return `Hello your firstname is ${person.firstName} and your lastname is ${person.lastName}`;
}

let user = new Student('Rune', 'H', 'Jensen')

document.body.innerHTML = greeter(user);



