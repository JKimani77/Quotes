import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteModel: Quote;

  displayNew: Boolean = false;

  submitType: string = 'Save';

  onNew(){
    this.quoteModel = new Quote("","","",0,0,new Date() ); //this will initiate new quote
    this.submitType = 'Save';  
    this.displayNew = true;  //to display the quote form section for posting new quote
  }

  onSave(){
    if (this.submitType ==='Save'){
      this.quotes.push(this.quoteModel);  //posting the quote that has been created
    }
    this.displayNew = false; //to hide the quote form section for posting new quote
  }

  onCancel(){
    this.displayNew = false;
  }

quotes = [
  new Quote ("Life is too short to blend in","Paris Hilton","Michael Shoemaker",0,0, new Date()),
  new Quote ("The grass is greener where you water it","Neil Barringham","Ellen Generous",0,0, new Date()),
  new Quote ("Most of my stories are fantasy","Ray Bradbury","Lebrown James",0,0, new Date()),
  new Quote ("A smile abroad is often a scowl at home","Alfred Lord Tennyson","Alesha Dickson",0,0, new Date()),
  new Quote ("The man who has no imagination has no wings","Muhammad Ali","Mo Salad",0,0, new Date()),
  
];



delete(i: number) {
  this.quotes.splice(i, 1);
    }

  constructor() { }

  ngOnInit() {
  }

}
