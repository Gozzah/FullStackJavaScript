function newBook(book) {
    return "Title : " + book.title + " Author : " + book.author + ", Published : " + book.published + ", Pages : " + book.pages;
}
//b)
var testBook = { title: 'Rune store bedrifter', author: 'Ham selv', published: new Date('January 10, 2017'), pages: 450 };
document.body.innerHTML = newBook(testBook);
//c)
/* One of TypeScript’s core principles is that type-checking focuses on the shape that values have.
This is sometimes called “duck typing” or “structural subtyping”.
In TypeScript, interfaces fill the role of naming these types,
and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

In other words, don’t check whether it IS-a duck:
check whether it QUACKS-like-a duck, WALKS-like-a duck, etc, etc,
depending on exactly what subset of duck-like behaviour you need to play your language-games with.
— Alex Martelli */
var book = /** @class */ (function () {
    function book(title, author, publiced, pages) {
        this.title = title,
            this.author = author,
            this.publiced = publiced,
            this.pages = pages;
    }
    return book;
}());
