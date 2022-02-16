








function x(){

  for (var i = 0; i < 5; i++){
    function close(i){

      setTimeout(()=>{
        console.log(i)
      }, i * 1000)
    }

    close(i)
  }
}

x()












































































































































// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     },i * 1000);
//   }
// }

// x()



// function human(name){
//   function sayHi(){
//     console.log(`Hey i am ${name}`)
//   }
//   function howAreYou(){
//     console.log(`${name} is good...! Thank You...!`)
//   }

//   return {
//     sayHi,
//     howAreYou
//   }

// }

// const akshay = human("Akshay")
// const amol = human("Amol")


// console.log(akshay.howAreYou())