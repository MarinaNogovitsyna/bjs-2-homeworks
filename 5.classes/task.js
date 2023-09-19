// Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
        fix() {
            this.state *= 1.5;
        }
        set state(num) {
            if (num < 0) {
                this.state = 0;
            }
            else if (num > 100){
                this.state = 100;
            }
            else {
                this._state = num;
            }
        }
        get state() {
            return this._state;
        }
    }

   class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
   }

   class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.author = author;
        this.type = "book";
    }
   }

   class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel"
    }
   }

   class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
   }

   class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
   }


// Задача 2
class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        debugger
        for(let i = 0; i < this.books.length; i++){
            if (this.books[i][type] === value){
                return this.books[i]
            }
        }
        return null
    }
    giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i++){
            if (this.books[i].name === bookName){
                return this.books.splice([i], 1)[0];
            }
        }
            return null
    }
}


// Задача 3
class Student{
    constructor(name){
        this.name = name;
        this.marks = {}
    }
    addMark(num, subject){
        if (!(num >= 2 && num <= 5))
            return;
        else {
            if (!(subject in this.marks)){
                this.marks[subject] =[];
                this.marks[subject].push(num);
            }
            else this.marks[subject].push(num);
        }
    }
    
    getAverageBySubject(subject){
        if (!(subject in this.marks)){
            return 0
        }
        return this.marks[subject].reduce((sum, current) => sum + current, 0) / this.marks[subject].length;
    }
    getAverage(){
        let arr = Object.keys(this.marks);
        let sum = 0;
        if (arr.length !== 0){
            for (let sub of arr){
                sum += this.getAverageBySubject(sub);
            }
            return sum / arr.length;
        }
        return 0;
    }
}


