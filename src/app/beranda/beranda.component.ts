import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-beranda',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatInputModule, CommonModule, MatCardModule],
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  newsList = [
    {
      image: 'assets/img/image1.png',
      date: '2024-07-03',
      title: 'SOSIALISASI DAN DISEMINASI PERATURAN JASA KONSTRUKSI UNTUK PENYEDIA JASA TAHUN 2024'
    },
    {
      image: 'assets/img/image2.png',
      date: '2024-07-02',
      title: 'SOSIALISASI DAN DISEMINASI PERATURAN JASA KONSTRUKSI UNTUK PENGGUNA JASA'
    },
    {
      image: 'assets/img/image3.png',
      date: '2024-06-25',
      title: 'UJI SERTIFIKASI TENAGA KERJA KONSTRUKSI JENJANG 7 PROGRAM APRESIASI OPD SUB URUSAN JASA KONSTRUKSI TERBAIK'
    }
  ];

  currentIndex = 0;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sectionTitle: ['', Validators.required],
      image1Path: [''],
      imageDescription1: [''],
      date1: [''],
      image2Path: [''],
      imageDescription2: [''],
      date2: [''],
      image3Path: [''],
      imageDescription3: [''],
      date3: ['']
    });
  }

  ngOnInit() {
    // Initialization logic here
  }

  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.newsList.length - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex < this.newsList.length - 1) ? this.currentIndex + 1 : 0;
  }

  openFileDialog(inputId: string) {
    const fileInput = document.getElementById(inputId) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: Event, filePathControl: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const filePath = file.name;
   
      this.form.get(filePathControl)?.setValue(filePath);

    
      const filePathElement = document.getElementById(filePathControl);
      if (filePathElement) {
        filePathElement.textContent = filePath;
      }
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Form Data:', formData);
      // Implement your submission logic here, e.g., send the data to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
