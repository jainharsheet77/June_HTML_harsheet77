console.clear();

// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

let arr=[1, 2, 3, 4, 5, 1, 3];
let searchElem=4;

let search=(arr,searchElem)=>{
    let ans=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==searchElem)
        {
            ans.push(i);
        }
    }

    if(ans.length)
        return ans;
    else    
        return -1;
}

console.log(search(arr,searchElem));

console.log("Q1 END =====================")


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5

let patt=(n)=>{
    for(let i=1;i<=n;i++)
    {
        let temp="";
        for(let j=n;j>=i;j--)
        {
            temp+=j.toString();
        }
        console.log(temp);
    }

}

patt(5);

console.log("Q2 END =====================")


// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

let arr3=[3, 2, 1, 4, 5, 45];
arr3=arr3.sort((a,b)=>a-b);
console.log(arr3);

console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

let a="LISTEN";
let b="SILENT";
a=a.split('');
b=b.split('');
a=a.sort();
b=b.sort();
a=a.join('');
b=b.join('');
console.log(a,b,a==b);


console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

let str1="Hello";
let str2=[];

let len=str1.length;
for(let i=0;i<len;i++){
    str2.push(str1[len-i-1]);
}
str2=str2.join('');
console.log(str2);
console.log("Q5 END =====================")