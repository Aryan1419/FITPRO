# FITPRO SPORTS SOLUTIONS

**Complete Sports & Facility Management Partner**  
*One Partner. All Sports Solutions. • Train • Play • Achieve*

Website and booking platform for **FITPRO SPORTS SOLUTIONS** — delivering sports coaching, school PE programmes, sports facility and swimming pool management, and championships for gated communities and schools in Telangana, India.

---

## Source of Truth & Documentation
- **Website Content**: [`docs/content.md`](docs/content.md) (Transcribed verbatim from the expanded edition)
- **Open Items & Placeholders Tracker**: [`docs/OPEN_ITEMS.md`](docs/OPEN_ITEMS.md)
- **Original PDF**: [`docs/FITPRO_Website_Content.pdf`](docs/FITPRO_Website_Content.pdf)

---

## Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + PostCSS (Mobile-first responsive design)
- **Database & ORM**: PostgreSQL + Prisma ORM
- **Validation**: Zod schema validation on every API endpoint and form input
- **Authentication**: Mobile OTP Auth (Provider-agnostic: MSG91 or Firebase, with Mock mode for development)
- **Payments**: Razorpay (UPI, cards, net banking) with server-side signature verification and idempotent webhook handling
- **Testing**: Vitest + React Testing Library

---

## Non-Negotiable Rules
1. **Community-Scoped Pricing**: Each gated community sees ONLY its own sports, batches, and prices. Enforced strictly on the SERVER (database queries and API response serialization). Unverified visitors see NO prices or batch seat counts.
2. **Server-Verified Payments**: Never trust the client for payment status. Verify Razorpay signatures on the server and handle webhooks idempotently.
3. **Seat Locking**: Temporary seat lock during checkout to prevent overbooking.
4. **Role-Based Access Control (RBAC)**: `resident`, `coach`, `community_admin`, `super_admin`. A community admin can only access their own community's data.
5. **Children's Data Protection**: Collect the minimum required data; record explicit guardian consent.
6. **Zero Secrets in Git**: All secrets are loaded through environment variables. `.env` files are never committed.
7. **No Unjustified Dependencies**: Strict dependency control.
8. **Typed & Tested**: Strict TypeScript typing (`strict: true`) with automated tests for pricing visibility, payment verification, and role access.

---

## Development Setup

### 1. Prerequisites
- Node.js v18+ (tested with v24)
- PostgreSQL database instance

### 2. Environment Configuration
Copy `.env.example` to `.env.local` and configure your credentials:
```bash
cp .env.example .env.local
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Prisma Generation & Database Sync
```bash
npm run prisma:generate
# To push schema to your PostgreSQL database:
# npx prisma db push
```

### 5. Running the Application
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## Verification Commands
- **Type Check**: `npm run type-check`
- **Linter Check**: `npm run lint`
- **Unit & Integration Tests**: `npm test`
- **Production Build**: `npm run build`
