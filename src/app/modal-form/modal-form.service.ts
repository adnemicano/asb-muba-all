import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { map, Observable, take } from "rxjs";
import {
  IModalFormComponent,
  ModalFormComponent,
} from "./modal-form.component";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  dialogRef!: MatDialogRef<ModalFormComponent>;
  constructor(private dialog: MatDialog) {}

  public open(options: IModalFormComponent) {
    if (!options.dialogContent) {
      console.error("dialogContent is null or undefined!");
      return;
    }
    this.dialogRef = this.dialog.open(ModalFormComponent, {
      width: options.width,
      minWidth: options.minWidth,
      data: options,
    });
  }

  public close() {
    this.dialogRef.close();
  }

  public closeAll() {
    this.dialog.closeAll();
  }

  public submit(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => {
        console.log("dialog submitted");
        return res;
      })
    );
  }
}
