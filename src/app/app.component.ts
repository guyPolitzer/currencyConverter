import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency Converter';
  result = 0;
  amountInput = new FormGroup({
    usdAmount : new FormControl(0)
  })

  convert() {

  }
}
