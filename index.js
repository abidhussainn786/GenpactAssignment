acctData = [
 {
 "acctNum": "AAA - 1234",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 5231",
 "user": "Bob"
 },
 {
 "acctNum": "AAA - 9921",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 8191",
 "user": "Alice"
 }
];
var balance = {
 "AAA - 1234": 4593.22,
 "AAA - 9921": 0,
 "AAA - 5231": 232142.5,
 "AAA - 8191": 4344
};

var accArray = [];
var accList = filterByUser('Bob'); // pass user inorder to filter by User
//var accList = filterByUser('Charlie'); // pass user inorder to filter by User
//var accList = filterByUser('Alice'); // pass user inorder to filter by User
var sortArr = sortBy('acctNum');
//var sortArr = sortBy('balance');
var sortDirection = sortDirection('asc');

// Function to return Array of Account Numbers
function filterByUser(user){
  acctData.filter(item => {
    //console.log(item.user)
    if(item.user === user){ // compares the item in loop with the passed paramter
      accArray.push(item.acctNum);
    }
  });
  return accArray; // returns Array of Account Numbers
}


// Function to return Array of Account Numbers
function sortBy(userInput){
  if(userInput == 'acctNum'){
    let accNumList = [];
    for(let i=0; i<acctData.length;i++){
      // let newAcc = acctData[i].acctNum.split('-');
      // accNumList.push(newAcc[1].trim());
      accNumList.push(acctData[i].acctNum);
    }
    let newSortedList = String(accNumList.sort());
    var listArr =  newSortedList.split(",");
    return listArr;
  }
  else if(userInput == 'balance'){
    var accArr = [];
    for(var d in balance){
      accArr.push([d,balance[d]]);
    }
     // The below line of code will sort balance in ascending order
    keysSorted = Object.keys(balance).sort(function(a,b){return balance[a]-balance[b]})
    return keysSorted;
    // console.log(keysSorted)
  }

}

//Function to sort Balance either on Asc or Desc order 
function sortDirection(order){
  if(order == 'asc'){
    var accArr = [];
    for(var d in balance){
      accArr.push([d,balance[d]]);
    }
     // The below line of code will sort balance in ascending order
    keysSorted = Object.keys(balance).sort(function(a,b){return balance[a]-balance[b]})
    return keysSorted;
  }
  else if(order == 'desc'){
    var accArr = [];
    console.log('hello')
    for(var d in balance){
      accArr.push([d,balance[d]]);
    }
     // The below line of code will sort balance in descending order
    keysSorted = Object.keys(balance).sort(function(a,b){return balance[b]-balance[a]})
    return keysSorted;
  }
}

console.log(accList); // Output account number Array  based on user filter
console.log(sortArr); // Output A/c Number Array based on Sort
console.log(sortDirection); //Output A/c Number Array on sort by descending