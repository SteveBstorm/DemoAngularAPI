import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url : string = "http://stevebstorm.somee.com/api/contact";

  contacts : Contact[] = [];

  contactSubject : Subject<Contact[]> = new Subject<Contact[]>();

  constructor(
    private _client : HttpClient,
    private _router : Router
  ) { }

  emitContacts() {
    this.contactSubject.next(this.contacts.slice());
  }
/*
  getAll() {
    this._client.get<Contact[]>(this.url).subscribe(
      {
        next : data => {
          this.contacts = data;
          this.emitContacts();
        },
        error : error => console.log(error)
      }
    );
  }
*/
  getAll() : Observable<Contact[]> {
    return this._client.get<Contact[]>(this.url);
  }

  getOne(id : number) : Observable<Contact> {
    return this._client.get<Contact>(this.url+"/"+id)
 
  }

  save(c : Contact){
    this._client.post<Contact>(this.url, c).subscribe({
      next : () => this._router.navigate(['/liste']),
      error : error => console.log(error)
    });
  }

  delete(id: number) {
    /*let index = this.contacts.findIndex(x => x.Id == id);
    this.contacts.splice(index, 1);
    this.emitContacts();
    */this._client.delete<number>(this.url+"/"+id).subscribe({
      next : () => {
        this.getAll();
      },
      error : error => console.log(error)
    })
  }

  update(c : Contact) {
    this._client.put<Contact>(this.url+"/"+c.Id, c).subscribe({
      next : () => {
        this.getAll();
        this._router.navigate(['/liste']);
      }
    })
  }

}
