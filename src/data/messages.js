const messages = [
    {
        conversation: 0,
        content: [
            {
                "sender": {
                    "name": "Liz",
                    "id": 1
                },
                "message": "Hey Fred, what are you up to?",
                "timestamp": "2024-03-07T20:30:00Z"
            },
            {
                "sender": {
                    "name": "Fred",
                    "id": 2
                },
                "message": "Hey Liz, not much, just chilling at home. You?",
                "timestamp": "2024-03-07T20:32:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 1
                },
                "message": "Same here, just sizwsing through some online stores. ",
                "timestamp": "2024-03-07T20:34:00Z"
            },
            {
                "sender": {
                    "name": "Fred",
                    "id": 2
                },
                "message": "Anything interesting catching your eye?",
                "timestamp": "2024-03-07T20:36:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 1
                },
                "message": "Actually, yeah! I found this amazing travel mug that keeps my coffee hot for hours! ☕️",
                "timestamp": "2024-03-07T20:38:00Z"
            },
            {
                "sender": {
                    "name": "Fred",
                    "id": 2
                },
                "message": "Ooh, sounds perfect for this weather! Send me the link, maybe I need one too!",
                "timestamp": "2024-03-07T20:40:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 1
                },
                "image": "https://example.com/travel-mug.jpg",
                "message": "Here it is! ",
                "timestamp": "2024-03-07T20:42:00Z"
            },
            {
                "sender": {
                    "name": "Fred",
                    "id": 2
                },
                "message": "Wow, that looks sleek! And the reviews are great too. ",
                "timestamp": "2024-03-07T20:44:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 1
                },
                "message": "I know, right? I think I'm adding it to my cart! ",
                "timestamp": "2024-03-07T20:46:00Z"
            },
            {
                "sender": {
                    "name": "Fred",
                    "id": 2
                },
                "message": "Haha, good call! Speaking of coffee, how about we grab some tomorrow?",
                "timestamp": "2024-03-07T20:48:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 1
                },
                "message": "Sounds like a plan! Any time after work works for me. ",
                "timestamp": "2024-03-07T20:50:00Z"
            },
            {
                "sender": {
                    "name": "Fred",
                    "id": 2
                },
                "message": "Great! Maybe we can try that new coffee shop downtown everyone's been talking about?",
                "timestamp": "2024-03-07T20:52:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 1
                },
                "message": "Ooh, I haven't been there yet! I've heard they have amazing pastries too. ",
                "timestamp": "2024-03-07T20:54:00Z"
            },
            {
                "sender": {
                    "name": "Fred",
                    "id": 2
                },
                "message": "That sounds delicious! I'm in. ",
                "timestamp": "2024-03-07T20:56:00Z"
            }
        ]
    },
    {
        conversation: 1,
        content: [
            {
                "sender": {
                    "name": "Mike",
                    "id": 1
                },
                "message": "Hey babe, what are you up to?",
                "timestamp": "2024-03-07T20:30:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Hey Mike, not much, just chilling at home. You?",
                "timestamp": "2024-03-07T20:32:00Z"
            },
            {
                "sender": {
                    "name": "Mike",
                    "id": 1
                },
                "message": "Same here, just sizwsing through some online stores. ",
                "timestamp": "2024-03-07T20:34:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Anything interesting catching your eye?",
                "timestamp": "2024-03-07T20:36:00Z"
            },
            {
                "sender": {
                    "name": "Mike",
                    "id": 1
                },
                "message": "Actually, yeah! I found this amazing travel mug that keeps my coffee hot for hours! ☕️",
                "timestamp": "2024-03-07T20:38:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Ooh, sounds perfect for this weather! Send me the link, maybe I need one too!",
                "timestamp": "2024-03-07T20:40:00Z"
            },
            {
                "sender": {
                    "name": "Mike",
                    "id": 1
                },
                "image": "https://example.com/travel-mug.jpg",
                "message": "Here it is! ",
                "timestamp": "2024-03-07T20:42:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Wow, that looks sleek! And the reviews are great too. ",
                "timestamp": "2024-03-07T20:44:00Z"
            },
            {
                "sender": {
                    "name": "Mike",
                    "id": 1
                },
                "message": "I know, right? I think I'm adding it to my cart! ",
                "timestamp": "2024-03-07T20:46:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Haha, good call! Speaking of coffee, how about we grab some tomorrow?",
                "timestamp": "2024-03-07T20:48:00Z"
            },
            {
                "sender": {
                    "name": "Mike",
                    "id": 1
                },
                "message": "Sounds like a plan! Any time after work works for me. ",
                "timestamp": "2024-03-07T20:50:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Great! Maybe we can try that new coffee shop downtown everyone's been talking about?",
                "timestamp": "2024-03-07T20:52:00Z"
            },
            {
                "sender": {
                    "name": "Mike",
                    "id": 1
                },
                "message": "Ooh, I haven't been there yet! I've heard they have amazing pastries too. ",
                "timestamp": "2024-03-07T20:54:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "That sounds delicious! I'm in. ",
                "timestamp": "2024-03-07T20:56:00Z"
            }
        ]
    },
    {
        conversation: 2,
        content: [
            {
                "sender": {
                    "name": "Rachael",
                    "id": 1
                },
                "message": "Hey siz, what are you up to?",
                "timestamp": "2024-03-07T20:30:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Hey siz, not much, just chilling at home. You?",
                "timestamp": "2024-03-07T20:32:00Z"
            },
            {
                "sender": {
                    "name": "Rachael",
                    "id": 1
                },
                "message": "Have you done the math assignment?",
                "timestamp": "2024-03-07T20:33:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "No man. You?",
                "timestamp": "2024-03-07T20:32:00Z"
            },
            {
                "sender": {
                    "name": "Rachael",
                    "id": 1
                },
                "message": "I have, but I'm not sure if I did it right. Can you help me check it?",
                "timestamp": "2024-03-07T20:34:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Sure, I can help you with that. Send me your assignment and I'll take a look at it.",
                "timestamp": "2024-03-07T20:35:00Z"
            },
            {
                "sender": {
                    "name": "Rachael",
                    "id": 1
                },
                "message": "Thanks man! I'll send it to you right now.",
                "timestamp": "2024-03-07T20:36:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Great! I'll be waiting.",
                "timestamp": "2024-03-07T20:37:00Z"
            },
            {
                "sender": {
                    "name": "Rachael",
                    "id": 1
                },
                "message": "Here you go!",
                "timestamp": "2024-03-07T20:38:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Thanks! I'll take a look at it right now.",
                "timestamp": "2024-03-07T20:39:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "Looks good to me! You're all set.",
                "timestamp": "2024-03-07T20:40:00Z"
            },
            {
                "sender": {
                    "name": "Rachael",
                    "id": 1
                },
                "message": "Thanks man! I really appreciate it.",
                "timestamp": "2024-03-07T20:41:00Z"
            },
            {
                "sender": {
                    "name": "Liz",
                    "id": 2
                },
                "message": "No problem! Happy to help.",
                "timestamp": "2024-03-07T20:42:00Z"
            }
        ]
    }
]

export default messages;