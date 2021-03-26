import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { NewReleasesItem} from '../models/new-releases-model';

@Component({
  selector: 'app-new-release-item',
  templateUrl: './new-release-item.component.html',
  styleUrls: ['./new-release-item.component.css']
})
export class NewReleaseItemComponent implements OnInit {
  @Input() newRelease: NewReleasesItem;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigate(newRelease: any): void {
    let newReleaseId: number = 0;

    newRelease.type === 'artist' ?  newReleaseId = newRelease.id : newReleaseId = newRelease.id;
    console.log('new release type:', newRelease.type);
    console.log('New Release Id:', newReleaseId);

    this.router.navigate(['/spotify/album', newReleaseId]);
  }
}
