//1. You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price);
  }

//2. Create a function that returns an array of strings sorted by length in ascending order.
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }

//3. Create a function that takes an array of strings and return an array, sorted from shortest to longest.
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }

//4. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
function findLargestNums(arr) {
    return arr.map(subArr => Math.max(...subArr));
  }

//5. Create a function that takes any non-negative number as an argument and return it with its digits in descending order. Descending order is when you sort from highest to lowest.
function sortDescending(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
  }
  

//6. Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
function maxTotal(numbers) {
    numbers.sort((a, b) => b - a); 
    return numbers.slice(0, 5).reduce((sum, num) => sum + num, 0); 
  }

//7. Write a function that takes a string as an argument and returns the left most digit in the string.
function leftDigit(str) {
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(parseInt(str[i]))) {
        return parseInt(str[i]);
      }
    }
  }

//8. Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
function highLow(str) {
    let numbers = str.split(' ').map(Number);
    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);
    return highest + ' ' + lowest;
  }


//9. Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
function sortIt(arr) {
    return arr.sort((a, b) => {
      if (Array.isArray(a) && Array.isArray(b)) {
        return a[0] - b[0];
      } else if (Array.isArray(a)) {
        return a[0] - b;
      } else if (Array.isArray(b)) {
        return a - b[0];
      } else {
        return a - b;
      }
    });
  }
 
//10. Given an input string, reverse the string word by word, the first word will be the last, and so on.
function reverseWords(str) {
    str = str.trim();
    let words = str.split(/\s+/);
    words.reverse();
    let reversedStr = words.join(' ');
    return reversedStr;
  }
  
//11. Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules
function ascDesNone(arr, str) {
    if (str === "Asc") {
      return arr.sort((a, b) => a - b);
    } else if (str === "Des") {
      return arr.sort((a, b) => b - a);
    } else {
      return arr;
    }
  }
  
//12. Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
function missingNum(arr) {
    let n = 10; 
    let sum = (n * (n + 1)) / 2;
    let arrSum = arr.reduce((acc, num) => acc + num, 0);
    return sum - arrSum;
  }

//13. Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function reverse(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i].length >= 5) {
        words[i] = words[i].split('').reverse().join('');
      }
    }
    return words.join(' ');
  }
  

//14. Create a sorting function which sorts numbers not by numerical order, but by number length! This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.
function numberLenSort(arr) {
    return arr.map(String).sort((a, b) => a.length - b.length).map(Number);
  }

//15. Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.
function uniqueInOrder(sequence) {
    if (!Array.isArray(sequence)) {
      sequence = sequence.split('');
    }
    return sequence.filter((item, index) => item !== sequence[index - 1]);
  }
  
//16. Given two arrays smarr and bigarr, we say smlst is an ordered subarray of bigarr if all the elements of smarr can be found in bigarr, and in the same order.
function isOrdSub(smarr, bigarr) {
    let smIndex = 0;
    for (let num of bigarr) {
      if (num === smarr[smIndex]) {
        smIndex++;
      }
      if (smIndex === smarr.length) {
        return true;
      }
    }
    return false;
  }
  
//17. Write a function that sorts each string in an array by the letter in alphabetic ascending order (a-z).
function sortByLetter(arr) {
    return arr.sort((a, b) => {
      let letterA = a.match(/[a-z]/i)[0];
      let letterB = b.match(/[a-z]/i)[0];
      return letterA.localeCompare(letterB);
    });
  }

//18. Given an array of women and an array of men, either:
//Return "sizes don't match" if the two arrays have different sizes.
//If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
function zipIt(women, men) {
    if (women.length !== men.length) {
      return "sizes don't match";
    }
    let pairs = [];
    for (let i = 0; i < women.length; i++) {
      pairs.push([women[i], men[i]]);
    }
    return pairs;
  }
  

//19. Given an array of integers, return the largest gap between elements of the sorted version of that array.
function largestGap(nums) {
    nums.sort((a, b) => a - b); 
    let maxGap = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      const gap = nums[i + 1] - nums[i];
      if (gap > maxGap) {
        maxGap = gap;
      }
    }
    return maxGap;
  }
  
//20. Write a function that takes a string on the digits 0, 6, 9 and returns true if the number is the same upside down or false otherwise.
function sameUpsidedown(number) {
    let upsideDownNumber = number.split('').reverse().map(digit => {
      if (digit === '6') return '9';
      if (digit === '9') return '6';
      return digit;
    }).join('');
    return number === upsideDownNumber;
  }
  


  