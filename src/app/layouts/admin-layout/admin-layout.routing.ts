import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";

import { SshComponent } from "app/ssh/ssh.component";
import { HspkComponent } from "app/hspk/hspk.component";
import { AsbComponent } from "app/asb/asb.component";
import { SbuComponent } from "app/sbu/sbu.component";
import { ModalFormComponent } from "app/modal-form/modal-form.component";
import { AkunComponent } from "app/akun/akun.component";
import { BerandaComponent } from "app/beranda/beranda.component";
import { BeritaComponent } from "app/berita/berita.component";
import { PeraturanComponent } from "app/peraturan/peraturan.component";
import { InformasiComponent } from "app/informasi/informasi.component";

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "ssh", component: SshComponent },
  { path: "hspk", component: HspkComponent },
  { path: "asb", component: AsbComponent },
  { path: "sbu", component: SbuComponent },
  { path: 'modal-form', component: ModalFormComponent },
  { path: 'akun', component: AkunComponent },
  { path: 'beranda', component: BerandaComponent },
  { path: 'berita', component: BeritaComponent },
  { path: 'peraturan', component: PeraturanComponent },
  { path: 'informasi', component: InformasiComponent }
];
