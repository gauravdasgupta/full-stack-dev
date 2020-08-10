import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogCorouselComponent } from './blog-corousel/blog-corousel.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogReaderComponent } from './blog-reader/blog-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogHeaderComponent,
    BlogCorouselComponent,
    BlogFooterComponent,
    BlogsListComponent,
    BlogReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
