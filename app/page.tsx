'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider'
import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BookOpen,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Camera,
  Check,
  Code2,
  Cpu,
  DatabaseZap,
  ExternalLink,
  FileCode2,
  Gauge,
  Globe2,
  GraduationCap,
  Handshake,
  Layers3,
  Mail,
  Menu,
  Mic2,
  Network,
  PanelTop,
  RadioTower,
  RefreshCcw,
  Rocket,
  Route,
  ScanLine,
  ShieldCheck,
  SquareTerminal,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'

function scrollToSection(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
      aria-label="Switch language"
    >
      <Globe2 className="h-4 w-4 text-cyan-200" />
      <span>{language === 'en' ? '中文' : 'EN'}</span>
    </button>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: {
  eyebrow: string
  title: string
  description: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-foreground'
  const descriptionClass = tone === 'dark' ? 'text-slate-300' : 'text-muted-foreground'

  return (
    <div className={align === 'center' ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
      <span className={tone === 'dark' ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>
      <h2 className={`mt-4 text-3xl font-semibold tracking-normal sm:text-4xl ${titleClass}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionClass}`}>{description}</p>
    </div>
  )
}

function CodeBlock({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div className="code-panel">
      <div className="code-panel-header">
        <span>{label}</span>
        <SquareTerminal className="h-4 w-4 text-cyan-300" />
      </div>
      <pre className="overflow-x-auto whitespace-pre rounded-b-lg p-4 text-xs leading-6 text-slate-100 sm:text-sm">
        {lines.join('\n')}
      </pre>
    </div>
  )
}

export function Navigation() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: t.nav.product, href: '/platform' },
    { label: t.nav.developers, href: '/developers' },
    { label: t.nav.useCases, href: '/solutions' },
    { label: t.nav.team, href: '/company' },
    { label: t.nav.contact, href: '/contact' },
  ]

  const jump = (href: string) => {
    setOpen(false)
    window.location.href = href
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur-xl">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between gap-3">
          <button onClick={() => jump('/')} className="flex items-center gap-3 text-left">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-300 text-slate-950">
              <Bot className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold leading-tight">ISACAI</span>
              <span className="block text-xs text-slate-400">VLAClaw</span>
            </span>
          </button>

          <div className="hidden items-center gap-4 xl:flex">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => jump(item.href)} className="nav-link-dark">
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="http://isacai.space"
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-9 items-center justify-center rounded-md border border-white/20 bg-white/10 px-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 lg:inline-flex"
            >
              {t.nav.apiPortal}
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </a>
            <Button
              size="sm"
              className="hidden bg-cyan-300 text-slate-950 hover:bg-cyan-200 sm:inline-flex"
              onClick={() => jump('/contact')}
            >
              {t.nav.getStarted}
            </Button>
            <button
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/10 xl:hidden"
              aria-label={t.nav.menu}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 xl:hidden">
          <div className="section-container grid gap-2 py-4 sm:grid-cols-2">
            {navItems.map((item) => (
            <button key={item.href} onClick={() => jump(item.href)} className="mobile-nav-item">
              {item.label}
            </button>
          ))}
            <a href="http://isacai.space" target="_blank" rel="noreferrer" className="mobile-nav-item text-cyan-200">
              {t.nav.apiPortal}
            </a>
            <button onClick={() => jump('/contact')} className="mobile-nav-item text-cyan-200">
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

function HeroMap() {
  const { t } = useLanguage()

  return (
    <div className="hero-map" aria-label="VLAClaw system architecture">
      <div className="hero-map-grid" />
      <div className="relative z-10 space-y-2">
        {t.hero.flow.map((node, index) => (
          <div key={node} className="flex flex-col items-center">
            <div className={`flow-node ${index === 2 ? 'flow-node-active' : ''}`}>
              <span className="flow-index">{index + 1}</span>
              <span>{node}</span>
            </div>
            {index < t.hero.flow.length - 1 && <ArrowDown className="my-0.5 h-4 w-4 text-cyan-200/70" />}
          </div>
        ))}
      </div>
    </div>
  )
}

function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="hero-shell pt-16 text-white">
      <div className="section-container relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <span className="eyebrow-dark">{t.hero.eyebrow}</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{t.hero.subtitle}</p>
          <div className="mt-6 inline-flex max-w-2xl items-start gap-3 rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm font-medium leading-6 text-emerald-100">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200" />
            <span>{t.hero.coreLine}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="bg-cyan-300 text-slate-950 hover:bg-cyan-200" onClick={() => (window.location.href = '/platform')}>
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              onClick={() => (window.location.href = '/developers')}
            >
              {t.hero.ctaSecondary}
              <FileCode2 className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="text-slate-200 hover:bg-white/10 hover:text-white"
              onClick={() => (window.location.href = '/contact')}
            >
              {t.hero.ctaTertiary}
            </Button>
            <a
              href="http://isacai.space"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
            >
              {t.hero.ctaApiPortal}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {t.hero.tags.map((tag) => (
              <span key={tag} className="tech-chip-dark">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {t.hero.metrics.map((metric) => (
              <div key={metric.label} className="metric-tile">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <HeroMap />
      </div>
    </section>
  )
}

function EntryPortalSection() {
  const { t } = useLanguage()
  const icons = [Layers3, SquareTerminal, BriefcaseBusiness, Users, Mail]

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.entries.eyebrow} title={t.entries.title} description={t.entries.description} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {t.entries.cards.map((entry, index) => {
            const Icon = icons[index]
            return (
              <a key={entry.href} href={entry.href} className="entry-card">
                <Icon className="h-7 w-7 text-cyan-700" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">{entry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{entry.description}</p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-700">
                  {entry.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ProblemSection() {
  const { t } = useLanguage()
  const icons = [PanelTop, Network, ShieldCheck, RefreshCcw]

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.problem.eyebrow} title={t.problem.title} description={t.problem.description} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.problem.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <Card key={card.title} className="company-card">
                <CardHeader>
                  <Icon className="h-7 w-7 text-cyan-600" />
                  <CardTitle className="text-lg leading-6">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ProductInsightSection() {
  const { t } = useLanguage()

  return (
    <section id="product" className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow={t.insight.eyebrow} title={t.insight.title} description={t.insight.description} />
        <div className="grid gap-6 lg:grid-cols-2">
          {[t.insight.traditional, t.insight.vlaclaw].map((column, columnIndex) => (
            <div key={column.title} className={columnIndex === 0 ? 'compare-panel' : 'compare-panel compare-panel-primary'}>
              <h3 className="text-xl font-semibold">{column.title}</h3>
              <div className="mt-6 grid gap-3">
                {column.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-border bg-white p-3 text-sm">
                    {columnIndex === 0 ? (
                      <span className="h-2 w-2 rounded-full bg-slate-400" />
                    ) : (
                      <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                    )}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ValidationSection() {
  const { t } = useLanguage()
  const icons = [Network, Layers3, ShieldCheck, Rocket]

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.validation.eyebrow} title={t.validation.title} description={t.validation.description} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.validation.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <Card key={card.title} className="company-card">
                <CardHeader>
                  <Icon className="h-7 w-7 text-cyan-600" />
                  <CardTitle className="text-lg leading-6">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-6">
                  <p><span className="font-semibold text-foreground">{t.validation.labels.goal}: </span><span className="text-muted-foreground">{card.promise}</span></p>
                  <p><span className="font-semibold text-foreground">{t.validation.labels.evidence}: </span><span className="text-muted-foreground">{card.evidence}</span></p>
                  <p><span className="font-semibold text-cyan-700">{t.validation.labels.next}: </span><span className="text-muted-foreground">{card.next}</span></p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function WorkProofSection() {
  const { t } = useLanguage()
  const icons = [PanelTop, SquareTerminal, FileCode2, RadioTower, Rocket, BookOpen]

  return (
    <section className="section-padding bg-slate-950 text-white">
      <div className="section-container">
        <SectionHeader eyebrow={t.workProof.eyebrow} title={t.workProof.title} description={t.workProof.description} tone="dark" />

        <div className="mb-8 rounded-lg border border-cyan-200/20 bg-cyan-200/10 p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <SquareTerminal className="h-7 w-7 text-cyan-200" />
                <h3 className="text-xl font-semibold text-white">{t.workProof.portal.title}</h3>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">{t.workProof.portal.description}</p>
              <p className="mt-3 font-mono text-sm text-cyan-100">{t.workProof.portal.url}</p>
            </div>
            <a
              href={t.workProof.portal.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              {t.workProof.portal.cta}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.workProof.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <div key={card.title} className="work-card">
                <Icon className="h-7 w-7 text-cyan-200" />
                <h3 className="mt-5 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">{card.status}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{card.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SolutionSection() {
  const { t } = useLanguage()
  const icons = [ScanLine, BrainCircuit, Route]

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.solution.eyebrow} title={t.solution.title} description={t.solution.description} />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {t.solution.loop.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span className="loop-step">{step}</span>
              {index < t.solution.loop.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {t.solution.pillars.map((pillar, index) => {
            const Icon = icons[index]
            return (
              <Card key={pillar.title} className="company-card">
                <CardHeader>
                  <Icon className="h-7 w-7 text-cyan-600" />
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-5 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.items.map((item) => (
                      <span key={item} className="tech-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function WorkflowSection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow={t.workflow.eyebrow} title={t.workflow.title} description={t.workflow.description} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.workflow.steps.map((step, index) => (
            <div key={step.title} className="workflow-card">
              <div className="workflow-number">{index + 1}</div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
              <div className="mt-5 rounded-md border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-medium text-cyan-800">
                {step.artifact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CompatibilitySection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.compatibility.eyebrow} title={t.compatibility.title} description={t.compatibility.description} />
        <div className="grid gap-5 lg:grid-cols-3">
          {t.compatibility.groups.map((group) => (
            <Card key={group.name} className="company-card">
              <CardHeader>
                <CardTitle>{group.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.label} className="compat-row">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold text-foreground">{item.label}</h4>
                      <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">{item.status}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ArchitectureSection() {
  const { t } = useLanguage()
  const icons = [Mic2, BrainCircuit, RadioTower, Bot]

  return (
    <section id="architecture" className="section-padding bg-slate-950 text-white">
      <div className="section-container">
        <SectionHeader eyebrow={t.architecture.eyebrow} title={t.architecture.title} description={t.architecture.description} tone="dark" />

        <div className="mb-8 rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm leading-6 text-emerald-100">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200" />
            <span>{t.architecture.note}</span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {t.architecture.layers.map((layer, index) => {
            const Icon = icons[index]
            return (
              <div key={layer.title} className="architecture-layer">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-cyan-300/15 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{layer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{layer.description}</p>
                <div className="mt-5 space-y-2">
                  {layer.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {[t.architecture.observation, t.architecture.command].map((flow) => (
            <div key={flow.title} className="data-flow-panel">
              <h3 className="text-base font-semibold text-cyan-100">{flow.title}</h3>
              <div className="mt-4 space-y-3">
                {flow.lines.map((line) => (
                  <div key={line} className="rounded-md border border-white/10 bg-white/5 p-3 font-mono text-xs leading-5 text-slate-200 sm:text-sm">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PhilosophySection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.philosophy.eyebrow} title={t.philosophy.title} description={t.philosophy.description} />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="risk-panel">
            <h3>{t.philosophy.direct.title}</h3>
            <div className="mt-5 space-y-3">
              {t.philosophy.direct.items.map((item) => (
                <div key={item} className="risk-row">
                  <X className="h-4 w-4 shrink-0 text-rose-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="safe-panel">
            <h3>{t.philosophy.skill.title}</h3>
            <div className="mt-5 space-y-3">
              {t.philosophy.skill.items.map((item) => (
                <div key={item} className="safe-row">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow={t.skills.eyebrow} title={t.skills.title} description={t.skills.description} />
        <div className="grid gap-5 lg:grid-cols-4">
          {t.skills.categories.map((category) => (
            <Card key={category.name} className="company-card">
              <CardHeader>
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="font-mono text-sm font-semibold text-cyan-700">{skill.name}</div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{skill.detail}</p>
                    <p className="mt-2 text-xs font-medium text-emerald-700">{skill.safety}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <CodeBlock label={t.skills.yamlTitle} lines={t.skills.yamlLines} />
          <CodeBlock label={t.skills.planTitle} lines={t.skills.planLines} />
        </div>
      </div>
    </section>
  )
}

export function DeveloperSection() {
  const { t } = useLanguage()

  return (
    <section id="developers" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.developer.eyebrow} title={t.developer.title} description={t.developer.description} />

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <div className="w-full rounded-lg border border-cyan-200 bg-cyan-50 p-5 lg:max-w-4xl">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-lg font-semibold text-cyan-950">{t.developer.portal.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cyan-900/75">{t.developer.portal.description}</p>
                <p className="mt-2 font-mono text-sm text-cyan-800">{t.developer.portal.url}</p>
              </div>
              <a
                href={t.developer.portal.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-slate-800"
              >
                {t.developer.portal.cta}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-md border border-cyan-300/40 bg-cyan-50 px-3 py-2 font-mono text-sm text-cyan-800">
            {t.developer.endpointLabel}: {t.developer.endpoint}
          </span>
          <span className="rounded-md border border-amber-300/40 bg-amber-50 px-3 py-2 text-sm text-amber-900">
            {t.developer.note}
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {t.developer.snippets.map((snippet) => (
            <CodeBlock key={snippet.title} label={snippet.title} lines={snippet.lines} />
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <CodeBlock label={t.developer.pythonTitle} lines={t.developer.pythonLines} />
          <div className="developer-cta">
            <Code2 className="h-8 w-8 text-cyan-600" />
            <div className="mt-6 grid gap-3">
              {t.developer.ctas.map((cta) => (
                <Button key={cta} variant="outline" className="h-auto min-h-11 justify-between whitespace-normal text-left">
                  {cta}
                  <ExternalLink className="ml-3 h-4 w-4 shrink-0" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function DemoSection() {
  const { t } = useLanguage()

  return (
    <section id="demos" className="section-padding bg-slate-950 text-white">
      <div className="section-container">
        <SectionHeader eyebrow={t.demos.eyebrow} title={t.demos.title} description={t.demos.description} tone="dark" />
        <div className="grid gap-5 md:grid-cols-2">
          {t.demos.cards.map((demo) => (
            <div key={demo.title} className="demo-card">
              <h3 className="text-xl font-semibold text-white">{demo.title}</h3>
              <div className="mt-5 space-y-3">
                <DemoLine label="Input" value={demo.input} />
                <DemoLine label="Reasoning" value={demo.reasoning} />
                <DemoLine label="Skills" value={demo.skills} />
                <DemoLine label="Result" value={demo.result} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DemoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/5 p-3">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{label}</div>
      <div className="mt-2 text-sm leading-6 text-slate-200">{value}</div>
    </div>
  )
}

export function ProductModulesSection() {
  const { t } = useLanguage()
  const icons = [Cpu, Network, Camera, DatabaseZap, FileCode2, Gauge]

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.modules.eyebrow} title={t.modules.title} description={t.modules.description} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {t.modules.cards.map((module, index) => {
            const Icon = icons[index]
            return (
              <Card key={module.title} className="company-card">
                <CardHeader>
                  <Icon className="h-7 w-7 text-cyan-600" />
                  <CardTitle>{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{module.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {module.tags.map((tag) => (
                      <span key={tag} className="tech-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function UseCasesSection() {
  const { t } = useLanguage()
  const icons: LucideIcon[] = [GraduationCap, BrainCircuit, Handshake, Route, BriefcaseBusiness, SquareTerminal]

  return (
    <section id="use-cases" className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow={t.useCases.eyebrow} title={t.useCases.title} description={t.useCases.description} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.useCases.cards.map((useCase, index) => {
            const Icon = icons[index]
            return (
              <Card key={useCase.title} className="company-card">
                <CardHeader>
                  <Icon className="h-7 w-7 text-cyan-600" />
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-6">
                  <p><span className="font-semibold text-foreground">{t.useCases.labels.problem}: </span><span className="text-muted-foreground">{useCase.problem}</span></p>
                  <p><span className="font-semibold text-foreground">{t.useCases.labels.solution}: </span><span className="text-muted-foreground">{useCase.solution}</span></p>
                  <p><span className="font-semibold text-foreground">{t.useCases.labels.outcome}: </span><span className="text-muted-foreground">{useCase.outcome}</span></p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function OfferingsSection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-slate-950 text-white">
      <div className="section-container">
        <SectionHeader eyebrow={t.offerings.eyebrow} title={t.offerings.title} description={t.offerings.description} tone="dark" />
        <div className="grid gap-5 lg:grid-cols-3">
          {t.offerings.cards.map((offer) => (
            <div key={offer.title} className="offer-card">
              <BriefcaseBusiness className="h-7 w-7 text-cyan-200" />
              <h3 className="mt-5 text-xl font-semibold text-white">{offer.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{offer.ideal}</p>
              <div className="mt-5 space-y-2">
                {offer.includes.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-200">
                    <Check className="h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-md border border-cyan-200/20 bg-cyan-200/10 p-3 text-sm leading-6 text-cyan-50">
                {offer.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ResourcesSection() {
  const { t } = useLanguage()

  return (
    <section id="resources" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.resources.eyebrow} title={t.resources.title} description={t.resources.description} />
        <div className="grid gap-5 lg:grid-cols-3">
          {t.resources.cards.map((resource) => (
            <Card key={resource.title} className="company-card">
              <CardHeader>
                <span className="eyebrow">{resource.category}</span>
                <CardTitle className="leading-7">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{resource.summary}</p>
                <Button variant="ghost" className="mt-5 px-0 text-cyan-700 hover:bg-transparent hover:text-cyan-800">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read note
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQSection() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} description={t.faq.description} />
        <div className="mx-auto grid max-w-5xl gap-4">
          {t.faq.items.map((item) => (
            <div key={item.question} className="faq-card">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  const { t } = useLanguage()

  return (
    <section id="team" className="section-padding bg-slate-50">
      <div className="section-container">
        <SectionHeader eyebrow={t.team.eyebrow} title={t.team.title} description={t.team.description} />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {t.team.capabilities.map((capability) => (
            <span key={capability} className="tech-chip">
              {capability}
            </span>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.team.members.map((member) => (
            <Card key={member.name} className="company-card">
              <CardHeader>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-100 text-cyan-700">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm font-medium text-cyan-700">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{member.value}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{member.background}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-white p-5">
          <p className="mb-4 text-center text-sm font-medium text-muted-foreground">{t.team.affiliations}</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Image src="/images/cityuhk-logo.png" alt="City University of Hong Kong logo" width={150} height={48} className="h-10 w-auto object-contain" />
            <Image src="/images/hktech300-logo.png" alt="HK Tech 300 logo" width={150} height={48} className="h-10 w-auto object-contain" />
            <span className="rounded-md border border-border px-4 py-2 text-sm text-muted-foreground">Hong Kong Polytechnic University</span>
            <span className="rounded-md border border-border px-4 py-2 text-sm text-muted-foreground">USTB</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function RoadmapSection() {
  const { t } = useLanguage()

  return (
    <section id="roadmap" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeader eyebrow={t.roadmap.eyebrow} title={t.roadmap.title} description={t.roadmap.description} />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-border md:block" />
          <div className="space-y-5">
            {t.roadmap.phases.map((phase, index) => (
              <div key={phase.phase} className="roadmap-item">
                <div className="roadmap-number">{index + 1}</div>
                <div className="roadmap-content">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="eyebrow">{phase.phase}</span>
                    <span className="rounded-md bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-800">{phase.status}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{phase.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {phase.items.map((item) => (
                      <span key={item} className="tech-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section-padding bg-slate-950 text-white">
      <div className="section-container">
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} tone="dark" />
        <div className="grid gap-5 lg:grid-cols-3">
          {t.contact.channels.map((channel) => (
            <div key={channel.title} className="contact-card">
              <Handshake className="h-7 w-7 text-cyan-200" />
              <h3 className="mt-5 text-xl font-semibold text-white">{channel.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{channel.description}</p>
              <Button className="mt-6 h-auto min-h-11 w-full whitespace-normal bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                {channel.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <Mail className="h-7 w-7 text-cyan-200" />
            <p className="mt-4 text-sm text-slate-400">Email</p>
            <p className="mt-1 text-lg font-semibold text-white">{t.contact.email}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="form-input" placeholder={t.contact.form.name} />
              <input className="form-input" placeholder={t.contact.form.organization} />
              <input className="form-input" placeholder={t.contact.form.email} />
              <input className="form-input" placeholder={t.contact.form.interest} />
              <textarea className="form-input min-h-28 sm:col-span-2" placeholder={t.contact.form.message} />
            </div>
            <Button type="button" className="mt-4 bg-cyan-300 text-slate-950 hover:bg-cyan-200">
              {t.contact.form.submit}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="section-container">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-cyan-200">
              <Bot className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold">{t.footer.title}</p>
              <p className="text-sm text-muted-foreground">{t.footer.subtitle}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
        </div>
        <div className="mt-6 border-t border-border pt-6">
          <p className="mb-3 text-sm font-medium text-muted-foreground">{t.footer.stackLabel}</p>
          <div className="flex flex-wrap gap-2">
            {t.footer.stack.map((item) => (
              <span key={item} className="tech-chip">
                {item}
              </span>
            ))}
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
      <WorkProofSection />
      <OfferingsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  )
}
