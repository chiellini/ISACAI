'use client'

import Image from 'next/image'
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  FileText,
  Globe2,
  Home,
  Mail,
  Menu,
  SquareTerminal,
  X,
} from 'lucide-react'
import { useMemo, useState } from 'react'

const urls = {
  portal: 'https://isacai.cn',
  partner: 'https://isacai.space',
  githubIsacai: 'https://github.com/chiellini/ISACAI',
  miit: 'https://beian.miit.gov.cn',
}

const compliance = {
  icp: '粤ICP备2026050877号',
  filingEntity: '广州多智慧体人工智能科技有限公司',
}

const company = {
  hk: {
    name: 'Hong Kong GettingRice Artificial Intelligence Limited',
    zh: '香港得米人工智能有限公司',
    number: '80324505',
    incorporated: '2026-05-05',
  },
  gz: {
    name: '广州多智慧体人工智能科技有限公司',
    creditCode: '91440113MAKAK4TP10',
    legalRep: '李泽霖',
    incorporated: '2026-04-10',
    address: '广州市番禺区钟村街汉兴东路 10 号 1711',
  },
}

type Lang = 'zh' | 'en'

const copy = {
  zh: {
    langLabel: 'EN',
    nav: [
      { label: '门户', href: '/' },
      { label: '合作方入口', href: urls.partner },
      { label: '开发者', href: '/developers' },
      { label: '公司', href: '/company' },
      { label: '联系', href: '/contact' },
    ],
    navCta: '访问合作方',
    brandSubtitle: '公司门户',
    hero: {
      title: 'ISACAI',
      headline: '智能体服务与具身智能的公司门户',
      subtitle:
        'isacai.cn 承载公司信息、项目入口与合作联系；isacai.space 为外部合作方网站，与本站无隶属关系。',
      primary: '访问合作方',
      secondary: '联系团队',
    },
    sections: {
      portal: {
        kicker: '入口',
        title: '从这里进入公司、项目与合作。',
        description: '首页作为导航中枢，串联门户、开源仓库、合作方服务与 VLAClaw 研发项目。',
      },
      product: {
        kicker: '本站产品',
        title: 'VLAClaw：面向具身智能的上位机工作台。',
        description:
          '连接 ROS2 机器人、视觉感知、语音交互与可编排技能，面向机器人应用验证与边缘侧智能执行。',
      },
      infrastructure: {
        kicker: '能力',
        title: '连接机器人、感知与智能体工作流。',
        description: '将设备连接、感知输入、任务规划与技能执行组织成可扩展的机器人上位机路径。',
      },
      company: {
        kicker: '公司',
        title: '主体与办公室信息公开。',
        description: '方便客户、合作伙伴与开发者确认经营主体、地址与联系入口。',
      },
      office: {
        kicker: '办公室',
        title: '访问安排。',
        description: '广州办公室负责大陆业务与交付；香港主体承接注册与跨境合作。拜访请提前邮件预约。',
      },
      developers: {
        kicker: '开发者',
        title: '本站资料与合作方入口分开。',
        description: 'API 服务由外部合作方提供；开发者请直接访问 isacai.space。',
      },
      compliance: {
        kicker: '合规',
        title: '域名、备案与主办单位。',
        description: '备案信息已完成主体更新，并链接至工信部备案系统。',
        recordsTitle: '备案主体与变更信息',
        records: [
          { label: '备案主体', value: compliance.filingEntity },
          { label: '变更主体', value: compliance.filingEntity },
          { label: '主办单位名称', value: compliance.filingEntity },
          { label: 'ICP 主体备案号', value: compliance.icp },
        ],
      },
      contact: {
        kicker: '联系',
        title: '联系 ISACAI。',
        description: '产品试用、私有部署、企业合作与具身智能项目咨询，都可以从这里发起。',
      },
      faq: {
        kicker: 'FAQ',
        title: '常见问题。',
        description: '把本站与外部合作方的边界说清楚。',
      },
    },
    portalCards: [
      {
        title: '合作方服务入口',
        description: '外部合作方独立运营的服务平台。账号、计费、接口和技术支持请以合作方页面为准。',
        href: urls.partner,
        label: 'isacai.space',
      },
      {
        title: 'ISACAI 开源仓库',
        description: '本站公司资料、技术项目与研发方向的公开代码入口。',
        href: urls.githubIsacai,
        label: 'GitHub',
      },
      {
        title: 'ISACAI 公司门户',
        description: '公司介绍、办公室地址、联系入口、备案与项目导航。',
        href: '/',
        label: 'isacai.cn',
      },
      {
        title: 'VLAClaw 项目',
        description: '具身智能与机器人方向的研发项目，作为 ISACAI 技术项目入口。',
        href: '/solutions',
        label: 'Embodied AI',
      },
    ],
    productFeatures: [
      'ROS2 与 rosbridge 设备连接',
      '语音交互与视觉感知输入',
      'OpenClaw skill server 技能编排',
      '机器人狗、摄像头与边缘硬件接入',
      '可插拔的任务流程与技能模块',
      '云边协同的智能体执行路径',
      '面向真实机器人场景的快速验证',
      '研发演示、实验记录与项目沉淀',
    ],
    infrastructure: [
      {
        title: 'Robot Connectivity',
        text: '通过 rosbridge 与边缘组件连接 ROS2 设备与机器人侧服务。',
      },
      {
        title: 'Multimodal Interaction',
        text: '融合语音、摄像头、视觉感知与任务上下文，完成具身交互。',
      },
      {
        title: 'Skill Orchestration',
        text: '组合可复用的 OpenClaw 技能与任务工作流，适配不同机器人场景。',
      },
      {
        title: 'Cloud-Edge Execution',
        text: '时敏执行靠近机器人，高层智能在云边协同调度。',
      },
    ],
    endpoints: [] as string[],
    developerSteps: [
      '本站不提供 API Key、接口转发或外部服务账号。',
      '如需相关服务，请直接访问合作方网站 isacai.space。',
      '合作方的接口、账号、计费和服务状态由合作方负责。',
      '关于 ISACAI 的公司、项目或合作事宜，请通过本站联系入口沟通。',
    ],
    companyLabels: {
      hk: '香港主体',
      gz: '大陆运营主体',
      companyNo: '公司编号',
      creditCode: '统一社会信用代码',
      legalRep: '法定代表人',
      incorporated: '成立日期',
      address: '地址',
    },
    contact: {
      business: 'rigaudiere@isacai.cn',
      channels: [
        { title: '合作联系', text: '公司合作、研究合作、办公室访问和具身智能项目咨询。' },
        { title: '企业部署', text: '讨论账号池、支付、计费、日志、审计和内网部署方案。' },
        { title: '办公室拜访', text: '商务合作、园区合作、研究合作或广州办公室访问预约。' },
      ],
    },
    faq: [
      {
        q: 'isacai.cn 和 isacai.space 怎么分工？',
        a: 'isacai.cn 是 ISACAI 的公司门户。isacai.space 是外部合作方网站，与本站没有隶属关系；相关服务请以合作方页面为准。',
      },
      {
        q: 'VLAClaw 还保留吗？',
        a: '保留，但不再作为官网唯一主角。它会作为 ISACAI 在具身智能和机器人方向的研发项目入口出现。',
      },
      {
        q: 'ICP备案信息是否已更新？',
        a: '备案信息已补充：备案主体和主办单位为“广州多智慧体人工智能科技有限公司”，ICP 备案号为粤ICP备2026050877号。',
      },
    ],
    footer: {
      title: 'ISACAI',
      subtitle: '公司门户 · 具身智能研发',
      softwareContact: '软件开发交流联系方式：1027890648',
      copyright: '© 2026 ISACAI. All rights reserved.',
    },
    office: {
      gzTitle: '广州办公室',
      gzNote: '大陆业务、产品交付、客户接入与部署协调。',
      hkTitle: '香港主体',
      hkNote: '公司注册、研究网络、跨境协作与公司治理。',
    },
    productCta: '查看项目',
    productTagline: 'ISACAI 自有具身智能研发项目，面向 ROS2 机器人、感知交互与技能编排。',
  },
  en: {
    langLabel: '中文',
    nav: [
      { label: 'Portal', href: '/' },
      { label: 'Partner', href: urls.partner },
      { label: 'Developers', href: '/developers' },
      { label: 'Company', href: '/company' },
      { label: 'Contact', href: '/contact' },
    ],
    navCta: 'Visit Partner',
    brandSubtitle: 'Company Portal',
    hero: {
      title: 'ISACAI',
      headline: 'Company portal for agents and embodied intelligence',
      subtitle:
        'isacai.cn hosts company information and project entries; isacai.space is an independent partner site with no affiliation to this portal.',
      primary: 'Visit Partner',
      secondary: 'Contact Team',
    },
    sections: {
      portal: {
        kicker: 'Entrances',
        title: 'Enter the company, projects, and partnerships.',
        description: 'A navigation hub linking the portal, open-source work, partner services, and VLAClaw research.',
      },
      product: {
        kicker: 'Our Product',
        title: 'VLAClaw: an embodied intelligence workbench.',
        description:
          'Connect ROS2 robots, visual perception, voice interaction, and composable skills for real-world validation and edge execution.',
      },
      infrastructure: {
        kicker: 'Capabilities',
        title: 'Robots, perception, and agent workflows.',
        description: 'Organize connectivity, sensing, planning, and skill execution into an extensible robot-side path.',
      },
      company: {
        kicker: 'Company',
        title: 'Entities and office information.',
        description: 'Public records so partners and developers can verify operating entities and contact points.',
      },
      office: {
        kicker: 'Office',
        title: 'Visit arrangements.',
        description: 'Guangzhou handles mainland delivery; Hong Kong covers registration and cross-border work. Visits by appointment.',
      },
      developers: {
        kicker: 'Developers',
        title: 'Portal materials and partner access stay separate.',
        description: 'API services come from the external partner; use isacai.space for their official materials.',
      },
      compliance: {
        kicker: 'Compliance',
        title: 'Domains, ICP, and hosting unit.',
        description: 'Filing subject information is updated and linked to the MIIT system.',
        recordsTitle: 'ICP and compliance records',
        records: [
          { label: 'Filing subject', value: compliance.filingEntity },
          { label: 'Amended filing subject', value: compliance.filingEntity },
          { label: 'Hosting unit', value: compliance.filingEntity },
          { label: 'ICP filing number', value: compliance.icp },
        ],
      },
      contact: {
        kicker: 'Contact',
        title: 'Contact ISACAI.',
        description: 'Start here for trials, private deployment, enterprise cooperation, and embodied intelligence projects.',
      },
      faq: {
        kicker: 'FAQ',
        title: 'Common questions.',
        description: 'Clear boundaries between this portal and partner services.',
      },
    },
    portalCards: [
      {
        title: 'Partner Service Entrance',
        description: 'An externally operated partner service. Accounts, billing, and support are handled by the partner.',
        href: urls.partner,
        label: 'isacai.space',
      },
      {
        title: 'ISACAI Repository',
        description: 'Public code and project materials for this portal and ISACAI technology work.',
        href: urls.githubIsacai,
        label: 'GitHub',
      },
      {
        title: 'ISACAI Company Portal',
        description: 'Company profile, office addresses, contact entry, compliance, and project navigation.',
        href: '/',
        label: 'isacai.cn',
      },
      {
        title: 'VLAClaw Project',
        description: 'Embodied intelligence and robotics R&D retained as a technology entrance under ISACAI.',
        href: '/solutions',
        label: 'Embodied AI',
      },
    ],
    productFeatures: [
      'ROS2 and rosbridge robot connectivity',
      'Voice interaction and visual perception inputs',
      'OpenClaw skill server orchestration',
      'Robot dog, camera, and edge hardware integration',
      'Composable task flows and reusable skill modules',
      'Cloud-edge paths for embodied agent execution',
      'Rapid validation in real robot scenarios',
      'Research demos, experiments, and project artifacts',
    ],
    infrastructure: [
      {
        title: 'Robot Connectivity',
        text: 'Connect ROS2 devices and robot-side services through rosbridge and edge components.',
      },
      {
        title: 'Multimodal Interaction',
        text: 'Combine voice, camera, visual perception, and task context for embodied interaction.',
      },
      {
        title: 'Skill Orchestration',
        text: 'Compose reusable OpenClaw skills and task workflows for different robot scenarios.',
      },
      {
        title: 'Cloud-Edge Execution',
        text: 'Keep time-sensitive execution near the robot while coordinating higher-level intelligence.',
      },
    ],
    endpoints: [] as string[],
    developerSteps: [
      'This portal does not provide API Keys, request forwarding, or partner service accounts.',
      'Visit the external partner website directly for its services and official materials.',
      'The partner is responsible for its interfaces, accounts, billing, and service status.',
      'Contact this portal about ISACAI company, project, or cooperation matters.',
    ],
    companyLabels: {
      hk: 'Hong Kong entity',
      gz: 'Mainland operating entity',
      companyNo: 'Company No.',
      creditCode: 'Unified Social Credit Code',
      legalRep: 'Legal representative',
      incorporated: 'Incorporated',
      address: 'Address',
    },
    contact: {
      business: 'rigaudiere@isacai.cn',
      channels: [
        { title: 'Cooperation', text: 'Company cooperation, research, office visits, and embodied intelligence projects.' },
        { title: 'Enterprise deployment', text: 'Account pools, payment, billing, logs, audit, and internal deployment.' },
        { title: 'Office visits', text: 'Business cooperation, park collaboration, research, or Guangzhou office visits.' },
      ],
    },
    faq: [
      {
        q: 'How do isacai.cn and isacai.space differ?',
        a: 'isacai.cn is the ISACAI company portal. isacai.space is an independent partner website with no affiliation to this portal.',
      },
      {
        q: 'Is VLAClaw still part of the site?',
        a: 'Yes. It remains an embodied intelligence and robotics R&D project, but is no longer the only homepage focus.',
      },
      {
        q: 'Has filing information been updated?',
        a: 'Yes. The filing subject and hosting unit are Guangzhou Multi-Intelligence Artificial Intelligence Technology Co., Ltd., ICP 粤ICP备2026050877号.',
      },
    ],
    footer: {
      title: 'ISACAI',
      subtitle: 'Company portal · Embodied intelligence R&D',
      softwareContact: 'Software development contact: 1027890648',
      copyright: '© 2026 ISACAI. All rights reserved.',
    },
    office: {
      gzTitle: 'Guangzhou Office',
      gzNote: 'Mainland operations, product delivery, onboarding, and deployment coordination.',
      hkTitle: 'Hong Kong Entity',
      hkNote: 'Registration, research network, cross-border collaboration, and corporate administration.',
    },
    productCta: 'View Project',
    productTagline: 'ISACAI-owned embodied intelligence R&D for ROS2 robots, perception, and skill orchestration.',
  },
} satisfies Record<Lang, Record<string, unknown>>

function useCopy() {
  const { language, toggleLanguage } = useLanguage()
  const lang = (language === 'zh' ? 'zh' : 'en') as Lang
  return { lang, c: copy[lang], toggleLanguage }
}

function SectionIntro({
  kicker,
  title,
  description,
  tone = 'light',
}: {
  kicker: string
  title: string
  description: string
  tone?: 'light' | 'dark'
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className={tone === 'dark' ? 'font-display text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(18_72%_62%)]' : 'section-kicker'}>
        {kicker}
      </p>
      <h2 className={`section-title ${tone === 'dark' ? 'text-white' : ''}`}>{title}</h2>
      <p className={`section-lede ${tone === 'dark' ? 'text-white/60' : ''}`}>{description}</p>
    </div>
  )
}

function BrandMark() {
  return (
    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden border border-foreground/10 bg-white">
      <Image src="/公司icon.jpeg" alt="ISACAI" fill sizes="36px" className="object-contain" />
    </span>
  )
}

export function Navigation() {
  const { c, toggleLanguage } = useCopy()
  const [open, setOpen] = useState(false)

  const go = (href: string) => {
    setOpen(false)
    window.location.href = href
  }

  return (
    <nav className="nav-shell">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between gap-3">
          <button onClick={() => go('/')} className="flex items-center gap-3 text-left">
            <BrandMark />
            <span>
              <span className="font-display block text-sm font-bold tracking-tight leading-tight">ISACAI</span>
              <span className="block text-[11px] tracking-wide text-muted-foreground">{c.brandSubtitle}</span>
            </span>
          </button>

          <div className="hidden items-center lg:flex">
            {c.nav.map((item) => (
              <button key={item.href} onClick={() => go(item.href)} className="nav-link">
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="inline-flex min-h-9 items-center justify-center gap-2 border border-foreground/10 bg-transparent px-3 text-sm font-medium text-foreground/70 transition hover:border-foreground/25 hover:text-foreground"
              aria-label="Switch language"
            >
              <Globe2 className="h-3.5 w-3.5" />
              <span>{c.langLabel}</span>
            </button>
            <a href={urls.partner} target="_blank" rel="noreferrer" className="btn-primary hidden sm:inline-flex !min-h-9 !px-3 !text-xs">
              {c.navCta}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center border border-foreground/10 lg:hidden"
              aria-label="Open menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-foreground/10 bg-[hsl(var(--paper))] lg:hidden">
          <div className="section-container grid gap-1 py-4">
            {c.nav.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="border-b border-foreground/5 px-1 py-3 text-left text-sm font-medium text-foreground/80"
              >
                {item.label}
              </button>
            ))}
            <a href={urls.partner} target="_blank" rel="noreferrer" className="btn-primary mt-3 justify-center">
              {c.navCta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  const { c } = useCopy()

  return (
    <section id="home" className="hero-plane pt-16">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="section-container hero-content flex min-h-[calc(100svh-4rem)] flex-col justify-end pb-16 pt-20 sm:pb-20 lg:justify-center lg:pb-24">
        <p className="hero-brand">{c.hero.title}</p>
        <h1 className="hero-headline mt-6 max-w-2xl">{c.hero.headline}</h1>
        <p className="hero-lede mt-5">{c.hero.subtitle}</p>
        <div className="hero-actions mt-10 flex flex-wrap gap-3">
          <a href={urls.partner} target="_blank" rel="noreferrer" className="btn-primary !bg-white !text-[hsl(var(--ink))] hover:!bg-[hsl(18_72%_56%)] hover:!text-white">
            {c.hero.primary}
            <ExternalLink className="h-4 w-4" />
          </a>
          <a href="/contact" className="btn-secondary !border-white/25 !text-white hover:!border-white/50 hover:!bg-white/5">
            {c.hero.secondary}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function EntryPortalSection() {
  const { c } = useCopy()

  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionIntro kicker={c.sections.portal.kicker} title={c.sections.portal.title} description={c.sections.portal.description} />
        <div>
          {c.portalCards.map((card) => {
            const external = card.href.startsWith('http')
            return (
              <a
                key={card.title}
                href={card.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="entry-row"
              >
                <div className="min-w-0">
                  <h3 className="entry-row-title">{card.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{card.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--copper))]">
                    {card.label}
                    {external ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ProductSection() {
  const { c } = useCopy()

  return (
    <section id="product" className="section-padding border-t border-foreground/5 bg-[hsl(var(--paper))]">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionIntro kicker={c.sections.product.kicker} title={c.sections.product.title} description={c.sections.product.description} />
          <div className="lg:pb-4">
            <p className="text-sm leading-7 text-muted-foreground">{c.productTagline}</p>
            <a href="/solutions" className="btn-primary mt-6">
              {c.productCta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="feature-rail mt-4">
          {c.productFeatures.map((feature, index) => (
            <div key={feature} className="feature-rail-item">
              <span className="font-display w-10 shrink-0 text-sm font-semibold text-[hsl(var(--copper))]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-6 text-foreground/80 sm:text-base">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function InfrastructureSection() {
  const { c } = useCopy()

  return (
    <section className="capability-band section-padding">
      <div className="section-container relative">
        <SectionIntro
          kicker={c.sections.infrastructure.kicker}
          title={c.sections.infrastructure.title}
          description={c.sections.infrastructure.description}
          tone="dark"
        />
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {c.infrastructure.map((item, index) => (
            <div key={item.title} className="capability-item">
              <p className="capability-index">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-display mt-4 text-lg font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
            </div>
          ))}
        </div>
        {c.endpoints.length > 0 && (
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-wrap gap-2">
              {c.endpoints.map((endpoint) => (
                <span key={endpoint} className="border border-white/10 px-3 py-2 font-mono text-xs text-white/60">
                  {endpoint}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export function DeveloperSection() {
  const { c } = useCopy()

  return (
    <section id="developers" className="section-padding">
      <div className="section-container">
        <SectionIntro kicker={c.sections.developers.kicker} title={c.sections.developers.title} description={c.sections.developers.description} />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-[hsl(var(--copper))]" />
              <h3 className="font-display text-lg font-semibold">Developer route</h3>
            </div>
            <ol className="space-y-0">
              {c.developerSteps.map((step, index) => (
                <li key={step} className="flex gap-4 border-t border-foreground/10 py-5">
                  <span className="font-display text-sm font-semibold text-[hsl(var(--copper))]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm leading-6 text-foreground/75">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="code-panel self-start">
            <div className="code-panel-header">
              <span>VLAClaw workflow</span>
              <SquareTerminal className="h-4 w-4 text-[hsl(18_72%_62%)]" />
            </div>
            <pre className="overflow-x-auto whitespace-pre p-5 text-xs leading-7 text-white/70 sm:text-sm">
              {`ROS2 device
  → perception
  → agent planning
  → skill execution

OpenClaw skills coordinate
robot-side actions.`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CompanySection() {
  const { c } = useCopy()
  const labels = c.companyLabels

  return (
    <section id="company" className="section-padding border-t border-foreground/5 bg-[hsl(var(--paper))]">
      <div className="section-container">
        <SectionIntro kicker={c.sections.company.kicker} title={c.sections.company.title} description={c.sections.company.description} />
        <div className="grid gap-14 lg:grid-cols-2">
          <article className="entity-block">
            <p className="section-kicker">{labels.hk}</p>
            <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight">{company.hk.name}</h3>
            <p className="mt-2 text-base text-muted-foreground">{company.hk.zh}</p>
            <dl className="entity-meta">
              <div>
                <dt>{labels.companyNo}</dt>
                <dd>{company.hk.number}</dd>
              </div>
              <div>
                <dt>{labels.incorporated}</dt>
                <dd>{company.hk.incorporated}</dd>
              </div>
            </dl>
          </article>
          <article className="entity-block">
            <p className="section-kicker">{labels.gz}</p>
            <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight">{company.gz.name}</h3>
            <dl className="entity-meta">
              <div>
                <dt>{labels.creditCode}</dt>
                <dd>{company.gz.creditCode}</dd>
              </div>
              <div>
                <dt>{labels.legalRep}</dt>
                <dd>{company.gz.legalRep}</dd>
              </div>
              <div>
                <dt>{labels.incorporated}</dt>
                <dd>{company.gz.incorporated}</dd>
              </div>
              <div>
                <dt>{labels.address}</dt>
                <dd>{company.gz.address}</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  )
}

export function OfficeSection() {
  const { c } = useCopy()

  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionIntro kicker={c.sections.office.kicker} title={c.sections.office.title} description={c.sections.office.description} />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="border-l-2 border-[hsl(var(--copper))] pl-6">
            <div className="flex items-center gap-2 text-[hsl(var(--copper))]">
              <Home className="h-4 w-4" />
              <h3 className="font-display text-xl font-semibold text-foreground">{c.office.gzTitle}</h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{company.gz.address}</p>
            <p className="mt-4 text-sm font-medium leading-6 text-foreground/80">{c.office.gzNote}</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--steel))] pl-6">
            <div className="flex items-center gap-2 text-[hsl(var(--steel))]">
              <Globe2 className="h-4 w-4" />
              <h3 className="font-display text-xl font-semibold text-foreground">{c.office.hkTitle}</h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {company.hk.name} / {company.hk.zh}
            </p>
            <p className="mt-4 text-sm font-medium leading-6 text-foreground/80">{c.office.hkNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ComplianceSection() {
  const { c } = useCopy()

  return (
    <section className="section-padding border-t border-foreground/5 bg-[hsl(var(--paper))]">
      <div className="section-container">
        <SectionIntro kicker={c.sections.compliance.kicker} title={c.sections.compliance.title} description={c.sections.compliance.description} />
        <div className="grid gap-6 sm:grid-cols-3">
          <ComplianceLink title="Company Portal" value={urls.portal} href={urls.portal} />
          <ComplianceLink title="External Partner" value={urls.partner} href={urls.partner} />
          <ComplianceLink title="ICP Filing" value={compliance.icp} href={urls.miit} />
        </div>
        <div className="mt-12 border-t border-foreground/10 pt-8">
          <h3 className="font-display text-lg font-semibold">{c.sections.compliance.recordsTitle}</h3>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.sections.compliance.records.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{item.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function ComplianceLink({ title, value, href }: { title: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block border-t border-foreground/15 pt-5 transition hover:border-[hsl(var(--copper))]">
      <div className="flex items-start justify-between gap-3">
        <FileText className="h-4 w-4 text-[hsl(var(--copper))]" />
        <ArrowUpRight className="h-4 w-4 text-foreground/30 transition group-hover:text-[hsl(var(--copper))]" />
      </div>
      <h3 className="font-display mt-4 text-base font-semibold">{title}</h3>
      <p className="mt-2 break-all text-sm leading-6 text-muted-foreground">{value}</p>
    </a>
  )
}

export function ContactSection() {
  const { c } = useCopy()

  return (
    <section id="contact" className="contact-plane section-padding">
      <div className="section-container relative z-[1]">
        <SectionIntro kicker={c.sections.contact.kicker} title={c.sections.contact.title} description={c.sections.contact.description} tone="dark" />
        <div className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          {c.contact.channels.map((channel) => (
            <div key={channel.title}>
              <h3 className="font-display text-lg font-semibold text-white">{channel.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{channel.text}</p>
            </div>
          ))}
        </div>
        <a
          href={`mailto:${c.contact.business}`}
          className="mt-12 inline-flex items-center gap-3 border-b border-white/30 pb-2 font-display text-2xl font-semibold tracking-tight text-white transition hover:border-[hsl(18_72%_56%)] hover:text-[hsl(18_72%_70%)] sm:text-3xl"
        >
          <Mail className="h-6 w-6 shrink-0 opacity-70" />
          {c.contact.business}
        </a>
      </div>
    </section>
  )
}

export function FAQSection() {
  const { c } = useCopy()

  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionIntro kicker={c.sections.faq.kicker} title={c.sections.faq.title} description={c.sections.faq.description} />
        <div className="max-w-3xl">
          {c.faq.map((item) => (
            <div key={item.q} className="faq-item">
              <h3 className="font-display text-lg font-semibold tracking-tight">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function VLAClawSection() {
  const { lang } = useCopy()
  const cards = useMemo(
    () =>
      lang === 'zh'
        ? [
            { title: '具身智能研发', text: 'VLAClaw 作为机器人交互、ROS2 集成与具身智能体工作流的研究与演示项目保留。' },
            { title: 'OpenClaw / ROS2', text: '保留 OpenClaw、rosbridge、机器狗、传感器与技能编排相关技术材料作为档案。' },
            { title: '研究方向', text: '为具身智能体、机器人交互与边缘侧智能提供可验证的项目底座。' },
          ]
        : [
            { title: 'Embodied AI R&D', text: 'VLAClaw remains a research and demonstration project for robot interaction, ROS2 integration, and embodied agent workflows.' },
            { title: 'OpenClaw / ROS2', text: 'Keeps OpenClaw, rosbridge, robot dog, sensor, and skill orchestration material as a technical archive.' },
            { title: 'Research direction', text: 'A project base for testing embodied agents, robot interaction, and edge-side intelligence.' },
          ],
    [lang],
  )

  return (
    <section className="section-padding border-t border-foreground/5 bg-[hsl(var(--paper))]">
      <div className="section-container">
        <SectionIntro
          kicker="VLAClaw"
          title={lang === 'zh' ? '具身智能仍是技术项目入口。' : 'Embodied intelligence remains a project entrance.'}
          description={
            lang === 'zh'
              ? 'VLAClaw 作为 ISACAI 旗下的技术与演示项目保留；外部合作方服务单独呈现。'
              : 'VLAClaw is retained as a technology and demonstration project under ISACAI. Partner services are presented separately.'
          }
        />
        <div className="grid gap-10 md:grid-cols-3">
          {cards.map((card, index) => (
            <div key={card.title} className="border-t border-foreground/15 pt-6">
              <p className="font-display text-sm font-semibold text-[hsl(var(--copper))]">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-display mt-3 text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { c } = useCopy()

  return (
    <footer className="footer-shell">
      <div className="section-container">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex items-start gap-3">
            <BrandMark />
            <div>
              <p className="font-display font-bold tracking-tight">{c.footer.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.footer.subtitle}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.footer.softwareContact}</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {[
                  { label: 'isacai.cn', href: urls.portal },
                  { label: 'Partner', href: urls.partner },
                  { label: 'GitHub', href: urls.githubIsacai },
                ].map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="font-medium text-foreground/70 underline-offset-4 transition hover:text-[hsl(var(--copper))] hover:underline">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-sm leading-6 text-muted-foreground md:text-right">
            <p>{c.footer.copyright}</p>
            <a href={urls.miit} target="_blank" rel="noreferrer" className="mt-2 block transition hover:text-[hsl(var(--copper))]">
              {compliance.icp}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function PageContent() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <EntryPortalSection />
      <ProductSection />
      <InfrastructureSection />
      <CompanySection />
      <OfficeSection />
      <ComplianceSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  )
}
