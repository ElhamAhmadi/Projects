import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient ('بسته ماکارانی',2),
  new Ingredient ('پیاز',1),
  new Ingredient ('گوشت',3)
]
  constructor() { }

  ngOnInit(): void {
  }

}
