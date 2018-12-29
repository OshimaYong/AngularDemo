import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';
import { AppRouterModule } from './app.router.module';
import { NgscrollspyComponent } from './ngscrollspy/ngscrollspy.component';
import { TextComponent } from './common/text.component';
import { NgScrollSpyDirective } from './common/scrollspy.direct';



@NgModule({
  declarations: [
    AppComponent,
    BootstrapdemoComponent,
    NgscrollspyComponent,
    TextComponent,
    NgScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
