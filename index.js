// In the index.js file, make sure for every task's function, you return a new array/object with the updates needed.

// You can run the tests to help guide you with the script npm test in your terminal. Make sure that each of the tests passes before moving onto the next one.

// Work your way through the tasks in index.js. Don't worry about that fact that you can't see the arrays or items; they can all be found within the index.test.js file.

// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
    return [...array, item];
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
    return [item, ...array];
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
    return [...array.slice(0, index), item, ...array.slice(index)];
}

// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at 1st index position
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
    return [...array.slice(0, index), item, ...array.slice(index + 1)];
}

// months.splice(4, 1, 'May');
// // replaces 1 element at 4th index
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
    return { ...object, name: newName };
}

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }
export function toggleTeaStatus(object) {
    if (object.needsACupOfTea) {
        return { ...object, needsACupOfTea: false };
    } else {
        return { ...object, needsACupOfTea: true };
    }
}

// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]
export function toggleListItemCompleted(array, index) {
    let thisObject = array[index];
    if (thisObject.completed) {
        return [...array, { ...thisObject, completed: false }];
    } else {
        return [...array, { ...thisObject, completed: true }];
    }
}
