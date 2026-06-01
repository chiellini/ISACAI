# ISACAI Website

Company and product portal for **ISACAI / Hong Kong GettingRice Artificial Intelligence Limited** and the **VLAClaw** platform.

VLAClaw is an **OpenClaw-powered intelligent upper-computer and skill orchestration platform for ROS2 robots**. The website explains how ISACAI connects language, vision, robot sensors, validated robot skills, rosbridge, and ROS2 execution for robot dogs, robotic arms, and embodied edge devices.

The site is organized as a multi-entry product portal instead of a single scrolling page.

## Live / Related Sites

- Company website: `https://isacai.cn`
- Internal API / developer portal: `http://isacai.space`
- GitHub repository: `https://github.com/chiellini/ISACAI_WEBSITE`

## Product Positioning

ISACAI builds the product, developer, and collaboration surface for VLAClaw.

Core execution path:

```text
OpenClaw Agent Layer
  -> Skill Server / Skill Registry
  -> rosbridge WebSocket
  -> ROS2 Robot Controller
  -> Robot execution
  -> Sensor feedback
```

The website emphasizes:

- skill-level robot control with validated execution boundaries
- ROS2 and rosbridge integration
- reusable robot skills from action groups and ROS2 commands
- camera / IMU / radar / odometry feedback loops
- OpenClaw / VLA / VLM / LLM orchestration
- interface-first validation and repeatable demo workflows
- developer-facing API and internal engineering infrastructure

## Site Structure

Top-level pages:

```text
/              Homepage gateway
/platform      Platform, architecture, validation path, safety model
/developers    API Portal, rosbridge examples, Skill API, skills.yaml, engineering notes
/solutions     Use cases, demo workflows, education / exhibition / OEM paths
/company       Team, engineering work, roadmap, research resources
/contact       Technical integration, research collaboration, solution deployment
```

Suggested visitor routes:

- partners and customers -> `/platform` or `/company`
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
|-- app/
|   |-- page.tsx
|   |-- layout.tsx
|   |-- globals.css
|   |-- platform/page.tsx
|   |-- developers/page.tsx
|   |-- solutions/page.tsx
|   |-- company/page.tsx
|   `-- contact/page.tsx
|-- components/
|   |-- LanguageProvider.tsx
|   `-- ui/
|-- lib/
|   |-- i18n.ts
|   `-- utils.ts
|-- public/images/
|-- package.json
`-- README.md
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

The dev script uses webpack mode:

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

Repository:

```text
https://github.com/chiellini/ISACAI_WEBSITE.git
```

If the server already has a cloned Git repository:

```bash
cd /path/to/isacai_website
git pull origin main
npm ci
npm run build
pm2 restart website
```

If the server directory is not a Git repository yet:

```bash
cd /path/to
git clone https://github.com/chiellini/ISACAI_WEBSITE.git isacai_website_new
cd isacai_website_new
npm ci
npm run build
pm2 start npm --name website -- run start -- -p 3000
pm2 save
```

If an older PM2 process is still running:

```bash
pm2 list
pm2 stop website
pm2 delete website
pm2 save
```

Always back up the existing server directory before replacing a deployment.

## API Portal

The main website links to the internal API / developer portal:

```text
http://isacai.space
```

The API portal supports internal development, robot-agent integration, skill interface documentation, and team-side workflow documentation.

## Portal Content

The website presents ISACAI as a product portal with clear technical and collaboration surfaces:

- multi-page information architecture
- platform positioning and system architecture
- developer API examples
- rosbridge WebSocket interface examples
- skills.yaml schema
- action group to skill abstraction
- validation path
- compatibility matrix
- solution programs
- roadmap
- internal API portal link

The portal helps customers, developers, labs, and partners understand what VLAClaw does, how it connects to ROS2 robots, and where collaboration can start.

## Safety Model

The site describes a skill-level control architecture:

- OpenClaw plans and selects validated robot skills.
- Skill Server checks parameters, safety limits, and execution state.
- rosbridge carries WebSocket / JSON messages between the upper-computer layer and ROS2.
- ROS2 robot controllers handle real-time motion and hardware execution.
- Sensor feedback supports monitoring, recovery, and workflow iteration.

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
