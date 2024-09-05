import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { WebComponent } from "./web.component";
import { WebRoutingModule } from "./web.routing";
import { DashboardPublicComponent } from './dashboard-public/dashboard-public.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    WebRoutingModule,
  ],
  declarations: [
    WebComponent,
    DashboardPublicComponent,
    NavbarComponent,
    FooterComponent,
    BeritaPublicComponent,
    PeraturanPublicComponent,
    InformasiPublicComponent,
    Review1PublicComponent,
    Review2PublicComponent,
    Review3PublicComponent,
    Review4PublicComponent,
    Review5PublicComponent,
    Review6PublicComponent,
    SshPublicComponent,
    HspkPublicComponent,
    AsbPublicComponent,
  ],
  providers: [],
  bootstrap: [WebComponent],
})
export class WebModule {}
