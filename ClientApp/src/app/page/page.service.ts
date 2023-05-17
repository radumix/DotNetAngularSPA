import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private subjectClose = new Subject<any>();
  url = "";
  constructor(
    public http: HttpClient, @Inject('BASE_URL') baseUrl: string,
  ) { 
    this.url = baseUrl;
  }



  setDialogValue(data: any){
    this.subjectClose.next(data);
  }

  closeDialog(): Observable<any> {
    return this.subjectClose.asObservable();
  }

  addCharacter(str: string): Observable<any> {
    let data = {
      'Encoded' : str
    }
    return this.http.post<any>(this.url + 'api/values/EncodeCharacter', data);
  }
  
}
