# omznchat

## 🚗 The Vision: From Manual to Autonomous Communication

**Think about cars.** For over a century, we've been manually driving—hands on the wheel, eyes on the road, navigating every turn ourselves. But now, the vision of self-driving cars is becoming reality, promising to fundamentally transform transportation by handling the driving for us while we focus on what truly matters.

**Chat is at that same inflection point.** Today, we're still "manually driving" our conversations—typing every message, managing every thread, remembering every follow-up. But we envision a future where intelligent agents can handle communication on our behalf, allowing us to focus on the essential human connections and creative work that truly require our attention. omznchat is built with this ambitious vision at its core: to completely redefine the chat experience and pioneer the transition from manual messaging to agent-assisted communication.

> ⚠️ **IMPORTANT DEVELOPMENT NOTICE**
>
> This project is currently in **early active development** and is **NOT production-ready**. Features are incomplete, APIs may change without notice, and significant bugs are expected. Use at your own risk. When we switch to production, our third party providers (Clerk, Stream) may erase existing user data.

## 📋 Project Description

**omznchat** is a futuristic, redefined, modern, real-time chat platform built with Next.js, designed to provide a seamless messaging experience with a focus on performance and user experience. The project leverages cutting-edge web technologies to deliver a responsive, feature-rich platform for communication—with the ultimate goal of enabling agent-driven conversations that free humans to focus on what matters most.

### Current Status: Pre-Alpha

This application is under heavy development. Many core features are still being implemented, and the codebase is subject to frequent, breaking changes.

## ✨ Features

### Currently Available:

- 💬 Real-time chat that just works — snappy messages, nothing lost in space
- 🔒 Simple, safe sign-in — use your favorite account, no password headaches
- 🛎️ Optional notifications — browser or PWA push, no pressure, zero spam
- 🧭 Unified dashboard mockup — all chats and settings on one clean dashboard route

### Planned / Wishlist:

- 🕵️‍♂️ Incognito chat — participate anonymously in direct/group conversations
- 📌 Pin anything, find anything — star messages, pin media, full-chat search
- ✨ AI for chat gossip — summarize missed convos, ask explicit chat questions
- ✍️ AI writing buddy — smart suggestions matching your style
- ⏰ Remind me, but nicer — auto-reminders for events and nudges
- 🤖 Agent mode — AI workflows speak for you
- 📞 Voice & call support — messages, calls, and AI-assisted calls

## 🗺️ Roadmap

### Done

- Initial setup: basic chat, dashboard demo
- Our website: static info pages

### In Progress:

- Open sourcing: public GitHub repo & collaboration
- Establishing public community: invite users/developers
- Shipping small features: steady UX improvement

### Planned:

- Commercial launch: switch to prod, own domain
- Modern, beautiful UI
- AI and fun: build flagship features
- Expand to an app: full iOS/Android/PWA

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ArmanTheFirst/omznchat.git
```

2. Navigate to the project directory:

```bash
cd omznchat
```

3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Set up environment variables:

Create a `.env.local` file in the root directory and add necessary environment variables (refer to `.env.example` if available).

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** Clerk
- **Real-time:** Stream Chat

## 🔧 Environment Variables

To test and develop omznchat locally, you need API keys/accounts for:

- Clerk (authentication)
- Stream (realtime chat)
- reCAPTCHA (spam prevention)
- Email (sender/receiver for notifications)
- Web push (browser notifications)

### .env schema

**Server-side:**

- `CLERK_SECRET_KEY`
- `STREAM_SECRET`
- `CLERK_WEBHOOK_SECRET`
- `RECAPTCHA_SECRET_KEY`
- `SENDER_MAIL`
- `SENDER_PASSWORD`
- `RECEIVER_MAIL`
- `OMZN_MAIL`
- `WEB_PUSH_PRIVATE_KEY`

**Client-side:**

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `NEXT_PUBLIC_STREAM_KEY`
- `NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY`
- `NEXT_PUBLIC_GITHUB_REPO_URL`
- `NEXT_PUBLIC_HOSTING_URL`
- `NEXT_PUBLIC_DISCORD_INVITE`
- `NEXT_PUBLIC_X_URL`

To get keys: Sign up for [Clerk](https://clerk.com/), [Stream](https://getstream.io/), [Google reCAPTCHA](https://www.google.com/recaptcha/), and set up sender mail for notifications. Detailed setup instructions available in CONTRIBUTING.md.

## 🤝 Contributing

We welcome contributions! However, please note that this project is in early development, so expect frequent changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

**Remember:** This is a pre-alpha project. Expect bugs, breaking changes, and incomplete features. We appreciate your patience and contributions as we build omznchat together!
