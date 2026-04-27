import { useState } from "react";

/* ===== 売上フォーマット（ドル→円） ===== */
const formatJPY = (billionUSD: number) => {
  if (!billionUSD) return "—";

  const yen = billionUSD * 150 * 1_000_000_000; // 為替150円

  if (yen >= 1_000_000_000_000) {
    return (yen / 1_000_000_000_000).toFixed(2) + "兆円";
  }
  return (yen / 1_000_000_000).toFixed(0) + "億円";
};

const companies = [
  {
    id: 1,
    name: "ルネサスエレクトロニクス",
    ticker: "6723",
    typeCode: "chip",
    marketCapJPY: 2500,
    revenue2025: 1.0,
    revenueGrowth: "-8%",
    color: "#c8102e",
  },
  {
    id: 2,
    name: "ソニー",
    ticker: "6758",
    typeCode: "chip",
    marketCapJPY: 12000,
    revenue2025: 4.2,
    revenueGrowth: "+8%",
    color: "#000000",
  },
  {
    id: 3,
    name: "キオクシア",
    ticker: "285A",
    typeCode: "chip",
    marketCapJPY: 1200,
    revenue2025: 3.0,
    revenueGrowth: "+25%",
    color: "#e60012",
  },
  {
    id: 4,
    name: "ソシオネクスト",
    ticker: "6526",
    typeCode: "chip",
    marketCapJPY: 3704,
    revenue2025: 0.18,
    revenueGrowth: "-5%",
    color: "#0066cc",
  },
];

const typeLabels: Record<string, string> = {
  chip: "チップ",
};

export default function App() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? companies
      : companies.filter((c) => c.typeCode === filter);

  return (
    <div
      style={{
        background: "#0a0c10",
        minHeight: "100vh",
        color: "#fff",
        padding: 16,
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: 20, marginBottom: 16 }}>
        🇯🇵 日本の半導体企業
      </h1>

      {/* フィルター */}
      <div style={{ marginBottom: 16 }}>
        {["all", "chip"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              marginRight: 6,
              padding: "6px 10px",
              background: filter === f ? "#7c3aed" : "#222",
              color: "#fff",
              border: "none",
              borderRadius: 4,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* カード */}
      <div style={{ display: "grid", gap: 10 }}>
        {filtered.map((c) => (
          <div
            key={c.id}
            style={{
              border: "1px solid #333",
              borderRadius: 8,
              padding: 12,
              background: "#111",
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              {c.name} ({c.ticker})
            </div>

            <div style={{ fontSize: 12, color: "#aaa" }}>
              {typeLabels[c.typeCode]}
            </div>

            <div style={{ marginTop: 6, fontSize: 13 }}>
              時価総額:{" "}
              {c.marketCapJPY >= 10000
                ? (c.marketCapJPY / 10000).toFixed(1) + "兆円"
                : c.marketCapJPY + "億円"}
            </div>

            <div style={{ fontSize: 13 }}>
              売上: {formatJPY(c.revenue2025)} / {c.revenueGrowth}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
