import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { lastValueFrom } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'

@Component({
    selector: 'contact-edit-page',
    templateUrl: './contact-edit-page.component.html',
    styleUrls: ['./contact-edit-page.component.scss'],
})
export class ContactEditPageComponent implements OnInit {
    contact: Contact

    constructor(
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe(({ contact }) => {
            this.contact = contact || this.contactService.getEmptyContact() as Contact
        })

    }

    async onSaveContact() {
        this.contactService.saveContact(this.contact)
            .subscribe({
                next: () => this.router.navigateByUrl('/contacts'),
                error: err => console.log('err:', err)
            })
    }
}
