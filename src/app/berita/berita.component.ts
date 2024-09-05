import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-berita',
  standalone: true,
  imports: [MatCardModule, MatInputModule  ],
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component.css']
})
export class BeritaComponent {

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
  
      const filePathElement = document.getElementById(filePathControl);
      if (filePathElement) {
        filePathElement.textContent = filePath;
      }
    }
  }
}