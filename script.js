const booksDiv = document.querySelector(".books");
const button = document.querySelector("input");
const dialog = document.querySelector("dialog");
const add = document.querySelector("#add");
const formInput = document.querySelectorAll("form input")

let Library = [];
let b ={}

function Book(title,author,pages,rating,status){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.rating = rating,
  this.status = status
  }



function addToLibrary(b){
Library.push(b) // we can use this as a storage for history 
let book = document.createElement("div");
book.classList.add("book");
book.innerHTML =`<p>Title : ${b.title}</p><br>
<p>Author : ${b.author}</p><br>
<p>Pages : ${b.pages}</p><br>
<p>Status : ${b.status}</p><br>
<p>Ratings : ${b.rating}</p><br>
<div class="controls">
<button>
<img src="delete.png" alt=""/></button></div>`
booksDiv.appendChild(book);

let del = book.querySelector(".controls button");
del.addEventListener("click",function(){
   booksDiv.removeChild(book)
  })
}
  
button.addEventListener("click", function () {
  dialog.showModal();
});

add.addEventListener("submit", (event) => {
  event.preventDefault();
  dialog.close();
});

dialog.addEventListener("close",()=>{
b =  new Book(formInput[0].value,formInput[1].value,formInput[2].value,formInput[4].value,formInput[3].value)
addToLibrary(b);
for(let i=0; i<5; i++){
  formInput[i].value = "";
}

});


