import { Component, Inject, OnInit, TemplateRef } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface IModalFormComponent {
  title?: string;
  confirmText?: string;
  cancelText?: string;
  dialogContent: TemplateRef<any> | null;
  width?: string;
  minWidth?: string;
  isAction?: boolean;
}

@Component({
  selector: "app-modal-form",
  templateUrl: "./modal-form.component.html",
  styleUrls: ["./modal-form.component.scss"],
})
export class ModalFormComponent implements OnInit {
  htmlContent!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: IModalFormComponent,
    private mdDialogRef: MatDialogRef<ModalFormComponent>
  ) {
    data.title ?? "Form";
    data.confirmText ?? "OK";
    data.cancelText ?? "Batal";
    data.isAction ?? false;
  }

  public cancel() {
    this.close(false);
  }
  public close(value: any) {
    this.mdDialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }

  ngOnInit() {
    if (!this.data.dialogContent) {
      console.error("dialogContent tidak ada atau null");
    }
  }
}
