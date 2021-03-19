"use strict";
class Locations {
    constructor(title, city, zipCode, address, imgPath, date) {
        this.title = title;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.imgPath = imgPath;
        this.date = date;
        this.id = ++Locations.instanceCounter;
    }
    getPropsToDisplayAsHTML() {
        return `
                <p>${this.city}</p>
                <p>${this.zipCode}</p>
                <p>${this.address}</p>`;
    }
    display() {
        return `
        <div class="col">
            <div class="card">
                <img src="${this.imgPath}" class="card-img-top rounded img-fluid" alt="picture of ${this.title}">
                <div class="card-body">
                    <h5 class="card-title fw-bolder">${this.title}</h5>
                    ${this.getPropsToDisplayAsHTML()}
                </div>
                <div class="card-footer">
                    <p class="fs-6 text-end text-muted">Created: ${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
        `;
    }
}
Locations.instanceCounter = 0;
class Restaurant extends Locations {
    constructor(title, city, zipCode, address, imgPath, date, telNumber, cuisineType, url) {
        super(title, city, zipCode, address, imgPath, date);
        this.telNumber = telNumber;
        this.cuisineType = cuisineType;
        this.url = url;
    }
    getPropsToDisplayAsHTML() {
        return `${super.getPropsToDisplayAsHTML()}
                <p>${this.telNumber}</p>
                <p>${this.cuisineType}</p>
                <p><a href=${this.url}>${this.url}</a></p>`;
    }
}
class Events extends Locations {
    constructor(title, city, zipCode, address, imgPath, date, eventDate, price) {
        super(title, city, zipCode, address, imgPath, date);
        this.eventDate = eventDate;
        this.price = price;
    }
    getPropsToDisplayAsHTML() {
        return `${super.getPropsToDisplayAsHTML()}
                <p>${this.eventDate.toLocaleDateString()} ${this.eventDate.toLocaleTimeString()}</p>
                <p>${this.price.toFixed(2)} EUR</p>`;
    }
}
