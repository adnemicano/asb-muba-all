import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards = [
    { title: 'Terakhir di-update', value: 'Rabu, 10 Juli 2024 pukul 22:35' },
    { title: 'SKPD', value: 47 },
    { title: 'SSH', value: 1200 },
    { title: 'HSPK', value: 100 },
    { title: 'ASB', value: 50 },
    { title: 'SBU', value: 100 }
  ];

  usulans = [
    { skpd: 'Dinas Pekerjaan Umum', ssh: 10, hspk: 11, asb: 100, sbu: 20 },
    { skpd: 'Dinas Pendidikan', ssh: 5, hspk: 6, asb: 8, sbu: 9 }
  ];

  approveds = [
    { skpd: 'Dinas Pekerjaan Umum', ssh: 5, hspk: 6, asb: 70, sbu: 10 },
    { skpd: 'Dinas Pendidikan', ssh: 4, hspk: null, asb: null, sbu: null }
  ];

  constructor() { }

  ngOnInit() {
  }
}
