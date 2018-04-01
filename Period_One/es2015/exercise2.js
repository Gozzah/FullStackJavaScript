const evens =[0,2,4,6,8,10,12,14,16,18,20]


//map creates a new array(odds) and adds 1 to each element
odds  = evens.map(v => v + 1)
console.log(odds)

/* map creates a new array(odds) and adds 1 to each element
[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21 ] */

pairs = evens.map(v => ({ even: v, odd: v + 1 }))
console.log(pairs)
/* map creates a new array(pairs) and creates an object for eact iteration,
sets even to the current index of v and sets odd to the value of the current index(v) and adds 1 to it.
output: [ { even: 0, odd: 1 },{ even: 2, odd: 3 },{ even: 4, odd: 5 },{ even: 6, odd: 7 },{ even: 8, odd: 9 },{ even: 10, odd: 11 },
{ even: 12, odd: 13 },{ even: 14, odd: 15 },{ even: 16, odd: 17 },{ even: 18, odd: 19 },{ even: 20, odd: 21 } ] */
  
nums  = evens.map((v, i) => v + i)
console.log(nums)

/* map creates a new array(nums). It takes two arguments(v,i) v is the current value and i is the current index
it then adds the current value to the current index.
index 0=0,result=0, index1=2, result=3, index2=4, result=6 etc etc etc.
output: [ 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 ] */

// (fix the example below, without going back to the solution above)?
/* var odds2 = evens.map(v => {
    v+1
  }); 

 It doesent work because we havent told it what it should return*/

//Example below works
 var odds = evens.map(v => {
    return v+1
  });

  console.log(odds)

