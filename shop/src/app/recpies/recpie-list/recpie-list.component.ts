import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.model';


@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  recpies: Recipe[]= [
new Recipe('دستور پخت ماکارانی', 'شرح دستور اینجا می باشد',
 'https://parsmakaran.com/wp-content/uploads/2020/10/007bcb9693f9c4221fb79b00914c4ef9.jpg'),
 new Recipe('دستور پخت ماکارانی', 'شرح دستور اینجا می باشد',
 'https://parsmakaran.com/wp-content/uploads/2020/10/007bcb9693f9c4221fb79b00914c4ef9.jpg'),
 new Recipe('دستور پخت ماکارانی', 'شرح دستور اینجا می باشد',
 'https://parsmakaran.com/wp-content/uploads/2020/10/007bcb9693f9c4221fb79b00914c4ef9.jpg')



  ]

  constructor() { }

  ngOnInit(): void {
  }

}
