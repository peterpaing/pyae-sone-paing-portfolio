# Pyae Sone Paing Portfolio

A responsive personal portfolio for Pyae Sone Paing, a full-stack developer. It showcases selected projects, technical skills, certificates, and contact information.

[View Portfolio](https://pyaesonepaing.com/)

## Preview

![Pyae Sone Paing Portfolio preview](./docs/images/portfolio-preview.png)

## Features

- Responsive layouts for mobile, tablet, and desktop
- Light and dark themes
- Featured projects with live demos, source code, and technology details
- Frontend, backend, database, and tooling skills
- Certificates with external verification links
- Contact information, social links, and downloadable resume
- Accessibility-focused implementation:
  - Semantic HTML and descriptive headings
  - Visible keyboard focus indicators
  - Accessible labels for icon-only controls
  - Descriptive image alternative text
  - Decorative icons hidden from screen readers
  - Reduced-motion support

## Featured Project

### StackWing

A full-stack developer job-search application that brings listings from multiple job boards into one place.

Features include saved jobs, application tracking, profile-based matching, AI-assisted profile extraction, and job-specific AI chat.

Built with Next.js, TypeScript, Node.js, Express, PostgreSQL, and Drizzle ORM, with Clerk authentication and Stripe subscription billing.

[Explore StackWing](https://stackwingjobs.com)

## Built With

The portfolio website uses:

- React
- TypeScript
- React Router
- Tailwind CSS
- React Icons
- `@dev.icons/react`

## Getting Started

### Prerequisites

Install a supported LTS version of [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/peterpaing/Portfolio.git
   ```

2. Open the project folder:

   ```bash
   cd Portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the URL shown in your terminal, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Project Structure

```text
src/
├── assets/       # Profile, certificate, and project images
├── components/   # Reusable page components
├── data/         # Project and certificate data
├── pages/        # Route-level pages
├── App.tsx
└── main.tsx

public/           # Static files, including the downloadable resume
docs/
└── images/
    └── portfolio-preview.png
```

## Accessibility

The portfolio is built with accessibility in mind, including semantic HTML, keyboard navigation, visible focus states, and labelled controls. These practices do not constitute a formal accessibility audit or guarantee conformance.

When adding content:

- Write meaningful alternative text for informative images.
- Label icon-only buttons and links.
- Maintain a logical heading hierarchy.
- Check text and focus-indicator contrast.
- Test interactions using only the keyboard.
- Respect reduced-motion preferences.

## Design Credits

Some featured projects implement designs supplied by Frontend Mentor. Relevant project descriptions identify those implementations; design ownership is not claimed.

## Contact

- [Email](mailto:pyaesonepaing104@gmail.com)
- [GitHub](https://github.com/peterpaing)
- [LinkedIn](https://www.linkedin.com/in/pyae-sone-paing-06a283418/)

## License

Original portfolio content and code: all rights reserved unless otherwise stated.

Third-party libraries, icons, logos, and project design assets remain subject to their respective licenses and owners’ rights.