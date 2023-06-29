import style from './search.module.css';
import React, {useState} from 'react';

let products = ["pants", "stickers", "cards", "postcards", "bracelets", "necklaces", "paintings", "pots", "knitting", "sweaters", "clothes", "cloth", "prints", "earrings", "stamps"];

 function autocompleteSearch(products, inp) {
    let suggestions = [];
    if (inp == "") {
        console.log("nothing");
    }
    else {
        for (let i = 0; i < products.length; i++){
            let wordToTest = products[i];
            let inputReg = RegExp(inp);
            let result = inputReg.test(wordToTest);
            if (result == true) {
                suggestions.push(wordToTest);
            }
        }
        console.log(suggestions);
    }
} 

export default function Search() {

    let products = ["pants", "stickers", "cards", "postcards", "bracelets", "necklaces", "paintings", "pots", "knitting", "sweaters", "clothes", "cloth", "prints", "earrings", "stamps"]

    

    return(
        <div className = {style.container}>
            <form autocomplete = "off">
                <div class = "autocomplete" >
                    <input 
                        className = {style.inputText} 
                        onKeyUp = {() => autocompleteSearch(products, )}
                        id = "searchTerm" 
                        type = "text" 
                        placeholder='search for products...'
                    />
                </div>
                <input className = {style.inputSubmit} type = "submit"/>
            </form>
        </div>
    );   
}