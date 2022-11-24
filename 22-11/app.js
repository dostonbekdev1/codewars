// function greet(name){
//your code here
//  return `Hello, ${name} how are you doing today?`
// }
//    console.log(greet("Sardor"));


   // Return a string of the number here!

  //  function numberToString(num) {
  //   return String(num)
  // }


//   howManyLightsabersDoYouOwn  

//   function howManyLightsabersDoYouOwn(name) {
//    return name == 'Zach' ? 18 : 0
//  }
//   console.log(howManyLightsabersDoYouOwn("Zach"));


  // Training JS #7: if..else and ternary operator

  // function saleHotdogs(n){
  //   return n*(n<5?100:n<10?95:90);
  // }



// bmi

  function bmi(weight, height) {
   let bmi= (weight / Math.pow( (height/100), 2 ).toFixed(3))
   console.log(bmi);
   if (bmi <= 18.5) return "Underweight"
   else if (bmi <= 25.0) return "Normal"
   else if (bmi <= 30.0) return "Overweight"
   else return "Obese"
 }
 
 console.log(bmi(70, 170));