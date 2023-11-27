import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ContactService } from 'src/services/contact/contact.service';

@Controller('contact')
export class ContactController {
    constructor(private readonly services: ContactService) {}
    contacts = []
    @Get()
    getContacts() {
        return this.services.getContacts()
    }

    @Post('insert')
    insertContact(@Query() contactsData: any) {
        return this.services.insertContact(contactsData)
    }

    @Put('update/:id') 
    updateContact(@Param('id') id: number, @Query() contactsData: any) {
        return this.services.updateContact({id}, contactsData)
    }

    @Delete('delete/:id')
    deleteContact(@Param('id') id: number) {
        return this.services.deleteContact({id})
    }
}
