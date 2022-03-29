
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.


for(let i = 0; i <= 100; i ++) {
    console.log(i);

    const mioDiv = document.createElement("div");
    
    let output = "";

    if ( i % 3 === 0 && i % 5 === 0 ) {
        output += "Flizz Buzz";
        console.log(output);
        
        mioDiv.innerHTML = i + " : " + "E' divisibile sia per 3 che per 5";
        mioDiv.classList.add("color-3-5");

    } else if(i % 3 === 0){
        output += "Flizz";
        console.log(output);

        mioDiv.innerHTML = i + " : " + "E' divisibile solo per 3";
        mioDiv.classList.add("color-3");

    } else if (i % 5 === 0){
        output += "Buzz";
        console.log(output); 
        
        mioDiv.innerHTML = i + " : " + "E' divisibile solo per 5";
        mioDiv.classList.add("color-5");

    }else{
      output += "Non è divisibile ne per 3 ne per 5";
        console.log(output);
      
        mioDiv.innerHTML = i + " : " + "Non è divisibile ne per 3 ne per 5";
        mioDiv.classList.add("color-none");
 
    } 
    myDiv.append(mioDiv);
}




