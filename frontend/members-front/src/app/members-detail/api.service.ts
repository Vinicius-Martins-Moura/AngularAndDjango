import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://127.0.0.1:8000/";
  token = 'Token ac29548ba3feb8fc2e8b4e3dc515f1eb6f58d976'
  httpHeaders = new HttpHeaders().set('content-Type','application/json').set('Authorization' , this.token);

  constructor(private http: HttpClient) { }

  getMember(id) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };
  
  updateMember(member) : Observable<any> {
    let body = { name: member.name , surname: member.surname, phone: member.phone };
     return this.http.put(this.baseUrl + 'members/' + member.id + '/',  body,
     {headers: this.httpHeaders});
 };

 deleteMember(id) : Observable<any> {
   return this.http.delete(this.baseUrl + 'members/' + id + '/', 
   {headers: this.httpHeaders});
};
 
}

