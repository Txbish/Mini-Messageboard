# Mini Messageboard

A simple, elegant message board application built with Node.js, Express, and PostgreSQL. Users can view messages and post new ones in a beautifully styled interface with persistent database storage.

## Features

- 📝 **Post Messages**: Create new messages with your name and content
- 👀 **View Messages**: Browse all posted messages in a clean, card-based layout
- 🗄️ **Database Storage**: Messages are stored persistently in PostgreSQL
- 🌱 **Seed Data**: Pre-populated with sample messages for testing
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
- PostgreSQL database

### Installation

1. Clone or download this repository
2. Navigate to the project directory:

   ```bash
   cd Mini-Messageboard
   ```

3. Install dependencies:

   ```bash
   npm install express ejs pg dotenv
   ```

4. Set up your database:

   Create a `.env` file in the root directory with your PostgreSQL credentials:

   ```env
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database_name
   DB_PORT=5432
   ```

5. Initialize the database with seed data:

   ```bash
   node db/seed.js
   ```

   This will:

   - Create the messages table if it doesn't exist
   - Clear any existing messages
   - Insert 8 sample messages for testing

6. Start the server:

   ```bash
   node app.js
   ```

7. Open your browser and visit: `http://localhost:3000`

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
├── .env                # Environment variables (create this)
├── db/
│   ├── pool.js         # Database connection pool
│   ├── queries.js      # Database query functions
│   └── seed.js         # Database seeding script
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

## Database Schema

The application uses a PostgreSQL database with the following table structure:

```sql
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Database Management

### Seeding the Database

To populate the database with sample data:

```bash
node db/seed.js
```

This script will:

- Create the messages table if it doesn't exist
- Clear existing messages
- Insert 8 sample messages
- Display confirmation and count of inserted messages

### Resetting the Database

To start fresh with new seed data, simply run the seed script again - it automatically clears existing data before inserting new messages.

## Technologies Used

- **Node.js** - Server runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database for persistent storage
- **pg** - PostgreSQL client for Node.js
- **dotenv** - Environment variable management
- **EJS** - Templating engine
- **CSS3** - Styling with modern features like gradients and glassmorphism
- **JavaScript** - Client-side interactivity

## Customization

### Styling

- Modify `public/styles.css` to change colors, fonts, or layout
- The current theme uses a purple gradient with glassmorphism effects

### Database

- Messages are now stored persistently in PostgreSQL
- Modify `db/queries.js` to add new database operations
- Update `db/seed.js` to change the sample data

### Adding Features

Consider adding:

- Message editing and deletion
- User authentication
- Message categories or tags
- Search functionality
- Pagination for large numbers of messages

## Development

The app runs on port 3000 by default. To change the port, modify the `port` variable in `app.js`.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and submit pull requests for any improvements!
