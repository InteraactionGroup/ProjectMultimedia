import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { LanguageService } from "./language.service";

@Injectable({
  providedIn: 'root'
})
export class StatusInternetService {

  constructor(private router: Router,
              private languageService: LanguageService) {
  }

  checkStatusInternet(){
    if (!navigator.onLine){
      this.router.navigate([this.languageService.getLanguage() + '/error']);
    }
  }

  getStatusInternet(){
    return navigator.onLine;
  }
}
