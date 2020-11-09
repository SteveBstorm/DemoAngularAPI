import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  fg : FormGroup;

  constructor(private _builder : FormBuilder, private _service : ContactService) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      Nom : ['', Validators.required],
      Email : ['', [Validators.required, Validators.email]],
      GSM : ['', Validators.required]
    })
  }

  onSubmit() {
    const values = this.fg.value;
    const nc = new Contact();
    nc.Nom = values['Nom'];
    nc.Email = values['Email'];
    nc.GSM = values['GSM'];

    this._service.save(nc);
  }

}
