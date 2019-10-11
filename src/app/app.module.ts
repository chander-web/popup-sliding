import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainerComponent } from './appContainer.component';
import { SlidePopupComponent } from './slide-popup/slide-popup.component';

@NgModule({
  declarations: [
    AppContainerComponent,
    SlidePopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppContainerComponent]
})
export class AppModule { }
