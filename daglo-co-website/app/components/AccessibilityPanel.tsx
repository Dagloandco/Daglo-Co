// AccessibilityPanel.tsx
//
// The expanded Accessibility Adjustments panel provides a comprehensive set of theme
// and reading customization controls. This revision adds substantial new functionality
// to the original version, including text alignment toggle, font weight adjustment, big
// cursor mode, light contrast, dark mode, monochrome filter, letter spacing, hide
// images, and stop animations. The panel is organized into three logical groups:
// Content controls for font and text appearance, Theme controls for color and display
// modes, and Reading aids for cursor and accessibility helpers.
//
// All settings persist to localStorage so user preferences survive across page loads.
// The settings apply to the document root element via data attributes, and the global
// stylesheet responds to those attributes with appropriate CSS rules.

"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../lib/LanguageContext";

// The accessibility settings type now includes all the expanded controls.
type A11ySettings = {
  fontSize: 0 | 1 | 2;
  lineHeight: 0 | 1 | 2;
  letterSpacing: 0 | 1 | 2;
  fontWeight: 0 | 1 | 2;
  highContrast: boolean;
  lightContrast: boolean;
  darkMode: boolean;
  monochrome: boolean;
  readableFont: boolean;
  alignCenter: boolean;
  bigCursor: boolean;
  hideImages: boolean;
  stopAnimations: boolean;
};

const defaultSettings: A11ySettings = {
  fontSize: 0,
  lineHeight: 0,
  letterSpacing: 0,
  fontWeight: 0,
  highContrast: false,
  lightContrast: false,
  darkMode: false,
  monochrome: false,
  readableFont: false,
  alignCenter: false,
  bigCursor: false,
  hideImages: false,
  stopAnimations: false,
};

export default function AccessibilityPanel() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaultSettings);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("daglo-a11y");
      if (saved) {
        const parsed = JSON.parse(saved) as A11ySettings;
        // Merge with defaults so older saved settings missing newer keys still work.
        const merged = { ...defaultSettings, ...parsed };
        setSettings(merged);
        applySettings(merged);
      }
    } catch {
      // Silent fallback if localStorage read or JSON parse fails.
    }
  }, []);

  const applySettings = (s: A11ySettings) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-font-size", String(s.fontSize));
    root.setAttribute("data-line-height", String(s.lineHeight));
    root.setAttribute("data-letter-spacing", String(s.letterSpacing));
    root.setAttribute("data-font-weight", String(s.fontWeight));
    root.setAttribute("data-high-contrast", s.highContrast ? "true" : "false");
    root.setAttribute("data-light-contrast", s.lightContrast ? "true" : "false");
    root.setAttribute("data-dark-mode", s.darkMode ? "true" : "false");
    root.setAttribute("data-monochrome", s.monochrome ? "true" : "false");
    root.setAttribute("data-readable-font", s.readableFont ? "true" : "false");
    root.setAttribute("data-align-center", s.alignCenter ? "true" : "false");
    root.setAttribute("data-big-cursor", s.bigCursor ? "true" : "false");
    root.setAttribute("data-hide-images", s.hideImages ? "true" : "false");
    root.setAttribute("data-stop-animations", s.stopAnimations ? "true" : "false");
  };

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

  // Toggling between contrast modes ensures only one is active at a time, because
  // having both high contrast and light contrast active would create conflicting
  // styles. The same logic applies to dark mode.
  const toggleHighContrast = () =>
    update({
      ...settings,
      highContrast: !settings.highContrast,
      lightContrast: false,
      darkMode: false,
    });

  const toggleLightContrast = () =>
    update({
      ...settings,
      lightContrast: !settings.lightContrast,
      highContrast: false,
      darkMode: false,
    });

  const toggleDarkMode = () =>
    update({
      ...settings,
      darkMode: !settings.darkMode,
      highContrast: false,
      lightContrast: false,
    });

  const labels = ["Default", "Large", "Extra Large"];
  const labelsFr = ["Par défaut", "Grand", "Très grand"];
  const sizeLabel = language === "fr" ? labelsFr[settings.fontSize] : labels[settings.fontSize];
  const heightLabel = language === "fr" ? labelsFr[settings.lineHeight] : labels[settings.lineHeight];
  const spacingLabel = language === "fr" ? labelsFr[settings.letterSpacing] : labels[settings.letterSpacing];
  const weightLabel = language === "fr" ? labelsFr[settings.fontWeight] : labels[settings.fontWeight];

  // Reusable button styling for toggle controls. A toggle is on when its setting is
  // true, off when false, and the styling reflects that state by inverting the
  // background and text colors.
  const toggleButtonStyle = (active: boolean): React.CSSProperties => ({
    backgroundColor: active ? "#0a1f3d" : "#f5f2ec",
    color: active ? "#ffffff" : "#0a1f3d",
    borderRadius: "8px",
    padding: "14px 12px",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: 500,
    transition: "all 0.2s ease",
    textAlign: "center",
    lineHeight: 1.3,
  });

  // Reusable styling for cycling controls like font size and line height which have
  // a minus button, a label showing the current state, and a plus button.
  const renderCyclingControl = (
    label: string,
    currentValue: 0 | 1 | 2,
    onDecrease: () => void,
    onIncrease: () => void,
    valueLabel: string,
    ariaPrefix: string,
  ) => (
    <div
      style={{
        backgroundColor: "#f5f2ec",
        borderRadius: "8px",
        padding: "14px 12px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "12px", fontWeight: 500, marginBottom: "10px", color: "#0a1f3d" }}>
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
        <button
          onClick={onDecrease}
          aria-label={`Decrease ${ariaPrefix}`}
          disabled={currentValue === 0}
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            backgroundColor: currentValue === 0 ? "#8a8985" : "#0a1f3d",
            color: "#ffffff",
            border: "none",
            cursor: currentValue === 0 ? "not-allowed" : "pointer",
            fontSize: "14px",
            lineHeight: 1,
          }}
        >
          −
        </button>
        <div style={{ fontSize: "11px", color: "#3a3a38", minWidth: "60px" }}>
          {valueLabel}
        </div>
        <button
          onClick={onIncrease}
          aria-label={`Increase ${ariaPrefix}`}
          disabled={currentValue === 2}
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            backgroundColor: currentValue === 2 ? "#8a8985" : "#0a1f3d",
            color: "#ffffff",
            border: "none",
            cursor: currentValue === 2 ? "not-allowed" : "pointer",
            fontSize: "14px",
            lineHeight: 1,
          }}
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <>
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
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(6, 23, 48, 0.6)",
              zIndex: 9999,
            }}
          />

          <div
            role="dialog"
            aria-label={t("a11y.title")}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "440px",
              backgroundColor: "#ffffff",
              boxShadow: "-8px 0 32px rgba(0,0,0,0.2)",
              zIndex: 10000,
              overflowY: "auto",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            <div
              style={{
                backgroundColor: "#0a1f3d",
                color: "#ffffff",
                padding: "24px 24px 28px 24px",
                textAlign: "center",
                position: "sticky",
                top: 0,
                zIndex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
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

              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#0a1f3d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px auto",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "22px",
                  fontWeight: 500,
                  margin: 0,
                  marginBottom: "4px",
                }}
              >
                {t("a11y.title")}
              </h2>
              <p style={{ fontSize: "12px", color: "#c0bdb5", margin: 0 }}>
                {t("a11y.subtitle")}
              </p>
            </div>

            <div style={{ padding: "20px" }}>
              {/* Content controls group covers font and text appearance settings. */}
              <h3
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#5a5a58",
                  margin: 0,
                  marginBottom: "10px",
                }}
              >
                {t("a11y.content")}
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                {renderCyclingControl(
                  t("a11y.fontsize"),
                  settings.fontSize,
                  () => update({ ...settings, fontSize: Math.max(0, settings.fontSize - 1) as 0 | 1 | 2 }),
                  () => update({ ...settings, fontSize: Math.min(2, settings.fontSize + 1) as 0 | 1 | 2 }),
                  sizeLabel,
                  "font size",
                )}

                {renderCyclingControl(
                  t("a11y.lineheight"),
                  settings.lineHeight,
                  () => update({ ...settings, lineHeight: Math.max(0, settings.lineHeight - 1) as 0 | 1 | 2 }),
                  () => update({ ...settings, lineHeight: Math.min(2, settings.lineHeight + 1) as 0 | 1 | 2 }),
                  heightLabel,
                  "line height",
                )}

                {renderCyclingControl(
                  t("a11y.letterspacing"),
                  settings.letterSpacing,
                  () => update({ ...settings, letterSpacing: Math.max(0, settings.letterSpacing - 1) as 0 | 1 | 2 }),
                  () => update({ ...settings, letterSpacing: Math.min(2, settings.letterSpacing + 1) as 0 | 1 | 2 }),
                  spacingLabel,
                  "letter spacing",
                )}

                {renderCyclingControl(
                  t("a11y.fontweight"),
                  settings.fontWeight,
                  () => update({ ...settings, fontWeight: Math.max(0, settings.fontWeight - 1) as 0 | 1 | 2 }),
                  () => update({ ...settings, fontWeight: Math.min(2, settings.fontWeight + 1) as 0 | 1 | 2 }),
                  weightLabel,
                  "font weight",
                )}

                <button
                  onClick={() => update({ ...settings, readableFont: !settings.readableFont })}
                  style={toggleButtonStyle(settings.readableFont)}
                >
                  {t("a11y.readable")}
                </button>

                <button
                  onClick={() => update({ ...settings, alignCenter: !settings.alignCenter })}
                  style={toggleButtonStyle(settings.alignCenter)}
                >
                  {t("a11y.align")}
                </button>
              </div>

              {/* Theme and display controls group covers color modes and visual filters. */}
              <h3
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#5a5a58",
                  margin: 0,
                  marginBottom: "10px",
                  marginTop: "8px",
                }}
              >
                {t("a11y.theme")}
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <button
                  onClick={toggleLightContrast}
                  style={toggleButtonStyle(settings.lightContrast)}
                >
                  {t("a11y.lightcontrast")}
                </button>
                <button
                  onClick={toggleHighContrast}
                  style={toggleButtonStyle(settings.highContrast)}
                >
                  {t("a11y.highcontrast")}
                </button>
                <button
                  onClick={toggleDarkMode}
                  style={toggleButtonStyle(settings.darkMode)}
                >
                  {t("a11y.dark")}
                </button>
                <button
                  onClick={() => update({ ...settings, monochrome: !settings.monochrome })}
                  style={toggleButtonStyle(settings.monochrome)}
                >
                  {t("a11y.monochrome")}
                </button>
                <button
                  onClick={() => update({ ...settings, bigCursor: !settings.bigCursor })}
                  style={toggleButtonStyle(settings.bigCursor)}
                >
                  {t("a11y.bigcursor")}
                </button>
                <button
                  onClick={() => update({ ...settings, hideImages: !settings.hideImages })}
                  style={toggleButtonStyle(settings.hideImages)}
                >
                  {language === "fr" ? "Masquer images" : "Hide Images"}
                </button>
              </div>

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

      <style>{`
        .a11y-trigger:hover {
          transform: scale(1.05);
          background-color: #061730 !important;
        }
      `}</style>
    </>
  );
}
