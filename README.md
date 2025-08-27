# Cyclobuddy Web

Cyclobuddy Web is a web app I’m building to help cyclists find and join group rides nearby. Users can create rides, see rides around them, join rides, and connect with other cyclists. The goal is to make cycling more social, fun, and easy to organize.
This project is also my first experiment with Test-Driven Development (TDD) and Clean Architecture, so I’m structuring the code and writing tests from the start to enforce good practices and maintainability.

## Why a Separate Web Version

I decided to create a web version separate from the mobile app for a few reasons:

1. **Easier MVP** – Focusing on the web first makes it easier to build and test the core features without worrying about mobile-specific challenges.  
2. **Accessibility** – Anyone can use it from a browser, no matter what device or OS they have.  
3. **Simple development** – With Next.js and Firebase, I can handle routing, real-time data, and server-side rendering without extra complexity.  
4. **Independent updates** – The web and mobile apps can evolve separately, so I can add web-specific features without being limited by the mobile version.  


## MVP Features

- Sign up / log in / log out (email/password, optional Google and Strava login)  
- Create, view, join, and delete rides  
- Filter rides by type and distance  
- See who’s participating in a ride  
- Import GPX tracks and view them on a map  
- Basic group chat for each ride  

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend / Database:** Firebase (Firestore & Auth)  
- **Testing:** Jest (unit tests for domain and use-cases) 

## Project Structure

- `app/` – Next.js router, pages, layouts, API routes  
- `src/` – Core code: domain entities, use-cases, repositories, UI components  
- `public/` – Static assets  
- `_docs/` – Documentation
