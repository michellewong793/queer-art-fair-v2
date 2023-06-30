import style from './search.module.css';
import React, {useState} from 'react';

function populate(listItem) {
    document.getElementById("searchTerm").value = listItem.innerText;
}

function autocompleteSearch() {

    let products = ["pants", "stickers", "cards", "postcards", "bracelets", "necklaces", "paintings", "pots", "knitting", "sweaters", "clothes", "cloth", "prints", "earrings", "stamps"];

    //gets the input from the text input field 
    let inp = document.getElementById("searchTerm").value;
    console.log(inp);
    
    let list = document.getElementById('list');

    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

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
                let listItem = document.createElement("listItem");
                listItem.innerText = wordToTest;
                listItem.classList.add("listItem");
                list.appendChild(listItem);
            }
        }
        listItem.onclick = populate(listItem); 
    }
}

export default function Search() {
    const [isempty, setIsEmpty] = useState(true);

    return(
        <div className = {style.container}>
            <form autocomplete = "off" >
                <div class = "autocomplete" >
                    <label htmlFor='searchTerm'></label>
                    <input 
                        className = {style.inputText} 
                        onKeyUp = {() => autocompleteSearch()}
                        name = "searchTerm" 
                        id = "searchTerm"
                        type = "text" 
                        placeholder='search for products...'
                    />
                </div>
                <div className = {style.list} id = "list">
                </div>
                <input className = {style.inputSubmit} type = "submit"/>
            </form>
        </div>
    );   
}