import React from 'react'

export default function Mastercomponent() {

    const name = () => {
        let abc = "Bondeepa";
        function userName() {
            return abc;
        }
        return userName();
    }

    let message = name;
    console.log(message(), "===== message");

    // function composition.

    const trimUserName = () => {
        return "Chandan";
    }

    const greetingMessage = (trimUserName) => `Hello ${trimUserName} ! Good Morning`;

    console.log(greetingMessage(trimUserName()));

    // currying in functional programming.

    function multi(a) {
        return function secondFn(b) {
            return a * b;
        }
    }
    console.log(multi(2)(5));

    const employeeDetails = {
        name: "Harley",
        age: 30
    }

    console.log(employeeDetails, "==== original");

    const newEmployeeDetails = {
        ...employeeDetails,
        name: "Bondeepa"
    }

    console.log(newEmployeeDetails, "===== modified");

    const numbers = [20, 50, 30, 60];
    const copyNumbers = [...numbers, 70]; // inserting using the spread operator.
    const addNumbers = copyNumbers.push(80); // inserting using push method.
    console.log(copyNumbers, "==== modified array");
    console.log(numbers, "==== original array");

    const books = ["Book1", "Book2", "Book3"];
    const bookIndex = books.indexOf("Book2");
    const replaceBooks = [...books.slice(0, bookIndex), "Book4", ...books.slice(bookIndex)];
    console.log(replaceBooks);

    const book = {
        author: "Robert Steve",
        book: {
            name: "Rich Dad Poor Dad",
            price: "$8",
            rating: 4.7
        },
    }

    const newBookObj = {
        ...book,
        book: {
            ...book.book, price: "$10"
        }
    }

    console.log(book, "==== book");
    console.log(newBookObj, "==== newBookObj");

    const employee = {
        name: "John Doe",
        age: 33
    }

    const newEmployee = Object.assign({}, employee, { name: "Martin" });
    console.log(newEmployee);

    const employee1 = {
        name: "John Doe",
        age: 33
    }


    return (
        <div>
            <h1>Redux Starter Pack</h1>
        </div>
    )
}
