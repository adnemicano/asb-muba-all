import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPublicComponent } from './dashboard-public/dashboard-public.component';
import { WebComponent } from './web.component';
import { BeritaPublicComponent } from './berita-public/berita-public.component';
import { PeraturanPublicComponent } from './peraturan-public/peraturan-public.component';
import { InformasiPublicComponent } from './informasi-public/informasi-public.component';
import { Review1PublicComponent } from './review1-public/review1-public.component';
import { Review2PublicComponent } from './review2-public/review2-public.component';
import { Review3PublicComponent } from './review3-public/review3-public.component';
import { Review4PublicComponent } from './review4-public/review4-public.component';
import { Review5PublicComponent } from './review5-public/review5-public.component';
import { Review6PublicComponent } from './review6-public/review6-public.component';
import { SshPublicComponent } from './ssh-public/ssh-public.component';
import { HspkPublicComponent } from './hspk-public/hspk-public.component';
import { AsbPublicComponent } from './asb-public/asb-public.component';
  

const routes: Routes = [
  {
    path: "",
    component: WebComponent,
    children: [
      { path: "home", component: DashboardPublicComponent },
      { path: "berita", component: BeritaPublicComponent },
      { path: "peraturan", component: PeraturanPublicComponent},
      { path: "informasi", component: InformasiPublicComponent},
      { path: "review1", component: Review1PublicComponent},
      { path: "review2", component: Review2PublicComponent},
      { path: "review3", component: Review3PublicComponent},
      { path: "review4", component: Review4PublicComponent},
      { path: "review5", component: Review5PublicComponent},
      { path: "review6", component: Review6PublicComponent},
      { path: "ssh", component: SshPublicComponent},
      { path: "hspk", component: HspkPublicComponent},
      { path: "asb", component: AsbPublicComponent},

    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class WebRoutingModule { }
