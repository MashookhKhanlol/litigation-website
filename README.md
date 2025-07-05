
# Litigation Workspace Management System

A modern web application for managing legal workspaces, contracts, and case documentation. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live application: [https://litigation-website.vercel.app/](https://litigation-website.vercel.app/)

## ✨ Features

### Dashboard Overview
- **Real-time Statistics**: Track total workspaces, signed contracts, drafts, reviews, and translations
- **Visual Analytics**: Interactive charts and progress indicators
- **Performance Metrics**: Month-over-month growth tracking

### Workspace Management
- **Create Workspaces**: Set up new legal workspaces with client information
- **Workspace Cards**: Visual representation of workspace status and progress
- **Grid/List Views**: Toggle between card grid and detailed table views
- **Advanced Filtering**: Search and filter by workspace name, client, case type, and status

### Contract Lifecycle
- **Contract Drafting**: Track contracts in draft status
- **Review Process**: Manage contracts under review
- **Translation Services**: Handle multi-language contract translations
- **Completion Tracking**: Monitor completed contracts and timelines

### User Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface built with shadcn/ui components
- **Dark/Light Mode**: Theme support for user preference
- **Interactive Elements**: Smooth animations and transitions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **State Management**: TanStack React Query
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Form Handling**: React Hook Form with Zod validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd litigation-website
   ```

<<<<<<< HEAD
dfas
# Step 3: Install the necessary dependencies.
npm i
=======
2. **Install dependencies**
   ```bash
   npm install
   ```
>>>>>>> 7a5fedc83f1c0d7bfe53120bedcfbd94ccd64ae0

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Deployment

This project is deployed on Vercel with automatic deployments from the main branch.

### Deploy to Vercel

1. **Fork this repository** to your GitHub account

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your forked repository
   - Deploy with default settings

3. **Environment Variables** (if needed):
   - No environment variables are required for the current setup
   - Add any future API keys or configuration in Vercel dashboard

### Manual Deployment

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Application header
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── StatsCard.tsx    # Statistics display cards
│   └── ...
├── pages/               # Route components
│   ├── Index.tsx        # Dashboard page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── styles/              # Global styles
```

## 🎯 Key Components

### Dashboard (`src/pages/Index.tsx`)
- Main dashboard with statistics overview
- Workspace management interface
- Responsive layout with sidebar navigation

### Workspace Management
- **WorkspacesTable**: Main workspace display component
- **WorkspaceCard**: Individual workspace card component
- **WorkspaceFilters**: Search and filtering functionality
- **CreateWorkspaceModal**: New workspace creation form

### UI Components
- Built with shadcn/ui for consistency
- Fully typed with TypeScript
- Responsive design patterns
- Accessible by default

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for React and TypeScript
- **Prettier**: Code formatting (if configured)
- **Tailwind CSS**: Utility-first styling approach

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Contact the development team

## 🔄 Updates

The application is continuously updated with new features and improvements. Check the deployment URL for the latest version.

---

Built with ❤️ using modern web technologies
