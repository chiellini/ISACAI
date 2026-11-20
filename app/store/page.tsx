'use client'

import Image from 'next/image'
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider'
import { Footer, Navigation } from '@/app/portal'
import { BadgeCheck, Banknote, CheckCircle2, MessageCircle, Package, QrCode, ShieldCheck } from 'lucide-react'

const wechat = 'windzero12138'

const quote = {
  date: '2026-11-12',
  total: 5146,
  totalZh: '伍仟壹佰肆拾陆元整',
}

type Item = {
  name: { zh: string; en: string }
  spec: { zh: string; en: string }
  unit: { zh: string; en: string }
  qty: number
  unitPrice: number
  amount: number
}

const items: Item[] = [
  {
    name: { zh: '定位标签电池', en: 'UWB Tag Battery' },
    spec: { zh: 'Panasonic CR2477；3V，一次性纽扣电池；按设备电池仓确认适配', en: 'Panasonic CR2477; 3V primary coin cell; fit confirmed per device battery compartment' },
    unit: { zh: '粒', en: 'pc' },
    qty: 10,
    unitPrice: 48,
    amount: 480,
  },
  {
    name: { zh: '双面固定胶带', en: 'Double-Sided Mounting Tape' },
    spec: { zh: '3M 9448A；宽10mm × 长50m/卷', en: '3M 9448A; 10mm wide × 50m per roll' },
    unit: { zh: '卷', en: 'roll' },
    qty: 5,
    unitPrice: 58,
    amount: 290,
  },
  {
    name: { zh: '尼龙扎带', en: 'Nylon Cable Ties' },
    spec: { zh: 'PA66；4.8 × 200mm，黑色，100根/包', en: 'PA66; 4.8 × 200mm, black, 100 pcs per pack' },
    unit: { zh: '包', en: 'pack' },
    qty: 4,
    unitPrice: 76,
    amount: 304,
  },
  {
    name: { zh: 'PET 不干胶标识标签', en: 'PET Adhesive Labels' },
    spec: { zh: '50 × 30mm，白色，1000枚/卷；热转印用，不含碳带', en: '50 × 30mm, white, 1000 pcs per roll; thermal transfer use, ribbon not included' },
    unit: { zh: '卷', en: 'roll' },
    qty: 2,
    unitPrice: 198,
    amount: 396,
  },
  {
    name: { zh: '低尘擦拭纸', en: 'Low-Dust Wipes' },
    spec: { zh: '金佰利34155；110 × 210mm，280张/盒', en: 'Kimberly-Clark 34155; 110 × 210mm, 280 sheets per box' },
    unit: { zh: '盒', en: 'box' },
    qty: 8,
    unitPrice: 34,
    amount: 272,
  },
  {
    name: { zh: '无尘擦拭布', en: 'Cleanroom Wipes' },
    spec: { zh: '100 × 100mm，聚酯纤维，100片/包；非无菌型', en: '100 × 100mm, polyester, 100 pcs per pack; non-sterile' },
    unit: { zh: '包', en: 'pack' },
    qty: 4,
    unitPrice: 82,
    amount: 328,
  },
  {
    name: { zh: '海绵头擦拭棒', en: 'Foam-Tipped Swabs' },
    spec: { zh: 'PP杆，海绵头，总长约70mm，100支/包；非无菌型', en: 'PP stick, foam head, ~70mm overall, 100 pcs per pack; non-sterile' },
    unit: { zh: '包', en: 'pack' },
    qty: 2,
    unitPrice: 149,
    amount: 298,
  },
  {
    name: { zh: '一次性丁腈手套', en: 'Disposable Nitrile Gloves' },
    spec: { zh: '无粉、非无菌，100只/盒（50双）；M/L尺码下单确认', en: 'Powder-free, non-sterile, 100 pcs per box (50 pairs); M/L size confirmed at order' },
    unit: { zh: '盒', en: 'box' },
    qty: 2,
    unitPrice: 138,
    amount: 276,
  },
  {
    name: { zh: '导热硅胶垫片', en: 'Thermal Silicone Pad' },
    spec: { zh: '200 × 200 × 1mm；标称导热系数5W/(m·K)，按需裁切', en: '200 × 200 × 1mm; rated 5 W/(m·K), cut to size' },
    unit: { zh: '片', en: 'sheet' },
    qty: 2,
    unitPrice: 238,
    amount: 476,
  },
  {
    name: { zh: '背胶密封泡棉条', en: 'Self-Adhesive Foam Sealing Strip' },
    spec: { zh: '闭孔EPDM；宽10mm × 厚2mm × 长10m/卷', en: 'Closed-cell EPDM; 10mm wide × 2mm thick × 10m per roll' },
    unit: { zh: '卷', en: 'roll' },
    qty: 2,
    unitPrice: 194,
    amount: 388,
  },
  {
    name: { zh: '热缩绝缘管材料盒', en: 'Heat-Shrink Tubing Kit' },
    spec: { zh: '2:1；内径2/3/4/6/8/10mm各50段，100mm/段，共300段', en: '2:1; IDs 2/3/4/6/8/10mm, 50 pcs each, 100mm long, 300 pcs total' },
    unit: { zh: '盒', en: 'box' },
    qty: 2,
    unitPrice: 174,
    amount: 348,
  },
  {
    name: { zh: '管型预绝缘压接端头', en: 'Pre-Insulated Crimp Ferrules' },
    spec: { zh: '0.5/0.75/1/1.5/2.5mm²各100只，共500只/包', en: '0.5/0.75/1/1.5/2.5mm², 100 pcs each, 500 pcs per pack' },
    unit: { zh: '包', en: 'pack' },
    qty: 2,
    unitPrice: 197,
    amount: 394,
  },
  {
    name: { zh: '无铅焊锡丝', en: 'Lead-Free Solder Wire' },
    spec: { zh: 'Sn99.3Cu0.7；线径0.8mm，净重250g/卷，含助焊剂', en: 'Sn99.3Cu0.7; 0.8mm diameter, net 250g per roll, flux-cored' },
    unit: { zh: '卷', en: 'roll' },
    qty: 2,
    unitPrice: 239,
    amount: 478,
  },
  {
    name: { zh: '防静电屏蔽包装袋', en: 'Anti-Static Shielding Bags' },
    spec: { zh: '外尺寸100 × 150mm，平口可热封，100只/包', en: '100 × 150mm outer size, heat-sealable flat, 100 pcs per pack' },
    unit: { zh: '包', en: 'pack' },
    qty: 2,
    unitPrice: 209,
    amount: 418,
  },
]

const copy = {
  zh: {
    kicker: '耗材销售',
    headline: '机器人研发及维护耗材，整包直购。',
    lede: 'UWB 定位、视觉传感器、雷达安装与线束电路维护所需的一次性耗材与装配材料，按报价单整包交付。',
    primaryCta: '查看报价明细',
    secondaryCta: '扫码购买',
    badges: [`报价日期 ${quote.date}`, '14 项耗材', '未税建议销售价'],
    pricing: {
      kicker: '报价单',
      title: '14 项耗材，明码标价。',
      description: '币种为人民币；以下为未税建议销售价，税费及运费另议；包装数量均为实际交付数量。',
      columns: { no: '序号', name: '耗材名称', spec: '规格及交付包装', unit: '单位', qty: '数量', unitPrice: '单价（元）', amount: '金额（元）' },
      totalLabel: '未税合计',
      totalNote: quote.totalZh,
    },
    payment: {
      kicker: '购买方式',
      title: '三步完成购买。',
      steps: [
        { title: '确认清单', text: '电池适配、标签打印机规格、手套尺码及导热垫厚度需在下单前确认。' },
        { title: '扫码付款', text: '使用支付宝扫一扫支付，付款时请备注单位或用途。' },
        { title: '微信确认', text: `付款后添加微信 ${wechat}，确认收货信息、交期与开票需求。` },
      ],
      qrTitle: '支付宝收款码',
      qrNote: '打开支付宝「扫一扫」扫码支付',
      wechatLabel: '微信',
      wechatNote: '下单确认、交期与发票，请微信联系',
      extra: '支持对公转账；税费、运费与发票事项在下单前沟通确认。',
    },
    notes: {
      kicker: '交付说明',
      title: '交付范围与约定。',
      items: [
        '本单交付为电池、胶材、擦拭材料、一次性防护用品及装配耗用材料，不含开发板、定位模组、工具、标定板、支架或软件服务。',
        '电池适配、标签打印机规格、手套尺码及导热垫厚度应在下单前确认；未指定品牌的项目按本表规格确认样品，不作额外等级承诺。',
        '清洁材料仅用于设备厂家允许的表面；胶带和密封条不得遮挡光学或射频窗口。本单不含拆机维修、现场施工或计量校准。',
        '本表为建议报价；最终品牌、交期、付款方式及验收要求由双方确认。各行商品与包装按实际交付列明，不以更换名称替代实物。',
      ],
    },
  },
  en: {
    kicker: 'Consumables Store',
    headline: 'Robotics R&D consumables, one package.',
    lede: 'One-time consumables and assembly materials for UWB positioning, vision sensors, radar mounting, and wiring maintenance — delivered as a single quote package.',
    primaryCta: 'View Price List',
    secondaryCta: 'Buy Now',
    badges: [`Quote date ${quote.date}`, '14 items', 'Ex-tax list price'],
    pricing: {
      kicker: 'Quote',
      title: '14 items, clear pricing.',
      description: 'Prices in CNY, excluding tax; tax and shipping to be discussed. Package counts are actual delivery quantities.',
      columns: { no: 'No.', name: 'Item', spec: 'Spec & Packaging', unit: 'Unit', qty: 'Qty', unitPrice: 'Unit Price (¥)', amount: 'Amount (¥)' },
      totalLabel: 'Total (ex-tax)',
      totalNote: `RMB ${quote.total.toLocaleString('en-US')} only`,
    },
    payment: {
      kicker: 'How to Buy',
      title: 'Three steps to order.',
      steps: [
        { title: 'Confirm the list', text: 'Battery fit, label printer spec, glove size, and thermal pad thickness must be confirmed before ordering.' },
        { title: 'Scan & pay', text: 'Scan the Alipay QR code to pay; note your organization or purpose in the payment remark.' },
        { title: 'Confirm on WeChat', text: `After payment, add WeChat ${wechat} to confirm delivery details, lead time, and invoicing.` },
      ],
      qrTitle: 'Alipay QR Code',
      qrNote: 'Open "Scan" inside Alipay to pay',
      wechatLabel: 'WeChat',
      wechatNote: 'Order confirmation, lead time, and invoicing via WeChat',
      extra: 'Bank transfer supported; tax, shipping, and invoicing are confirmed before ordering.',
    },
    notes: {
      kicker: 'Delivery Notes',
      title: 'Scope and terms.',
      items: [
        'This package covers batteries, adhesive materials, wipes, disposable protection, and assembly consumables. It does not include dev boards, positioning modules, tools, calibration boards, brackets, or software services.',
        'Battery fit, label printer spec, glove size, and thermal pad thickness must be confirmed before ordering. Items without a specified brand follow the listed spec samples, with no extra-grade commitment.',
        'Cleaning materials apply only to surfaces allowed by device manufacturers; tape and sealing strips must not cover optical or RF windows. No disassembly repair, on-site work, or metrology calibration is included.',
        'This is a suggested quote; final brand, lead time, payment method, and acceptance are confirmed by both parties. Items and packaging are listed as actually delivered.',
      ],
    },
  },
}

function StoreHero() {
  const { language } = useLanguage()
  const lang = language === 'zh' ? 'zh' : 'en'
  const c = copy[lang]

  return (
    <section className="hero-plane pt-16">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="section-container hero-content flex min-h-[70svh] flex-col justify-center py-20 lg:py-28">
        <p className="section-kicker !text-[hsl(18_72%_62%)]">{c.kicker}</p>
        <h1 className="hero-headline mt-6 !text-[clamp(1.9rem,4.6vw,3.4rem)]">{c.headline}</h1>
        <p className="hero-lede mt-5">{c.lede}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
          {c.badges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-2">
              <BadgeCheck className="h-3.5 w-3.5 text-[hsl(18_72%_62%)]" />
              {badge}
            </span>
          ))}
        </div>
        <div className="hero-actions mt-10 flex flex-wrap gap-3">
          <a
            href="#pricing"
            className="btn-primary !bg-white !text-[hsl(var(--ink))] hover:!bg-[hsl(18_72%_56%)] hover:!text-white"
          >
            {c.primaryCta}
            <Banknote className="h-4 w-4" />
          </a>
          <a href="#payment" className="btn-secondary !border-white/25 !text-white hover:!border-white/50 hover:!bg-white/5">
            {c.secondaryCta}
            <QrCode className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const { language } = useLanguage()
  const lang = language === 'zh' ? 'zh' : 'en'
  const { pricing } = copy[lang]

  return (
    <section id="pricing" className="section-padding scroll-mt-16">
      <div className="section-container">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">{pricing.kicker}</p>
          <h2 className="section-title">{pricing.title}</h2>
          <p className="section-lede">{pricing.description}</p>
        </div>

        <div className="hidden overflow-hidden border border-foreground/10 bg-[hsl(var(--paper))] md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-foreground/10 bg-[hsl(var(--ink))] text-white">
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em]">{pricing.columns.no}</th>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em]">{pricing.columns.name}</th>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em]">{pricing.columns.spec}</th>
                <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-[0.14em]">{pricing.columns.unit}</th>
                <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-[0.14em]">{pricing.columns.qty}</th>
                <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-[0.14em]">{pricing.columns.unitPrice}</th>
                <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-[0.14em]">{pricing.columns.amount}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.name.en} className="border-b border-foreground/10 transition last:border-b-0 hover:bg-[hsl(18_72%_46%_/_0.04)]">
                  <td className="font-display px-4 py-4 text-sm font-semibold text-[hsl(var(--copper))]">
                    {String(index + 1).padStart(2, '0')}
                  </td>
                  <td className="font-display px-4 py-4 font-semibold text-foreground">{item.name[lang]}</td>
                  <td className="max-w-md px-4 py-4 leading-6 text-muted-foreground">{item.spec[lang]}</td>
                  <td className="whitespace-nowrap px-4 py-4 text-right text-muted-foreground">{item.unit[lang]}</td>
                  <td className="px-4 py-4 text-right tabular-nums text-foreground/80">{item.qty}</td>
                  <td className="px-4 py-4 text-right tabular-nums text-foreground/80">¥{item.unitPrice}</td>
                  <td className="px-4 py-4 text-right font-semibold tabular-nums text-foreground">¥{item.amount.toLocaleString('en-US')}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-foreground/15 bg-[hsl(var(--paper))]">
                <td colSpan={6} className="px-4 py-5">
                  <span className="font-display text-base font-semibold text-foreground">{pricing.totalLabel}</span>
                  <span className="ml-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">{pricing.totalNote}</span>
                </td>
                <td className="font-display px-4 py-5 text-right text-2xl font-bold tabular-nums text-[hsl(var(--copper))]">
                  ¥{quote.total.toLocaleString('en-US')}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="grid gap-4 md:hidden">
          {items.map((item, index) => (
            <div key={item.name.en} className="border border-foreground/10 bg-[hsl(var(--paper))] p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display font-semibold text-foreground">
                  <span className="mr-2 text-sm text-[hsl(var(--copper))]">{String(index + 1).padStart(2, '0')}</span>
                  {item.name[lang]}
                </h3>
                <p className="font-display shrink-0 text-lg font-bold tabular-nums text-[hsl(var(--copper))]">¥{item.amount.toLocaleString('en-US')}</p>
              </div>
              <p className="mt-3 text-xs leading-6 text-muted-foreground">{item.spec[lang]}</p>
              <p className="mt-3 text-xs font-medium tabular-nums text-foreground/70">
                {item.qty} {item.unit[lang]} × ¥{item.unitPrice}
              </p>
            </div>
          ))}
          <div className="flex items-baseline justify-between border-y-2 border-foreground/15 bg-[hsl(var(--paper))] px-5 py-5">
            <div>
              <p className="font-display text-base font-semibold text-foreground">{pricing.totalLabel}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{pricing.totalNote}</p>
            </div>
            <p className="font-display text-2xl font-bold tabular-nums text-[hsl(var(--copper))]">¥{quote.total.toLocaleString('en-US')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PaymentSection() {
  const { language } = useLanguage()
  const lang = language === 'zh' ? 'zh' : 'en'
  const { payment } = copy[lang]

  return (
    <section id="payment" className="contact-plane section-padding scroll-mt-16">
      <div className="section-container relative z-[1]">
        <div className="mb-12 max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(18_72%_62%)]">{payment.kicker}</p>
          <h2 className="section-title !text-white">{payment.title}</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <ol className="order-2 space-y-0 lg:order-1">
            {payment.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 border-t border-white/10 py-6 first:border-t-0 first:pt-0">
                <span className="font-display text-sm font-semibold text-[hsl(18_72%_62%)]">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">{step.text}</p>
                </div>
              </li>
            ))}
            <li className="flex items-start gap-3 border-t border-white/10 pt-6 text-sm leading-6 text-white/50">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(18_72%_62%)]" />
              {payment.extra}
            </li>
          </ol>

          <div className="order-1 flex flex-col items-start gap-8 sm:flex-row sm:items-start lg:order-2 lg:flex-col">
            <div className="w-64 max-w-full bg-white p-4 shadow-2xl">
              <Image
                src="/images/alipay-qr.jpg"
                alt={payment.qrTitle}
                width={640}
                height={960}
                sizes="(min-width: 1024px) 256px, 60vw"
                className="h-auto w-full"
                priority
              />
              <p className="font-display mt-3 text-center text-sm font-semibold text-[hsl(205_28%_34%)]">{payment.qrTitle}</p>
              <p className="mt-1 text-center text-xs text-slate-500">{payment.qrNote}</p>
            </div>

            <div className="border-t-2 border-[hsl(18_72%_56%)] pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">{payment.wechatLabel}</p>
              <p className="font-display mt-3 text-2xl font-semibold tracking-tight text-white">{wechat}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs leading-5 text-white/50">
                <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                {payment.wechatNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NotesSection() {
  const { language } = useLanguage()
  const lang = language === 'zh' ? 'zh' : 'en'
  const { notes } = copy[lang]

  return (
    <section className="section-padding border-t border-foreground/5 bg-[hsl(var(--paper))]">
      <div className="section-container">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">{notes.kicker}</p>
          <h2 className="section-title">{notes.title}</h2>
        </div>
        <ol className="grid gap-8 md:grid-cols-2">
          {notes.items.map((note, index) => (
            <li key={index} className="flex gap-4 border-t border-foreground/10 pt-5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--copper))]" />
              <p className="text-sm leading-7 text-foreground/75">{note}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 inline-flex items-center gap-2 border border-foreground/10 px-4 py-3 text-xs font-medium text-muted-foreground">
          <Package className="h-3.5 w-3.5 text-[hsl(var(--copper))]" />
          {lang === 'zh' ? '整套 14 项耗材 · 未税合计' : 'Full 14-item package · Total ex-tax'} ¥{quote.total.toLocaleString('en-US')}
        </p>
      </div>
    </section>
  )
}

function StorePageContent() {
  return (
    <main>
      <Navigation />
      <StoreHero />
      <PricingSection />
      <PaymentSection />
      <NotesSection />
      <Footer />
    </main>
  )
}

export default function StorePage() {
  return (
    <LanguageProvider>
      <StorePageContent />
    </LanguageProvider>
  )
}
