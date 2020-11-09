import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  model : Contact = new Contact();

  constructor(private _router : ActivatedRoute) { }

  ngOnInit(): void {
    //this.model = this._router.snapshot.data['model'];
  }

}
