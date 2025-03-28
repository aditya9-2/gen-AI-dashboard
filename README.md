# Gen AI Analytics Dashboard

A React-based Single-Page Application (SPA) prototype for an AI-powered analytics dashboard. This application demonstrates how natural language queries can be used to analyze and visualize data.

## Features

- Natural Language Query Interface
- Real-time Query Suggestions
- Query History Tracking
- Data Visualization using Recharts
- Redux State Management
- Responsive Design with Tailwind CSS

## State Management

The application uses Redux Toolkit for state management with the following structure:

- Queries Slice
  - Query history
  - Loading states
  - Error handling
  - Query suggestions

## Component Overview

- QueryInput: Handles user input with real-time suggestions
- QueryHistory: Displays past queries with their status
- ResultsDisplay: Shows query results with data visualization

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Built With

- React
- Redux Toolkit
- Recharts
- Tailwind CSS
- TypeScript
