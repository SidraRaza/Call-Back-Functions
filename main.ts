// 1.Simply Call Back Function

function sum(callBack:any,num1:number,num2:number) {
    callBack(num1+num2)
}
function add(result:number){
    
    console.log(`Result ${result}`);
    
}
sum(add,6,9);


// 2.Higher-order Call Back function

function cities(callBack: (country: string, ...cities: string[]) => void, city1: string, city2: string, city3: string) {
    callBack("Pakistan", city1, city2, city3);
  }
  
  function countries(country: string, ...cities: string[]) {
    console.log(`Country ${country} `);
    cities.forEach(city => console.log(`${city} is the city of ${country}`));
  }
  cities(countries, "Lahore", "Karachi", "Multan");


//   5. Callback with Higher-Order Function

function double(x: number): number {
  return x * 2;
}

function map(numbers: number[], callback: (x: number) => number): number[] {
  return numbers.map(callback);
}

const doubledNumbers = map([1, 2, 3], double);
console.log(doubledNumbers); // Output: [2, 4, 6]

  
