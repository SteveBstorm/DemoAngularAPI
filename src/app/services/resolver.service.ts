import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Contact> {

  constructor(private _service : ContactService) { }

  resolve(route : ActivatedRouteSnapshot) : Observable<Contact> {
    return this._service.getOne(route.params['id'])
  }
}
