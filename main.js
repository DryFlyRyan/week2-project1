/*
=======================================================

** Week 2 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

EXAMPLE:
1. Log your 'hello world' to the console.
console.log("Question 1")
console.log("hello world")

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/

// 1. Create an object called "me" that describes you with your name, city, and job title.

var me = {
  name: "Ryan",
  city: "Denver",
  "job title": "Instructor"
};

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

me.family = ["Paul", "Cyndie", "Kassidy"];

// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city.

console.log(me.city);
console.log(me["city"]);
console.log(me["job title"]);

// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)

console.log(invitees.adults[0].dinnerChoice[1])

// 5. Access Pablo's table number.

console.log(invitees.children[1].table);

// 6. Access Lauren's seating specialConsideration.

console.log(invitees.adults[2].specialConsiderations.seating);

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
var billysDinnerChoice = invitees.adults[1].dinnerChoice
console.log(invitees.adults[1].dinnerChoice[billysDinnerChoice.length - 1]);

// 8. Access Ada's allergies.

console.log(invitees.children[2].allergies[0]);

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

var laurensFood = invitees.adults[2].dinnerChoice
console.log('lauren\'s food = ', laurensFood);
var laurensOrder = "Lauren's appetizer is " + laurensFood[0] + ". She will be eating "+ laurensFood[1] +" for dinner and has selected "+ laurensFood[2] + " as her dessert."

console.log(laurensOrder);

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

var jsWorkshop = new Object();

console.log('jsWorkshop = ', jsWorkshop);

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

jsWorkshop.classmates = ['Mark', 'Matt', 'Courtney', 'Maria', 'Scott']

// 12. Get the length of the fourth classmate's name.

console.log(jsWorkshop.classmates[3].length)

// 13. Clear the classmates value.

jsWorkshop.classmates = "";


// ADVANCED TRACK
// 14. Create an empty array called "books".

// 15. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" array.

// Final desired result:
    // var books = [ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             ]

// 16. Access the author of the first book.

// 17. Get the length of the author the the third book.

// 18. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)

// 19. Remove the second book from the books Array.

// 20. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
