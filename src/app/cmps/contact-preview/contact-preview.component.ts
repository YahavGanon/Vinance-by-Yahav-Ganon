import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
    selector: 'contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {

    @Input() contact: Contact;
    @Output() onRemove = new EventEmitter<string>();

    constructor() { }

    getRandomNumber(): number {
        return Math.floor(Math.random() * 69) + 1;
    }
}

