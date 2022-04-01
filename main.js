let x = 0 // Starting point

if (x < 10) {
    console.log("IF statement: x is less than 10.")
}

while (x < 10) { // Ending point
    console.log("WHILE statement: x is less than 10.")

    // x = x + 1
    x += 1       // increment
}



let z = 0
do {
    z += 5
} while (z < 100)


// MAKE MASHED POTATOES
let potatoPile = 40   // starting point
while (potatoPile > 0) { // ending point
    // potatoPile = potatoPile - 10
    potatoPile -= 10     // decrement
    console.log("1. Wash the spuds.")
    console.log("2. Peel the spuds.")
    console.log("3. Cut up the spuds.")
    console.log("4. Boil up the spuds.")
    console.log("5. Mash the spuds together.")
    console.log("6. Add butter, salt, milk to taste.")
    console.log("SUCCESS! We have made one batch of mashed potatoes.")
}



let makeMashedPotatoesOnce = function (batch) {
    console.log("1. Wash the spuds.")
    console.log("2. Peel the spuds.")
    console.log("3. Cut up the spuds.")
    console.log("4. Boil up the spuds.")
    console.log("5. Mash the spuds together.")
    console.log("6. Add butter, salt, milk to taste.")
    console.log("SUCCESS! We have made one batch of mashed potatoes.")
}

let useAllPotatoes = function (potatoPile) {
    while (potatoPile > 0) {
        let batch = 10
        potatoPile -= batch
        makeMashedPotatoesOnce(batch)
    }
}

useAllPotatoes(40)




let count = 0
let endingPoint = 100
while (count < endingPoint) {
    // ...

    count += 1
}


console.log("No more uncooked potatoes left!")


let processNumbers = function (n) {
    let count = 1

    while (count <= n) {
        console.log(count)
        if (count % 3 === 0) {
            count -= 1
        } else {
            count += 2
        }
    }

}

processNumbers(20)
processNumbers(100)
processNumbers(15)



// let potatoPile = 40   // starting point
// while (potatoPile > 0) { // ending point
//     // potatoPile = potatoPile - 10
//     potatoPile -= 10     // decrement
//     console.log("1. Wash the spuds.")
//     console.log("2. Peel the spuds.")
//     console.log("3. Cut up the spuds.")
//     console.log("4. Boil up the spuds.")
//     console.log("5. Mash the spuds together.")
//     console.log("6. Add butter, salt, milk to taste.")
//     console.log("SUCCESS! We have made one batch of mashed potatoes.")
// }

//  (start;               check;          step            ) { code }
for (let potatoPile = 40; potatoPile > 0; potatoPile -= 10) {
    console.log("1. Wash the spuds.")
    console.log("2. Peel the spuds.")
    console.log("3. Cut up the spuds.")
    console.log("4. Boil up the spuds.")
    console.log("5. Mash the spuds together.")
    console.log("6. Add butter, salt, milk to taste.")
    console.log("SUCCESS! We have made one batch of mashed potatoes.")
}

//  (start;         check;      step      ) { code }
for (let count = 0; count < 10; count += 1) {
    console.log(count)
    // ...
}


let isEven = function (number) {
    return number % 2 === 0
}

// Function which takes a string as input,
// and returns a copy of the string in which...
// every letter alternates between uppercase
// and lowercase. (First character should be uppercase.) 
let oddCaps = function (string) {
    // starting count: 0
    // ending count: string.length - 1
    let result = ""
    for (let position = 0; position <= string.length - 1; position += 1) {
        let currentCharacter = string[position]

        if (isEven(position)) {
            result += currentCharacter.toUpperCase()
        } else {
            result += currentCharacter.toLowerCase()
        }
    }
    
    return result
}

let test1Result = oddCaps("cat")
let test1Expectation = "CaT"
console.assert(
    test1Result === test1Expectation, 
    `Test 1 failed. Expected "${test1Expectation}". Instead got "${test1Result}".`
)

let test2Result = oddCaps("")
let test2Expectation = ""
console.assert(
    test2Result === test2Expectation, 
    `Test 2 failed. Expected "${test2Expectation}". Instead got "${test2Result}".`
)


console.log("This is the end")