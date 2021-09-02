
// display fetched search Data 
const displaySearchResult=(bookData,searchValue)=>{
    const booksContainer=document.getElementById('books-container');
    booksContainer.innerHTML='';
    const searchResultField=document.getElementById('search-result');
    searchResultField.innerHTML='';
    const books=bookData.docs;
    // console.log(books)
    if(books.length===0){
        document.getElementById('total-result-field').innerText=bookData.numFound;
        searchResultField.innerHTML=`
            <h4 class="text-center">Search <span class="text-danger">${searchValue}</span> NO Result Found</h4>
        `
    }
    else{
        document.getElementById('total-result-field').innerText=bookData.numFound;
        books.forEach(book =>{ 
            const div=document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
                <div class="card h-100 p-3">
                    <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top h-75" alt="book picture">
                    <div class="card-body p-0 mt-4">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text fw-bold mb-2">Author: ${book.author_name? book.author_name[0] :''}</p>
                    <p class="card-text my-0">Publisher: ${book.publisher? book.publisher[0] : ''}</p>
                    <p class="card-text">${book.publish_date? book.publish_date[0]: ''}</p>
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
    fetch(`https://openlibrary.org/search.json?q=${searchValue}`)
        .then(res => res.json())
        .then(data => displaySearchResult(data,searchValue)) 
}