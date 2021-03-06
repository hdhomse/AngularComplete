import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients :Ingredient [] = [
    { name: 'Apple', amount: 200 }
    { name: 'Tomatoes', amount: 203 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
