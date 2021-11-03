import { Component, OnInit } from '@angular/core';
import { LogoutAppComponent } from "../playlist/dialogComponents/logoutApp/logout-app.component";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { LanguageService } from "../services/language.service";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  noInternet = true;
  playlistButton = "error.goPlaylist";

  constructor(private dialog: MatDialog,
              private router: Router,
              private languageService: LanguageService) {
  }

  ngOnInit(): void {
  }

  checkInternetConnexion(){
    if (navigator.onLine){
      this.noInternet = false;
      this.playlistButton = "error.goOfflinePlaylist";
      return true;
    }else {
      this.playlistButton = "error.goPlaylist";
      return false;
    }
  }

  exitApp(){
    this.dialog.open(LogoutAppComponent);
  }

  goPlaylist(){
    this.router.navigate([this.languageService.activeLanguage + '/playlist']);
  }
}
