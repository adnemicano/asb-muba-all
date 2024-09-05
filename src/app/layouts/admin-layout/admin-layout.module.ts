import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";

import { SshComponent } from "app/ssh/ssh.component";
import { HspkComponent } from "app/hspk/hspk.component";
import { AsbComponent } from "app/asb/asb.component";
import { SbuComponent } from "app/sbu/sbu.component";

import { ModalFormComponent } from "app/modal-form/modal-form.component";
import { ModalService } from "app/modal-form/modal-form.service";
import { AkunComponent } from "app/akun/akun.component";
import { BerandaComponent } from "app/beranda/beranda.component";
import { BeritaComponent } from "app/berita/berita.component";
import { PeraturanComponent } from "app/peraturan/peraturan.component";
import { InformasiComponent } from "app/informasi/informasi.component";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  declarations: [
    DashboardComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    SshComponent,
    HspkComponent,
    AsbComponent,
    SbuComponent,
    ModalFormComponent,
  ],
  providers: [ModalService],
})
export class AdminLayoutModule {}
