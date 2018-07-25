import { Component } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arrBirds:any;
  private sliderName = null;
  private _tickInterval = 1;

  constructor (private httpService: HttpClient) { }
 
  ngOnInit () {
    this.httpService.get('./assets/birds.json').subscribe(
      data => {
        this.arrBirds = data;	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  
  autoTicks = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  
  onChange(sliderValue): void { this.sliderName = this.arrBirds[sliderValue - 1].Name || ''; }
}

