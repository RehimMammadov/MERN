import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from 'src/tables/Contact';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
    constructor(@InjectRepository(Contact) private contact: Repository<Contact>) {}

    getContacts() {
        return this.contact.find()
    }   

    insertContact(contactsData) {
        const newContact = this.contact.create(contactsData)
        this.contact.save(newContact)
        return {msg: "Contact sended successfully"}
    }

    updateContact(id, data) {
        this.contact.update(id, data)
        return {msg: "Contact updated successfully"}
    }

    deleteContact(id) {
        this.contact.delete(id)
        return {msg: "Contact deleted successfully"}
    }
}
