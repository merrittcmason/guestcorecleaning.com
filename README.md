# guestcorecleaning.com

Website repo for Guestcore

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### Clone the Repository

1. Open Visual Studio Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette
3. Type "Git: Clone" and select it
4. Paste the repository URL:
   ```
   https://github.com/merrittcmason/guestcorecleaning.com.git
   ```
5. Choose a folder location to save the project
6. Click "Open" when prompted to open the cloned repository

Alternatively, you can clone via terminal:
```bash
git clone https://github.com/merrittcmason/guestcorecleaning.com.git
cd guestcorecleaning.com
```

### Install Dependencies

Open the integrated terminal in VS Code (`Ctrl+`\` or `Terminal > New Terminal`) and run:

```bash
npm install
```

This will install all the required dependencies listed in `package.json`.

### Run the Development Server

Start the live development server with:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use). The server will automatically reload when you make changes to the code.

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `/src` - Source code
  - `/components` - Reusable React components
  - `/pages` - Page components
  - `/context` - React context providers
- `/public` - Static assets
- `index.html` - Main HTML file
- `package.json` - Dependencies and scripts

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
