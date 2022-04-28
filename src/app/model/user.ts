export class User {
    constructor() {
        this.address = new Address();
        this.company = new Company();
    }
    id: number =0;
    name: string  ='';
    username: string ='';
    email: string =''
    address: Address ;
    phone: string ='';
    website: string ='';
    company : Company;
}

class Address {
    constructor() {
        this.geo = new Geo();
    }
    street: string ='';
    suite: string = '';
    city: string ='';
    zipcode: string ='';
    geo: Geo;
}
class Geo {
    lat: string ='';
    lng: string ='';
}
class Company {
    name: string ='';
    catchPhrase: string ='';
    bs: string='';

}


