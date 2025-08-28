# CycloBuddy Web

CycloBuddy Web is a web app designed to help cyclists find, join, and organize group rides nearby. Users can create rides, explore rides around them, join, and interact with other cyclists. The goal is to make cycling social, fun, and easy to organize.

This is my first project using Test-Driven Development (TDD) and Clean Architecture, meaning the code is structured for maintainability and scalability from day one.

## Why Web-First

- **Easier MVP:** Build and test core features quickly without mobile-specific complexity.  
- **Accessibility:** Works on any browser or device.  
- **Independent Updates:** Web and mobile versions can evolve separately.  
- **Clean & Testable Code:** Showcases good software practices for maintainability.

## Core Features

- View all rides nearby, sorted from closest to farthest  
- Join rides and see participants  
- Limit of 3 rides per month for creation/joining  
- Manually create ride or GPX import with map display  
- Group chat per ride

## Premium Features still under consideration

- Advanced ride filters: difficulty, distance, elevation, type of bike  
- Unlimited rides creation and participation  
- Private clubs & invite-only groups  
- Performance analytics: monthly mileage, average speed, elevation graphs, average level
- Advanced notifications and alerts  
- Premium content: guides, challenges

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend / Database:** Firebase (Firestore, Auth, Storage, Functions)  
- **Testing:** Jest
- **External APIs:** OpenRouteService, OAuth providers (Google, Apple, Strava)

## Project Structure

- `app/` – Next.js router, pages, layouts, API routes  
- `src/` – Core code: domain entities, use-cases, repositories, UI components  
- `public/` – Static assets  
- `_docs/` – Documentation (design, architecture, diagrams)

## Future Plans

- Flutter mobile app cross platform
- Cloud deployment with CI/CD for scalable production
