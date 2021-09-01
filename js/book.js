
// display fetched search Data 
const displaySearchResult=bookData=>{
    console.log(bookData);
    const booksContainer=document.getElementById('books-container');
    const books=bookData.docs;
    if(!bookData){
        console.log("data is null")
    }
    else{
        document.getElementById('total-result-field').innerText=bookData.numFound;
        console.log(books)
        books.forEach(book =>{
            const div=document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
                <div class="card h-100 p-3">
                    <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="book picture">
                    <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text text-bold">author: ${book.author_name}</p>
                    <p class="card-text">publisher: ${book.publisher}</p>
                    <p class="card-text">${(book.publish_date)?book.publish_date : ''}</p>
                    </div>
                </div>
            `
            booksContainer.appendChild(div);
        })
    }
}

// load search input data
const loadSearchData=()=>{
    const searchField=document.getElementById("search-input");
    const searchValue=searchField.value;
    searchField.value='';
    // fetching search input
    fetch(`http://openlibrary.org/search.json?q=${searchValue}`)
        .then(res => res.json())
        .then(data => displaySearchResult(data)) 
}