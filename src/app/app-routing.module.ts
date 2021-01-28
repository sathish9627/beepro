import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { ShopComponent } from './shop/shop.component';

import { BeesComponent } from './bees/bees.component';
import { BeeboxComponent } from './beebox/beebox.component';
import { BeestandComponent } from './beestand/beestand.component';
import { HoneyComponent } from './honey/honey.component';
import { HoneyextractorComponent } from './honeyextractor/honeyextractor.component';
import { GlovesComponent } from './gloves/gloves.component';
import { MaskComponent } from './mask/mask.component';
import { FramesComponent } from './frames/frames.component';
import { SmokerComponent } from './smoker/smoker.component';
import { KnifeComponent } from './knife/knife.component';
import { FullbeesetupComponent } from './fullbeesetup/fullbeesetup.component';

import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';

const routes1: Routes =
[{ path: 'home',  redirectTo: 'home', pathMatch: 'full' },

{path: 'homeinfo' , component: HomeinfoComponent,
children:[{ path: 'homeinfo',  redirectTo: 'homeinfo', pathMatch: 'full' },
{path: 'homeinfo' , component: HomeinfoComponent},] },

{path: 'shop' , component: ShopComponent,
children:[{ path: 'shop',  redirectTo: 'shop', pathMatch: 'full' },
{path: 'shop' , component: ShopComponent},] },

{path: 'contactus' , component: ContactusComponent,
children:[{ path: 'contactus',  redirectTo: 'contactus', pathMatch: 'full' },
{path: 'contactus' , component: ContactusComponent},] },

{path: 'bees' , component: BeesComponent,
children:[{ path: 'bees',  redirectTo: 'bees', pathMatch: 'full' },
{path: 'bees' , component: BeesComponent},] },

{path: 'beebox' , component: BeeboxComponent,
children:[{ path: 'beebox',  redirectTo: 'beebox', pathMatch: 'full' },
{path: 'beebox' , component: BeeboxComponent},] },

{path: 'beestand' , component: BeestandComponent,
children:[{ path: 'beestand',  redirectTo: 'beestand', pathMatch: 'full' },
{path: 'beestand' , component: BeestandComponent},] },

{path: 'honey' , component: HoneyComponent,
children:[{ path: 'honey',  redirectTo: 'honey', pathMatch: 'full' },
{path: 'honey' , component: HoneyComponent},] },

{path: 'honeyextractor' , component: HoneyextractorComponent,
children:[{ path: 'honeyextractor',  redirectTo: 'honeyextractor', pathMatch: 'full' },
{path: 'honeyextractor' , component: HoneyextractorComponent},] },

{path: 'gloves' , component: GlovesComponent,
children:[{ path: 'gloves',  redirectTo: 'gloves', pathMatch: 'full' },
{path: 'gloves' , component: GlovesComponent},] },

{path: 'mask' , component: MaskComponent,
children:[{ path: 'mask',  redirectTo: 'mask', pathMatch: 'full' },
{path: 'mask' , component: MaskComponent},] },

{path: 'frames' , component: FramesComponent,
children:[{ path: 'frames',  redirectTo: 'frames', pathMatch: 'full' },
{path: 'frames' , component: FramesComponent},] },

{path: 'smoker' , component: SmokerComponent,
children:[{ path: 'smoker',  redirectTo: 'smoker', pathMatch: 'full' },
{path: 'smoker' , component: SmokerComponent},] },

{path: 'knife' , component: KnifeComponent,
children:[{ path: 'knife',  redirectTo: 'knife', pathMatch: 'full' },
{path: 'knife' , component: KnifeComponent},] },

{path: 'fullbeesetup' , component: FullbeesetupComponent,
children:[{ path: 'fullbeesetup',  redirectTo: 'fullbeesetup', pathMatch: 'full' },
{path: 'fullbeesetup' , component: FullbeesetupComponent},] },

{path: 'aboutus' , component: AboutusComponent,
children:[{ path: 'aboutus',  redirectTo: 'aboutus', pathMatch: 'full' },
{path: 'aboutus' , component: AboutusComponent},] },

{path: 'latestnews' , component: LatestnewsComponent,
children:[{ path: 'latestnews',  redirectTo: 'latestnews', pathMatch: 'full' },
{path: 'latestnews' , component: LatestnewsComponent},] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes1)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
