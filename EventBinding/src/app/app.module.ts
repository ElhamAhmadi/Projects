import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ShowContentComponent } from './show-content/show-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddItemComponent,
    ShowContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
