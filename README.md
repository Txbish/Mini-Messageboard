# Mini Messageboard

A simple, elegant message board application built with Node.js and Express. Users can view messages and post new ones in a beautifully styled interface.

## Features

- 📝 **Post Messages**: Create new messages with your name and content
- 👀 **View Messages**: Browse all posted messages in a clean, card-based layout
- 🔍 **Message Details**: Click on any message to reveal detailed information
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ✨ **Modern UI**: Beautiful gradient backgrounds with glassmorphism effects

## Screenshots

The app features a modern purple gradient design with:

- Interactive message cards that expand on click
- Smooth animations and hover effects
- Professional form styling
- Mobile-responsive layout

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository
2. Navigate to the project directory:

   ```bash
   cd Node
   ```

3. Install dependencies:

   ```bash
   npm install express ejs
   ```

4. Start the server:

   ```bash
   node app.js
   ```

5. Open your browser and visit: `http://localhost:3000`

## Usage

### Viewing Messages

- Visit the homepage to see all posted messages
- Click on any message card to reveal additional details like:
  - Full message content
  - Author name
  - Detailed posting date and time
  - Character count

### Posting Messages

1. Click "New Message" in the navigation
2. Fill in your message and name
3. Click "Post Message" to add it to the board
4. You'll be redirected back to the homepage

## Project Structure

```
├── app.js              # Main application server
├── README.md           # This file
├── public/
│   └── styles.css      # CSS styling
└── views/
    ├── pages/
    │   ├── index.ejs   # Homepage template
    │   └── new.ejs     # New message form template
    └── partials/
        ├── navbar.ejs  # Navigation bar component
        └── footer.ejs  # Footer component
```

## Technologies Used

- **Node.js** - Server runtime
- **Express.js** - Web framework
- **EJS** - Templating engine
- **CSS3** - Styling with modern features like gradients and glassmorphism
- **JavaScript** - Client-side interactivity

## Customization

### Styling

- Modify `public/styles.css` to change colors, fonts, or layout
- The current theme uses a purple gradient with glassmorphism effects

### Adding Features

- Messages are stored in memory (resets on server restart)
- Consider adding a database for persistent storage
- Could add features like message editing, deletion, or user authentication

## Development

The app runs on port 3000 by default. To change the port, modify the `port` variable in `app.js`.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and submit pull requests for any improvements!
