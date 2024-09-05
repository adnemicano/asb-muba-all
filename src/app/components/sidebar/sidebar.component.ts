import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    submenu: any;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', submenu: [] },

    { path: '/shs', title: 'Standar Harga Satuan',  icon:'content_paste', class: '', submenu: [
      {path: '/ssh', title: 'SSH',  icon:'content_paste', class: '', submenu:[]},
      {path: '/hspk', title: 'HSPK',  icon:'content_paste', class: '', submenu:[]},
      {path: '/asb', title: 'ASB',  icon:'content_paste', class: '', submenu:[]},
      {path: '/sbu', title: 'SBU',  icon:'content_paste', class: '', submenu:[]},
    ]},

    { path: '/table-list', title: 'Referensi',  icon:'person', class: '', submenu: [
      {path: '/akun', title: 'Akun',  icon:'person', class: '', submenu: []},
    ] },
    { path: '/typography', title: 'Setting Web',  icon:'library_books', class: '', submenu: [
      {path: '/beranda', title: 'Beranda',  icon:'library_books', class: '', submenu: []},
      {path: '/berita', title: 'Berita',  icon:'library_books', class: '', submenu: []},
      {path: '/peraturan', title: 'Peraturan',  icon:'library_books', class: '', submenu: []},
      {path: '/informasi', title: 'Informasi',  icon:'library_books', class: '', submenu: []},
    ] },
    
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    console.log("cek", this.menuItems);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  submenuVisible = {};

  toggleSubmenu(index: number) {
    this.submenuVisible[index] = !this.submenuVisible[index];
  }
}

