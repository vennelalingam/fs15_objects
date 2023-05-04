/*------------------
1)
Finish creating the object below.
Add three more keys and values!
------------------*/
const person = {
  name: "Mia",
  age: 12
}
console.log(person);

//Adding more keys and values & nested objects to the person object

person.school= "concertada";
person.class = 5;
person.isSinger = true;
person.friends = {
    name: "Tia",
    age: 11,
    likes: "chocolates",
    siblings: {
      name: "Ria",
      age: 4,
      hobbies: "painting"
    },
    name2: "Sia",
    lives: "Siriya"
}

/*------------------
2)
Access the name value from
the person object.

Hint: you may use either dot notation or
bracket notation. 
------------------*/

console.log("The person's name is:", person.name)
console.log("The person's name is:", person["name"])

console.log("The person's friends siblings hobbies:", person.friends.siblings.hobbies)
console.log("The person's friends siblings hobbies:", person["friends"]["siblings"]["hobbies"])

console.log("The person's friends name:", person.friends.name)
console.log("The person's friends name:", person["friends"]["name"])

/*------------------
3)
Update the person's name to
"Marco". Don"t change the original
object– do an update by reassigning
the value. If you do this correctly,
the printed statement will be true.
------------------*/

person.name = "Marco" // 1st update
person["name"] = "marco" // 2nd update

console.log("first updated name:", person.name) // Marco 1st-update
console.log("2nd updated name:", person["name"]) // marco 2nd-update

/*------------------
4)
Fix the statement so that it prints
what is expected!
------------------*/

const book = {
  isbn: "9781593275846",
  title: "Eloquent JavaScript, Second Edition",
  subtitle: "A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
  published: "2014-12-14T00:00:00.000Z",
  publisher: "No Starch Press",
  pages: 472,
  description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  website: "http://eloquentjavascript.net/"
};

console.log("The book", book.title, " was written by ", book.author, " and is ", book.pages, "pages.");
console.log(`The book ${book["title"]} was written by ${book["author"]} and is ${book["pages"]} pages`);

/*------------------
5)
Time to learn something new! There"s a new way of
writing a string– it is called a template literal. 
You can learn more about it here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

1) Encapsulate the entire string in backticks: ``
2) Anytime you want to add JavaScript (or a variable name),
encapsulate that part in a dollar sign and brackets: ${}
3) Everything else is assumed to be a string!

Finish filling out the statement below. 
From now, on we will be switching between template literals
and quotations for console.logs.
------------------*/
 console.log(`The book ${book.title} was written by ${book.author} and is ${book.pages} pages.`);

/*------------------
6)
Fix the statement so that it prints
what is expected! You may use dot notation
or bracket notation– look back at the slides
if you forgot how to access values from 
nested objects.
------------------*/

let user = {
  id: 101,
  email: "sofia@dev.com",
  personalInfo: {
    name: "Sofia",
      address: {
          line1: "Carrer de CodeOp",
          line2: "42",
          city: "Barcelona",
          country: "Spain"
      }
    }
}
console.log(user);

console.log(`${user.personalInfo.name} lives at ${user.personalInfo.address.line1} 
${user.personalInfo.address.line2}, ${user.personalInfo.address.city}, 
${user.personalInfo.address.country}.`);

console.log(`${user["personalInfo"]["name"]} lives at ${user["personalInfo"]["address"]["line1"]} 
${user["personalInfo"]["address"]["line2"]}, ${user["personalInfo"]["address"]["city"]}, 
${user["personalInfo"]["address"]["country"]}.`)


/*------------------
7)
Update the user's email and address
so that the console.log statement
prints true!

The new email should be "sofia@prod.com"
and the new city should be "Madrid".
------------------*/

//updated email N city in dot n bracket notation using template literals and quotes

user.email =  "sofia@prod.com", 
user["personalInfo"]["address"]["city"] = "Madrid",

console.log("The person's email has been updated:", user["email"]); // sofia@prod.com
console.log(`The person's city has been updated: ${user.personalInfo.address.city}`) // Madrid

/*------------------
8)
Create a new object from scratch.
Name this variable "animal".
Then, choose an animal, and describe it–
include things like color, type,
food, etc. Make at least one nested object.
------------------*/
const animal = {}
  // name:"ducky", 
  // color: "yellow", 
  // isActive: true,
  // legs: 2,
  // food = {   
  //   food_1: "bread",
  //   food_2:  "bun",
  //   likes: {
  //     like_1: "quacking",
  //     like_2: "swimming"
  //   }
  //  } 
  // siblings: 4

// dot notation
animal.name = "ducky"
animal.color = "yellow"
animal.isActive = true
animal.legs = 2

// bracket notation
animal["food"] = {
  food_1: "bread",
  food_2: "bun"
}
animal["food"]["likes"]= {
  like_1: "quacking",
  like_2: "swimming"
}
animal["siblings"] = 4
//-----------------------------

console.log(animal)

console.log(
  `My pet name is ${animal["name"]} it likes ${animal["food"]["likes"]["like_1"]} and swimming 
 and is very ${animal["isActive"]} plus it has ${animal["siblings"]} siblings.`
);

console.log(
  `My pet name is ${animal.name} it likes ${animal.food.likes.like_1} and swimming 
 and is very ${animal.isActive} plus it has ${animal.siblings} siblings.`
);

/*------------------
9)
Update at least one value
in your object. Write your own
console.log statement to test this
(look at questions 3 or 6 for an idea).
------------------*/
// new update using dot notation

animal.food.likes.like_2 = "munching", 
console.log(`My pet ${animal.color} ${animal.name} likes ${animal.food.likes.like_1} & ${animal.food.likes.like_2}`)

// new object entry using bracket notation

animal["siblings"] = {
  name: "quacky",
  age: 13,
  hobbies: "wandering"
}

console.log(animal)

console.log(
  `My pet ${animal["color"]} ${animal["name"]} has one sibling 
  ${animal["siblings"]["name"]} who likes ${animal["siblings"]["hobbies"]}.`
)
/*------------------
10)
There are three bugs in the object
below. Find them and fix them!
------------------*/

let user2 = {
  id: 102,
  email: "pedro@dev.com",
    personalInfo: {
      name: "Pedro",
        address: {
          line1: "Carrer de CodeOp",
          line2: 42,
          city: "Barcelona",
          country: "Spain"
        }
    }
}
console.log(user2);
/*------------------
11)
Go back through all of your previous
code. Comment out every line where you
used either dot notation or bracket notation, 
and then rewrite that line using the opposite.
Make sure your code still works!
------------------*/

// Find Solution behind every problem. 
