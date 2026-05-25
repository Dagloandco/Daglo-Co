// AccessibilityPanel.tsx
//
// The Accessibility Adjustments panel provides a floating button that opens a panel
// containing language switching and reading accessibility controls.
//
// The panel is inspired by the OneTap widget you provided as a reference, but built as
// a custom component rather than relying on a third-party service. This keeps the
// implementation lightweight, gives you full control over the styling and behavior,
// and means there is no external dependency that could break or change over time.
//
// The features included are: language switching between English and French, font size
// adjustment with three steps for default, large, and extra-large, line height adjustment
// with the same three steps, a high contrast mode that darkens text and lightens
// backgrounds for stronger separation, and a reset button that returns all settings to
// their defaults. The panel also saves user preferences to localStorage so they persist
// across page loads, which is the expected behavior for accessibility tools.

"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../lib/LanguageContext";

// The accessibility settings type describes the four user-adjustable preferences that
// the panel manages. Font size and line height have three steps each, contrast is a
// simple toggle, and readable font swaps the serif headlines for a sans-serif treatment
// that some readers find easier to scan.
type A11ySettings = {
  fontSize: 0 | 1 | 2;
  lineHeight: 0 | 1 | 2;
  highContrast: boolean;
  readableFont: boolean;
};

const defaultSettings: A11ySettings = {
  fontSize: 0,
  lineHeight: 0,
  highContrast: false,
  readableFont: false,
};

export default function AccessibilityPanel() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaultSettings);

  // On mount, restore any saved settings from localStorage and apply them to the
  // document root element via CSS custom properties and data attributes. This pattern
  // lets the global stylesheet respond to the data attributes with appropriate styles
  // without requiring each component to know about the accessibility settings.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("daglo-a11y");
      if (saved) {
        const parsed = JSON.parse(saved) as A11ySettings;
        setSettings(parsed);
        applySettings(parsed);
      }
    } catch {
      // Silent fallback if localStorage read or JSON parse fails.
    }
  }, []);

  // The applySettings function writes the current settings to the document root as
  // data attributes. The global stylesheet picks these up and adjusts the visual
  // presentation accordingly. This keeps the styling logic in one place.
  const applySettings = (s: A11ySettings) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-font-size", String(s.fontSize));
    root.setAttribute("data-line-height", String(s.lineHeight));
    root.setAttribute("data-high-contrast", s.highContrast ? "true" : "false");
    root.setAttribute("data-readable-font", s.readableFont ? "true" : "false");
  };

  // The update function is the single way settings change. It updates state, applies
  // the new settings to the document, and writes them to localStorage. Centralizing
  // these three actions means we cannot accidentally update one without the others.
  const update = (next: A11ySettings) => {
    setSettings(next);
    applySettings(next);
    try {
      localStorage.setItem("daglo-a11y", JSON.stringify(next));
    } catch {
      // Silent fallback.
    }
  };

  const reset = () => update(defaultSettings);

  // The font size and line height controls cycle through three states using plus and
  // minus buttons. Both controls are capped at the boundaries so users cannot exceed
  // the defined range, which protects the layout from extreme values that would break
  // the design.
  const labels = ["Default", "Large", "Extra Large"];
  const labelsFr = ["Par défaut", "Grand", "Très grand"];
  const sizeLabel = language === "fr" ? labelsFr[settings.fontSize] : labels[settings.fontSize];
  const heightLabel = language === "fr" ? labelsFr[settings.lineHeight] : labels[settings.lineHeight];

  return (
    <>
      {/* The floating trigger button sits in the bottom right corner of the viewport.
          Clicking it opens the accessibility panel. The button uses fixed positioning
          so it stays in place as the user scrolls, which is the standard pattern for
          persistent accessibility widgets. */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label={t("a11y.open")}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#0a1f3d",
          color: "#ffffff",
          border: "2px solid #ffffff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9998,
          transition: "transform 0.2s ease, background-color 0.2s ease",
        }}
        className="a11y-trigger"
      >
        {/* The accessibility icon is the standard universal accessibility symbol of a
            person with arms outstretched. We render it inline as SVG so there are no
            external image dependencies. */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
        </svg>
      </button>

      {/* The panel itself only renders when open, which keeps the DOM lighter when the
          panel is closed and prevents the panel from being a focus trap for keyboard
          users who do not need it. */}
      {isOpen && (
        <>
          {/* The backdrop dims the page content behind the panel and closes the panel
              when clicked outside the panel itself. */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(6, 23, 48, 0.6)",
              zIndex: 9999,
            }}
          />

          {/* The panel container slides in from the right and contains all the
              accessibility controls. */}
          <div
            role="dialog"
            aria-label={t("a11y.title")}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "420px",
              backgroundColor: "#ffffff",
              boxShadow: "-8px 0 32px rgba(0,0,0,0.2)",
              zIndex: 10000,
              overflowY: "auto",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {/* The panel header has the navy background that matches the site brand,
                with the title, subtitle, and close button. The language switcher sits
                at the very top of the header because language is the most important
                control on the panel. */}
            <div
              style={{
                backgroundColor: "#0a1f3d",
                color: "#ffffff",
                padding: "24px 24px 32px 24px",
                textAlign: "center",
              }}
            >
              {/* Language switcher at the top of the header. The two buttons toggle
                  between English and French with a clear visual indication of the
                  current selection. */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => setLanguage("en")}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      border: language === "en" ? "1px solid #d4b97f" : "1px solid rgba(255,255,255,0.3)",
                      backgroundColor: language === "en" ? "#d4b97f" : "transparent",
                      color: language === "en" ? "#0a1f3d" : "#ffffff",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {t("a11y.english")}
                  </button>
                  <button
                    onClick={() => setLanguage("fr")}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: 500,
                      border: language === "fr" ? "1px solid #d4b97f" : "1px solid rgba(255,255,255,0.3)",
                      backgroundColor: language === "fr" ? "#d4b97f" : "transparent",
                      color: language === "fr" ? "#0a1f3d" : "#ffffff",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {t("a11y.french")}
                  </button>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label={t("a11y.close")}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    cursor: "pointer",
                    fontSize: "18px",
                    lineHeight: 1,
                  }}
                >
                  ×
                </button>
              </div>

              {/* The accessibility icon and title sit centered in the header. */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#0a1f3d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  margin: 0,
                  marginBottom: "6px",
                }}
              >
                {t("a11y.title")}
              </h2>
              <p style={{ fontSize: "13px", color: "#c0bdb5", margin: 0 }}>
                {t("a11y.subtitle")}
              </p>
            </div>

            <div style={{ padding: "24px" }}>
              {/* Content module section contains the font size, line height, and
                  readable font controls. These adjust how text renders across the site. */}
              <h3
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#5a5a58",
                  margin: 0,
                  marginBottom: "12px",
                }}
              >
                {t("a11y.content")}
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                {/* Font size control with plus and minus buttons cycling through
                    three states. */}
                <div
                  style={{
                    backgroundColor: "#f5f2ec",
                    borderRadius: "8px",
                    padding: "16px 12px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "12px", color: "#0a1f3d" }}>
                    {t("a11y.fontsize")}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    <button
                      onClick={() =>
                        update({
                          ...settings,
                          fontSize: Math.max(0, settings.fontSize - 1) as 0 | 1 | 2,
                        })
                      }
                      aria-label="Decrease font size"
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "#0a1f3d",
                        color: "#ffffff",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        lineHeight: 1,
                      }}
                    >
                      −
                    </button>
                    <div style={{ fontSize: "12px", color: "#3a3a38", minWidth: "70px" }}>
                      {sizeLabel}
                    </div>
                    <button
                      onClick={() =>
                        update({
                          ...settings,
                          fontSize: Math.min(2, settings.fontSize + 1) as 0 | 1 | 2,
                        })
                      }
                      aria-label="Increase font size"
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "#0a1f3d",
                        color: "#ffffff",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Readable font toggle. */}
                <button
                  onClick={() => update({ ...settings, readableFont: !settings.readableFont })}
                  style={{
                    backgroundColor: settings.readableFont ? "#0a1f3d" : "#f5f2ec",
                    color: settings.readableFont ? "#ffffff" : "#0a1f3d",
                    borderRadius: "8px",
                    padding: "16px 12px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                >
                  {t("a11y.readable")}
                </button>

                {/* Line height control matching the font size pattern. */}
                <div
                  style={{
                    backgroundColor: "#f5f2ec",
                    borderRadius: "8px",
                    padding: "16px 12px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "12px", color: "#0a1f3d" }}>
                    {t("a11y.lineheight")}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                    <button
                      onClick={() =>
                        update({
                          ...settings,
                          lineHeight: Math.max(0, settings.lineHeight - 1) as 0 | 1 | 2,
                        })
                      }
                      aria-label="Decrease line height"
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "#0a1f3d",
                        color: "#ffffff",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        lineHeight: 1,
                      }}
                    >
                      −
                    </button>
                    <div style={{ fontSize: "12px", color: "#3a3a38", minWidth: "70px" }}>
                      {heightLabel}
                    </div>
                    <button
                      onClick={() =>
                        update({
                          ...settings,
                          lineHeight: Math.min(2, settings.lineHeight + 1) as 0 | 1 | 2,
                        })
                      }
                      aria-label="Increase line height"
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "#0a1f3d",
                        color: "#ffffff",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* High contrast toggle. */}
                <button
                  onClick={() => update({ ...settings, highContrast: !settings.highContrast })}
                  style={{
                    backgroundColor: settings.highContrast ? "#0a1f3d" : "#f5f2ec",
                    color: settings.highContrast ? "#ffffff" : "#0a1f3d",
                    borderRadius: "8px",
                    padding: "16px 12px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                >
                  {t("a11y.highcontrast")}
                </button>
              </div>

              {/* Reset button returns all settings to defaults but leaves the language
                  selection alone since language is a separate concern from accessibility. */}
              <button
                onClick={reset}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "8px",
                  backgroundColor: "#0a1f3d",
                  color: "#ffffff",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                }}
              >
                {t("a11y.reset")}
              </button>
            </div>
          </div>
        </>
      )}

      {/* Inline styles for the trigger button hover state. */}
      <style>{`
        .a11y-trigger:hover {
          transform: scale(1.05);
          background-color: #061730 !important;
        }
      `}</style>
    </>
  );
}
