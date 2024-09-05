import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peraturan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatCardModule, MatInputModule, MatSelectModule],
  templateUrl: './peraturan.component.html',
  styleUrls: ['./peraturan.component.css']
})
export class PeraturanComponent implements OnInit {

  form: FormGroup;
  sections = [
    'Undang Undang',
    'PP',
    'Permen',
    'Perda',
    'Peraturan Lainnya',
    'Arsip Harga Satuan'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      regulationType: [''],
      regulations: this.fb.array([])  
    });
  }

  ngOnInit() {
    this.addRegulation(); 
  }

  get regulations(): FormArray {
    return this.form.get('regulations') as FormArray;
  }

  addRegulation() {
    const regulationGroup = this.fb.group({
      name: ['', Validators.required],
      year: ['', Validators.required]
    });
    this.regulations.push(regulationGroup);
  }

 

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Form Data:', formData);
      
    } else {
      console.log('Form is invalid');
    }
  }
}
