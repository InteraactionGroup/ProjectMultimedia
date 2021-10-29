import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../../../../src/app/services/theme.service';
import { LanguageService } from "../../../../../../../src/app/services/language.service";
import { Router } from "@angular/router";
import {StatusInternetService} from "../../../../../../../src/app/services/status-internet.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  theme = "";

  constructor(private themeService: ThemeService,
              private languageService: LanguageService,
              private router: Router,
              private statusInternet: StatusInternetService) {
    this.theme = themeService.theme;
  }

  ngOnInit(): void {
  }

  goHome(){
    this.checkConnexion();
    this.router.navigate([this.languageService.activeLanguage + '/spotify/home']);
  }

  goSearch(){
    this.checkConnexion();
    this.router.navigate([this.languageService.activeLanguage + '/spotify/search']);
  }

  goPlaylist(){
    this.checkConnexion();
    this.router.navigate([this.languageService.activeLanguage + '/playlist']);
  }

  checkConnexion(){
    this.statusInternet.checkStatusInternet();
  }
}
