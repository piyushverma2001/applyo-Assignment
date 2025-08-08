# Movie Explorer

A responsive web application that allows users to search and browse movies/series using the OMDb API. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🔍 **Search & Display**: Search for movies, series, or episodes with real-time results
- 🎬 **Movie Cards**: Display results in a responsive grid with poster, title, type, and year
- 🔧 **Filters**: Filter by type (Movie/Series/Episode) and year of release
- 📄 **Pagination**: Navigate through results with smooth pagination controls
- 🎯 **Movie Details**: Click on any movie card to view detailed information
- 📱 **Responsive Design**: Fully responsive for desktop and mobile devices
- ⚡ **Smooth Animations**: Hover effects, loading states, and smooth transitions

## Technical Requirements

- Next.js 15+ with TypeScript
- Tailwind CSS for styling
- OMDb API for movie data
- Responsive design with mobile-first approach
- Error handling and loading states

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OMDb API key (get it from [OMDb API](http://www.omdbapi.com/))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd applyo-Assignment
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_OMDB_API_KEY=your_api_key_here
```

**Note**: The application will work with a demo API key for testing, but for full functionality, you'll need to get your own API key from OMDb.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## API Configuration

The application uses the OMDb API. To get your API key:

1. Visit [http://www.omdbapi.com/](http://www.omdbapi.com/)
2. Click the link in the header bar to sign up
3. Receive your API key via email
4. Add it to your `.env.local` file

**Important**: The application uses HTTPS for API requests to avoid Mixed Content errors.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── MovieCard.tsx        # Individual movie card component
│   ├── SearchBar.tsx        # Search input component
│   ├── Filters.tsx          # Filter controls component
│   ├── Pagination.tsx       # Pagination component
│   └── MovieModal.tsx       # Movie details modal
├── lib/
│   └── api.ts              # API utility functions
└── types/
    └── index.ts            # TypeScript type definitions
```

## Features Implementation

### Search & Display
- Search bar with real-time input validation
- Grid layout displaying 10 results per page
- Movie cards with poster, title, type, and year
- Responsive grid that adapts to screen size

### Filters
- Type filter: Movie, Series, Episode, or All
- Year filter: Input field for specific year
- Combined filtering with search queries
- Real-time filter application

### Movie Details (Bonus Feature)
- Modal popup with detailed movie information
- Full plot, cast, director, ratings, and more
- Responsive modal design
- Loading states and error handling

### Technical Implementation
- TypeScript for type safety
- Tailwind CSS for responsive design
- Next.js Image component for optimized images
- Error boundaries and loading states
- Smooth animations and transitions

## Deployment

This application is ready for deployment on Render. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Steps:

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Create new Web Service
   - Connect your repository
   - Set build command: `npm install && npm run build`
   - Set start command: `npm start`
   - Add environment variable: `NEXT_PUBLIC_OMDB_API_KEY`

3. **Get Your App URL**
   - After deployment, your app will be live at: `https://your-app-name.onrender.com`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for the Applyo assignment. 