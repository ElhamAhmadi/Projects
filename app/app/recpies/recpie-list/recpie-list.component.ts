import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  recpies: Recipe[]= [
new Recipe('دستور پخت قیمه', 'شرح دستور اینجا می باشد', 'https://img.nody.ir/%D8%B9%DA%A9%D8%B3-%D8%AE%D9%88%D8%B1%D8%B4-%D9%84%D9%BE%D9%87/')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
