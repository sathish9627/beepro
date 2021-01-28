import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BeesComponent } from './bees/bees.component';
import { BeeboxComponent } from './beebox/beebox.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InfoDirective } from './info.directive';

import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BeestandComponent } from './beestand/beestand.component';
import { HoneyComponent } from './honey/honey.component';
import { HoneyextractorComponent } from './honeyextractor/honeyextractor.component';
import { GlovesComponent } from './gloves/gloves.component';
import { MaskComponent } from './mask/mask.component';
import { FramesComponent } from './frames/frames.component';
import { FullbeesetupComponent } from './fullbeesetup/fullbeesetup.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { SmokerComponent } from './smoker/smoker.component';
import { KnifeComponent } from './knife/knife.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    BeesComponent,
    ContactusComponent,
    InfoDirective,
    HomeinfoComponent,
    AboutusComponent,
    BeeboxComponent,
    BeestandComponent,
    HoneyComponent,
    HoneyextractorComponent,
    GlovesComponent,
    MaskComponent,
    FramesComponent,
    FullbeesetupComponent,
    LatestnewsComponent,
    SmokerComponent,
    KnifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
