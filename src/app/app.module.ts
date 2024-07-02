import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FileCardComponent } from './shared/component/file-card/file-card.component';
import { FileSizePipe } from './shared/pipe/file-size.pipe';
import { FiletypePipe } from './shared/pipe/filetype.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileCardComponent,
    FileSizePipe,
    FiletypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
