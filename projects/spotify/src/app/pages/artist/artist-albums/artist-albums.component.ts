import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../../../../../src/app/services/theme.service';
import { LanguageService } from "../../../../../../../src/app/services/language.service";
import {StatusInternetService} from "../../../../../../../src/app/services/status-internet.service";

@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.css']
})
export class ArtistAlbumsComponent implements OnInit {
  @Input() album: any;

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
   * @param album
   *
   * When clicked on the album, send the user on the a web page that contains all music in this album
   */
  public seeAlbum(album: any): void {
    this.checkConnexion();
    this.router.navigate([this.languageService.activeLanguage + '/spotify/album', album.id]);
  }

  checkConnexion(){
    this.statusInternet.checkStatusInternet();
  }
}
