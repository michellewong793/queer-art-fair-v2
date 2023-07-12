import style from './search.module.css';
import React, {useState, useEffect} from 'react';
//import supabaseClient from './supabaseClient';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';


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
    const [products, setProducts] = useState([]);
    const supabaseClient = createClientComponentClient();
    let someProds = [];
    
    //initializes the product array 
    if (products.length == 0) {
        getProducts();
    }

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

    //sets products to be an array containing all keywords in the database
    async function getProducts() {
            let { data: items, error} = await supabaseClient
                .from('items')
                .select('keywords, name')
            if (error) {
                console.warn(error);
            }
            else if (items) {
                getCount();
                for (let i = 0; i < length; i++) {
                    let row = items[i];
                    let arrayLen = row.keywords.length;
                    let prodName = row.name;
                    prodName = prodName.toLowerCase();
                    someProds.push(prodName);
                    for (let j = 0; j < arrayLen; j++) {
                        let prodToAdd = row.keywords[j];
                        if (someProds.includes(prodToAdd) == false) {
                            someProds.push(prodToAdd);
                        }
                    }
                }
                setProducts(someProds);
            }
    }

    function autocompleteSearch() {
    
        //gets the input from the text input field 
        let inp = document.getElementById("searchTerm").value;
        inp = inp.toLowerCase();
        
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
    }

    //retrieves and displays products matching the search term
    async function getItems(userInput) {

        let searchResults = document.getElementById('searchResults');

        let searchChild = searchResults.lastElementChild;
        while (searchChild) {
            searchResults.removeChild(searchChild);
            searchChild = searchResults.lastElementChild;
        }
        
        let { data: items, error} = await supabaseClient
            .from('items')
            .select('name, price, keywords, image_urls')
        
        if (error) {
            console.warn(error);
        }
        else if (items) {
            getCount();
            for (let i = 0; i < length; i++) {
                let row = items[i];
                let arrayLen = row.keywords.length;
                for (let j = 0; j < arrayLen; j++) {
                    let keywordToTest = row.keywords[j];
                    let singular = userInput.substring(0, userInput.length-1);
                    let lowercase = row.name.toLowerCase();
                    if (keywordToTest.includes(userInput) || keywordToTest == singular || userInput == lowercase) {
            
                        let searchResults = document.getElementById('searchResults');

                        let resultContainer = document.createElement('resultContainer');
                        resultContainer.classList.add("resultContainer");
                        searchResults.appendChild(resultContainer);
                        resultContainer.addEventListener('click', href = "/items/"+row.id);

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
                    if (userInput == lowercase) {
                        break;
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
                    className = {style.inputSubmit} 
                    id = "submit"
                    type = "submit"
                    onClick = {() => getItems(document.getElementById('searchTerm').value.toLowerCase())}
                />
                </div>
                <div className = {style.searchResults} id = "searchResults"></div>
            </form>
        </div>
    );   
}