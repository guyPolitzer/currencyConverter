import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangerateService {

constructor(
  private _http: HttpClient,
) { }

  covert(): any {
    let url = `https://v6.exchangerate-api.com/v6/9aeb84870f784c26ff85823c/latest/USD` // use "ILS"
    return this._http 
      .get(url)
  }

}
