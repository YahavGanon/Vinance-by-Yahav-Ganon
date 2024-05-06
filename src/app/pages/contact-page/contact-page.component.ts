import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {


    contacts$: Observable<Contact[]> = this.contactService.contacts$

    constructor(private contactService: ContactService) { }

    onRemoveContact(contactId: string) {
        this.contactService.removeContact(contactId).subscribe({
            error: err => console.log('err:', err)
        })
    }

}
