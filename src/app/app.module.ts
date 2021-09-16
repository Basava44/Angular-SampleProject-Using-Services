import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { HeaderComponent } from './header/header.component';
import { MobileCardComponent } from './mobile-card/mobile-card.component';
import { MobileServices } from './mobile-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    HeaderComponent,
    MobileCardComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [MobileServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
