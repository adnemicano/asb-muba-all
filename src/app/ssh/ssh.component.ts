import { Component, ElementRef, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ModalService } from "app/modal-form/modal-form.service";

@Component({
  selector: "app-ssh",
  templateUrl: "./ssh.component.html",
  styleUrls: ["./ssh.component.scss"],
})
export class SshComponent {
  @ViewChild("modalform") modalform!: TemplateRef<any>;
  @ViewChild("modalarsip") modalarsip!: TemplateRef<any>;
  @ViewChild("modaltampil") modaltampil!: TemplateRef<any>;
  @ViewChild("modalexport") modalexport!: TemplateRef<any>;
  @ViewChild("dropdownMenu") dropdownMenu!: ElementRef;

  isDropdownOpen = false;
  isArsipPopupOpen = false;

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

  exports = [
    {
      id: 4217708,
      kodeBarang: "1.1.12.01.01.0001.00001",
      uraianBarang: "Kuas",
      spesifikasi: "Kuas Lukis, Gagang Kayu",
      satuan: "Buah",
      hargaSatuan: "Rp 40.500",
      kodeRekening:
        "5.1.02.01.01.0001, 5.1.02.01.01.0012, 5.1.02.01.01.0039, 5.1.02.01.01.0040",
    },
    {
      id: 4217709,
      kodeBarang: "1.1.12.01.01.0001.00002",
      uraianBarang: "Kuas",
      spesifikasi: "Kuas Cat, Gagang Kayu",
      satuan: "Buah",
      hargaSatuan: "Rp 28.750",
      kodeRekening: "5.1.02.01.01.0001, 5.1.02.01.01.0039, 5.1.02.01.01.0040",
    },
    {
      id: 4217741,
      kodeBarang: "1.1.12.01.01.0001.00003",
      uraianBarang: "Pernis",
      spesifikasi: "Kemasan Kaleng, Berat 1 Liter",
      satuan: "Kaleng",
      hargaSatuan: "Rp 149.500",
      kodeRekening: "5.1.02.01.01.0001, 5.1.02.01.01.0039, 5.1.02.01.01.0040",
    },
    {
      id: 4217743,
      kodeBarang: "1.1.12.01.01.0001.00004",
      uraianBarang: "Lem",
      spesifikasi: "Kemasan Ukuran 20 gram",
      satuan: "Botol",
      hargaSatuan: "Rp 11.500",
      kodeRekening: "5.1.02.01.01.0001, 5.1.02.01.01.0039, 5.1.02.01.01.0040",
    },
  ];

  constructor(private modal: ModalService, private fb: FormBuilder) {
    this.componentForm = this.fb.group({
      namaKomponen: ["", Validators.required],
      spesifikasi: ["", Validators.required],
      satuan: ["", Validators.required],
      jenisProduk: ["", Validators.required],
      tkdn: [""],
      tipeHargaSatuan: ["", Validators.required],
      hargaSatuanUmum: [""],
      namaAkun: ["", Validators.required],
    });

    this.componentForm.get("jenisProduk").valueChanges.subscribe((value) => {
      const tkdnControl = this.componentForm.get("tkdn");
      if (value === "Dalam Negeri") {
        tkdnControl.setValidators([Validators.required]);
      } else {
        tkdnControl.clearValidators();
      }
      tkdnControl.updateValueAndValidity();
    });

    this.componentForm
      .get("tipeHargaSatuan")
      .valueChanges.subscribe((value) => {
        if (value === "Per Lokasi") {
          this.kecamatans.forEach((kecamatan) => {
            this.componentForm.addControl(
              kecamatan,
              new FormControl("", Validators.required)
            );
          });
          this.componentForm.get("hargaSatuanUmum").clearValidators();
          this.componentForm.get("hargaSatuanUmum").updateValueAndValidity();
        } else {
          this.kecamatans.forEach((kecamatan) => {
            this.componentForm.removeControl(kecamatan);
          });
          this.componentForm
            .get("hargaSatuanUmum")
            .setValidators([Validators.required]);
          this.componentForm.get("hargaSatuanUmum").updateValueAndValidity();
        }
      });
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
    if (this.isTdDropdownVisible) {
      // Menyesuaikan posisi dropdown jika diperlukan
      const rect = this.dropdownMenu.nativeElement.getBoundingClientRect();
      // Atur posisi atau gaya dropdown jika diperlukan
    }
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

  klikexport() {
    const options: any = {
      dialogContent: this.modalexport,
      width: "80vw",
      height: "30vw",
      minWidth: "30px",
      disableClose: true,
    };

    this.modal.open(options);
  }
}
