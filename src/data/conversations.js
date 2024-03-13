import img_a from "../assets/dp/a.png";
import img_b from "../assets/dp/b.jpg";
import img_c from "../assets/dp/c.jpg";
import img_d from "../assets/dp/d.jpg";
import img_e from "../assets/dp/e.jpg";
import img_f from "../assets/dp/f.jpg";
import img_g from "../assets/dp/g.png";
import img_h from "../assets/dp/h.png";
import img_i from "../assets/dp/i.jpg";
import img_j from "../assets/dp/j.png";
import img_k from "../assets/dp/k.jpg";


const conversations = [
    {
        id: 0,
        recipient: "Abigail",
        online: false,
        lastSeen: new Date(),
        img: img_a,
        lastMessage: {
            fromMe: true,
            message: "Thanks, I wish there is something I could do to show how much I appreciate this",
            sent: false,
            delivered: false,
            read: false,
            date: new Date()
        }
    },
    {
        id: 1,
        recipient: "Mike",
        online: true,
        lastSeen: new Date(),
        img: img_b,
        lastMessage: {
            fromMe: false,
            message: "Hey, how are you?",
            sent: true,
            delivered: true,
            read: true,
            date: new Date()
        }
    },
    {
        id: 2,
        recipient: "Rachael",
        online: true,
        lastSeen: new Date(),
        img: img_c,
        lastMessage: {
            fromMe: false,
            message: "I appreciate it",
            sent: false,
            delivered: false,
            read: false,
            date: new Date()
        }
    },
    {
        id: 3,
        recipient: "Fiona",
        online: false,
        lastSeen: new Date(),
        img: img_d,
        lastMessage: {
            fromMe: false,
            message: "bye",
            sent: true,
            delivered: true,
            read: true,
            date: new Date()
        }
    },
    {
        id: 4,
        recipient: "Johnie",
        online: true,
        lastSeen: new Date(),
        img: img_e,
        lastMessage: {
            fromMe: true,
            message: "ok",
            sent: true,
            delivered: true,
            read: true,
            date: new Date()
        }
    },
    {
        id: 5,
        recipient: "Shirley",
        online: false,
        lastSeen: new Date(),
        img: img_f,
        lastMessage: {
            fromMe: true,
            message: "Really? that's wild",
            sent: true,
            delivered: true,
            read: true,
            date: new Date()
        }
    },
    {
        id: 6,
        recipient: "Johnson",
        online: false,
        lastSeen: new Date(),
        img: img_g,
        lastMessage: {
            fromMe: false,
            message: "No, its not like that",
            sent: true,
            delivered: true,
            read: true,
            date: new Date()
        }
    },
    {
        id: 7,
        recipient: "Eli",
        online: true,
        lastSeen: new Date(),
        img: img_h,
        lastMessage: {
            fromMe: true,
            message: "See you too",
            sent: true,
            delivered: true,
            read: true,
            date: new Date()
        }
    },
    {
        id: 8,
        recipient: "Brie",
        online: true,
        lastSeen: new Date(),
        img: img_i,
        lastMessage: {
            fromMe: false,
            message: "At the movies, you?",
            sent: true,
            delivered: true,
            read: true,
            date: new Date()
        }
    },
    {
        id: 9,
        recipient: "Harriet",
        online: false,
        lastSeen: new Date(),
        img: img_j,
        lastMessage: {
            fromMe: false,
            message: "what are you up to?",
            sent: true,
            delivered: true,
            read: true,
            date: new Date()
        }
    },
    {
        id: 10,
        recipient: "Katie",
        online: true,
        lastSeen: new Date(),
        img: img_k,
        lastMessage: {
            fromMe: true,
            message: "Hey babes",
            sent: true,
            delivered: true,
            read: false,
            date: new Date()
        }
    },
]

export default conversations;