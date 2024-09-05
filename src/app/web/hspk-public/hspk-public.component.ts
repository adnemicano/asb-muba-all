import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-hspk-public",
  templateUrl: "./hspk-public.component.html",
  styleUrls: ["./hspk-public.component.scss"],
})
export class HspkPublicComponent implements OnInit {
  data = [
    // Example data, replace with actual data or API call
    {
      kode: "A.1.1.1.11",
      uraianpekerjaan:
        "(K3) Pembuatan 1 m2 steger / perancah dari bambu s.d. tinggi 6 meter",
      satuan: "m2",
      harga: 10000,
      kecamatan: "Lais",
    },
    {
      kode: "A.4.1.1.1",
      uraianpekerjaan: "Pembuatan 1 m3 Beton Mutu f’c = 7,4 Mpa (K100)",
      satuan: "m3",
      harga: 20000,
      kecamatan: "Keluang",
    },
    // Add more data as needed
  ];
  filteredData = this.data;
  selectedKecamatan: string = "";
  selectedFilter: string = "BAHAN";
  searchQuery: string = "";
  isModalOpen =  false;
  isDetailOpen = false;

  setFilter(filter: string) {
    this.selectedFilter = filter;
    this.filterData();
  }

  filterData() {
    this.filteredData = this.data.filter((item) => {
      const matchesKecamatan = this.selectedKecamatan
        ? item.kecamatan.includes(this.selectedKecamatan)
        : true;
      const matchesFilter = this.selectedFilter
        ? item.kode.includes(this.selectedFilter)
        : true;
      const matchesSearch =
        item.kode.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.kode.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesKecamatan && matchesFilter && matchesSearch;
    });
  }

  ngOnInit(): void {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openDetail() {
    this.isDetailOpen = true;
  }

  closeDetail() {
    this.isDetailOpen = false;
  }
}
