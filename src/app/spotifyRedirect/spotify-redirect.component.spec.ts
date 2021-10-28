import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyRedirectComponent } from './spotify-redirect.component';
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";

describe('SpotifyRedirectComponent', () => {
  let component: SpotifyRedirectComponent;
  let fixture: ComponentFixture<SpotifyRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyRedirectComponent ],
      imports: [RouterTestingModule, TranslateModule.forRoot(), HttpClientModule ],
    })
    .compileComponents();
  });
});
