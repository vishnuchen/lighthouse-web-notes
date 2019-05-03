var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var concepts = [];
function joinList(array) {
  for (i = 0; i < array.length; i++)
    concepts.push(array[i])
}
joinList(conceptList);

// this reassign the concept variable .
concepts = concepts.toString().split(",").join(", ");
console.log("Today I learned about" , concepts + ".");
