# ISACAI Website

Company website for **ISACAI / Hong Kong GettingRice Artificial Intelligence Limited** and its VLAClaw product direction.

VLAClaw is positioned as an **OpenClaw-powered intelligent upper-computer and skill orchestration platform for ROS2 robots**. The website explains how ISACAI connects language, vision, robot sensors, validated robot skills, rosbridge, and ROS2 execution for robot dogs, robotic arms, and embodied edge devices.

The site is intentionally structured as a professional multi-entry company website rather than a single long scrolling document.

## Live / Related Sites

- Company website: `https://isacai.cn`
- Internal API / developer portal: `http://isacai.space`
- GitHub repository: `https://github.com/chiellini/ISACAI_WEBSITE`

## Product Positioning

ISACAI is not building a simple robot remote controller, and it is not claiming that a large model directly controls motors.

The core story is:

```text
OpenClaw Agent Layer
  -> Skill Server / Skill Registry
  -> rosbridge WebSocket
  -> ROS2 Robot Controller
  -> Robot execution
  -> Sensor feedback
```

The website emphasizes:

- skill-level robot control, not raw motor-level generation
- ROS2 and rosbridge integration
- reusable robot skills from action groups and ROS2 commands
- camera / IMU / radar / odometry feedback loops
- OpenClaw / VLA / VLM / LLM orchestration
- software-first validation before hardware-heavy scaling
- developer-facing API and internal infrastructure

## Site Structure

The website is organized into top-level entry pages:

```text
/              Homepage gateway
/platform      Product platform, architecture, validation path, safety model
/developers    API Portal, rosbridge examples, Skill API, skills.yaml, engineering notes
/solutions     Use cases, demos, pilot packages, education / exhibition / OEM paths
/company       Team, engineering work, roadmap, research resources
/contact       Technical integration, research collaboration, pilot deployment
```

This avoids the site feeling like a long Word document. Visitors can choose the route that matches their role:

- investors and partners -> `/platform` or `/company`
- developers and labs -> `/developers`
- education / demo / OEM customers -> `/solutions`
- direct collaboration -> `/contact`

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- lucide-react icons
- Static-friendly App Router structure

## Project Directory

```text
isacai_website/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── platform/page.tsx
│   ├── developers/page.tsx
│   ├── solutions/page.tsx
│   ├── company/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── LanguageProvider.tsx
│   └── ui/
├── lib/
│   ├── i18n.ts
│   └── utils.ts
├── public/images/
├── package.json
└── README.md
```

## Local Development

Install dependencies:

```bash
npm ci
```

Start local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Note: the dev script uses webpack mode:

```json
"dev": "node node_modules/next/dist/bin/next dev --webpack"
```

This avoids Turbopack permission issues that can appear in OneDrive / Windows development paths.

## Build

Create a production build:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

Optional custom port:

```bash
npm run start -- -p 3000
```

## Deployment Update From GitHub

The repository is pushed to:

```text
https://github.com/chiellini/ISACAI_WEBSITE.git
```

On the server, update the deployed website with:

```bash
cd /path/to/isacai_website
git pull origin main
npm ci
npm run build
```

Then restart the process manager.

For PM2:

```bash
pm2 restart isacai-website
```

If the server is not yet connected to GitHub, either clone the repository:

```bash
git clone https://github.com/chiellini/ISACAI_WEBSITE.git isacai_website
```

or add this remote to an existing server directory:

```bash
git remote add origin https://github.com/chiellini/ISACAI_WEBSITE.git
git branch -M main
git pull origin main
```

Always back up the server directory before replacing an existing deployment.

## API Portal

The main website links to the internal API / developer portal:

```text
http://isacai.space
```

This API portal is part of the engineering proof of work. It shows that ISACAI is not only building a marketing website, but also preparing developer-facing infrastructure for robot-agent integration, skill calls, API documentation, and internal workflows.

## Content Strategy

Because the physical product is still in an early stage, the website focuses on showing real engineering work:

- multi-page information architecture
- product positioning and system architecture
- developer API examples
- rosbridge WebSocket interface examples
- skills.yaml schema
- action group to skill abstraction
- validation plan
- compatibility matrix
- pilot packages
- roadmap
- internal API portal link

This makes the company look like a serious embodied AI infrastructure startup instead of a temporary demo page.

## Safety Claims

The site intentionally avoids overclaiming:

- It does not claim full autonomy.
- It does not claim the AI directly controls motors.
- It does not claim mass production or large-scale deployment.
- It states that OpenClaw selects validated skills while ROS2 robot controllers handle real-time execution.

## Useful Commands

```bash
# check working tree
git status

# build before deployment
npm run build

# push updates
git add .
git commit -m "Update website"
git push origin main
```

## Maintainer

Hong Kong GettingRice Artificial Intelligence Limited  
ISACAI / VLAClaw
