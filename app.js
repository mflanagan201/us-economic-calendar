// US Economic Calendar — App Logic (macrocalendar style)

const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

let activeFilter = "all";
let searchQuery  = "";
let highOnly     = false;

// ── Utilities ──────────────────────────────────────────────────────────────

function parseDate(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(d) {
  return d.toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric", year: "numeric"
  });
}

function daysUntil(d) {
  return Math.ceil((d - TODAY) / 86400000);
}

function importanceRank(e) {
  return e.importance === "high" ? 0 : e.importance === "medium" ? 1 : 2;
}

// ── Filtered & sorted events ───────────────────────────────────────────────

function getFiltered() {
  return EVENTS
    .map(e => ({ ...e, _date: parseDate(e.date) }))
    .filter(e => activeFilter === "all" || e.source === activeFilter)
    .filter(e => !highOnly || e.importance === "high")
    .filter(e => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return e.name.toLowerCase().includes(q) || (e.description || "").toLowerCase().includes(q);
    })
    .sort((a, b) => a._date - b._date || importanceRank(a) - importanceRank(b));
}

// ── Impact dots HTML ──────────────────────────────────────────────────────

function impactDots(importance) {
  const levels = { high: 3, medium: 2, low: 1 };
  const n = levels[importance] || 1;
  const cls = `filled-${importance === "medium" ? "med" : importance}`;
  let dots = "";
  for (let i = 0; i < 3; i++) {
    dots += `<span class="impact-dot ${i < n ? cls : ""}"></span>`;
  }
  const label = importance.charAt(0).toUpperCase() + importance.slice(1);
  return `<div class="impact-wrap"><div class="impact-dots">${dots}</div><span class="impact-label">${label}</span></div>`;
}

// ── Source pill HTML ──────────────────────────────────────────────────────

function sourcePill(source) {
  const cls = { BLS: "pill-bls", BEA: "pill-bea", FED: "pill-fed" }[source] || "";
  return `<span class="source-pill ${cls}">${source}</span>`;
}

// ── Render table ──────────────────────────────────────────────────────────

function renderTable() {
  const events = getFiltered();
  const tbody = document.getElementById("events-body");
  const empty = document.getElementById("empty-msg");

  if (events.length === 0) {
    tbody.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  let html = "";
  let lastMonth = null;

  events.forEach(e => {
    const d = e._date;
    const isPast = d < TODAY;
    const isToday = daysUntil(d) === 0;

    const monthKey = d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    if (monthKey !== lastMonth) {
      html += `<tr class="month-row"><td colspan="7">${monthKey}</td></tr>`;
      lastMonth = monthKey;
    }

    const rowClass = isToday ? "data-row row-today" : isPast ? "data-row row-past" : "data-row";
    const weekday = d.toLocaleDateString("en-US", { weekday: "short" });
    const dayNum  = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const sepTag  = e.withSEP ? `<span class="sep-tag">SEP</span>` : "";

    const extIcon = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3"/>
      <path d="M10 2h4v4M14 2l-7 7"/>
    </svg>`;

    html += `<tr class="${rowClass}">
      <td class="cell-date">
        <div class="date-weekday">${weekday}</div>
        <div class="date-day">${dayNum}</div>
      </td>
      <td class="cell-time">${e.time}</td>
      <td class="cell-source">${sourcePill(e.source)}</td>
      <td class="cell-name">${e.name}${sepTag}</td>
      <td class="cell-impact">${impactDots(e.importance)}</td>
      <td class="cell-desc">${e.description}</td>
      <td class="cell-link"><a href="${e.url}" target="_blank" rel="noopener" class="ext-link" title="Official source">${extIcon}</a></td>
    </tr>`;
  });

  tbody.innerHTML = html;
}

// ── Next release countdown ─────────────────────────────────────────────────

function initCountdown() {
  const upcoming = EVENTS
    .map(e => ({ ...e, _date: parseDate(e.date) }))
    .filter(e => e._date >= TODAY)
    .sort((a, b) => a._date - b._date);

  if (!upcoming.length) return;
  const next = upcoming[0];

  document.getElementById("next-name").textContent = next.name;
  document.getElementById("next-date-str").textContent =
    next._date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }) +
    " · " + next.time;

  function tick() {
    const diff = next._date - new Date();
    if (diff <= 0) {
      document.getElementById("next-countdown").textContent = "Today";
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const parts = [];
    if (d > 0) parts.push(`${d}d`);
    parts.push(`${String(h).padStart(2,"0")}h`);
    parts.push(`${String(m).padStart(2,"0")}m`);
    parts.push(`${String(s).padStart(2,"0")}s`);
    document.getElementById("next-countdown").textContent = parts.join(" ");
  }
  tick();
  setInterval(tick, 1000);
}

// ── Clock ──────────────────────────────────────────────────────────────────

function updateClock() {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
    }) + " ET";
}

// ── Event listeners ────────────────────────────────────────────────────────

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderTable();
  });
});

document.getElementById("search").addEventListener("input", e => {
  searchQuery = e.target.value.trim();
  renderTable();
});

document.getElementById("high-only").addEventListener("change", e => {
  highOnly = e.target.checked;
  renderTable();
});

// ── Init ───────────────────────────────────────────────────────────────────

updateClock();
setInterval(updateClock, 1000);
renderTable();
initCountdown();
