import style from './search.module.css';
import React, {useState, useEffect} from 'react';
import supabaseClient from './supabaseClient';


//populates search bar with clicked search term 
function populate(listItem) {
    document.getElementById("searchTerm").value = listItem.innerText;
}

//returns the clicked element
function setClicked() {
    let clicked = document.getElementById("selectedResult");
    return clicked;
}

//gets the site ready to return products matching the search term 
function searchProd(event) {

    //prevents the refresh of the screen
    event.preventDefault();

    //gets the user input from the search bar
    let userInput = document.getElementById("searchTerm").value;
    //console.log(userInput);

    let list = document.getElementById('list');

    let child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }

}

//contains search functions as well structure of the page
export default function Search() {
    const [length, setLength] = useState(0);
    let products = [];

    //sets length to be the number of rows in the database
    async function getCount() {
        const { count, error} = await supabaseClient
            .from('items')
            .select('*', { count: 'exact' , head: true })
        if (error) {
            console.warn(error);
        }
        else if (count) {
            setLength(count);
        }
    }

    async function getProducts() {
        console.log("hi");
        let { data: items, error} = await supabaseClient
            .from('items')
            .select('keywords')
        if (error) {
            console.warn(error);
        }
        else if (items) {
            getCount();
            console.log("hello");
            for (let i = 0; i < length; i++) {
                let row = items[i];
                //console.log(row);
                let arrayLen = row.keywords.length;
                //console.log(arrayLen);
                for (let j = 0; j < arrayLen; j++) {
                    let prodToAdd = row.keywords[j];
                    if (products.includes(prodToAdd) == false) {
                        products.push(prodToAdd);
                    }
                }
            }
            
        }
    }

    function autocompleteSearch() {

        // if (document.getElementById('searchTerm').value == "") {
        //     products = [];
        // }
        
        getProducts();
        console.log(products);
        //let products = ["pants", "dress pants", "stickers", "cards", "postcards", "bracelets", "necklaces", "painting", "pots", "knitting", "sweaters", "clothes", "cloth", "prints", "earrings", "stamps"];
    
        //gets the input from the text input field 
        let inp = document.getElementById("searchTerm").value;
        
        let list = document.getElementById('list');
    
        //if form is submitted it calls the search function
        let form = document.getElementById('form');
        form.addEventListener('submit', searchProd);
    
        let child = list.lastElementChild;
        while (child) {
            list.removeChild(child);
            child = list.lastElementChild;
        }
    
        if (inp == "") {
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
                    listItem.addEventListener('click', () => listItem.id = "selectedResult");
                    listItem.addEventListener('click', () => populate(setClicked()));
                    list.appendChild(listItem); 
                }
            }
        }
        products = [];
    }

    async function getItems(userInput) {

        let searchResults = document.getElementById('searchResults');

        let searchChild = searchResults.lastElementChild;
        while (searchChild) {
            searchResults.removeChild(searchChild);
            searchChild = searchResults.lastElementChild;
        }

        //userInput = to_tsquery(userInput);
        
        let { data: items, error} = await supabaseClient
            .from('items')
            .select('name, price, keywords, image_urls')
        // let {data: items, error} = await supabaseClient
        //     .from('items')
        //     .select()
        //     .textSearch('keywords', userInput)
        
        if (error) {
            console.warn(error);
        }
        else if (items) {
            
            getCount();
            //console.log(length);
            for (let i = 0; i < length; i++) {
                let row = items[i];
                //console.log(row);
                let arrayLen = row.keywords.length;
                //console.log(arrayLen);
                for (let j = 0; j < arrayLen; j++) {
                    let keywordToTest = row.keywords[j];
                    let singular = userInput.substring(0, userInput.length-1);
                    //console.log(keywordToTest)
                    if (keywordToTest.includes(userInput) || keywordToTest == singular) {
            
                        let searchResults = document.getElementById('searchResults');

                        let resultContainer = document.createElement('resultContainer');
                        resultContainer.classList.add("resultContainer");
                        searchResults.appendChild(resultContainer);

                        let resultImg = document.createElement('img');
                        resultImg.classList.add('resultImg');
                        resultImg.src = row.image_urls[0];
                        resultContainer.appendChild(resultImg);

                        let result = document.createElement("result");
                        result.classList.add("result");
                        resultContainer.appendChild(result);

                        let prodName = document.createElement('prodName');
                        prodName.classList.add('prodName');
                        prodName.innerText = row.name;
                        result.appendChild(prodName);

                        let prodPrice = document.createElement('prodPrice');
                        prodPrice.classList.add('prodPrice');
                        prodPrice.innerText = "$" + row.price;
                        result.appendChild(prodPrice);
                    }
                }
            }
        }
    }

    return(
        <div className = {style.container}>
            <form autoComplete = "off" id = "form">
                <div className = {style.rowContainer}>
                <div className = {style.columnContainer}>
                    <label htmlFor='searchTerm'></label>
                    <input 
                        className = {style.inputText} 
                        onKeyUp = {() => autocompleteSearch()}
                        name = "searchTerm" 
                        id = "searchTerm"
                        type = "text" 
                        placeholder='search for products...'
                    />
                    <div className = {style.list} id = "list"></div>
                </div>
                
                <input  
                    id = "submit"
                    type = "submit"
                    onClick = {() => getItems(document.getElementById('searchTerm').value)}
                />
                </div>
                <div className = {style.searchResults} id = "searchResults"></div>
            </form>
        </div>
    );   
}