class Locations {
    private static instanceCounter : number = 0;
    
    protected name : string;
    protected city : string;
    protected zipCode : string;
    protected address : string;
    protected imgPath : string;
    protected date : Date;
    protected id : number;

    constructor(name : string, city : string, zipCode : string, address : string, imgPath : string, date : Date){
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.imgPath = imgPath;
        this.date = date;
        this.id = ++Locations.instanceCounter;
    }

    protected getPropsToDisplayAsHTML() {
        return `
                <p>${this.city}</p>
                <p>${this.zipCode}</p>
                <p>${this.address}</p>`
    }

    display() : string {
        return `
        <div class="col">
            <div class="card">
                <img src="${this.imgPath}" class="card-img-top rounded img-fluid" alt="picture of ${this.name}">
                <div class="card-body">
                    <h5 class="card-title fw-bolder">${this.name}</h5>
                    ${this.getPropsToDisplayAsHTML()}
                </div>
                <div class="card-footer">
                    <p class="fs-6 text-end text-muted">Created: ${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
        `
    }
}

class Restaurant extends Locations {
    protected telNumber : string;
    protected cuisineType : string;
    protected url : URL;

    constructor(name : string, city : string, zipCode : string, address : string, imgPath : string, date : Date, telNumber : string, cuisineType : string, url : URL){
        super(name, city, zipCode, address, imgPath, date);
        this.telNumber = telNumber;
        this.cuisineType = cuisineType;
        this.url = url;
    }

    protected getPropsToDisplayAsHTML() {
        return `${super.getPropsToDisplayAsHTML()}
                <p>${this.telNumber}</p>
                <p>${this.cuisineType}</p>
                <p>${this.url}</p>`
    }
}

class Events extends Locations {
    protected eventDate : Date;
    protected price : number;

    constructor(name : string, city : string, zipCode : string, address : string, imgPath : string, date : Date, eventDate : Date, price : number){
        super(name, city, zipCode, address, imgPath, date);
        this.eventDate = eventDate;
        this.price = price;
    }

    protected getPropsToDisplayAsHTML() {
        return `${super.getPropsToDisplayAsHTML()}
                <p>${this.eventDate.toLocaleDateString()} ${this.eventDate.toLocaleTimeString()}</p>
                <p>${this.price.toFixed(2)} EUR</p>`
    }
}
