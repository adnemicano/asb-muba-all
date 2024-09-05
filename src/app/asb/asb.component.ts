import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalService } from "app/modal-form/modal-form.service";

@Component({
  selector: "app-asb",
  templateUrl: "./asb.component.html",
  styleUrls: ["./asb.component.scss"],
})
export class AsbComponent implements OnInit {
  @ViewChild("modalform") modalform!: TemplateRef<any>;
  @ViewChild("modalarsip") modalarsip!: TemplateRef<any>;
  @ViewChild("modaltampil") modaltampil!: TemplateRef<any>;
  @ViewChild("modaldetail") modaldetail!: TemplateRef<any>;
  @ViewChild("modaldtlasb") modaldtlasb!: TemplateRef<any>;
  @ViewChild("modaleditasb") modaleditasb!: TemplateRef<any>;

  isDropdownOpen = false;
  isArsipPopupOpen = false;
  showTable = false;

  componentForm: FormGroup;
  kecamatans = [
    "Kecamatan Lais",
    "Kecamatan Keluang",
    "Kecamatan Sungai Lilin",
    "Kecamatan Batanghari Leko",
    "Kecamatan Sekayu",
    "Kecamatan Babat Supat",
    "Kecamatan Babat Toman",
    "Kecamatan Sungai Keruh",
    "Kecamatan Jirak Jaya",
    "Kecamatan Bayung Lencir",
    "Kecamatan Sanga Desa",
    "Kecamatan Lawang Wetan",
    "Kecamatan Tungkal Jaya",
    "Kecamatan Plakat Tinggi",
    "Kecamatan Lalan",
  ];

  searchQuery: string = "";
  rekeningList = [
    {
      code: "5.1.02.01.01.0001",
      description: "Belanja Bahan-bahan Bangunan dan Konstruksi",
    },
    { code: "5.1.02.01.01.0012", description: "Belanja Bahan-bahan Lainnya" },
    {
      code: "5.1.02.01.01.0039",
      description: "Belanja Barang Untuk Dijual/Diserahkan kepada Masyarakat",
    },
    {
      code: "5.1.02.01.01.0039",
      description:
        "Belanja Barang Untuk Dijual/Diserahkan kepada Pihak Ketiga/Pihak Lain",
    },
  ];
  filteredRekening = [...this.rekeningList];

  filterRekening() {
    this.filteredRekening = this.rekeningList.filter((rekening) =>
      rekening.description
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase())
    );
  }

  addRekening() {
    // Logic to add a new rekening
  }

  deleteRekening(rekening) {
    this.rekeningList = this.rekeningList.filter((r) => r !== rekening);
    this.filterRekening();
  }

  closeModal() {
    // Logic to close the modal
  }

  items = [
    {
      kode: "1.1.12.01.01.0001.00008",
      uraian:
        "Formulir Surat Pernyataan Tidak Memiliki Dokumen Kependudukan (F-1.03)",
      spesifikasi:
        "Bahan baku: Kertas HVS 80 gram ukuran A4, 1 rangkap / 4 lembar warna putih",
      satuan: "Lembar",
      harga: "Rp 900,00",
    },
    {
      kode: "1.1.12.01.01.0001.00009",
      uraian:
        "Formulir Surat Kuasa dalam Pelayanan Administrasi Kependudukan (F-1.07)",
      spesifikasi:
        "Bahan baku: Kertas HVS 80 gram ukuran A4, 1 rangkap / 4 lembar warna putih",
      satuan: "Lembar",
      harga: "Rp 900,00",
    },
    {
      kode: "1.1.12.01.03.0008.00539",
      uraian: "Kabel NFA2X (LVTC)",
      spesifikasi: "Ukuran 2 x 10 mm",
      satuan: "Meter",
      harga: "Rp 14.375,00",
    },
    {
      kode: "1.1.12.01.03.0008.00551",
      uraian: "Lampu LED Smart System",
      spesifikasi:
        "Lampu Jalan, 120W, Sistem, GSM Daya Input, Watt 120V/ inVAC100-240/Color Temp K2700-6000K",
      satuan: "Unit",
      harga: "Rp 8.564.600,00",
    },
    {
      kode: "1.1.12.01.03.0008.00552",
      uraian: "Lampu LED Non Smart System",
      spesifikasi:
        "Daya, Input, Watt 40W/ VAC.in220V, Frekuensi/HZ 50Hz/Color Temp, 2700-4200-6000K",
      satuan: "Unit",
      harga: "Rp 3.000.000,00",
    },
  ];

  details = [
    {
      no: "",
      uraian: "Pekerja",
      kode: "L.01",
      satuan: "OH",
      koef1vol: "",
      koef1sat: "",
      koef2vol: "",
      koef2sat: "",
      koef3vol: "",
      koef3sat: "",
      hargasatuan: "94.206",
      jmlharga: "155.440",
    },
    {
      no: "",
      uraian: "Tukang Batu",
      kode: "L.02",
      satuan: "OH",
      koef1vol: "",
      koef1sat: "",
      koef2vol: "",
      koef2sat: "",
      koef3vol: "",
      koef3sat: "",
      hargasatuan: "111.055",
      jmlharga: "30.540",
    },
    {
      no: "",
      uraian: "Kepala Tukang",
      kode: "L.03",
      satuan: "OH",
      koef1vol: "",
      koef1sat: "",
      koef2vol: "",
      koef2sat: "",
      koef3vol: "",
      koef3sat: "",
      hargasatuan: "128.000",
      jmlharga: "3.584",
    },
  ];

  tblDataAdd = [
    {
      kodeKomponen: "",
      rincianKomponen: "",
      sifat: "",
      satuanHSPK: "",
      koefisien1Vol: "",
      koefisien1Satuan: "",
      koefisien2Vol: "",
      koefisien2Satuan: "",
      koefisien3Vol: "",
      koefisien3Satuan: "",
      hargaSatuan: "",
    },
    // Add more rows as needed
  ];

  tableData = [
    {
      kodeKomponen: "1.1.12.01.01.0001.00001",
      rincianKomponen: "Pekerjaan Pembersihan Lokasi",
      sifat: "",
      satuanHSPK: "Buah",
      koefisien1Vol: "",
      koefisien1Satuan: "",
      koefisien2Vol: "",
      koefisien2Satuan: "",
      koefisien3Vol: "",
      koefisien3Satuan: "",
      hargaSatuan: "Rp 40.500,00",
      editing: false,
    },
    // Add more rows as needed
  ];

  constructor(private modal: ModalService, private fb: FormBuilder) {
    this.componentForm = this.fb.group({
      kategori: ["", Validators.required],
      namaKomponen: ["", Validators.required],
      spesifikasi: ["", Validators.required],
      satuan: ["", Validators.required],
      jenisProduk: ["", Validators.required],
      namaAkun: [""],
      hargaSatuanType: ["", Validators.required],
      kecamatan: [""],
      hargaSatuan: ["", Validators.required],
      tkdn: [""],
    });
  }

  ngOnInit(): void {
    // Initialize your component here
  }

  editRow(index: number) {
    this.tableData[index].editing = !this.tableData[index].editing;
  }

  onHargaSatuanTypeChange(): void {
    this.componentForm.get("kecamatan")?.reset();
    this.componentForm.get("hargaSatuan")?.reset();
  }

  onKecamatanChange(): void {
    this.componentForm.get("hargaSatuan")?.reset();
  }

  openArsipPopup(): void {
    this.isArsipPopupOpen = true;
  }

  closeArsipPopup(): void {
    this.isArsipPopupOpen = false;
  }

  isDropdownVisible = false;
  isSettingsDropdownVisible = false;
  isTdDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  toggleSettingsDropdown() {
    this.isSettingsDropdownVisible = !this.isSettingsDropdownVisible;
  }

  toggleTdDropdown() {
    this.isTdDropdownVisible = !this.isTdDropdownVisible;
  }

  klikmodal() {
    const options: any = {
      dialogContent: this.modalform,
      width: "40vw",
      height: "30vw",
      minWidth: "30px",
      disableClose: true,
    };

    this.modal.open(options);
  }

  klikarsip() {
    const options: any = {
      dialogContent: this.modalarsip,
      width: "80vw",
      height: "30vw",
      minWidth: "30px",
      disableClose: true,
    };

    this.modal.open(options);
  }

  kliktampil() {
    const options: any = {
      dialogContent: this.modaltampil,
      width: "50vw",
      height: "30vw",
      minWidth: "30px",
      disableClose: true,
    };

    this.modal.open(options);
  }

  klikdetail() {
    const options: any = {
      dialogContent: this.modaldetail,
      width: "80vw",
      height: "30vw",
      minWidth: "30px",
      disableClose: true,
    };

    this.modal.open(options);
  }

  klikdtlasb() {
    const options: any = {
      dialogContent: this.modaldtlasb,
      width: "80vw",
      height: "30vw",
      minWidth: "30px",
      disableClose: true,
    };

    this.modal.open(options);
  }

  saveRow(row: any) {
    console.log("Saving row data:", row);
    row.editing = false;
  }

  klikeditasb() {
    const options: any = {
      dialogContent: this.modaleditasb,
      width: "80vw",
      height: "30vw",
      minWidth: "30px",
      disableClose: true,
    };

    this.modal.open(options);
  }
}
