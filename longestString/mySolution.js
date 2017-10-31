 const longestString = function (arr) {
   let longest = '';
   arr.forEach(element => {
     if(element.length > longest.length) { longest = element} 
   });
  return longest;
 };
