import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informasi',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatCardModule, MatInputModule, MatSelectModule],
  templateUrl: './informasi.component.html',
  styleUrls: ['./informasi.component.css']
})
export class InformasiComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      regulations: this.fb.array([])  
    });
  }

  ngOnInit() {
    this.addRegulation(); // Initialize with one set of inputs
  }

  get regulations(): FormArray {
    return this.form.get('regulations') as FormArray;
  }

  addRegulation() {
    const regulationGroup = this.fb.group({
      nameproduk: ['', Validators.required],
      namept: ['', Validators.required],
      AlamatPT: ['', Validators.required],
      deksripsi: ['', Validators.required],
      image2Path: [''] // Add form control for image path
    });
    this.regulations.push(regulationGroup);
  }

  openFileDialog(inputId: string) {
    const fileInput = document.getElementById(inputId) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const filePath = file.name;
   
      this.regulations.at(index).get('image2Path')?.setValue(filePath);

      const filePathElement = document.getElementById(`image2Path-${index}`);
      if (filePathElement) {
        filePathElement.textContent = filePath;
      }
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Form Data:', formData);
      // Implement your submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
}
