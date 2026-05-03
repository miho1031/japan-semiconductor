import { useState } from "react";

const companies = [
  // チップ設計・製造
  {
    id: 1,
    name: "ルネサスエレクトロニクス",
    ticker: "6723",
    type: "チップ設計・製造",
    typeCode: "chip",
    founded: 2002,
    origin: "三菱電機・日立・NEC半導体事業統合",
    marketCapJPY: 2500,
    employees: 21000,
    revenueOku: 1500,
    revenueGrowth: "-8%",
    worldShare: "車載マイコン世界首位（約30%）",
    specialty: "車載マイコン・産業用半導体",
    keyProducts: "RH850車載MCU、RA産業MCU、電源IC",
    relations: ["NXP・Infineon（競合）", "TSMC（製造委託）", "日系自動車OEM全社（顧客）"],
    moat: "車載マイコン世界首位・安全規格対応の高い参入障壁",
    color: "#c8102e",
    globalRank: "世界18位（売上）",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 2,
    name: "ソニーグループ（半導体）",
    ticker: "6758",
    type: "チップ設計・製造",
    typeCode: "chip",
    founded: 1946,
    origin: "イメージセンサー部門が主力",
    marketCapJPY: 12000,
    employees: 13000,
    revenueOku: 6300,
    revenueGrowth: "+8%",
    worldShare: "CMOSイメージセンサー世界首位（約50%）",
    specialty: "CMOSイメージセンサー・AI対応センサー",
    keyProducts: "Exmor CMOSセンサー、LiDARセンサー",
    relations: ["Apple・Samsung・Huawei（顧客）", "TSMC（製造委託）"],
    moat: "スマホカメラセンサー市場独占・車載センサーへ拡大中",
    color: "#000000",
    globalRank: "世界12位（売上）",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 3,
    name: "キオクシアHD",
    ticker: "285A",
    type: "チップ設計・製造",
    typeCode: "chip",
    founded: 2017,
    origin: "東芝メモリから分社化・2019年改名",
    marketCapJPY: 1200,
    employees: 19000,
    revenueOku: 4500,
    revenueGrowth: "+25%",
    worldShare: "NANDフラッシュメモリ世界3位（約20%）",
    specialty: "NAND型フラッシュメモリ・SSD",
    keyProducts: "BiCS FLASH、SSD、SDメモリカード",
    relations: ["Western Digital（協業・旧JV）", "Samsung・SK Hynix（競合）", "AI向けデータセンター（顧客）"],
    moat: "NANDフラッシュ世界3位・AI向けデータセンター需要で成長中",
    color: "#e60012",
    globalRank: "世界15位（売上）",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 4,
    name: "ソシオネクスト",
    ticker: "6526",
    type: "チップ設計・製造",
    typeCode: "chip",
    founded: 2022,
    origin: "富士通・Panasonicの半導体設計部門統合",
    marketCapJPY: 500,
    employees: 3000,
    revenueOku: 270,
    revenueGrowth: "-5%",
    worldShare: "日本唯一のファブレス大手",
    specialty: "カスタムSoC設計（データセンター・車載・ネットワーク）",
    keyProducts: "データセンター向けSoC、車載SoC",
    relations: ["TSMC（製造委託）", "Arm（IP利用）", "富士通・Panasonic（親会社）"],
    moat: "日本唯一の本格ファブレス・高付加価値カスタム設計",
    color: "#0066cc",
    globalRank: "国内ファブレス唯一の大手",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 5,
    name: "ローム",
    ticker: "6963",
    type: "チップ設計・製造",
    typeCode: "chip",
    founded: 1958,
    origin: "京都発・抵抗器から半導体へ",
    marketCapJPY: 800,
    employees: 23000,
    revenueOku: 585,
    revenueGrowth: "-3%",
    worldShare: "SiCパワー半導体で世界3位",
    specialty: "パワー半導体・SiC・アナログIC",
    keyProducts: "SiC MOSFET、ゲートドライバIC、LED",
    relations: ["東芝（SiC事業で協業交渉）", "Infineon・ON Semi（競合）", "EV・産業機器メーカー（顧客）"],
    moat: "SiCパワー半導体世界3位・EV普及で需要急増",
    color: "#cc0000",
    globalRank: "SiCパワー半導体世界3位",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 6,
    name: "富士電機",
    ticker: "6504",
    type: "チップ設計・製造",
    typeCode: "chip",
    founded: 1923,
    origin: "ドイツ・シーメンスとの合弁が起源",
    marketCapJPY: 700,
    employees: 27000,
    revenueOku: 675,
    revenueGrowth: "+5%",
    worldShare: "IGBTパワー半導体で世界3〜4位",
    specialty: "IGBTパワー半導体・インバータ",
    keyProducts: "IGBT、SiC、パワーモジュール",
    relations: ["三菱電機・東芝（競合）", "EV・鉄道・産業機器メーカー（顧客）"],
    moat: "IGBT世界上位・インバータ垂直統合",
    color: "#cc6600",
    globalRank: "IGBTパワー半導体世界3〜4位",
    url: "https://tradercat.site/test.html",
  },

  // 製造装置
  {
    id: 7,
    name: "東京エレクトロン（TEL）",
    ticker: "8035",
    type: "製造装置",
    typeCode: "equipment",
    founded: 1963,
    origin: "日本発・半導体・FPD製造装置",
    marketCapJPY: 5500,
    employees: 16000,
    revenueOku: 3150,
    revenueGrowth: "+18%",
    worldShare: "半導体製造装置世界3位",
    specialty: "エッチング・CVD・コータ/デベロッパ装置",
    keyProducts: "Tactras エッチャー、TELL CVD、ACT コータ",
    relations: ["TSMC・Samsung・Intel（顧客）", "ASML（補完関係）", "Lam Research・AMAT（競合）"],
    moat: "製造装置世界3位・コータ/デベロッパで首位",
    color: "#cc0000",
    globalRank: "製造装置世界3位",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 8,
    name: "アドバンテスト",
    ticker: "6857",
    type: "製造装置",
    typeCode: "equipment",
    founded: 1954,
    origin: "安藤電気から独立",
    marketCapJPY: 4200,
    employees: 5000,
    revenueOku: 1200,
    revenueGrowth: "+42%",
    worldShare: "半導体テスター世界首位（約50%）",
    specialty: "半導体テスト装置（SoC・メモリ・HBM）",
    keyProducts: "V93000 SoCテスター、T2000 メモリテスター",
    relations: ["TSMC・Samsung・Micron（顧客）", "Teradyne（競合）", "NVIDIAのHBMテストも担当"],
    moat: "テスター世界首位・HBMテスト需要でAI恩恵直撃",
    color: "#003087",
    globalRank: "テスター世界首位",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 9,
    name: "ディスコ",
    ticker: "6146",
    type: "製造装置",
    typeCode: "equipment",
    founded: 1937,
    origin: "ダイヤモンド工具メーカーが起源",
    marketCapJPY: 3000,
    employees: 5000,
    revenueOku: 675,
    revenueGrowth: "+20%",
    worldShare: "ダイシング・研削装置で世界シェア8割超",
    specialty: "ウェーハダイシング・研削・研磨装置",
    keyProducts: "Disco ダイサー、グラインダー、ポリッシャー",
    relations: ["世界中の半導体メーカー全社が顧客", "事実上の独占"],
    moat: "ダイシング装置世界シェア80%超・代替ほぼ不可能",
    color: "#0066cc",
    globalRank: "ダイシング装置世界首位（8割超）",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 10,
    name: "レーザーテック",
    ticker: "6920",
    type: "製造装置",
    typeCode: "equipment",
    founded: 1960,
    origin: "レーザー応用計測機器メーカー",
    marketCapJPY: 2000,
    employees: 1600,
    revenueOku: 525,
    revenueGrowth: "+30%",
    worldShare: "EUVマスク検査装置で世界唯一",
    specialty: "EUVフォトマスク欠陥検査装置",
    keyProducts: "ACTIS A300 EUVマスク検査装置",
    relations: ["TSMC・Samsung・Intel（顧客）", "ASML（補完関係・EUV生態系の一員）"],
    moat: "EUVマスク検査で世界唯一・ASMLと並ぶ不可欠ポジション",
    color: "#e60026",
    globalRank: "EUVマスク検査装置で世界唯一",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 11,
    name: "SCREEN HD",
    ticker: "7735",
    type: "製造装置",
    typeCode: "equipment",
    founded: 1943,
    origin: "大日本スクリーン製造が前身",
    marketCapJPY: 600,
    employees: 6000,
    revenueOku: 525,
    revenueGrowth: "+12%",
    worldShare: "洗浄装置で世界2〜3位",
    specialty: "ウェーハ洗浄装置・熱処理装置",
    keyProducts: "SU-3300洗浄装置、縦型熱処理炉",
    relations: ["TSMC・Samsung（顧客）", "TEL（競合）"],
    moat: "洗浄装置で世界上位・枚葉洗浄に強み",
    color: "#336699",
    globalRank: "洗浄装置世界2〜3位",
    url: "https://tradercat.site/test.html",
  },

  // 素材・ウェーハ
  {
    id: 12,
    name: "信越化学工業",
    ticker: "4063",
    type: "素材・ウェーハ",
    typeCode: "material",
    founded: 1926,
    origin: "電気化学工業から分離独立",
    marketCapJPY: 8000,
    employees: 23000,
    revenueOku: 3000,
    revenueGrowth: "+4%",
    worldShare: "シリコンウェーハ世界首位（約30%）・フォトレジスト世界首位",
    specialty: "シリコンウェーハ・フォトレジスト・塩化ビニル",
    keyProducts: "300mm シリコンウェーハ、SOIウェーハ、KrFフォトレジスト",
    relations: ["TSMC・Samsung・Intel（顧客）", "SUMCO（競合）"],
    moat: "ウェーハ世界首位＋フォトレジスト首位・二冠の希少企業",
    color: "#cc0000",
    globalRank: "ウェーハ世界首位・フォトレジスト世界首位",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 13,
    name: "SUMCO",
    ticker: "3436",
    type: "素材・ウェーハ",
    typeCode: "material",
    founded: 1999,
    origin: "三菱マテリアルシリコン等が統合",
    marketCapJPY: 600,
    employees: 11000,
    revenueOku: 420,
    revenueGrowth: "-5%",
    worldShare: "シリコンウェーハ世界2位（約25%）",
    specialty: "シリコンウェーハ",
    keyProducts: "300mm・200mm シリコンウェーハ",
    relations: ["信越化学（競合・同じ寡占）", "世界中の半導体メーカー（顧客）"],
    moat: "ウェーハ世界2位・信越化学と2社で世界の55%を供給",
    color: "#0066cc",
    globalRank: "ウェーハ世界2位",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 14,
    name: "JSR",
    ticker: "4185（非上場化）",
    type: "素材・ウェーハ",
    typeCode: "material",
    founded: 1957,
    origin: "日本合成ゴム株式会社が前身",
    marketCapJPY: null,
    employees: 10000,
    revenueOku: 360,
    revenueGrowth: "+6%",
    worldShare: "フォトレジスト世界2〜3位・ArF液浸で首位級",
    specialty: "フォトレジスト・半導体材料",
    keyProducts: "ArF液浸フォトレジスト、EUVレジスト",
    relations: ["信越化学・東京応化（競合）", "TSMC・Samsung（顧客）"],
    moat: "ArF液浸レジストで世界首位級・2023年に産業革新投資機構が買収",
    color: "#336699",
    globalRank: "フォトレジスト世界2〜3位",
    url: "https://tradercat.site/test.html",
  },

  // 後工程・パッケージ
  {
    id: 15,
    name: "イビデン",
    ticker: "4062",
    type: "後工程・パッケージ",
    typeCode: "package",
    founded: 1912,
    origin: "揖斐川電力（水力発電）が起源",
    marketCapJPY: 1200,
    employees: 16000,
    revenueOku: 825,
    revenueGrowth: "+28%",
    worldShare: "FC-BGA基板（フリップチップ）世界首位",
    specialty: "AIサーバー向けパッケージ基板・FC-BGA",
    keyProducts: "FC-BGA半導体パッケージ基板",
    relations: ["Intel・NVIDIA（主要顧客）", "新光電気工業（競合）"],
    moat: "AI向けFC-BGA基板で世界首位・Intelとの長期関係",
    color: "#003087",
    globalRank: "FC-BGA基板世界首位",
    url: "https://tradercat.site/test.html",
  },
  {
    id: 16,
    name: "新光電気工業",
    ticker: "6967",
    type: "後工程・パッケージ",
    typeCode: "package",
    founded: 1949,
    origin: "富士通系列の半導体パッケージメーカー",
    marketCapJPY: 400,
    employees: 9000,
    revenueOku: 420,
    revenueGrowth: "+15%",
    worldShare: "FC-BGA基板世界2〜3位",
    specialty: "半導体パッケージ基板・リードフレーム",
    keyProducts: "FC-BGA基板、CSP基板",
    relations: ["富士通（親会社）", "イビデン（競合）", "Intel（顧客）"],
    moat: "FC-BGA世界上位・富士通グループのバックアップ",
    color: "#cc6600",
    globalRank: "FC-BGA基板世界2〜3位",
    url: "https://tradercat.site/test.html",
  },

  // 国策・次世代
  {
    id: 17,
    name: "Rapidus",
    ticker: "非上場",
    type: "次世代ファウンドリ",
    typeCode: "next",
    founded: 2022,
    origin: "日本政府主導・トヨタ・ソニー等8社出資",
    marketCapJPY: null,
    employees: 1000,
    revenueOku: 0,
    revenueGrowth: "—",
    worldShare: "2027年2nm量産目標",
    specialty: "2nm以降の最先端ロジック半導体製造",
    keyProducts: "2nmロジックチップ（量産目標2027年）",
    relations: ["IBM（技術提携）", "IMEC（研究協力）", "TEL・レーザーテック（装置供給）", "トヨタ・ソニー・NTT・SB等（出資）"],
    moat: "日本政府の国策・1兆円超の補助金・TSMC対抗の最後の切り札",
    color: "#cc0000",
    globalRank: "2026年4月から2nm試作ライン本格稼働",
    url: "https://tradercat.site/test.html",
  },
];

const typeLabels = {
  chip: { label: "チップ設計・製造", color: "#e04040" },
  equipment: { label: "製造装置", color: "#059669" },
  material: { label: "素材・ウェーハ", color: "#d97706" },
  package: { label: "後工程・パッケージ", color: "#7c3aed" },
  next: { label: "次世代ファウンドリ", color: "#0284c7" },
};

export default function App() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("marketCapJPY");

  const filtered = companies
    .filter((c) => filter === "all" || c.typeCode === filter)
    .sort((a, b) => {
      if (sortBy === "marketCapJPY") return (b.marketCapJPY || 0) - (a.marketCapJPY || 0);
      if (sortBy === "revenue2025") return b.revenueOku - a.revenueOku;
      if (sortBy === "founded") return a.founded - b.founded;
      return 0;
    });

  return (
    <div style={{
      fontFamily: "'Hiragino Sans', 'Noto Sans JP', sans-serif",
      background: "#0a0c10",
      minHeight: "100vh",
      color: "#e8e8f0",
    }}>
{/* Nav */}
<div className="nav-pad" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 40px", borderBottom: "1px solid #1e1e3a", background: "#0a0a0f" }}>
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="30" height="30" rx="6" fill="#0d0d1a"/>
      <rect x="5" y="13" width="4" height="4" rx="0.5" fill="#4a2a8a"/>
      <rect x="13" y="5" width="4" height="4" rx="0.5" fill="#4a2a8a"/>
      <rect x="13" y="13" width="4" height="4" rx="0.5" fill="#c4b5fd"/>
      <rect x="21" y="13" width="4" height="4" rx="0.5" fill="#4a2a8a"/>
      <rect x="13" y="21" width="4" height="4" rx="0.5" fill="#4a2a8a"/>
      <line x1="9" y1="15" x2="13" y2="15" stroke="#2a1a4a" strokeWidth="1"/>
      <line x1="17" y1="15" x2="21" y2="15" stroke="#2a1a4a" strokeWidth="1"/>
      <line x1="15" y1="9" x2="15" y2="13" stroke="#2a1a4a" strokeWidth="1"/>
      <line x1="15" y1="17" x2="15" y2="21" stroke="#2a1a4a" strokeWidth="1"/>
    </svg>
    <div>
      <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: "0.06em", color: "#f0f0ff" }}>TraderCat</div>
      <div style={{ fontSize: 9, letterSpacing: "0.25em", color: "#6060aa", textTransform: "uppercase" }}>Market Intelligence</div>
    </div>
  </div>
  <a href="https://tradercat-top.vercel.app/" style={{textDecoration:'none'}}>
    <button style={{ fontSize: 12, border: "1px solid #2a2a4a", background: "transparent", color: "#a0a0cc", padding: "7px 16px", borderRadius: 5, cursor: "pointer", letterSpacing: "0.05em", fontFamily: "inherit" }}>
      ← TOP
    </button>
  </a>
</div>


      
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0a0c10 0%, #101828 50%, #0a0c10 100%)",
        borderBottom: "1px solid #1e2a3a",
        padding: "28px 24px 20px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: "#4a6a8a", marginBottom: 6, textTransform: "uppercase" }}>
            Japan Semiconductor Intelligence 2026
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 4px", letterSpacing: "-0.02em" }}>
            🇯🇵 日本の半導体企業 完全マップ<br>売上などの数字に間違いが見つかりました。只今修正中になります。2026.5.1
          </h1>
          <p style={{ color: "#4a6a8a", fontSize: 13, margin: "0 0 20px" }}>
            チップ設計・製造装置・素材・後工程・次世代ファウンドリ — 全分野網羅
          </p>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {[
              { label: "掲載企業数", value: `${companies.length}社` },
              { label: "装置・材料の世界首位企業", value: "6社" },
              { label: "国策Rapidus 2nm試作", value: "2026年稼働" },
              { label: "日本地域市場（2026予測）", value: "前年比-4%" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 10, color: "#4a6a8a", marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#60a5fa" }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 16px" }}>

        {/* Japan's strength map */}
        <div style={{
          background: "#0d1218",
          border: "1px solid #1e2a3a",
          borderRadius: 12,
          padding: "16px 20px",
          marginBottom: 20,
        }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#4a6a8a", marginBottom: 12, textTransform: "uppercase" }}>
            日本の強み：バリューチェーン別ポジション
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "チップ製造", strength: "△ 苦手", note: "Rapidusが挽回中", color: "#f97316" },
              { label: "製造装置", strength: "◎ 世界首位級", note: "TEL・ディスコ・アドバンテスト", color: "#22c55e" },
              { label: "シリコンウェーハ", strength: "◎ 世界首位", note: "信越化学・SUMCO で世界55%", color: "#22c55e" },
              { label: "フォトレジスト", strength: "◎ 世界首位", note: "信越化学・JSR", color: "#22c55e" },
              { label: "パッケージ基板", strength: "○ 世界上位", note: "イビデン・新光電気", color: "#60a5fa" },
              { label: "パワー半導体", strength: "○ 世界上位", note: "ローム・富士電機・三菱電機", color: "#60a5fa" },
              { label: "イメージセンサー", strength: "◎ 世界首位", note: "ソニー 世界シェア50%", color: "#22c55e" },
            ].map((item) => (
              <div key={item.label} style={{
                background: "#080c14",
                border: `1px solid ${item.color}30`,
                borderRadius: 8,
                padding: "8px 12px",
                minWidth: 140,
              }}>
                <div style={{ fontSize: 11, color: "#a0b0c0", marginBottom: 3 }}>{item.label}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: item.color, marginBottom: 3 }}>{item.strength}</div>
                <div style={{ fontSize: 10, color: "#4a6a8a" }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
          {[
            { code: "all", label: "全企業" },
            { code: "chip", label: "チップ設計・製造" },
            { code: "equipment", label: "製造装置" },
            { code: "material", label: "素材・ウェーハ" },
            { code: "package", label: "後工程" },
            { code: "next", label: "次世代" },
          ].map((f) => (
            <button key={f.code} onClick={() => setFilter(f.code)} style={{
              background: filter === f.code ? "#1e3a5f" : "#0d1218",
              border: `1px solid ${filter === f.code ? "#3b82f6" : "#1e2a3a"}`,
              borderRadius: 6,
              padding: "5px 12px",
              fontSize: 12,
              color: filter === f.code ? "#60a5fa" : "#6a8aaa",
              cursor: "pointer",
              fontFamily: "inherit",
            }}>{f.label}</button>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#4a6a8a" }}>並び替え:</span>
            {[
              { key: "marketCapJPY", label: "時価総額" },
              { key: "revenue2025", label: "売上" },
              { key: "founded", label: "創業年" },
            ].map((s) => (
              <button key={s.key} onClick={() => setSortBy(s.key)} style={{
                background: sortBy === s.key ? "#1e3a5f" : "#0d1218",
                border: `1px solid ${sortBy === s.key ? "#3b82f6" : "#1e2a3a"}`,
                borderRadius: 6,
                padding: "4px 10px",
                fontSize: 11,
                color: sortBy === s.key ? "#60a5fa" : "#6a8aaa",
                cursor: "pointer",
                fontFamily: "inherit",
              }}>{s.label}</button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 10,
          marginBottom: 28,
        }}>
          {filtered.map((company) => {
            const type = typeLabels[company.typeCode];
            const isSelected = selected === company.id;
            return (
              <div
                key={company.id}
                onClick={() => setSelected(isSelected ? null : company.id)}
                style={{
                  background: isSelected ? "#0d1828" : "#0d1218",
                  border: `1px solid ${isSelected ? company.color + "60" : "#1e2a3a"}`,
                  borderRadius: 10,
                  padding: "14px",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: company.color,
                  opacity: isSelected ? 1 : 0.5,
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 2 }}>
                      <a href={company.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ color: "#f0f0ff", textDecoration: "none", borderBottom: "1px solid #3a5a8a" }}>
                        {company.name}
                      </a>
                    </div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <span style={{ fontSize: 10, color: "#4a6a8a" }}>{company.ticker}</span>
                      <span style={{
                        fontSize: 10,
                        background: type.color + "20",
                        color: type.color,
                        border: `1px solid ${type.color}40`,
                        borderRadius: 4,
                        padding: "1px 6px",
                      }}>{type.label}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    {company.marketCapJPY ? (
                      <>
                        <div style={{ fontSize: 16, fontWeight: 700, color: "#93c5fd" }}>
                          {company.marketCapJPY >= 10000 ? (company.marketCapJPY / 10000).toFixed(1) + "兆円" : company.marketCapJPY + "億円"}
                        </div>
                        <div style={{ fontSize: 10, color: "#4a6a8a" }}>時価総額（概算）</div>
                      </>
                    ) : (
                      <div style={{ fontSize: 12, color: "#4a6a8a" }}>非上場</div>
                    )}
                  </div>
                </div>

                {/* World share badge */}
                <div style={{
                  background: "#080c14",
                  border: "1px solid #1e2a3a",
                  borderRadius: 6,
                  padding: "5px 10px",
                  marginBottom: 8,
                  fontSize: 11,
                  color: "#fbbf24",
                  fontWeight: 600,
                }}>
                  🌍 {company.worldShare}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 8 }}>
                  {[
                    { label: "創業", value: company.founded + "年" },
                    { label: "売上(概算)", value: company.revenueOku > 0 ? `${company.revenueOku.toLocaleString()}億円` : "試作中" },
                    { label: "社員数", value: company.employees >= 10000 ? (company.employees / 10000).toFixed(1) + "万人" : company.employees.toLocaleString() + "人" },
                  ].map((m) => (
                    <div key={m.label} style={{
                      background: "#080c14",
                      borderRadius: 5,
                      padding: "5px 7px",
                    }}>
                      <div style={{ fontSize: 9, color: "#4a6a8a", marginBottom: 1 }}>{m.label}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#c0d0e0" }}>{m.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: 11, color: "#6a8aaa", marginBottom: 6 }}>{company.specialty}</div>

                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: company.revenueGrowth.startsWith("+") ? "#34d399" : company.revenueGrowth === "—" ? "#94a3b8" : "#f87171",
                    background: company.revenueGrowth.startsWith("+") ? "#34d39918" : "#f8717118",
                    borderRadius: 4,
                    padding: "2px 8px",
                  }}>売上成長 {company.revenueGrowth}</span>
                  <span style={{ fontSize: 10, color: "#4a6a8a" }}>起源: {company.origin}</span>
                </div>

                {isSelected && (
                  <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid #1e2a3a" }}>
                    <div style={{ marginBottom: 8 }}>
                      <div style={{ fontSize: 10, color: "#4a6a8a", marginBottom: 3 }}>主力製品</div>
                      <div style={{ fontSize: 11, color: "#b0c0d0" }}>{company.keyProducts}</div>
                    </div>
                    <div style={{ marginBottom: 8 }}>
                      <div style={{ fontSize: 10, color: "#4a6a8a", marginBottom: 3 }}>競合・取引関係</div>
                      {company.relations.map((r, i) => (
                        <div key={i} style={{
                          fontSize: 11, color: "#8a9aaa",
                          background: "#080c14",
                          borderRadius: 4,
                          padding: "2px 8px",
                          marginBottom: 2,
                        }}>· {r}</div>
                      ))}
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: "#4a6a8a", marginBottom: 3 }}>競争優位（モート）</div>
                      <div style={{
                        fontSize: 11, color: "#fbbf24",
                        background: "#fbbf2410",
                        border: "1px solid #fbbf2430",
                        borderRadius: 6,
                        padding: "6px 10px",
                      }}>{company.moat}</div>
                    </div>
                    {company.globalRank && (
                      <div style={{ marginTop: 8 }}>
                        <div style={{ fontSize: 10, color: "#4a6a8a", marginBottom: 3 }}>グローバルポジション</div>
                        <div style={{
                          fontSize: 11, color: "#60a5fa",
                          background: "#60a5fa10",
                          border: "1px solid #60a5fa30",
                          borderRadius: 6,
                          padding: "5px 10px",
                        }}>{company.globalRank}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Key insight */}
        <div style={{
          background: "#0d1218",
          border: "1px solid #1e3a2a",
          borderRadius: 12,
          padding: "16px 20px",
          marginBottom: 20,
        }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#4a8a6a", marginBottom: 10, textTransform: "uppercase" }}>
            投資家向け Key Insight
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
            {[
              { title: "「縁の下の力持ち」戦略", body: "日本はチップそのものより装置・材料で世界を支配。信越化学・SUMCO・ディスコはNVIDIAやTSMCなしに機能しない。", color: "#22c55e" },
              { title: "Rapidusは中長期の賭け", body: "2027年2nm量産目標。非上場だが出資企業（トヨタ・ソニー等）や装置供給企業（TEL・レーザーテック）が間接的な受益者。", color: "#60a5fa" },
              { title: "AI需要の直撃銘柄", body: "アドバンテスト（HBMテスト首位）・ディスコ（後工程独占）・レーザーテック（EUVマスク唯一）はAIブームの恩恵が直接届く。", color: "#fbbf24" },
              { title: "パワー半導体はEV次第", body: "ローム・富士電機・三菱電機のSiC/IGBTはEV普及速度に連動。地政学リスクは低く長期成長テーマ。", color: "#f97316" },
            ].map((item) => (
              <div key={item.title} style={{
                background: "#080c14",
                border: `1px solid ${item.color}20`,
                borderRadius: 8,
                padding: "10px 12px",
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: item.color, marginBottom: 5 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: "#7a8a9a", lineHeight: 1.6 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 11, color: "#2a3a4a", textAlign: "center", paddingBottom: 20 }}>
          ※ 時価総額・売上は2025年度概算値（一部推定含む）。非上場企業は時価総額非表示。カードをタップで詳細展開。
        </div>
      </div>
    </div>
  );
}
