import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../../../../../../src/app/services/theme.service';
import {LanguageService} from "../../../../../../../src/app/services/language.service";
import {StatusInternetService} from "../../../../../../../src/app/services/status-internet.service";

@Component({
  selector: 'app-search-track-item',
  templateUrl: './search-track-item.component.html',
  styleUrls: ['./search-track-item.component.css']
})
export class SearchTrackItemComponent implements OnInit {
  @Input() track: any;

  theme = "";

  constructor(private router: Router,
              private themeService: ThemeService,
              private languageService: LanguageService,
              private statusInternet: StatusInternetService) {
    this.theme = themeService.theme;
  }

  ngOnInit(): void {
  }

  /**
   * @param track
   *
   * When the user click on a track, it makes him navigate to track the web page
   */
  public navigate(track: any): void {
    this.checkConnexion();
    this.router.navigate([this.languageService.activeLanguage + '/spotify/album', track.album.id]);
  }

  checkConnexion(){
    this.statusInternet.checkStatusInternet();
  }
}
