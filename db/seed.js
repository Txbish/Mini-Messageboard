const pool = require("./pool");

const seedData = [
  {
    user_name: "Alice",
    text: "Welcome to the Mini Messageboard! This is the first message.",
  },
  {
    user_name: "Bob",
    text: "Hello everyone! Great to see this messageboard working.",
  },
  {
    user_name: "Charlie",
    text: "Just testing out the new messaging system. Looks good!",
  },
  {
    user_name: "Diana",
    text: "Love the simple design of this messageboard. Keep it up!",
  },
  {
    user_name: "Eve",
    text: "Can't wait to see more features added to this platform.",
  },
  {
    user_name: "Frank",
    text: "This reminds me of the old bulletin board systems. Nostalgic!",
  },
  {
    user_name: "Grace",
    text: "The database integration is working smoothly. Nice work!",
  },
  {
    user_name: "Henry",
    text: "Short and sweet messages work best on platforms like this.",
  },
];

async function createTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        text TEXT NOT NULL,
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Messages table created successfully");
  } catch (error) {
    console.error("❌ Error creating table:", error);
  }
}

async function seedDatabase() {
  try {
    // Clear existing data
    await pool.query("DELETE FROM messages");
    console.log("🧹 Cleared existing messages");

    // Insert seed data
    for (const message of seedData) {
      await pool.query(
        "INSERT INTO messages (user_name, text) VALUES ($1, $2)",
        [message.user_name, message.text]
      );
    }

    console.log(`✅ Successfully seeded ${seedData.length} messages`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
}

async function main() {
  console.log("🌱 Starting database setup and seeding...");

  await createTable();
  await seedDatabase();

  // Verify the seed data
  const { rows } = await pool.query("SELECT COUNT(*) FROM messages");
  console.log(`📊 Total messages in database: ${rows[0].count}`);

  await pool.end();
  console.log("🏁 Database seeding completed");
}

// Run the seed script
if (require.main === module) {
  main().catch((error) => {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  });
}

module.exports = { createTable, seedDatabase };
