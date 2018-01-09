import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [

    new Quote(1, "Indira Gandhi", "You cannot shake hands with a clenched fist", new Date(2016.11, 15)),

    new Quote(2, "A. P. J. Abdul Kalam", "Let us sacrifice our today so that our children can have a better tomorrow.", new Date(2017.01, 1)),
    new Quote(3, "Heraclitus", "There is nothing permanent except change.", new Date(2014.5, 1)),
    new Quote(4, "Jane Austen", "There is no charm equal to tenderness of heart.", new Date(2016.5, 2)),
    new Quote(5, "Francis of Assisi", "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.", new Date(2015.4, 4)),
    new Quote(6, "A. P. J. Abdul Kalam", "Let us sacrifice our today so that our children can have a better tomorrow.", new Date(2016.7, 8))
  ]
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm('Are you sure you want to delete quote')
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }

    upVotes:number=0;
    upVote(){
      this.upVotes=this.upVotes+1;

    }
    downVotes:number=0;
    downVote(){
      this.downVotes=this.downVotes+1;

    }
    constructor() { }

    ngOnInit() {
    }
}
