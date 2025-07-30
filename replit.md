# FMCSA Compliance Portal

## Overview

This is a web application built for managing FMCSA (Federal Motor Carrier Safety Administration) compliance. The system helps trucking companies track driver qualification files, drug testing schedules, and compliance requirements in a centralized dashboard.

**Status**: Successfully migrated from Lovable to Replit environment (January 30, 2025)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React router)
- **TanStack Query** for server state management and caching
- **Tailwind CSS** with **shadcn/ui** component library for styling
- **Radix UI** primitives for accessible UI components

### Backend Architecture
- **Express.js** server with TypeScript
- **ESM modules** throughout the codebase
- RESTful API design with `/api` prefix
- Custom error handling middleware
- Request/response logging middleware

### Development Setup
- **Monorepo structure** with shared code between client and server
- **Hot module replacement** in development via Vite
- **TypeScript** configuration shared across frontend/backend
- **esbuild** for production server bundling

## Key Components

### Data Storage
- **Drizzle ORM** with PostgreSQL as the primary database
- **Neon Database** serverless PostgreSQL for cloud deployment
- In-memory storage fallback for development (`MemStorage` class)
- Database migrations handled through Drizzle Kit

### Authentication & Sessions
- Session management infrastructure prepared (connect-pg-simple for PostgreSQL sessions)
- User schema defined with username/password fields
- Zod validation schemas for type-safe data handling

### UI Components
- Complete **shadcn/ui** component system implemented
- Dashboard layout with sidebar navigation
- Responsive design with mobile-first approach
- FMCSA-specific color scheme and branding
- Toast notifications and loading states

### Business Logic Areas
1. **Driver Qualification Files (DQF)** - Document management
2. **Drug & Alcohol Testing** - Scheduling and compliance tracking  
3. **Compliance Dashboard** - Overview of all requirements
4. **CSA Scores** - Safety rating monitoring
5. **Timeline Management** - Upcoming deadlines and tasks

## Data Flow

### Client-Server Communication
1. React components use TanStack Query for API calls
2. API routes prefixed with `/api` handle business logic
3. Database operations abstracted through storage interface
4. Form validation using react-hook-form with Zod resolvers

### State Management
- Server state managed by TanStack Query with caching
- Local component state for UI interactions
- No global client state management (intentionally simple)

### Database Schema
Currently defined entities:
- **Users**: Basic authentication with username/password
- Extensible schema structure ready for additional entities (drivers, tests, compliance records)

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Express.js server framework
- TypeScript for type safety

### Database & ORM
- Drizzle ORM for database operations
- PostgreSQL via Neon Database serverless
- Drizzle Kit for schema management

### UI & Styling
- Tailwind CSS for styling
- Radix UI for accessible components
- Lucide React for icons
- Various UI utilities (clsx, tailwind-merge, class-variance-authority)

### Development Tools
- Vite for frontend tooling
- tsx for TypeScript execution
- PostCSS for CSS processing
- Replit-specific development enhancements

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle pushes schema changes to PostgreSQL

### Environment Configuration
- `DATABASE_URL` required for PostgreSQL connection
- Development vs production modes handled via `NODE_ENV`
- Replit-specific tooling for cloud deployment

### Scalability Considerations
- Serverless-ready architecture with Neon Database
- Stateless server design for horizontal scaling
- Asset optimization through Vite's build pipeline
- Database connection pooling through Neon

The application follows a clean separation of concerns with the frontend handling user interactions, the backend managing business logic and data persistence, and a well-defined API contract between them. The architecture supports both development agility and production scalability.

## Recent Changes

### January 30, 2025 - Lovable to Replit Migration
- **Routing System**: Migrated from React Router DOM to Wouter for lightweight client-side routing
- **Dependencies**: Added missing packages (react-router-dom, sonner, wouter) to support existing components
- **Component Updates**: Updated DashboardSidebar and NotFound components to use Wouter's Link and useLocation hooks
- **Application Structure**: Maintained existing component architecture while ensuring Replit compatibility
- **Status**: Migration completed successfully, application running on port 5000