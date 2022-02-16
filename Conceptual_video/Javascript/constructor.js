

function Person(name){
    this.talk = () => {
        return `Hi i am ${name}`
    }

    this.sayHowAreYou = () => {
        return `${name} is good...!`
    }
}

const akshay = new Person("Akshay")

console.log(akshay.sayHowAreYou())


