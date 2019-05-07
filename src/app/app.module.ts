import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HttpClient  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountComponent } from '../app/Components/Account/account.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule ],
  declarations: [ AppComponent, AccountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
