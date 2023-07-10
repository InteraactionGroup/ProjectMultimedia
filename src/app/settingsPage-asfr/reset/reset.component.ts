import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/playlist/services/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  alertTitle = "";
  alertContent = "";
  change: boolean;

  constructor(private alertService: AlertService,
    private dialogRef: MatDialogRef<ResetComponent>,
  ) {
    dialogRef.disableClose = true;
    this.change = false;
    this.alertService.setResetSettings();
  }

  ngOnInit(): void {
    this.alertTitle = this.alertService.getAlertTitle();
    this.alertContent = this.alertService.getAlertContent();
  }

  /**
   * If the user submit, then set the variable to false
   * Then close this dialogComponent
   */
  submit() {
    this.alertService.alertCancel = false;
    this.dialogRef.close();

  }

  /**
   * If the user cancel, then set the variable to true
   * Then close this dialogComponent
   */
  goCancel() {
    this.alertService.alertCancel = true;
    this.dialogRef.close();
  }
}
