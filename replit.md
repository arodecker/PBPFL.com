# Replit.md

## Overview
This is a modern full-stack web application for the Woodstock Community rental property, built with React frontend and Express backend. The application serves as a marketing website for a residential rental community near Palm Beach Lakes, Florida, featuring property information, floor plans, location details, and contact functionality.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Comprehensive set of accessible components using Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reloading with tsx for development server
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Build Process**: ESBuild for server-side bundling

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Current Implementation**: In-memory storage for development with interface ready for database integration

### Development and Build Configuration
- **Monorepo Structure**: Organized with separate client, server, and shared directories
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/)
- **Development Tools**: 
  - Replit-specific plugins for enhanced development experience
  - Runtime error overlay for better debugging
  - Cartographer integration for Replit environment

### UI/UX Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Component Library**: shadcn/ui with customizable variants
- **Typography**: Multiple font families (Inter, DM Sans, Geist Mono, Fira Code)
- **Color Scheme**: Professional color palette with Palm Beach themed colors
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## External Dependencies

### Core Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for data fetching
- **Routing**: Wouter for lightweight routing
- **Forms**: React Hook Form with Hookform Resolvers for form management
- **UI Components**: Extensive Radix UI component collection for accessibility
- **Styling**: Tailwind CSS, Class Variance Authority, CLSX for styling utilities

### Backend Dependencies
- **Server Framework**: Express.js for API routing and middleware
- **Database**: 
  - Neon serverless PostgreSQL driver
  - Drizzle ORM for type-safe database operations
  - Connect-pg-simple for session storage
- **Development**: tsx for TypeScript execution, ESBuild for production builds

### Development and Build Tools
- **TypeScript**: Full TypeScript support across frontend and backend
- **Build Tools**: Vite for frontend, ESBuild for backend
- **Development**: Hot module replacement, error overlays
- **Replit Integration**: Specialized plugins for Replit development environment

### Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **Validation**: Zod with Drizzle-Zod integration for schema validation
- **Icons**: Lucide React for consistent iconography
- **Carousel**: Embla Carousel for image galleries
- **Command Interface**: CMDK for command palette functionality