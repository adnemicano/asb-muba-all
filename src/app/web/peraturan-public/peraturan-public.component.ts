import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-peraturan-public",
  templateUrl: "./peraturan-public.component.html",
  styleUrls: ["./peraturan-public.component.scss"],
})
export class PeraturanPublicComponent implements OnInit {
  data = [
    {
      judul:
        "Undang-Undang Republik Indonesia Nomor 6 Tahun 2023 Tentang Penetapan Peraturan Pemerintah Pengganti Undang-Undang Nomor 2 Tahun 2022 Tentang Cipta Kerja Menjadi Undang-Undang",
      tahun: 2023,
    },
    {
      judul: "Undang-undang No. 11 Tahun 2020 Tentang Cipta Kerja",
      tahun: 2020,
    },
    {
      judul:
        "Undang-Undang Republik Indonesia Nomor 17 Tahun 2019 Tentang Sumber Daya Air",
      tahun: 2019,
    },
    {
      judul:
        "Undang-Undang Republik Indonesia Nomor 6 Tahun 2017 Tentang Arsitek",
      tahun: 2017,
    },
    {
      judul: "Undang-Undang Nomor 2 Tahun 2017 Tentang Jasa Konstruksi",
      tahun: 2017,
    },
    {
      judul:
        "Undang-Undang Republik Indonesia Nomor 11 Tahun 2014 Tentang Keinsinyuran",
      tahun: 2014,
    },
    {
      judul:
        "Undang-Undang Republik Indonesia Nomor 1 Tahun 2011 Tentang Perumahan dan Kawasan Permukiman",
      tahun: 2011,
    },
    {
      judul:
        "Undang-Undang Republik Indonesia Nomor 26 Tahun 2007 Tentang Penataan Ruang",
      tahun: 2007,
    },
    {
      judul: "Undang-undang No. 13 Tahun 2003 Tentang Ketenagakerjaan",
      tahun: 2003,
    },
  ];
  currentPage = 1;
  itemsPerPage = 10;
  pages: number[] = [];
  activeTab = "uu";

  ngOnInit(): void {
    this.pages = Array(Math.ceil(this.data.length / this.itemsPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    // Fetch and display data based on the active tab if necessary
  }
}
