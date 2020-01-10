import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes= [
  new Quote ("Life is too short to blend in","Paris Hilton","Michael Shoemaker"),
  new Quote ("Is life not a thousand times too short for us to bore ourselves?","Friedrich Nietzche","Ellen Generous"),
  new Quote ("Most of my stories are fantasy","Ray Bradbury","Lebrown James"),
  new Quote ("A smile abroad is often a scowl at home","Alfred Lord Tennyson","Alesha Dickson"),
  new Quote ("The man who has no imagination has no wings","Muhammad Ali","Mo Salad"),
  new Quote ("I think that I shall never see a poem as lovely as a tree","Joyce Kilmer","Teafunny Haddish"),
  new Quote ("We have got to put alot of money into changing behaviour","Bill Gates","Not TFUE")
];

  constructor() { }

  ngOnInit() {
  }

}
