'use client'

import Image from 'next/image'
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider'
import { Footer, Navigation } from '@/app/portal'
import { BadgeCheck, Banknote, CheckCircle2, MessageCircle, Package, QrCode, ShieldCheck } from 'lucide-react'

const wechat = 'windzero12138'

type Product = {
  name: { zh: string; en: string }
  spec: { zh: string; en: string }
  unit: { zh: string; en: string }
  price: number
  image: string
}

type Category = {
  id: string
  name: { zh: string; en: string }
  desc: { zh: string; en: string }
  items: Product[]
}

const categories: Category[] = [
  {
    id: 'cleaning',
    name: { zh: '清洁与擦拭', en: 'Cleaning & Wipes' },
    desc: { zh: '设备与传感器表面清洁', en: 'Surface cleaning for devices and sensors' },
    items: [
      {
        name: { zh: '低尘擦拭纸', en: 'Low-Dust Wipes' },
        spec: { zh: '金佰利 34155；110 × 210mm，280张/盒', en: 'Kimberly-Clark 34155; 110 × 210mm, 280 sheets/box' },
        unit: { zh: '盒', en: 'box' },
        price: 34,
        image: '/images/store/wipes-paper.jpg',
      },
      {
        name: { zh: '无尘擦拭布', en: 'Cleanroom Wipes' },
        spec: { zh: '100 × 100mm，聚酯纤维，100片/包；非无菌型', en: '100 × 100mm, polyester, 100 pcs/pack; non-sterile' },
        unit: { zh: '包', en: 'pack' },
        price: 82,
        image: '/images/store/wipes-cloth.jpg',
      },
      {
        name: { zh: '海绵头擦拭棒', en: 'Foam-Tipped Swabs' },
        spec: { zh: 'PP杆，海绵头，总长约70mm，100支/包；非无菌型', en: 'PP stick, foam head, ~70mm long, 100 pcs/pack; non-sterile' },
        unit: { zh: '包', en: 'pack' },
        price: 149,
        image: '/images/store/swabs.jpg',
      },
      {
        name: { zh: '电子级异丙醇清洁剂', en: 'Electronic-Grade IPA Cleaner' },
        spec: { zh: '99.9% 异丙醇，500ml/瓶', en: '99.9% isopropyl alcohol, 500ml/bottle' },
        unit: { zh: '瓶', en: 'bottle' },
        price: 150,
        image: '/images/store/ipa-cleaner.jpg',
      },
    ],
  },
  {
    id: 'protection',
    name: { zh: '防护与防静电', en: 'Protection & ESD' },
    desc: { zh: '操作防护与静电防护', en: 'Handling and ESD protection' },
    items: [
      {
        name: { zh: '一次性丁腈手套', en: 'Disposable Nitrile Gloves' },
        spec: { zh: '无粉、非无菌，100只/盒（50双）；M/L尺码下单确认', en: 'Powder-free, non-sterile, 100 pcs/box (50 pairs); M/L size on request' },
        unit: { zh: '盒', en: 'box' },
        price: 138,
        image: '/images/store/nitrile-gloves.jpg',
      },
      {
        name: { zh: '防静电屏蔽包装袋', en: 'Anti-Static Shielding Bags' },
        spec: { zh: '外尺寸100 × 150mm，平口可热封，100只/包', en: '100 × 150mm outer, heat-sealable flat, 100 pcs/pack' },
        unit: { zh: '包', en: 'pack' },
        price: 209,
        image: '/images/store/esd-bag.jpg',
      },
      {
        name: { zh: '防静电腕带', en: 'Anti-Static Wrist Strap' },
        spec: { zh: '双线接地腕带，配接地线与鳄鱼夹', en: 'Dual-conductor grounded strap with cord and clip' },
        unit: { zh: '条', en: 'pc' },
        price: 25,
        image: '/images/store/esd-strap.jpg',
      },
    ],
  },
  {
    id: 'assembly',
    name: { zh: '装配与紧固', en: 'Assembly & Fastening' },
    desc: { zh: '安装固定、粘接与标识', en: 'Mounting, bonding, and labeling' },
    items: [
      {
        name: { zh: '双面固定胶带', en: 'Double-Sided Mounting Tape' },
        spec: { zh: '3M 9448A；宽10mm × 长50m/卷', en: '3M 9448A; 10mm wide × 50m/roll' },
        unit: { zh: '卷', en: 'roll' },
        price: 128,
        image: '/images/store/tape-3m9448a.jpg',
      },
      {
        name: { zh: '3M VHB 双面胶贴', en: '3M VHB Adhesive Tape' },
        spec: { zh: '4920 型，宽19mm × 长1m', en: 'Type 4920, 19mm wide × 1m' },
        unit: { zh: '卷', en: 'roll' },
        price: 60,
        image: '/images/store/vhb-tape.jpg',
      },
      {
        name: { zh: '尼龙扎带', en: 'Nylon Cable Ties' },
        spec: { zh: 'PA66；4.8 × 200mm，黑色，100根/包', en: 'PA66; 4.8 × 200mm, black, 100 pcs/pack' },
        unit: { zh: '包', en: 'pack' },
        price: 76,
        image: '/images/store/cable-ties.jpg',
      },
      {
        name: { zh: '背胶密封泡棉条', en: 'Self-Adhesive Foam Sealing Strip' },
        spec: { zh: '闭孔EPDM；宽10mm × 厚2mm × 长10m/卷', en: 'Closed-cell EPDM; 10mm wide × 2mm thick × 10m/roll' },
        unit: { zh: '卷', en: 'roll' },
        price: 194,
        image: '/images/store/foam-strip.jpg',
      },
      {
        name: { zh: '不锈钢螺丝螺母套装', en: 'Stainless Screw & Nut Kit' },
        spec: { zh: 'M2/M2.5/M3/M4 常用规格，含平垫弹垫，分格收纳盒', en: 'M2/M2.5/M3/M4 common sizes, with washers, grid case' },
        unit: { zh: '套', en: 'set' },
        price: 50,
        image: '/images/store/screws-kit.jpg',
      },
      {
        name: { zh: '尼龙六角隔离柱套装', en: 'Nylon Hex Standoff Kit' },
        spec: { zh: 'M3 双通/单通，6/8/10/15/20mm，共100只', en: 'M3 double/single ended, 6/8/10/15/20mm, 100 pcs' },
        unit: { zh: '套', en: 'set' },
        price: 40,
        image: '/images/store/standoffs.jpg',
      },
      {
        name: { zh: 'PET 不干胶标识标签', en: 'PET Adhesive Labels' },
        spec: { zh: '50 × 30mm，白色，1000枚/卷；热转印用，不含碳带', en: '50 × 30mm, white, 1000 pcs/roll; thermal transfer, ribbon not included' },
        unit: { zh: '卷', en: 'roll' },
        price: 198,
        image: '/images/store/pet-labels.jpg',
      },
    ],
  },
  {
    id: 'wiring',
    name: { zh: '电工与焊接', en: 'Wiring & Soldering' },
    desc: { zh: '线束加工与电路维护', en: 'Wiring and circuit maintenance' },
    items: [
      {
        name: { zh: '热缩绝缘管材料盒', en: 'Heat-Shrink Tubing Kit' },
        spec: { zh: '2:1；内径2/3/4/6/8/10mm各50段，100mm/段，共300段', en: '2:1; IDs 2/3/4/6/8/10mm, 50 pcs each, 100mm long, 300 total' },
        unit: { zh: '盒', en: 'box' },
        price: 174,
        image: '/images/store/heatshrink-kit.jpg',
      },
      {
        name: { zh: '管型预绝缘压接端头', en: 'Pre-Insulated Crimp Ferrules' },
        spec: { zh: '0.5/0.75/1/1.5/2.5mm²各100只，共500只/包', en: '0.5/0.75/1/1.5/2.5mm², 100 pcs each, 500 pcs/pack' },
        unit: { zh: '包', en: 'pack' },
        price: 197,
        image: '/images/store/crimp-terminals.jpg',
      },
      {
        name: { zh: '无铅焊锡丝', en: 'Lead-Free Solder Wire' },
        spec: { zh: 'Sn99.3Cu0.7；线径0.8mm，净重250g/卷，含助焊剂', en: 'Sn99.3Cu0.7; 0.8mm, net 250g/roll, flux-cored' },
        unit: { zh: '卷', en: 'roll' },
        price: 239,
        image: '/images/store/solder-wire.jpg',
      },
      {
        name: { zh: '杜邦线连接线套装', en: 'Dupont Wire Kit' },
        spec: { zh: '公对公/公对母/母对母各40根，10/20/30cm 混装，120根/盒', en: 'M/M, M/F, F/F 40 each, 10/20/30cm mixed, 120 pcs/box' },
        unit: { zh: '盒', en: 'box' },
        price: 30,
        image: '/images/store/dupont-wires.jpg',
      },
      {
        name: { zh: '松香助焊剂盒', en: 'Rosin Flux Box' },
        spec: { zh: '固体松香，20g/盒', en: 'Solid rosin, 20g/box' },
        unit: { zh: '盒', en: 'box' },
        price: 20,
        image: '/images/store/rosin.jpg',
      },
      {
        name: { zh: '吸锡编织带', en: 'Desoldering Braid' },
        spec: { zh: '宽2.0mm × 长1.5m，含助焊剂', en: '2.0mm wide × 1.5m, flux-coated' },
        unit: { zh: '卷', en: 'roll' },
        price: 20,
        image: '/images/store/desolder-braid.jpg',
      },
      {
        name: { zh: 'XT60 电源插头', en: 'XT60 Power Connectors' },
        spec: { zh: '公母对插，镀金端子，10对/包', en: 'Male/female pairs, gold-plated contacts, 10 pairs/pack' },
        unit: { zh: '包', en: 'pack' },
        price: 128,
        image: '/images/store/xt60.jpg',
      },
    ],
  },
  {
    id: 'thermal',
    name: { zh: '电池与散热', en: 'Power & Thermal' },
    desc: { zh: '供电电池与散热管理', en: 'Batteries and thermal management' },
    items: [
      {
        name: { zh: '定位标签电池', en: 'UWB Tag Battery' },
        spec: { zh: 'Panasonic CR2477；3V 一次性纽扣电池，按设备电池仓确认适配', en: 'Panasonic CR2477; 3V primary coin cell; fit per device compartment' },
        unit: { zh: '粒', en: 'pc' },
        price: 48,
        image: '/images/store/cr2477-battery.jpg',
      },
      {
        name: { zh: '导热硅胶垫片', en: 'Thermal Silicone Pad' },
        spec: { zh: '200 × 200 × 1mm；标称导热系数5W/(m·K)，按需裁切', en: '200 × 200 × 1mm; 5 W/(m·K), cut to size' },
        unit: { zh: '片', en: 'sheet' },
        price: 238,
        image: '/images/store/thermal-pad.jpg',
      },
      {
        name: { zh: '散热硅脂', en: 'Thermal Grease' },
        spec: { zh: '4g/针管装，导热系数≥4W/(m·K)', en: '4g syringe, ≥4 W/(m·K)' },
        unit: { zh: '支', en: 'pc' },
        price: 50,
        image: '/images/store/thermal-grease.jpg',
      },
    ],
  },
  {
    id: 'drone',
    name: { zh: '无人机配件', en: 'Drone Parts' },
    desc: { zh: '无人机维护与升级配件', en: 'Drone maintenance and upgrade parts' },
    items: [
      {
        name: { zh: '无人机螺旋桨', en: 'Drone Propellers' },
        spec: { zh: '9450 自锁桨，2对/包，适配主流四旋翼机型', en: '9450 self-locking props, 2 pairs/pack, fits common quadcopters' },
        unit: { zh: '包', en: 'pack' },
        price: 60,
        image: '/images/store/propellers.jpg',
      },
      {
        name: { zh: '云台减震球', en: 'Gimbal Damping Balls' },
        spec: { zh: '硅胶减震球，8只/包，适配主流云台减震板', en: 'Silicone damping balls, 8 pcs/pack, fits common gimbal plates' },
        unit: { zh: '包', en: 'pack' },
        price: 25,
        image: '/images/store/damping-balls.jpg',
      },
      {
        name: { zh: '5.8GHz 图传天线', en: '5.8GHz FPV Antenna' },
        spec: { zh: 'RP-SMA 接口蘑菇天线，3dBi，2只/包', en: 'RP-SMA mushroom antenna, 3 dBi, 2 pcs/pack' },
        unit: { zh: '包', en: 'pack' },
        price: 80,
        image: '/images/store/fpv-antenna.jpg',
      },
      {
        name: { zh: '电池魔术贴扎带', en: 'Battery Velcro Straps' },
        spec: { zh: '宽20mm × 长200mm，5根/包', en: '20mm wide × 200mm long, 5 pcs/pack' },
        unit: { zh: '包', en: 'pack' },
        price: 16,
        image: '/images/store/velcro-straps.jpg',
      },
    ],
  },
  {
    id: 'uwb',
    name: { zh: 'UWB 定位配件', en: 'UWB Positioning Parts' },
    desc: { zh: 'UWB 标签模组与固定配件', en: 'UWB tag modules and mounting parts' },
    items: [
      {
        name: { zh: 'UWB 备用射频模组', en: 'UWB Radio Module' },
        spec: { zh: 'BU03 / DW3000，板载天线；裸模组，不含外壳及电池', en: 'BU03 / DW3000, onboard antenna; bare module, no case or battery' },
        unit: { zh: '个', en: 'pc' },
        price: 127,
        image: '/images/store/uwb-module.jpg',
      },
      {
        name: { zh: '标签外壳及佩戴挂绳', en: 'Tag Case & Lanyard' },
        spec: { zh: '现成适配外壳＋挂绳；不含定制开模', en: 'Off-the-shelf case + lanyard; no custom tooling' },
        unit: { zh: '套', en: 'set' },
        price: 19,
        image: '/images/store/tag-lanyard.jpg',
      },
      {
        name: { zh: '定位设备固定材料包', en: 'Mounting Materials Pack' },
        spec: { zh: '每包工业双面胶片10片、尼龙扎带50根', en: '10 adhesive pads + 50 nylon cable ties per pack' },
        unit: { zh: '包', en: 'pack' },
        price: 29,
        image: '/images/store/mount-pack.jpg',
      },
    ],
  },
  {
    id: 'vision',
    name: { zh: '摄像头与视觉', en: 'Camera & Vision' },
    desc: { zh: '工业相机线缆、标定与清洁', en: 'Camera cabling, calibration, and cleaning' },
    items: [
      {
        name: { zh: 'USB 3.0 工业相机连接线', en: 'USB 3.0 Camera Cable' },
        spec: { zh: '2m，USB-A转USB-B；下单前确认相机接口', en: '2m, USB-A to USB-B; confirm camera port before ordering' },
        unit: { zh: '条', en: 'pc' },
        price: 267,
        image: '/images/store/usb3-cable.jpg',
      },
      {
        name: { zh: 'GigE 工业相机屏蔽网线', en: 'GigE Shielded Cable' },
        spec: { zh: '3m，RJ45转RJ45，屏蔽抗干扰', en: '3m, RJ45 to RJ45, shielded' },
        unit: { zh: '条', en: 'pc' },
        price: 217,
        image: '/images/store/gige-cable.jpg',
      },
      {
        name: { zh: '玻璃相机标定板', en: 'Glass Calibration Board' },
        spec: { zh: '100×100mm 棋盘格；格距按需求确认，不含校准证书', en: '100×100mm chessboard; grid size on request, no calibration certificate' },
        unit: { zh: '块', en: 'pc' },
        price: 348,
        image: '/images/store/calib-board.jpg',
      },
      {
        name: { zh: '镜头外置保护镜', en: 'Lens Protector' },
        spec: { zh: '默认30.5mm螺纹口径，按镜头规格匹配', en: '30.5mm thread by default, matched to lens spec' },
        unit: { zh: '片', en: 'pc' },
        price: 47,
        image: '/images/store/lens-filter.jpg',
      },
      {
        name: { zh: '相机清洁维护套装', en: 'Camera Cleaning Kit' },
        spec: { zh: '每套含 Kimtech 34155 擦拭纸4盒、气吹1个；不含清洁液', en: '4 boxes Kimtech 34155 wipes + 1 blower per kit; no cleaning fluid' },
        unit: { zh: '套', en: 'set' },
        price: 68,
        image: '/images/store/cleaning-kit.jpg',
      },
    ],
  },
  {
    id: 'radar',
    name: { zh: '雷达配件', en: 'Radar Parts' },
    desc: { zh: '雷达线束、测试件与安装支架', en: 'Radar harnesses, test targets, and mounts' },
    items: [
      {
        name: { zh: '雷达电源及数据线束', en: 'Radar Power & Data Harness' },
        spec: { zh: '1m 常规无源线束；接头及针序下单前确认', en: '1m passive harness; connector and pinout confirmed at order' },
        unit: { zh: '套', en: 'set' },
        price: 97,
        image: '/images/store/radar-harness.jpg',
      },
      {
        name: { zh: '小型三面角反射器', en: 'Corner Reflector' },
        spec: { zh: '约50mm 实验测试件；尺寸可确认，不含计量校准证书', en: '~50mm lab test target; size on request, no metrology certificate' },
        unit: { zh: '个', en: 'pc' },
        price: 328,
        image: '/images/store/corner-reflector.jpg',
      },
      {
        name: { zh: '雷达安装支架及紧固件', en: 'Radar Mount & Fasteners' },
        spec: { zh: '现成铝合金支架＋配套螺丝；不含非标机械加工', en: 'Off-the-shelf aluminum bracket + screws; no custom machining' },
        unit: { zh: '套', en: 'set' },
        price: 67,
        image: '/images/store/radar-bracket.jpg',
      },
    ],
  },
  {
    id: 'boards',
    name: { zh: '开发板与调试', en: 'Boards & Debug' },
    desc: { zh: '预烧录控制板与调试线束', en: 'Pre-flashed boards and debug harnesses' },
    items: [
      {
        name: { zh: '预烧录 STM32 控制板', en: 'Pre-flashed STM32 Board' },
        spec: { zh: 'STM32F103C8T6；含固件烧录、基础测试、版本标签及防静电包装', en: 'STM32F103C8T6; flashed firmware, basic test, version label, ESD packaging' },
        unit: { zh: '块', en: 'pc' },
        price: 119,
        image: '/images/store/stm32-board.jpg',
      },
      {
        name: { zh: 'SWD 备用线束包', en: 'SWD Cable Pack' },
        spec: { zh: '2.54mm 四线 20cm；每包5条，不含下载器', en: '2.54mm pitch, 4-wire, 20cm; 5 cables per pack, debugger not included' },
        unit: { zh: '包', en: 'pack' },
        price: 23,
        image: '/images/store/swd-cables.jpg',
      },
    ],
  },
]

const productCount = categories.reduce((sum, cat) => sum + cat.items.length, 0)

const copy = {
  zh: {
    kicker: '耗材商店',
    headline: '机器人与无人机耗材，单品直购。',
    lede: '面向机器人研发、设备维护与无人机用户的配件商店：从清洁耗材、电工焊接到 UWB 定位、视觉标定与雷达配件，明码标价，扫码即买。',
    primaryCta: '浏览商品',
    secondaryCta: '扫码购买',
    badges: [`${productCount} 项现货耗材`, '单品下单 · 明码标价', '扫码支付 · 微信确认'],
    catalog: {
      kicker: '商品目录',
      title: '按分类选购。',
      description: '所列价格均为含税价格，运费另议；每件商品按展示规格与包装交付。',
      itemCount: '项',
    },
    payment: {
      kicker: '购买方式',
      title: '三步完成购买。',
      steps: [
        { title: '选好商品', text: '从目录中选定商品名称与数量；多件可合并下单。' },
        { title: '微信确认', text: `添加微信 ${wechat}，确认商品、收货信息、交期与发票需求。` },
        { title: '扫码付款', text: '使用支付宝扫一扫支付。' },
      ],
      qrTitle: '支付宝收款码',
      qrNote: '打开支付宝「扫一扫」扫码支付',
      wechatQrTitle: '微信二维码',
      wechatQrNote: '微信「扫一扫」加好友，下单确认',
      wechatLabel: '微信',
      wechatNote: '下单确认、交期与发票，请微信联系',
      extra: '支持对公转账；批量采购、运费与发票事项在下单前沟通确认。',
    },
    notes: {
      kicker: '购买须知',
      title: '交付与售后约定。',
      items: [
        '所列价格均为含税价格，运费另议；批量采购或指定品牌可微信沟通议价。',
        '电池适配、标签打印机规格、手套尺码及导热垫厚度请下单前确认，避免错发。',
        '清洁材料仅用于设备厂家允许的表面；胶带和密封条不得遮挡光学或射频窗口。',
        '商品按展示的规格与包装实际交付；如遇缺货可协商等价替代或全额退款。',
      ],
    },
  },
  en: {
    kicker: 'Consumables Store',
    headline: 'Robot & drone consumables, order any item.',
    lede: 'A parts store for robotics R&D, device maintenance, and drone users: from cleaning consumables and soldering to UWB positioning, vision calibration, and radar parts — clearly priced, scan to buy.',
    primaryCta: 'Browse Products',
    secondaryCta: 'Buy Now',
    badges: [`${productCount} items in stock`, 'Per-item ordering · Clear pricing', 'Scan to pay · WeChat confirm'],
    catalog: {
      kicker: 'Catalog',
      title: 'Shop by category.',
      description: 'All prices are tax-inclusive; shipping is quoted separately. Every item ships as the listed spec and packaging.',
      itemCount: 'items',
    },
    payment: {
      kicker: 'How to Buy',
      title: 'Three steps to order.',
      steps: [
        { title: 'Pick items', text: 'Choose item names and quantities from the catalog; combine multiple items in one order.' },
        { title: 'Confirm on WeChat', text: `Add WeChat ${wechat} to confirm items, delivery details, lead time, and invoicing.` },
        { title: 'Scan & pay', text: 'Scan with Alipay to pay.' },
      ],
      qrTitle: 'Alipay QR Code',
      qrNote: 'Open "Scan" inside Alipay to pay',
      wechatQrTitle: 'WeChat QR Code',
      wechatQrNote: 'Scan with WeChat to add contact and confirm orders',
      wechatLabel: 'WeChat',
      wechatNote: 'Order confirmation, lead time, and invoicing via WeChat',
      extra: 'Bank transfer supported; bulk orders, tax, shipping, and invoicing are confirmed before ordering.',
    },
    notes: {
      kicker: 'Purchase Notes',
      title: 'Delivery and terms.',
      items: [
        'All prices are tax-inclusive; shipping is quoted separately. Bulk orders or brand preferences can be discussed on WeChat.',
        'Confirm battery fit, label printer spec, glove size, and thermal pad thickness before ordering to avoid mismatches.',
        'Cleaning materials apply only to surfaces allowed by device manufacturers; tape and sealing strips must not cover optical or RF windows.',
        'Items ship as the listed spec and packaging; if an item is out of stock, an equivalent substitute or full refund can be arranged.',
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
      <div className="section-container hero-content flex min-h-[58svh] flex-col justify-center py-20 lg:py-24">
        <p className="section-kicker !text-[hsl(18_72%_62%)]">{c.kicker}</p>
        <h1 className="hero-headline mt-6 !text-[clamp(1.9rem,4.6vw,3.4rem)]">{c.headline}</h1>
        <p className="hero-lede mt-5">{c.lede}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
          {c.badges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-2">
              <BadgeCheck className="h-3.5 w-3.5 text-[hsl(18_72%_62%)]" />
              {badge}
            </span>
          ))}
        </div>
        <div className="hero-actions mt-10 flex flex-wrap gap-3">
          <a
            href="#catalog"
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

function ProductCard({ product, lang }: { product: Product; lang: 'zh' | 'en' }) {
  return (
    <div className="group flex flex-col border border-foreground/10 bg-[hsl(var(--paper))] transition hover:border-[hsl(18_72%_46%)]">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-foreground/10 bg-white">
        <Image
          src={product.image}
          alt={product.name[lang]}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 768px) 310px, 45vw"
          className="object-contain p-4 transition duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-sm font-semibold leading-6 text-foreground">{product.name[lang]}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-muted-foreground">{product.spec[lang]}</p>
        <p className="font-display mt-auto pt-3 text-lg font-bold tabular-nums text-[hsl(var(--copper))]">
          ¥{product.price}
          <span className="ml-1 text-xs font-medium normal-case tracking-normal text-muted-foreground">/ {product.unit[lang]}</span>
        </p>
      </div>
    </div>
  )
}

function CatalogSection() {
  const { language } = useLanguage()
  const lang = language === 'zh' ? 'zh' : 'en'
  const { catalog } = copy[lang]

  return (
    <section id="catalog" className="section-padding scroll-mt-16">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker">{catalog.kicker}</p>
          <h2 className="section-title">{catalog.title}</h2>
          <p className="section-lede">{catalog.description}</p>
        </div>

        {categories.map((cat, index) => (
          <div key={cat.id} className={index > 0 ? 'mt-16 border-t border-foreground/10 pt-12' : ''}>
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{cat.name[lang]}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cat.desc[lang]}</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {cat.items.length} {catalog.itemCount}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
              {cat.items.map((product) => (
                <ProductCard key={product.image} product={product} lang={lang} />
              ))}
            </div>
          </div>
        ))}
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

          <div className="order-1 flex flex-col items-start gap-8 lg:order-2">
            <div className="grid w-full grid-cols-2 gap-4 lg:max-w-sm">
              <div className="bg-white p-3 shadow-xl">
                <Image
                  src="/images/alipay-qr.jpg"
                  alt={payment.qrTitle}
                  width={512}
                  height={768}
                  sizes="(min-width: 1024px) 208px, 45vw"
                  className="h-auto w-full"
                  priority
                />
                <p className="font-display mt-2 text-center text-xs font-semibold text-[hsl(205_28%_34%)]">{payment.qrTitle}</p>
                <p className="mt-1 text-center text-[11px] leading-4 text-slate-500">{payment.qrNote}</p>
              </div>
              <div className="bg-white p-3 shadow-xl">
                <Image
                  src="/images/wechat-qr.jpg"
                  alt={payment.wechatQrTitle}
                  width={512}
                  height={652}
                  sizes="(min-width: 1024px) 208px, 45vw"
                  className="h-auto w-full"
                  priority
                />
                <p className="font-display mt-2 text-center text-xs font-semibold text-[hsl(150_45%_32%)]">{payment.wechatQrTitle}</p>
                <p className="mt-1 text-center text-[11px] leading-4 text-slate-500">{payment.wechatQrNote}</p>
              </div>
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
          {lang === 'zh' ? '商品目录' : 'Catalog'} · {productCount} {lang === 'zh' ? '项耗材单品在售' : 'items available'}
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
      <CatalogSection />
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
