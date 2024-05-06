import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, Subscription, map } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    contact$: Observable<Contact> = this.route.data.pipe(map(data => data['contact']))


    onBack() {
        this.router.navigateByUrl('/contacts')
    }


}
