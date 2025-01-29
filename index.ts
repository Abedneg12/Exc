//exercise

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
let wrd1: string = "main roblox";
console.log(wrd1.slice(0,1).toUpperCase() + wrd1.slice(1,5) + wrd1.slice(5,6).toUpperCase() + wrd1.slice(6,11));

//no 7
let string1: string = "The QuiCk BrOwN Fox";

console.log(string1.replace(/./g, (char) => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase(); // Jika huruf besar, ubah menjadi huruf kecil
    } else {
      return char.toUpperCase(); // Jika huruf kecil, ubah menjadi huruf besar
    }
  })
);


//no 8 Write a code to find the largest of two given integers
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
const shw3: number[] = [5, 27, 15];

for (let i = 0; i < shw3.length; i++) {
    for (let j = i + 1; j < shw3.length; j++) {
        if (shw3[i] > shw3[j]) {
            // Menyimpan nilai shw3[i] sementara
            let temp = shw3[i];    
            shw3[i] = shw3[j];     // Memindahkan nilai shw3[j] ke shw3[i]
            shw3[j] = temp;        // Memindahkan nilai yang ada di temp (nilai awal shw3[i]) ke shw3[j]
        }
    }
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
let wrd3: string = "is it just my imagination?";
let wrd4: string = "";

wrd4 = wrd3.replace(/a/g, '*');

console.log(wrd4); 
