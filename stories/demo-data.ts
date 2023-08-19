import { Message } from "../src/types";

export const messages: Message[] = [
    {
        id: '1',
        createdAt: new Date('2023-08-17T10:00:00Z'),
        content: "Hey! Did you catch the latest images from the James Webb Space Telescope? They're absolutely mind-blowing! 🌌",
        role: 'assistant'
    },
    {
        id: '2',
        createdAt: new Date('2023-08-17T10:01:00Z'),
        content: "Oh, I saw some pop up on my feed! The clarity and detail are insane, right? It's like Hubble's older, cooler sibling. 😄",
        role: 'user'
    },
    {
        id: '3',
        createdAt: new Date('2023-08-17T10:01:30Z'),
        content: "Exactly! I was reading that it operates primarily in the infrared range. So we're seeing aspects of the universe previously invisible to us. Mind = blown. 💥",
        role: 'assistant'
    },
    {
        id: '4',
        createdAt: new Date('2023-08-17T10:01:45Z'),
        content: "Yeah, the infrared tech allows it to see through clouds of dust and gas. So, like, baby stars being born and the very first galaxies. It's like a time machine for space. 🚀⏳",
        role: 'user'
    },
    {
        id: '5',
        createdAt: new Date('2023-08-17T10:02:00Z'),
        content: "A space-time machine! 🤓 I'm curious about its orbit too. It's not just hanging out around Earth, right?",
        role: 'assistant',
    },
    {
        id: '6',
        createdAt: new Date('2023-08-17T10:02:10Z'),
        content: "Nope! It's at the second Lagrange Point (L2), about 1.5 million km from Earth. Basically, a stable point in space where the gravitational forces and the orbital motion balance out. Super cool spot for undisturbed observations.",
        role: 'user'
    },
    {
        id: '7',
        createdAt: new Date('2023-08-17T10:02:20Z'),
        content: "Ah, that makes sense. Less interference from Earth's atmosphere and light pollution. Imagine the team's excitement when those first images came through! 🤩",
        role: 'assistant'
    },
    {
        id: '8',
        createdAt: new Date('2023-08-17T10:02:40Z'),
        content: "Absolutely! Decades of work and anticipation culminating in that moment. Did you know the entire mission was almost scrapped several times due to budget and technical challenges?",
        role: 'user'
    },
    {
        id: '9',
        createdAt: new Date('2023-08-17T10:02:50Z'),
        content: "Really? Wow, that would've been a massive loss for astronomy and science. Grateful it made it to space. 🙏",
        role: 'assistant'
    },
    {
        id: '10',
        createdAt: new Date('2023-08-17T10:03:00Z'),
        content: "Same! The universe has so many secrets, and James Webb is like our newest decoder ring. Can't wait for what discoveries lie ahead! 🌠🔍",
        role: 'user'
    }
];
