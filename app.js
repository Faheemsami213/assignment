
const faqs = document.querySelectorAll(".faq")
faqs.forEach(faq =>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})





    
let exampl1  = 223723
    function assignmentOne(){
    let output   = "";                                             
        let arrayOfStrNumbers =  exampl1.toString().split("")                                                              
        for(let i = arrayOfStrNumbers.length - 1 ; i >= 0 ;  i--){  
             output += arrayOfStrNumbers[i]                                               
            output = parseInt(output)

        }
        return output
        
    }



 // Assignment 2  Write a JavaScript function that checks whether a passed string is palindrome or not?

 function cheakPalindrome(){
    let output = "" ;
    let arrOfStrItems = userInput.split("")
    for(let i = arrOfStrItems.length - 1 ; i >= 0 ;  i--){
        output += arrOfStrItems[i]
    }
    console.log(output ===  userInput ? 
                          `${userInput} is a palindrom word ` :
                           `${userInput} is not palindrom word`)

 }


//Assignment 3 Write a JavaScript function that generates all combinations of a string.

function generateCombu(example){
    var word = [];
    var result = [];
    for (i=0;i<example.length;i++){
        word = [example[i]];
        var index=0;
        while(result[index]){
            word.push(`${result[index]} ${example[i]}`);
            index++;
        
         }
    result = result.concat(word);

    }
    return console.log(result);

}


function tuntToalpha(example){
return console.log(example.split('').sort().join(''));
  }
tuntToalpha("webmaster");

// 5 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function  converIntoUpperCase(exampl)
{
  var array1 = exampl.split(' ');
  var arry2 = [];
    
  for(var i = 0; i < array1.length; i++){
      arry2.push(`${array1[i].charAt(0).toUpperCase()}${array1[i].slice(1)}`);
  }
  return console.log(arry2.join(' '));
}
// converIntoUpperCase("the quick brown fox");
// 6 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
     function cheakVowels(xyz){
        const vowels = "aeiou"
        var count = 0
        for(let i = 0 ; i <= xyz.length;i++){
                if(vowels.indexOf(xyz[i]) !== -1){
                    count += 1  
                }
        }
        return count

    }
//  console.log(cheakVowels("heelo world kesy ho"))
 
// 7
// let word = "tabta jaskd etesnk smasd kjslkjalskd"

function cheakLongestWordLength(str) {
    let words = str.split(' ');
    let maximumLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maximumLength) {
        maximumLength = words[i].length;    
      }
    }
    return maximumLength;
  }
  

