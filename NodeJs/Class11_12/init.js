const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then(() => console.log('MongoDB connected')).catch(err => console.log(err));

const Chat = require('./models/chat.js')

Chat.insertMany([
    {
        from: "Alice",
        to: "Bob",
        msg: "Hey Bob! Are you free this evening?",
        created_at: new Date(),
    },
    {
        from: "Bob",
        to: "Alice",
        msg: "Yeah, what's up?",
        created_at: new Date(),
    },
    {
        from: "Alice",
        to: "Bob",
        msg: "Let's catch up over coffee!",
        created_at: new Date(),
    },
    {
        from: "Charlie",
        to: "Diana",
        msg: "Did you see the game last night?",
        created_at: new Date(),
    },
    {
        from: "Diana",
        to: "Charlie",
        msg: "Yes! That last-minute goal was insane 😱",
        created_at: new Date(),
    },
    {
        from: "Eve",
        to: "Frank",
        msg: "Can you send me the project files?",
        created_at: new Date(),
    },
    {
        from: "Frank",
        to: "Eve",
        msg: "Sure, sending them now!",
        created_at: new Date(),
    },
    {
        from: "Grace",
        to: "Henry",
        msg: "Happy birthday! 🎂",
        created_at: new Date(),
    },
    {
        from: "Henry",
        to: "Grace",
        msg: "Thank you so much! 😊",
        created_at: new Date(),
    },
    {
        from: "Ivy",
        to: "Jack",
        msg: "Are we still on for the meeting tomorrow?",
        created_at: new Date(),
    },
    {
        from: "Jack",
        to: "Ivy",
        msg: "Yes, 10 AM sharp!",
        created_at: new Date(),
    },
]).then(() => {
    console.log('Chats inserted');
    mongoose.connection.close();
}).catch(err => console.log(err));