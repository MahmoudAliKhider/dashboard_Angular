import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './pages/main/main.component';
import { TopWidgetsComponent } from './pages/top-widgets/top-widgets.component';
import { SalesByMonthComponent } from './pages/sales-by-month/sales-by-month.component';
import { SalesByCategoryComponent } from './pages/sales-by-category/sales-by-category.component';
import { LastFewTransactionComponent } from './pages/last-few-transaction/last-few-transaction.component';
import { TopThreeProductsComponent } from './pages/top-three-products/top-three-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByMonthComponent,
    SalesByCategoryComponent,
    LastFewTransactionComponent,
    TopThreeProductsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
