

// let todos= {};

// //eg: {lachin:{content:'do homework'},
// //     coskun:{content:'read a book'}}

// function add(name,todo){
// // todos.name = todo;
// // todos["lachin"] = {"content":"do homework"} 
// todos["lachin"] = todo;
// //todos[name] = todo;
//   }

// add ("lachin",{"content":"do homework"})
// add ("lachin",{"content":"meet leyla"})


// console.log(todos)


let todos= {
  
};


function add(name,todo){
  if (todos[name]===undefined){
    todos[name] = []
  }
  todos[name].push(todo)
  // todos[name] = todo
}
add("lachin","do homework")
add("lachin","meet leyla")

add("coskun","read a book")
add("coskun","go to school")
add("coskun","go to gym")


console.log(todos)

//eg: {lachin:['do homework','meet leyla'],
//     coskun:['read a book','go to school']}
//


// console.log(todos)



let todos= {"coskun":['do homework','meet leyla'],"leyla":['read a book','go to school']}


let todosArray = ["do homework","meet leyla","read a book","go to school"]

for (let value of todosArray) {

  if(value==="go to school"){
    console.log(value ) 
  }
}
console.log(todosArray[2])

console.log(todos.leyla)



function add(name,todo){
  todos["name"] = todo
}
add("lachin","do homework")
add("lachin","meet leyla")


add("coskun","read a book")
add("coskun","go to school")
add("coskun","go to gym")

// console.log(todos)


//eg: {lachin:['do homework','meet leyla'],
//     coskun:['read a book','go to school']}
//


// console.log(todos)