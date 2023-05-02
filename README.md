# Project Title: Ready 2 Go Transportation

<img src='/ready2go/src/assets/cover.png' width=75%>

## Project Description

Ready 2 Go is a startup company in Cleveland, OH that offers rides to disabled and senior members of the community. The goal was to create a website where clients or their caregivers can book rides to accurate addresses within a 20 mile radius of downtown Cleveland. The client was also seeking a secure administrative dashboard to track bookings, payments and the ability to book rides for in-person clients.

## Technologies Used

The following technologies were used to develop The Verdict Group:

- VS Code
- React
- Tailwind CSS
- MongoDB
- Mailboxlayer API - email validation
- Geoapify - city address validation
- Geocoding API - city address coordinate conversion
- Netlify

## Features

The Ready 2 Go <strong>website</strong> has the following features:

- Responsive design for various devices
- User-friendly interface for easy navigation
- Before the form can be submitted the customer's email address is validated to confirm it can receive email.
- Before the form can be submitted the address is validated to confirm it is within a 20 mile radius of downtown Cleveland zip code and the address is a legitimate address.
- When the form is submitted successfully the ride data is saved to the MongoDB database.

The Ready 2 Go <strong>dashboard</strong> has the following features:

- The dasboard has a secure login page.
- The home page consists of a high level view of the total rides booked, total amount billed and the latest transactions. This page can be filtered by daily, monthly and annual views.
- The dashboard consists of 5 pages (Home, Ride History, Billing, Settings)
- The Book A Ride feature allows the admin to book a ride conveniently for customers who are booking in-person.
