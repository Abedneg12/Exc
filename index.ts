//exercise PPT GITHUB

// no 1 Write a code to display the multiplication table of a given integer 
const num1: number = 5;
for (let i: number = 1; i <= 10; i++){
    console.log(`${num1} x ${i} = ${num1 * i}`);
}



// no 2 Write a code to check whether a string is a palindrome or not
let message: string = "quit";

let revs = message.split('').reverse().join(''); 

if (message === revs) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}



//no 3 write code to covert cm to km
const measure: number = 15;
let result2: number = 0;

if (typeof measure !== "number"){
    console.log("Anda salah memasukkan angka");
}else{
    result2 = measure / 100000;
    console.log(`${measure} cm = ${result2} km`);
}



//no 4 write code to convert number to currency idr
const money: number = 10000;
let money2: string = "";

money2 = money.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

console.log(`${money} = ${money2}`); //




//no 5 Write a code to remove the first occurrence of a given “search string” from a string
const req: string = "ell";
const wrd: string = "Hello World?";
let show = wrd.replace(req, '');

console.log(show); 


//no 6 Write a code to capitalize the first letter of each word in a string
function hurufbesar(input: string): string {
    const wrd: string[] = input.split(' '); 
    for (let i = 0; i < wrd.length; i++) {
        wrd[i] = wrd[i].charAt(0).toUpperCase() + wrd[i].slice(1);
    }
    return wrd.join(' '); 
}

const inputbesar: string = "main roblox bikin goblox";
const besar: string = hurufbesar(inputbesar);
console.log(besar);



//no 7
function swapcapital(str: string){
    let res: string = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
           res += str[i].toLowerCase();
        }else{
            res += str[i].toUpperCase();
        }
    }
    return res;
}
console.log(swapcapital("MAin RoBlox SamPAI PInter"))




//no 8 Write a code to find the largest of two given integer
const num2: number = 54;
const num3: number = 12;
let shw2: number = 0;

if (num2 <= num3) {
    shw2 = num3; 
} else {
    shw2 = num2;  
}
console.log(shw2);


//no 9 Write a conditional statement to sort three numbers
const shw3: number[] = [0.5, 3535, 15];

if (shw3[0] > shw3[1]) {
    [shw3[0], shw3[1]] = [shw3[1], shw3[0]];
}
else if (shw3[1] > shw3[2]) {
    [shw3[1], shw3[2]] = [shw3[2], shw3[1]];
}
else if (shw3[0] > shw3[1]) {
    [shw3[0], shw3[1]] = [shw3[1], shw3[0]];
}

console.log(shw3);



//soal 10 Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.   
let var1: any = 3;
let sh3: number = 0;

if (typeof var1 === "string") {
    sh3 = 1;  // Jika tipe data adalah string, set sh3 ke 1
} else if (typeof var1 === "number") {
    sh3 = 2; 
} else {
    sh3 = 3;  
}

console.log(sh3);  


//soal 11
let wrd3: string = "An apple a day keeps the doctor away";
let wrd4: string = "";

wrd4 = wrd3.replace(/a/gi, '*');

console.log(wrd4); 
