export class ApplicationFormData {

    fullname: string;
    email: string;
    phone: string;

    constructor(props?: ApplicationFormData) {

        this.fullname = props?.fullname || null;
        this.email = props?.email || null;
        this.phone = props?.phone || null;

    }

}