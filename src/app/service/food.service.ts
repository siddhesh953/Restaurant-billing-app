import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/internal/operators/tap';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  baseUrl = environment.API_URL;
  constructor(private readonly http: HttpClient) { }

  getFoodlist(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Food_list`).pipe(tap((response) => response));
  }

  getTable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/table`).pipe(tap((response) => response));
  }
  updateTable(table): Observable<any> {
    console.log(table.id)
    return this.http.put(`${this.baseUrl}/table/${table.id}`,table).pipe(tap((response) => response));
  }
  getTableBypay(receiptno): Observable<any> {
    console.log(receiptno);
    return this.http.get(this.baseUrl+'/table?receipt_no='+receiptno).pipe(tap((response) => response));
  }

}
