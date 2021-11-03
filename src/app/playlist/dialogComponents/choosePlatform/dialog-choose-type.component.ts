import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PlaylistService } from '../../services/playlist.service';
import { PrefabricatedPlaylistComponent } from '../prefabricatedPlaylist/prefabricated-playlist.component';
import {LanguageService} from "../../../services/language.service";
import {StatusInternetService} from "../../../services/status-internet.service";

@Component({
  selector: 'app-dialog-choose-type',
  templateUrl: './dialog-choose-type.component.html',
  styleUrls: ['./dialog-choose-type.component.css']
})
export class DialogChooseTypeComponent implements OnInit {

  constructor(private router: Router,
              private dialog: MatDialog,
              private playlistService: PlaylistService,
              private languageService: LanguageService,
              private statusInternet: StatusInternetService) {
  }

  ngOnInit(): void {
  }

  /**
   * Close all DialogComponents then on the web page Youtube
   */
  goYoutube(): void {
    this.checkInternet()
    this.playlistService.addBtnAddInEmptyPlaylist = false;
    this.dialog.closeAll();
    this.router.navigate([this.languageService.activeLanguage + '/youtube']);
  }

  /**
   * Close all DialogComponents then on the web page Spotify
   */
  goSpotify() {
    this.checkInternet()
    this.playlistService.addBtnAddInEmptyPlaylist = false;
    this.dialog.closeAll();
    this.router.navigate([this.languageService.activeLanguage + '/spotify']);
  }

  /**
   * Close all DialogComponents then on the web page Deezer
   */
  goDeezer(){
    this.checkInternet()
    this.playlistService.addBtnAddInEmptyPlaylist = false;
    this.dialog.closeAll();
    this.router.navigate([this.languageService.activeLanguage + '/deezer']);
  }

  /**
   * Display the dialogComponent PrefabricatedPlaylist
   */
  goPrefabricatedPlaylist(){
    this.dialog.open(PrefabricatedPlaylistComponent);
  }

  checkInternet(){
    this.statusInternet.checkStatusInternet();
  }
}
