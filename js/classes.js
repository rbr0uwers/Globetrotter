"use strict";
class Locations {
    constructor(title, city, zipCode, address, imgPath, date) {
        this.title = title;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.imgPath = imgPath;
        this.date = date;
    }
    additionalPropsToDisplay() {
        return "";
    }
    display() {
        return `
        <div class="col">
            <div class="card h-100">
                <img src="${this.imgPath}" class="img-custom card-img-top rounded img-fluid" alt="picture of ${this.title}">
                <div class="card-body">
                    <h5 class="card-title fw-bolder mt-3">${this.title}</h5>
                    <div><i class="far fa-folder"></i><span>${this.constructor.name}</span></div>
                    <div class="d-flex">
                        <div><i class="far fa-map"></i></div>
                        <div><span>${this.address}, ${this.zipCode} ${this.city}</span></div>
                    </div>
                </div>
                ${this.additionalPropsToDisplay()}
                <div class="card-footer text-end">
                    <i class="far fa-calendar-alt"></i><small class="text-muted">${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString()}</small>
                </div>
            </div>
        </div>`;
    }
}
class Restaurant extends Locations {
    constructor(title, city, zipCode, address, imgPath, date, telNumber, cuisineType, url) {
        super(title, city, zipCode, address, imgPath, date);
        this.telNumber = telNumber;
        this.cuisineType = cuisineType;
        this.url = url;
    }
    additionalPropsToDisplay() {
        return `${super.additionalPropsToDisplay()}
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="fas fa-tag"></i><span>${this.cuisineType}</span></li>
                    <li class="list-group-item"><i class="fas fa-phone-alt"></i><span>${this.telNumber}</span></li>
                    <li class="list-group-item"><i class="fas fa-external-link-alt"></i><a href="${this.url}" class="card-link text-dark">Website</a></li>
                </ul>`;
    }
}
class Events extends Locations {
    constructor(title, city, zipCode, address, imgPath, date, eventDate, price) {
        super(title, city, zipCode, address, imgPath, date);
        this.eventDate = eventDate;
        this.price = price;
    }
    additionalPropsToDisplay() {
        return `${super.additionalPropsToDisplay()}
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="far fa-calendar-alt"></i><span>${this.eventDate.toLocaleDateString()} ${this.eventDate.toLocaleTimeString()}</span></li>
                    <li class="list-group-item"><i class="far fa-money-bill-alt"></i><span>${this.price.toFixed(2)} EUR</span></li>
                </ul>`;
    }
}
