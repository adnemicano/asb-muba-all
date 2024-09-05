import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: "app-akun",
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatInputModule],
  templateUrl: "./akun.component.html",
styleUrls: ["./akun.component.scss"],
})
export class AkunComponent {}
