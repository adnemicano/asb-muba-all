import { Component } from "@angular/core";

@Component({
  selector: "app-ssh-public",
  templateUrl: "./ssh-public.component.html",
  styleUrls: ["./ssh-public.component.scss"],
})
export class SshPublicComponent {
  data = [
    // Example data, replace with actual data or API call
  ];

  filteredData = this.data;
  selectedKecamatan: string = "";
  selectedFilter: string = "BAHAN";
  searchQuery: string = "";
  isModalOpen = false;

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
        ? item.jenis.includes(this.selectedFilter)
        : true;
      const matchesSearch =
        item.jenis.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.bahan.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesKecamatan && matchesFilter && matchesSearch;
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
