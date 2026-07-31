'use client'

import Image from 'next/image'
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Globe2,
  Home,
  KeyRound,
  Mail,
  Menu,
  Network,
  PanelTop,
  Rocket,
  Route,
  ServerCog,
  ShieldCheck,
  SquareTerminal,
  Users,
  X,
  Zap,
} from 'lucide-react'
import { useMemo, useState } from 'react'

const urls = {
  portal: 'https://isacai.cn',
  api: 'https://api.isacai.cn',
  githubIsacai: 'https://github.com/chiellini/ISACAI',
  githubIsacapi: 'https://github.com/chiellini/ISACAPI',
  legacyHome: 'https://isacai.space/home',
  miit: 'https://beian.miit.gov.cn',
}

const compliance = {
  icp: '粤ICP备2026050877号',
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
      { label: 'ISACAPI', href: '/platform' },
      { label: '开发者', href: '/developers' },
      { label: '公司', href: '/company' },
      { label: '联系', href: '/contact' },
    ],
    navCta: '进入 API 平台',
    brandSubtitle: '公司门户',
    hero: {
      eyebrow: 'ISACAI 官方门户',
      title: 'ISACAI',
      subtitle:
        'ISACAI 是面向 AI API 基础设施、智能体服务和具身智能应用的公司门户。isacai.cn 承载公司信息与项目入口，api.isacai.cn 承载主产品 ISACAPI。',
      primary: '进入 ISACAPI',
      secondary: '查看 GitHub',
      tertiary: '联系团队',
      note: '门户定位：公司信息、产品入口、技术文档、办公室与合规备案集中展示。',
      metrics: [
        { value: 'ISACAPI', label: '主产品 / AI API 网关平台' },
        { value: 'api.isacai.cn', label: '生产服务入口' },
        { value: 'Go + Vue', label: '后端网关与管理控制台' },
        { value: 'HK + GZ', label: '香港主体与广州办公室' },
      ],
      map: [
        '公司门户 isacai.cn',
        '主产品 ISACAPI',
        'API 服务 api.isacai.cn',
        '开发文档与 GitHub',
        '公司信息与办公室',
      ],
    },
    sections: {
      portal: {
        eyebrow: 'Portal',
        title: '一个门户，连接公司、产品和开发者入口。',
        description:
          '首页不再作为单一产品介绍页，而是作为 ISACAI 的导航中枢。访客可以从这里进入 API 平台、开源仓库、公司信息、办公室地址和合作联系。',
      },
      product: {
        eyebrow: 'Main Product',
        title: 'ISACAPI 是 ISACAI 的主产品。',
        description:
          'ISACAPI 是面向 AI 产品订阅额度分发与管理的 API 网关平台。用户通过平台生成的 API Key 访问上游 AI 服务，平台负责鉴权、计费、负载均衡、请求转发、调度与用量治理。',
      },
      infrastructure: {
        eyebrow: 'Infrastructure',
        title: '从 API Key 到上游模型的统一运营层。',
        description:
          'ISACAPI 将账号池、模型别名、支付、限流、并发控制、用量记录和管理后台组织成一个可部署、可迁移、可运维的 AI 服务平台。',
      },
      company: {
        eyebrow: 'Company',
        title: '公司主体与办公室信息。',
        description:
          '门户站展示公开公司信息，方便客户、合作伙伴、开发者和服务商确认 ISACAI 的经营主体、办公室地址与联系入口。',
      },
      office: {
        eyebrow: 'Office',
        title: '办公室与访问安排。',
        description:
          '广州办公室负责大陆业务、产品交付与日常运营；香港主体承接公司注册、跨境合作与研发背景。商务拜访请提前邮件预约。',
      },
      developers: {
        eyebrow: 'Developers',
        title: '开发者从 api.isacai.cn 开始。',
        description:
          '开发者入口聚焦 ISACAPI 的 OpenAI-compatible API、Antigravity 接入、Docker 部署、系统服务安装、管理后台和模型别名配置。',
      },
      compliance: {
        eyebrow: 'Compliance',
        title: '域名、备案与合规展示。',
        description:
          'ISACAI 门户展示已取得的 ICP 备案号，并链接到工信部备案系统。后续如取得公安联网备案号，可在页脚继续补充。',
      },
      contact: {
        eyebrow: 'Contact',
        title: '联系 ISACAI。',
        description:
          '产品试用、私有部署、API 网关集成、企业合作和具身智能项目咨询，都可以从这里发起。',
      },
      faq: {
        eyebrow: 'FAQ',
        title: '常见问题。',
        description: '把门户站、主产品和部署边界说清楚。',
      },
    },
    portalCards: [
      {
        title: 'ISACAPI 服务平台',
        description: 'AI API 网关、Key 分发、用量计费、账号池调度和管理后台。',
        href: urls.api,
        label: 'api.isacai.cn',
      },
      {
        title: 'ISACAPI 开源仓库',
        description: '主产品源码、部署脚本、Docker Compose、支付与网关文档。',
        href: urls.githubIsacapi,
        label: 'GitHub / ISACAPI',
      },
      {
        title: 'ISACAI 公司门户',
        description: '公司介绍、办公室地址、联系入口、备案与项目导航。',
        href: '/',
        label: 'isacai.cn',
      },
      {
        title: 'VLAClaw 项目',
        description: '具身智能与机器人方向的研发项目，作为 ISACAI 技术项目入口保留。',
        href: '/solutions',
        label: 'Embodied AI',
      },
    ],
    productFeatures: [
      '多上游账号管理，支持 OAuth 与 API Key 类型',
      '平台生成 API Key，面向用户、团队和分组分发',
      'Token 级用量追踪、成本计算与余额管理',
      '智能账号选择、负载均衡和粘性会话',
      '用户级与账号级并发控制、RPM/TPM 限流',
      '内置 EasyPay、支付宝、微信支付、Stripe 支付能力',
      '管理后台监控用户、账号、用量、日志与系统状态',
      '支持外部系统 iframe 嵌入，扩展管理后台工作流',
    ],
    infrastructure: [
      {
        title: 'API Gateway',
        text: '兼容 OpenAI 风格接口，并提供 Responses、Chat Completions、Models 等常用路径。',
      },
      {
        title: 'Account Pool',
        text: '统一管理上游账号、分组、额度、可用性、失败重试和调度策略。',
      },
      {
        title: 'Billing & Quota',
        text: '围绕用户余额、订阅、用量记录和 token 价格表建立可审计的计费层。',
      },
      {
        title: 'Admin Console',
        text: 'Vue 管理后台覆盖账号、用户、支付、监控、公告、API Key 和运维配置。',
      },
    ],
    endpoints: [
      '/v1/responses',
      '/v1/chat/completions',
      '/v1/models',
      '/antigravity/v1/messages',
      '/antigravity/v1beta/',
    ],
    developerSteps: [
      '访问 api.isacai.cn 获取平台入口与 API Key。',
      '选择 OpenAI-compatible、Antigravity、Gemini 或其他可用通道。',
      '在业务服务里配置 Base URL 与平台生成的 API Key。',
      '通过管理后台查看用量、失败请求、余额、并发和服务状态。',
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
      product: 'chiellini.lee@gmail.com',
      channels: [
        { title: '产品试用', text: '申请 ISACAPI 账号、API Key、模型通道或私有部署评估。' },
        { title: '企业部署', text: '讨论账号池、支付、计费、日志、审计和内网部署方案。' },
        { title: '合作与办公室拜访', text: '商务合作、园区合作、研究合作或广州办公室访问预约。' },
      ],
    },
    faq: [
      {
        q: 'isacai.cn 和 api.isacai.cn 怎么分工？',
        a: 'isacai.cn 是公司门户，展示 ISACAI 的公司信息、产品入口、办公室地址和联系入口。api.isacai.cn 是 ISACAPI 主产品的服务平台。',
      },
      {
        q: 'VLAClaw 还保留吗？',
        a: '保留，但不再作为官网唯一主角。它会作为 ISACAI 在具身智能和机器人方向的研发项目入口出现。',
      },
      {
        q: '备案号为什么显示待补充？',
        a: '我没有在公开检索和本地材料里确认到正式 ICP 编号，所以先预留位置。拿到工信部备案号后，应替换为真实编号并链接备案系统。',
      },
    ],
    footer: {
      title: 'ISACAI',
      subtitle: 'AI API infrastructure and embodied intelligence portal',
      builtOn: '网站入口',
      softwareContact: '软件开发交流联系方式：1027890648',
      copyright: '© 2026 ISACAI. All rights reserved.',
    },
  },
  en: {
    langLabel: '中文',
    nav: [
      { label: 'Portal', href: '/' },
      { label: 'ISACAPI', href: '/platform' },
      { label: 'Developers', href: '/developers' },
      { label: 'Company', href: '/company' },
      { label: 'Contact', href: '/contact' },
    ],
    navCta: 'Open API Platform',
    brandSubtitle: 'Company Portal',
    hero: {
      eyebrow: 'Official ISACAI Portal',
      title: 'ISACAI',
      subtitle:
        'ISACAI is the company portal for AI API infrastructure, agent services, and embodied intelligence projects. isacai.cn hosts the company portal, while api.isacai.cn hosts the main product: ISACAPI.',
      primary: 'Open ISACAPI',
      secondary: 'View GitHub',
      tertiary: 'Contact Team',
      note: 'Portal role: company information, product entrances, developer resources, office addresses, and compliance information in one place.',
      metrics: [
        { value: 'ISACAPI', label: 'Main product / AI API gateway platform' },
        { value: 'api.isacai.cn', label: 'Production service entrance' },
        { value: 'Go + Vue', label: 'Gateway backend and admin console' },
        { value: 'HK + GZ', label: 'Hong Kong entity and Guangzhou office' },
      ],
      map: ['Company portal isacai.cn', 'Main product ISACAPI', 'API service api.isacai.cn', 'Docs and GitHub', 'Company and office'],
    },
    sections: {
      portal: {
        eyebrow: 'Portal',
        title: 'One portal for the company, products, and developers.',
        description:
          'The homepage is now an ISACAI navigation hub instead of a single product landing page. Visitors can enter the API platform, open-source repositories, company profile, office information, and contact routes.',
      },
      product: {
        eyebrow: 'Main Product',
        title: 'ISACAPI is the main product of ISACAI.',
        description:
          'ISACAPI is an AI API gateway platform for distributing and managing subscription quotas. Users call upstream AI services with platform-generated API Keys, while ISACAPI handles authentication, billing, load balancing, forwarding, scheduling, and usage governance.',
      },
      infrastructure: {
        eyebrow: 'Infrastructure',
        title: 'A unified operations layer from API Keys to upstream models.',
        description:
          'ISACAPI brings account pools, model aliases, payments, rate limits, concurrency controls, usage records, and an admin console into one deployable AI service platform.',
      },
      company: {
        eyebrow: 'Company',
        title: 'Company entities and office information.',
        description:
          'The portal shows public company information so customers, partners, developers, and service providers can verify the operating entities, office addresses, and contact points.',
      },
      office: {
        eyebrow: 'Office',
        title: 'Office and visit arrangements.',
        description:
          'The Guangzhou office supports mainland operations, product delivery, and daily execution. The Hong Kong entity supports registration, cross-border collaboration, and research background. Visits are by email appointment.',
      },
      developers: {
        eyebrow: 'Developers',
        title: 'Developers start from api.isacai.cn.',
        description:
          'The developer entrance focuses on ISACAPI OpenAI-compatible APIs, Antigravity integration, Docker deployment, systemd installation, admin console, and model alias configuration.',
      },
      compliance: {
        eyebrow: 'Compliance',
        title: 'Domains, ICP, and compliance display.',
        description:
          'The ISACAI portal displays the approved ICP filing number and links it to the MIIT filing system. A public security filing number can be added later if approved.',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Contact ISACAI.',
        description:
          'Start here for product trials, private deployment, API gateway integration, enterprise cooperation, and embodied intelligence project inquiries.',
      },
      faq: {
        eyebrow: 'FAQ',
        title: 'Common questions.',
        description: 'Clear boundaries for the portal, main product, and deployment routes.',
      },
    },
    portalCards: [
      {
        title: 'ISACAPI Service Platform',
        description: 'AI API gateway, key distribution, usage billing, account scheduling, and admin console.',
        href: urls.api,
        label: 'api.isacai.cn',
      },
      {
        title: 'ISACAPI Repository',
        description: 'Main product source code, deployment scripts, Docker Compose, payment docs, and gateway docs.',
        href: urls.githubIsacapi,
        label: 'GitHub / ISACAPI',
      },
      {
        title: 'ISACAI Company Portal',
        description: 'Company profile, office addresses, contact entry, compliance display, and project navigation.',
        href: '/',
        label: 'isacai.cn',
      },
      {
        title: 'VLAClaw Project',
        description: 'Embodied intelligence and robotics R&D project retained as a technology entrance under ISACAI.',
        href: '/solutions',
        label: 'Embodied AI',
      },
    ],
    productFeatures: [
      'Multi-account management for OAuth and API Key upstreams',
      'Platform-generated API Keys for users, teams, and groups',
      'Token-level usage tracking, cost calculation, and balance management',
      'Smart account selection, load balancing, and sticky sessions',
      'Per-user and per-account concurrency, RPM, and TPM controls',
      'Built-in EasyPay, Alipay, WeChat Pay, and Stripe support',
      'Admin console for users, accounts, usage, logs, and system status',
      'External system embedding through iframe for admin workflows',
    ],
    infrastructure: [
      {
        title: 'API Gateway',
        text: 'OpenAI-style compatibility with common routes including Responses, Chat Completions, and Models.',
      },
      {
        title: 'Account Pool',
        text: 'Centralized upstream accounts, groups, quotas, availability, retries, and scheduling policies.',
      },
      {
        title: 'Billing & Quota',
        text: 'Auditable billing around user balances, subscriptions, usage records, and token price tables.',
      },
      {
        title: 'Admin Console',
        text: 'Vue console for accounts, users, payments, monitoring, announcements, API Keys, and operations settings.',
      },
    ],
    endpoints: ['/v1/responses', '/v1/chat/completions', '/v1/models', '/antigravity/v1/messages', '/antigravity/v1beta/'],
    developerSteps: [
      'Visit api.isacai.cn for the platform entrance and API Keys.',
      'Choose OpenAI-compatible, Antigravity, Gemini, or another available channel.',
      'Configure your service with the Base URL and platform-generated API Key.',
      'Use the admin console to inspect usage, failed requests, balance, concurrency, and service status.',
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
      product: 'chiellini.lee@gmail.com',
      channels: [
        { title: 'Product trial', text: 'Request an ISACAPI account, API Key, model channel, or private deployment review.' },
        { title: 'Enterprise deployment', text: 'Discuss account pools, payment, billing, logs, audit, and internal deployment plans.' },
        { title: 'Partnership and visits', text: 'Book business cooperation, park collaboration, research projects, or Guangzhou office visits.' },
      ],
    },
    faq: [
      {
        q: 'How do isacai.cn and api.isacai.cn differ?',
        a: 'isacai.cn is the company portal for ISACAI. api.isacai.cn is the service platform for the main product, ISACAPI.',
      },
      {
        q: 'Is VLAClaw still part of the site?',
        a: 'Yes. It is retained as an embodied intelligence and robotics R&D project, but no longer the only homepage focus.',
      },
      {
        q: 'Why are filing numbers marked as pending?',
        a: 'No official ICP number was confirmed from public search or local materials, so the field is reserved. Replace it with the approved MIIT filing number before production release.',
      },
    ],
    footer: {
      title: 'ISACAI',
      subtitle: 'AI API infrastructure and embodied intelligence portal',
      builtOn: 'Site entrances',
      softwareContact: 'Software development contact: 1027890648',
      copyright:
        '© 2026 ISACAI. All rights reserved.',
    },
  },
} satisfies Record<Lang, Record<string, unknown>>

function useCopy() {
  const { language, toggleLanguage } = useLanguage()
  const lang = (language === 'zh' ? 'zh' : 'en') as Lang
  return { lang, c: copy[lang], toggleLanguage }
}

function SectionHeader({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'center',
}: {
  eyebrow: string
  title: string
  description: string
  tone?: 'light' | 'dark'
  align?: 'center' | 'left'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto mb-10 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
      <span className={tone === 'dark' ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>
      <h2 className={`mt-4 text-3xl font-semibold tracking-normal sm:text-4xl ${tone === 'dark' ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${tone === 'dark' ? 'text-slate-300' : 'text-muted-foreground'}`}>{description}</p>
    </div>
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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/92 text-slate-950 backdrop-blur-xl">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between gap-3">
          <button onClick={() => go('/')} className="flex items-center gap-3 text-left">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image src="/isac icon.png" alt="ISACAI icon" fill sizes="40px" className="object-cover" />
            </span>
            <span>
              <span className="block text-sm font-semibold leading-tight">ISACAI</span>
              <span className="block text-xs text-muted-foreground">{c.brandSubtitle}</span>
            </span>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {c.nav.map((item) => (
              <button key={item.href} onClick={() => go(item.href)} className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              aria-label="Switch language"
            >
              <Globe2 className="h-4 w-4 text-cyan-700" />
              <span>{c.langLabel}</span>
            </button>
            <a
              href={urls.api}
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-9 items-center justify-center rounded-md bg-slate-950 px-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:inline-flex"
            >
              {c.navCta}
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white lg:hidden"
              aria-label="Open menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section-container grid gap-2 py-4 sm:grid-cols-2">
            {c.nav.map((item) => (
              <button key={item.href} onClick={() => go(item.href)} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-700">
                {item.label}
              </button>
            ))}
            <a href={urls.api} target="_blank" rel="noreferrer" className="rounded-md border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-800">
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
    <section id="home" className="overflow-hidden bg-white pt-16">
      <div className="section-container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div>
          <span className="eyebrow">{c.hero.eyebrow}</span>
          <h1 className="mt-5 text-5xl font-semibold tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">{c.hero.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">{c.hero.subtitle}</p>
          <div className="mt-6 max-w-2xl rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-6 text-emerald-900">
            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <span>{c.hero.note}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={urls.api} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              {c.hero.primary}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a href={urls.githubIsacapi} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
              {c.hero.secondary}
              <Code2 className="ml-2 h-4 w-4" />
            </a>
            <a href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-md border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-100">
              {c.hero.tertiary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {c.hero.metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <strong className="block text-lg font-semibold text-slate-950">{metric.value}</strong>
                <span className="mt-1 block text-xs leading-5 text-slate-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-cyan-200" aria-hidden="true" />
          <div className="rounded-lg border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-lg bg-white">
                  <Image src="/isac icon.png" alt="ISACAI logo" fill sizes="44px" className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">ISACAI Portal</p>
                  <p className="text-xs text-slate-400">{urls.portal}</p>
                </div>
              </div>
              <BadgeCheck className="h-6 w-6 text-emerald-300" />
            </div>

            <div className="mt-5 grid gap-3">
              {c.hero.map.map((node, index) => (
                <div key={node} className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 rounded-md border border-white/10 bg-white/5 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-cyan-300 text-sm font-bold text-slate-950">{index + 1}</span>
                  <span className="text-sm font-medium text-slate-100">{node}</span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-md border border-amber-300/20 bg-amber-300/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Main Product</p>
              <p className="mt-2 text-xl font-semibold">ISACAPI</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">AI API Gateway Platform for Subscription Quota Distribution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EntryPortalSection() {
  const { c } = useCopy()
  const icons = [SquareTerminal, Code2, Home, Bot]

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow={c.sections.portal.eyebrow} title={c.sections.portal.title} description={c.sections.portal.description} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {c.portalCards.map((card, index) => {
            const Icon = icons[index]
            const external = card.href.startsWith('http')
            return (
              <a key={card.title} href={card.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="entry-card">
                <Icon className="h-7 w-7 text-cyan-700" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-700">
                  {card.label}
                  {external ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                </span>
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
  const icons = [KeyRound, Users, Database, Route, ShieldCheck, BadgeCheck, PanelTop, Network]

  return (
    <section id="product" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={c.sections.product.eyebrow} title={c.sections.product.title} description={c.sections.product.description} />
        <div className="mb-8 rounded-lg border border-cyan-200 bg-cyan-50 p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <SquareTerminal className="h-7 w-7 text-cyan-700" />
                <h3 className="text-xl font-semibold text-cyan-950">api.isacai.cn</h3>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-cyan-900/75">{urls.api}</p>
            </div>
            <a href={urls.api} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-slate-800">
              Open ISACAPI
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {c.productFeatures.map((feature, index) => {
            const Icon = icons[index]
            return (
              <div key={feature} className="rounded-lg border border-border bg-white p-5 shadow-sm">
                <Icon className="h-6 w-6 text-cyan-700" />
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{feature}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function InfrastructureSection() {
  const { c } = useCopy()
  const icons = [ServerCog, Network, Database, PanelTop]

  return (
    <section className="section-padding bg-slate-950 text-white">
      <div className="section-container">
        <SectionHeader eyebrow={c.sections.infrastructure.eyebrow} title={c.sections.infrastructure.title} description={c.sections.infrastructure.description} tone="dark" />
        <div className="grid gap-5 lg:grid-cols-4">
          {c.infrastructure.map((item, index) => {
            const Icon = icons[index]
            return (
              <div key={item.title} className="work-card">
                <Icon className="h-7 w-7 text-cyan-200" />
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold text-cyan-100">Common endpoints</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {c.endpoints.map((endpoint) => (
              <span key={endpoint} className="rounded-md border border-white/10 bg-white/10 px-3 py-2 font-mono text-xs text-slate-200">
                {endpoint}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function DeveloperSection() {
  const { c } = useCopy()

  return (
    <section id="developers" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={c.sections.developers.eyebrow} title={c.sections.developers.title} description={c.sections.developers.description} />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <BookOpen className="h-7 w-7 text-cyan-700" />
            <h3 className="mt-5 text-xl font-semibold">Developer route</h3>
            <div className="mt-5 space-y-3">
              {c.developerSteps.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-950 text-xs font-semibold text-cyan-200">{index + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="code-panel">
            <div className="code-panel-header">
              <span>OpenAI-compatible example</span>
              <SquareTerminal className="h-4 w-4 text-cyan-300" />
            </div>
            <pre className="overflow-x-auto whitespace-pre p-4 text-xs leading-6 text-slate-100 sm:text-sm">{`curl ${urls.api}/v1/chat/completions \\
  -H "Authorization: Bearer sk-..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "isac-gpt-fast",
    "messages": [{"role": "user", "content": "Hello ISACAPI"}]
  }'`}</pre>
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
    <section id="company" className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow={c.sections.company.eyebrow} title={c.sections.company.title} description={c.sections.company.description} />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <Building2 className="h-7 w-7 text-cyan-700" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">{labels.hk}</p>
            <h3 className="mt-3 text-2xl font-semibold">{company.hk.name}</h3>
            <p className="mt-1 text-lg text-muted-foreground">{company.hk.zh}</p>
            <InfoRows
              rows={[
                [labels.companyNo, company.hk.number],
                [labels.incorporated, company.hk.incorporated],
              ]}
            />
          </div>
          <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <Building2 className="h-7 w-7 text-emerald-700" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">{labels.gz}</p>
            <h3 className="mt-3 text-2xl font-semibold">{company.gz.name}</h3>
            <InfoRows
              rows={[
                [labels.creditCode, company.gz.creditCode],
                [labels.legalRep, company.gz.legalRep],
                [labels.incorporated, company.gz.incorporated],
                [labels.address, company.gz.address],
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRows({ rows }: { rows: string[][] }) {
  return (
    <div className="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-200">
      {rows.map(([label, value]) => (
        <div key={label} className="grid gap-1 p-3 text-sm sm:grid-cols-[10rem_1fr]">
          <span className="font-medium text-slate-500">{label}</span>
          <span className="font-medium leading-6 text-slate-800">{value}</span>
        </div>
      ))}
    </div>
  )
}

export function OfficeSection() {
  const { c } = useCopy()

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={c.sections.office.eyebrow} title={c.sections.office.title} description={c.sections.office.description} />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <Home className="h-7 w-7 text-cyan-700" />
            <h3 className="mt-5 text-xl font-semibold">Guangzhou Office</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{company.gz.address}</p>
            <p className="mt-4 rounded-md bg-cyan-50 p-3 text-sm font-medium text-cyan-900">Mainland operations, product delivery, customer onboarding, and deployment coordination.</p>
          </div>
          <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <Globe2 className="h-7 w-7 text-emerald-700" />
            <h3 className="mt-5 text-xl font-semibold">Hong Kong Entity</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{company.hk.name} / {company.hk.zh}</p>
            <p className="mt-4 rounded-md bg-emerald-50 p-3 text-sm font-medium text-emerald-900">Company registration, research network, cross-border collaboration, and corporate administration.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ComplianceSection() {
  const { c } = useCopy()

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow={c.sections.compliance.eyebrow} title={c.sections.compliance.title} description={c.sections.compliance.description} />
        <div className="grid gap-5 md:grid-cols-3">
          <ComplianceCard title="Company Portal" value={urls.portal} href={urls.portal} />
          <ComplianceCard title="ISACAPI Platform" value={urls.api} href={urls.api} />
          <ComplianceCard title="ICP Filing" value={compliance.icp} href={urls.miit} />
        </div>
      </div>
    </section>
  )
}

function ComplianceCard({ title, value, href }: { title: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-white p-5 shadow-sm transition hover:border-cyan-300 hover:shadow-md">
      <FileText className="h-6 w-6 text-cyan-700" />
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">{value}</p>
    </a>
  )
}

export function ContactSection() {
  const { c } = useCopy()

  return (
    <section id="contact" className="section-padding bg-slate-950 text-white">
      <div className="section-container">
        <SectionHeader eyebrow={c.sections.contact.eyebrow} title={c.sections.contact.title} description={c.sections.contact.description} tone="dark" />
        <div className="grid gap-5 lg:grid-cols-3">
          {c.contact.channels.map((channel) => (
            <div key={channel.title} className="contact-card">
              <Mail className="h-7 w-7 text-cyan-200" />
              <h3 className="mt-5 text-xl font-semibold text-white">{channel.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{channel.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <a href={`mailto:${c.contact.business}`} className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <p className="text-sm text-slate-400">Business email</p>
            <p className="mt-2 text-xl font-semibold text-white">{c.contact.business}</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export function FAQSection() {
  const { c } = useCopy()

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={c.sections.faq.eyebrow} title={c.sections.faq.title} description={c.sections.faq.description} />
        <div className="mx-auto grid max-w-5xl gap-4">
          {c.faq.map((item) => (
            <div key={item.q} className="faq-card">
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function VLAClawSection() {
  const cards = useMemo(
    () => [
      { title: 'Embodied AI R&D', text: 'VLAClaw remains a research and demonstration project for robot interaction, ROS2 integration, and embodied agent workflows.' },
      { title: 'OpenClaw / ROS2', text: 'The project keeps the OpenClaw, rosbridge, robot dog, sensor, and skill orchestration material as a technical archive.' },
      { title: 'Not the portal focus', text: 'The public homepage now routes visitors to company and ISACAPI product entrances first.' },
    ],
    [],
  )

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow="VLAClaw" title="Embodied intelligence remains a project entrance." description="VLAClaw is retained as a technology and demonstration project under ISACAI, while ISACAPI becomes the main product entry." />
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-lg border border-border bg-white p-5 shadow-sm">
              <Bot className="h-6 w-6 text-cyan-700" />
              <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
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
    <footer className="border-t border-border bg-white py-10">
      <div className="section-container">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
          <div className="flex items-start gap-3">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-slate-200">
              <Image src="/isac icon.png" alt="ISACAI icon" fill sizes="40px" className="object-cover" />
            </span>
            <div>
              <p className="font-semibold">{c.footer.title}</p>
              <p className="text-sm text-muted-foreground">{c.footer.subtitle}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.footer.softwareContact}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: 'isacai.cn', href: urls.portal },
                  { label: 'api.isacai.cn', href: urls.api },
                  { label: 'GitHub', href: urls.githubIsacapi },
                  { label: 'isacai.space/home', href: urls.legacyHome },
                ].map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="tech-chip">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-sm leading-6 text-muted-foreground md:text-right">
            <p>{c.footer.copyright}</p>
            <a href={urls.miit} target="_blank" rel="noreferrer" className="mt-2 block hover:text-cyan-700">
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
