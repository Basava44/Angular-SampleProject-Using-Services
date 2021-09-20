import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountComponent } from './mobile-cards/count/count.component';
import { HeaderComponent } from './mobile-cards/header/header.component';
import { MobileCardComponent } from './mobile-cards/mobile-card/mobile-card.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { MobileCardsComponent } from './mobile-cards/mobile-cards.component';

const appRoutes: Routes = [
  {path:'', component: MobileCardsComponent },
  {path:'addmobile', component: AddMobileComponent },
  {path:'header', component: HeaderComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    HeaderComponent,
    MobileCardComponent,
    AddMobileComponent,
    MobileCardsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
