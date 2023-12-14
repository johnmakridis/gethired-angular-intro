export class ContactFormData {

    fullname: string;
    email: string;
    subject: string;
    message: string;

    constructor(props?: ContactFormData) {

        this.fullname = props?.fullname || null;
        this.email = props?.email || null;
        this.subject = props?.subject || null;
        this.message = props?.message || null;

    }
}