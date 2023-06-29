import style from './search.module.css';
import React, {useState} from 'react';

let products = ["pants", "stickers", "cards", "postcards", "bracelets", "necklaces", "paintings", "pots", "knitting", "sweaters", "clothes", "cloth", "prints", "earrings", "stamps"];



 function autocompleteSearch(products) {
    //gets the input from the text input field 
    let inp = document.getElementById("searchTerm").value;
    console.log(inp);

    //initializes an empty array for the autocomplete suggestions
    let suggestions = [];

    if (inp == "") {
        console.log("nothing");
        return [];
    }
    else {
        //tests each word in the array against the user input if it matches that word is added to the list of suggestions
        for (let i = 0; i < products.length; i++){
            let wordToTest = products[i];
            let userInput = "^" + inp; 
            let inputReg = RegExp(userInput);
            let result = inputReg.test(wordToTest);
            if (result == true) {
                suggestions.push(wordToTest);
            }
        }
        console.log(suggestions);
    }

} 

export default function Search() {
    const [isempty, setIsEmpty] = useState(true);

    let products = ["pants", "stickers", "cards", "postcards", "bracelets", "necklaces", "paintings", "pots", "knitting", "sweaters", "clothes", "cloth", "prints", "earrings", "stamps"]

    return(
        <div className = {style.container}>
            <form autocomplete = "off" >
                <div class = "autocomplete" >
                    <label htmlFor='searchTerm'></label>
                    <input 
                        className = {style.inputText} 
                        onKeyUp = {() => autocompleteSearch(products)}
                        name = "searchTerm" 
                        id = "searchTerm"
                        type = "text" 
                        placeholder='search for products...'
                    />
                </div>
                <div>
                    //put all of the suggestions here make it display or not based on if it is empty
                </div>
                <input className = {style.inputSubmit} type = "submit"/>
            </form>
        </div>
    );   
}