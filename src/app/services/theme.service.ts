import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public themeObservable = new Subject<string>();
  public themeSizeObservable = new Subject<string>();

  /* theme = "" -> light theme / theme = "inverted" -> dark theme */
  public theme = "";
  public themeBody = "";
  public themeSize = 100;

  constructor() {
  }

  /**
   * @param val -> "" or "inverted"
   *
   * Notifies observers when value change then add value to theme variable
   */
  emitTheme(val){
    this.themeObservable.next(val);
    this.theme = val;
  }

  /**
   * Return true if theme == "" else return false
   */
  getTypeTheme(){
    return this.theme == "";
  }

    /**
   * @param val -> number between 1 and 2
   *
   * Notifies observers when value change then add value to themeSize variable
   */
  emitSize(val){
    this.themeSizeObservable.next(val);
    this.themeSize = val;
  }

  getThemeSize(){
    return this.themeSize;
  }
}
