import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { MaterialModule } from './material';
import { NeckComponent } from './neck/neck.component';
import { StringsComponent } from './strings/strings.component';
import { FremeComponent } from './freme/freme.component';
import { PlayComponent } from './play/play.component';
import { MatButtonModule, MatGridListModule, MatProgressBarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    NeckComponent,
    StringsComponent,
    FremeComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
