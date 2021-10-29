import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from '../../../../../projects/spotify/src/app/services/global.service';
import { NotifierService } from 'angular-notifier';
import { TranslateService } from '@ngx-translate/core';
import {StatusInternetService} from "../../../services/status-internet.service";

/**
 * Import functions javascript
 */
declare var loginDeezer: any;
declare var logoutDeezer: any;

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private globalService: GlobalService,
              private notifier: NotifierService,
              private translate: TranslateService,
              private statusInternet: StatusInternetService) {
  }

  ngOnInit(): void {
  }

  /**
   * Allows the user to login Spotify
   */
  loginSpotify(){
    this.checkInternet();
    this.globalService.getLoginAccountSpotify();
  }

  /**
   * Allows the user to logout Spotify
   */
  logoutSpotify(){
    this.checkInternet();
    this.globalService.getLogoutAccountSpotify();
    this.notifier.notify('warning',this.translate.instant('notifier.logoutSpotify'));
  }

  /**
   * Allows the user to login Deezer
   */
  loginDeezer(){
    this.checkInternet();
    loginDeezer();
  }

  /**
   * Allows the user to logout Deezer
   */
  logoutDeezer(){
    this.checkInternet();
    logoutDeezer();
    this.notifier.notify('warning',this.translate.instant('notifier.logoutDeezer'));
  }

  /**
   * If the user cancel the save then close the DialogComponent
   */
  public goCancel(){
    this.dialog.closeAll();
  }

  checkInternet(){
    this.statusInternet.checkStatusInternet();
  }
}
