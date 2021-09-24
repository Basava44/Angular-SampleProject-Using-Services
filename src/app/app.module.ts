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
import { DataHandelComponent } from './data-handel/data-handel.component';
import { FilterPipe } from './filter.pipe';
import { NewCardsComponent } from './new-cards/new-cards.component';
import { CardComponent } from './new-cards/card/card.component';
import { DisplayCardComponent } from './new-cards/display-card/display-card.component';
import { ComparisonPageComponent } from './new-cards/comparison-page/comparison-page.component';
import { ComparisonComponentComponent } from './new-cards/comparison-page/comparison-component/comparison-component.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/cards', pathMatch:'full'},
  {path:'cards', component: MobileCardsComponent },
  {path:'addmobile', component: AddMobileComponent },
  {path:'newWindow', component: NewCardsComponent},
  {path:'newWindow/compare', component: ComparisonPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    HeaderComponent,
    MobileCardComponent,
    AddMobileComponent,
    MobileCardsComponent,
    DataHandelComponent,
    FilterPipe,
    NewCardsComponent,
    CardComponent,
    DisplayCardComponent,
    ComparisonPageComponent,
    ComparisonComponentComponent,
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
