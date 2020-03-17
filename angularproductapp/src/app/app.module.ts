import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";

import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    TopBarComponent
  ],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
