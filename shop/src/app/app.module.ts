import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { RecpieListComponent } from './recpies/recpie-list/recpie-list.component';
import { RecpieDetailComponent } from './recpies/recpie-detail/recpie-detail.component';
import { RecpieItemComponent } from './recpies/recpie-list/recpie-item/recpie-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecpiesComponent,
    RecpieListComponent,
    RecpieDetailComponent,
    RecpieItemComponent,
    ShopingListComponent,
    ShopingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
