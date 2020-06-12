const lessom1 = ["Math", "English", "Programming"];
const lesson2 = ["Geography", "Spanish", "Programming"];

function checkTrue(array1, array2) {
    let result = false;

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            result = true;
        }
    }
    return result;
}
console.log(checkTrue(lessom1, lesson2));
