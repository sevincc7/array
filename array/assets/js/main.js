// Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

// let text ="Mən Code Academy Tələbəsiyəm";
// var lowerCaseString =text.toLowerCase();

// console.log(lowerCaseString);

// Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "

// let text ="            Mən Code Academydə Programing tədrisi alıram            ";
// var arr =text.trim()
// console.log(text);
// console.log(arr);


// Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın
// let text ="Mən Code Academy Tələbəsiyəm"
// var array =text.split(" ")
// console.log(array)


// "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

let text ="            Mən Code Academydə Programing tədrisi alıram            "
var array =text.replace(/\s/g, '');
console.log(array);
var arr =array.length
console.log(arr)
