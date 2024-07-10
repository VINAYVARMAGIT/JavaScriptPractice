console.log("These are the javascript files.")


let arr = [5,6,7,8];

console.log('Original Array '+ arr)

//push Method in array is used to push the elements into array by updating the array itself
arr.push(5,6);
console.log('push '+ arr)// [5,6,7,8,5,6]

//pop() used to remove the last element of the array by updating the array itself 
arr.pop();// (5,6,7,8,5)
console.log('pop ' +arr)

//shift method removes the 1st element of the array
arr.shift()
console.log('shift '+ arr)

//unshift method 
arr.unshift(1,2)
console.log('unshift '+ arr)

//concat method is used to join the two arrays
let arr1=[10,20,30]
let arr2= [40,50,60]
console.log('concating the two arrays ' +arr1.concat(arr2))

 arr = [5,6,7,8];
 console.log('reinitiallizing ' +arr)
//slice method is used to slice the array from point to point in the array by using the paramters we give i t
//1st parameter is the index where it have to start and 2nd parameter is the one that should not be included 
//METHOD DOESN'T UPDATE THE ORIGINAL ARRAY
let sliceArr = arr.slice(0,3)
console.log('After Slicing ' + sliceArr)

//splice method is used to change values by adding where we want them to happen
//1st parameter is for arr where it have to start its removing 
//2nd parameter is to remove how many elements to remove
//from there all the parameters are the elemets to be added to the array it can as many as we need
//It updates the array itself
arr.splice(1,2,7,6)
console.log('After splice' +arr)

//indeoxOf method is used to tell the elements index 
console.log(arr.indexOf(5))

//SEARCHING AND FILTERING ELEMENTS
//lastIndexOf method tells us the if the there are same elements in the array it will give the index of the last element to us 
let arr3 = [4,5,6,7,4]
console.log(arr3.lastIndexOf(4))


//filter method checks each elements returns the elements if it satisfies the function implementation
arr = [5,6,7,8];
let fileteredArray = arr.filter(x => x %2 ==0)
console.log('The filter array is ' +fileteredArray)

//ITERATING ELEMENTS   
//forEach method performs the fucntion for each elements and does the function implementation as it is defined 
arr.forEach(x =>{ if(x%2 == 0) console.log(x)})

 
//map method perfroms the function that is implemented in the method for each elemet in the given array 
//it returns even if the elements doesn't perfrom the function and show the result as undefined
let mapArray = arr.map(x =>        
        x%2==0)  
console.log(mapArray)

//CHECKING ARRAY CONTENTS
arr = [5,6,7,8];
console.log('reinitiallizing ' +arr)
//includes method is used to return the boolean type value if the element is present in the array or not 
let includeArr = arr.includes(7)
console.log(includeArr)

//every method checks if all the elemets in the array pass the function implementation then it returns true or else false 
let arr5 = [5,25,15,35]
let checkArray5 = arr5.every(x => x%5==0)
console.log(checkArray5)

//some method works same as the every method but the difference is that if any one of the elements satifies or pass the 
//function implementation it returns true 

arr5 = [4,7,5,9]
let someArray5 = arr5.some(x => x%5)
console.log(someArray5)

//reduce method main function is reduce all the elements to one into adding them into accumulator
//syntax of the reduce method :
// arrayName.reduce(accumulator,currentvalue => function to be implemented, accumulatorIntialValue )
arr5 = [4,7,5,9]
let reduceArray5 = arr5.reduce((i,x) => i+x,0)
console.log(reduceArray5)

//reduceRight method its the same as reduce method but the addition of the elements will
//be done from right to left
let arr6 = ['a','b','c','d'];
let reduceRightArray6 = arr6.reduceRight((acc,cv) => acc+cv,'fe')
console.log(reduceRightArray6)

//find method returns the first element that satisfies the implementation conditon in the given method
let arr7 = [7,11,14,16,21]
let findArray7 = arr7.find(x => x%4 ==0)
console.log(findArray7)

//findIndex method is similar to find method except that it returns the index of the passed element for the function 
let arr8 = [7,11,14,16,21]
let findArray8 = arr8.findIndex(x => x%4 ==0)
console.log(findArray8)

//sort method does the sorting n=and return the array
arr = [5,9,5,0];
let sortedArray = arr.sort()
console.log('The sorted Array is :'+sortedArray)

//reverse method is same as the sorted method but this happends in reverse order 
//like in the above example its descending order of the array 
let reverseArray = arr.reverse()
console.log('The reverse order of the Array is :' +reverseArray)