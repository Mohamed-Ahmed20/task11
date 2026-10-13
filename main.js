// Task:
// //(choose the right answer)
// //1- What is the output in console:

// if (true) {
//     var x = 10;
// }

// console.log(x); //B



// ---------

// //2- What is the output in console:

// console.log(x); //A

// var x = 10;



// //----------

// //3- What is the output in console:

// console.log(x); //D

// const x = 10;

//
// //----------

// //4- What is the output in console:

// function test() {
//     var x = 20;
// }

// test();

// console.log(x); //D



// ----------

// //5- What is the output in console:

// sayHello();

// function sayHello() {
//     console.log("Hello"); //B
// }

//

// //----------

// //6- What is the output in console:

// var x = 10;

// function test() {
//     console.log(x); //A

//     var x = 20;
// }

// test();


// //----------

// //7- What is the output in console:

// var x = 1;

// function test() {
//     console.log(x);//C

//     if (true) {
//         var x = 2;
//     }

//     console.log(x);
// }

// test();



// ----------

// 8- What is the output in console:

// let x = 10;

// function outer() {
//     let x = 20;

//     function inner() {
//         let x = 30;
//         console.log(x);//30
//     }

//     inner();
//     console.log(x);//20
// }

// outer();
// console.log(x);//10



// //----------

// //9- 

// var x = 10;

// {
//     let x = 20;

//     {
//         var x = 30;
//     }

//     console.log(x); //20
// }

// console.log(x); //30



// //------




const login = [
    {
        userName: "mohamed",
        password: 1236654789
    },
    {
        userName: "ahmed",
        password: 7896541332
    }

]

function creatLogin() {

    let newuserName = prompt("enter user name ")
    let newpassword = +prompt("enter the password")
    const newLogin = {

        userName: newuserName,
        password: newpassword,
    };
    login.push(newLogin);
    showlogin()


}

function showlogin() {
    console.clear()
    for (let i = 0; i < login.length; i++) {
        console.log(`${i + 1} ${login[i].userName} =>${login[i].password}`)

    }
}
showlogin()


function deleteLogin() {

    const numIndex = prompt("enter the number") - 1
    login.splice(numIndex, 1)
    showlogin();

}


function updateLogin() {
    const indexItem = prompt("enter number update")-1

    const newuserName = prompt("enter new user name :")
    const newpassword = prompt("enter new password :")

    const updataLogin = {
        userName: newuserName,
        password: newpassword,

    }
    login.splice(indexItem, 1, updataLogin);

    showlogin()





}