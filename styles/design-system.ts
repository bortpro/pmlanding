/**
 * ProductMountain Design System
 * The product intelligence layer for CS teams.
 *
 * Tone: Sharp, enterprise-adjacent, practitioner credibility.
 * Warm cream surfaces, Yves Klein Blue accent, Colorado Orange secondary.
 * Plus Jakarta Sans display, Geist UI. No gradients on accent colors.
 */

// ─── Color System ───────────────────────────────────────────────────────────

export const colors = {
  /* Surfaces */
  bg: '#F5F2EE',
  surface: '#FDFCFA',
  surface2: '#F0EDE8',
  surface3: '#E8E4DE',
  border: '#E0DBD4',
  borderStrong: '#C8C2BA',

  /* Typography */
  textPrimary: '#1A1714',
  textSecondary: '#6B6560',
  textMuted: '#A09890',
  textPlaceholder: '#C4BDB6',

  /* Primary accent: Yves Klein Blue */
  accent: '#002FA7',
  accentLight: '#E8EDFB',
  accentMid: '#8095D3',
  accentHover: '#002090',

  /* Secondary accent: Colorado Orange */
  accent2: '#E8820C',
  accent2Light: '#FEF6E8',
  accent2Mid: '#F5C274',
  accent2Hover: '#CF7208',

  /* Full palette */
  lagunaSeca: '#2B6CB8',
  lagunaSecaLight: '#EBF3FC',
  lagunaSecaMid: '#8DBDE8',

  ykb: '#002FA7',
  ykbLight: '#E8EDFB',
  ykbMid: '#8095D3',

  hennarot: '#9B2335',
  hennarotLight: '#FAECEE',
  hennarotMid: '#D4899A',

  inka: '#C4622D',
  inkaLight: '#FBF0EA',
  inkaMid: '#E4A882',

  colorado: '#E8820C',
  coloradoLight: '#FEF6E8',
  coloradoMid: '#F5C274',

  parliament: '#1B2E5E',
  parliamentLight: '#EBF0FA',
  parliamentMid: '#8FA4CC',

  forest: '#1A6B5A',
  forestLight: '#E8F4F1',
  forestMid: '#7BBFB3',

  malleBlush: '#D4614A',
  malleBlushLight: '#FDF0EC',
  malleBlushMid: '#F0A898',

  /* Semantic: risk + health */
  riskHigh: '#9B2335',
  riskHighBg: '#FAECEE',
  riskMed: '#C4622D',
  riskMedBg: '#FBF0EA',
  riskLow: '#1A6B5A',
  riskLowBg: '#E8F4F1',

  healthSafe: '#1A6B5A',
  healthSafeBg: '#E8F4F1',
  healthAtRisk: '#C4622D',
  healthAtRiskBg: '#FBF0EA',
  healthChurning: '#9B2335',
  healthChurningBg: '#FAECEE',

  white: '#FFFFFF',
  darkSection: '#0A0F1E',
} as const;

export type Color = typeof colors;
export type ColorKey = keyof Color;

// ─── Typography ─────────────────────────────────────────────────────────────

export const fontFamilies = {
  display: "'Plus Jakarta Sans', sans-serif",
  ui: "'Geist', 'DM Sans', sans-serif",
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export interface TypographyStyle {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  letterSpacing?: string;
  textTransform?: 'uppercase' | 'none';
  fontFamily?: string;
}

export const typography: Record<string, TypographyStyle> = {
  display: {
    fontSize: '56px',
    lineHeight: '60px',
    fontWeight: fontWeights.bold,
    letterSpacing: '-0.02em',
    fontFamily: fontFamilies.display,
  },
  h1: {
    fontSize: '40px',
    lineHeight: '48px',
    fontWeight: fontWeights.bold,
    letterSpacing: '-0.02em',
    fontFamily: fontFamilies.display,
  },
  h2: {
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: fontWeights.semibold,
    letterSpacing: '-0.02em',
    fontFamily: fontFamilies.display,
  },
  h3: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: fontWeights.semibold,
    letterSpacing: '-0.01em',
    fontFamily: fontFamilies.display,
  },
  bodyLarge: {
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.ui,
  },
  body: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.ui,
  },
  label: {
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: fontWeights.medium,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontFamily: fontFamilies.ui,
  },
} as const;

// ─── Spacing System (base unit: 8px) ────────────────────────────────────────

export const spacing = {
  /** 4px */
  xs: '4px',
  /** 8px – base unit */
  sm: '8px',
  /** 16px */
  md: '16px',
  /** 24px */
  lg: '24px',
  /** 32px – card padding */
  xl: '32px',
  /** 48px – component gaps */
  '2xl': '48px',
  /** 64px */
  '3xl': '64px',
  /** 96px – section vertical padding */
  section: '96px',
} as const;

export type Spacing = typeof spacing;

// ─── Shape ──────────────────────────────────────────────────────────────────

export const radii = {
  /** 10px – buttons, inputs, badges */
  base: '10px',
  /** 14px – cards */
  lg: '14px',
  /** 20px – large containers */
  xl: '20px',
  none: '0px',
} as const;

// ─── Shadows (warm-tinted, never blue-gray) ─────────────────────────────────

export const shadows = {
  sm: '0 1px 3px rgba(26,23,20,0.06), 0 1px 2px rgba(26,23,20,0.04)',
  md: '0 4px 12px rgba(26,23,20,0.08), 0 2px 4px rgba(26,23,20,0.04)',
  lg: '0 16px 40px rgba(26,23,20,0.10), 0 4px 12px rgba(26,23,20,0.06)',
  inputFocus: '0 0 0 3px rgba(0,47,167,0.1)',
} as const;

// ─── Component Tokens ───────────────────────────────────────────────────────

export const components = {
  btnPrimary: {
    background: colors.accent,
    color: colors.white,
    borderRadius: radii.base,
    height: '48px',
    fontWeight: fontWeights.semibold,
    border: 'none',
    paddingInline: '24px',
    hoverBackground: colors.accentHover,
  },
  btnSecondary: {
    background: 'transparent',
    color: colors.accent,
    borderRadius: radii.base,
    height: '48px',
    fontWeight: fontWeights.semibold,
    border: `1px solid ${colors.accent}`,
    paddingInline: '24px',
    hoverBackground: 'rgba(0,47,167,0.04)',
  },
  btnAccent: {
    background: colors.accent2,
    color: colors.white,
    borderRadius: radii.base,
    height: '48px',
    fontWeight: fontWeights.semibold,
    border: 'none',
    paddingInline: '24px',
    hoverBackground: colors.accent2Hover,
  },
  btnGhost: {
    background: 'transparent',
    color: colors.accent,
    borderRadius: radii.base,
    height: '48px',
    fontWeight: fontWeights.semibold,
    border: 'none',
    paddingInline: '24px',
    hoverBackground: 'rgba(0,47,167,0.04)',
  },
  card: {
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.lg,
    padding: spacing.xl,
    boxShadow: shadows.sm,
    hoverBoxShadow: shadows.md,
    hoverBorderColor: colors.borderStrong,
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
  },
  badge: {
    borderRadius: radii.base,
    fontSize: typography.label.fontSize,
    lineHeight: typography.label.lineHeight,
    fontWeight: typography.label.fontWeight,
    letterSpacing: typography.label.letterSpacing,
    textTransform: typography.label.textTransform,
    paddingBlock: '4px',
    paddingInline: '10px',
  },
  input: {
    height: '48px',
    border: `1px solid ${colors.border}`,
    borderRadius: radii.base,
    padding: '0 16px',
    fontSize: typography.body.fontSize,
    background: colors.surface,
    boxShadow: shadows.sm,
    focusRing: shadows.inputFocus,
    focusBorder: colors.accent,
    placeholderColor: colors.textPlaceholder,
  },
} as const;

// ─── Mountain Element System ────────────────────────────────────────────────

/**
 * Geometric mountain icon mark: two triangles, left peak shorter, right peak taller.
 * No gradients, clean vector. Accent fill on light, white fill on dark.
 */
export const mountainIcon = {
  svg: (fill: string = colors.accent) =>
    `<svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="8,28 20,8 32,28" fill="${fill}" />
      <polygon points="22,28 34,4 46,28" fill="${fill}" />
    </svg>`,
  lightFill: colors.accent,
  darkFill: colors.white,
} as const;

/**
 * Topographic line texture – subtle SVG pattern.
 * Concentric irregular ovals at 8% opacity.
 * Use as section background on alternating sections, not every one.
 */
export const topographicTexture = {
  opacity: 0.08,
  svg: `<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="200" cy="200" rx="180" ry="140" stroke="currentColor" stroke-width="0.75" fill="none"/>
    <ellipse cx="200" cy="200" rx="150" ry="115" stroke="currentColor" stroke-width="0.75" fill="none"/>
    <ellipse cx="195" cy="195" rx="120" ry="90" stroke="currentColor" stroke-width="0.75" fill="none"/>
    <ellipse cx="205" cy="198" rx="90" ry="68" stroke="currentColor" stroke-width="0.75" fill="none"/>
    <ellipse cx="198" cy="192" rx="60" ry="45" stroke="currentColor" stroke-width="0.75" fill="none"/>
    <ellipse cx="202" cy="205" rx="35" ry="25" stroke="currentColor" stroke-width="0.75" fill="none"/>
  </svg>`,
  /** CSS background shorthand. Encode the SVG and tile it. */
  cssBackground: (color: string = colors.accent) =>
    `url("data:image/svg+xml,${encodeURIComponent(
      `<svg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'><ellipse cx='200' cy='200' rx='180' ry='140' stroke='${color}' stroke-width='0.75' fill='none'/><ellipse cx='200' cy='200' rx='150' ry='115' stroke='${color}' stroke-width='0.75' fill='none'/><ellipse cx='195' cy='195' rx='120' ry='90' stroke='${color}' stroke-width='0.75' fill='none'/><ellipse cx='205' cy='198' rx='90' ry='68' stroke='${color}' stroke-width='0.75' fill='none'/><ellipse cx='198' cy='192' rx='60' ry='45' stroke='${color}' stroke-width='0.75' fill='none'/><ellipse cx='202' cy='205' rx='35' ry='25' stroke='${color}' stroke-width='0.75' fill='none'/></svg>`
    )}") repeat`,
} as const;

/**
 * Section divider — angled clip-path cuts (3–5°) for terrain feel.
 * Apply to the bottom of sections via CSS clip-path.
 */
export const sectionDividers = {
  /** Angled cut — top-left to bottom-right, ~4° slope */
  angleDown: 'polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%)',
  /** Angled cut — top-right to bottom-left, ~4° slope */
  angleUp: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 48px))',
  /** Inverted angle for section tops */
  angleDownInverse: 'polygon(0 48px, 100% 0, 100% 100%, 0 100%)',
  angleUpInverse: 'polygon(0 0, 100% 48px, 100% 100%, 0 100%)',
} as const;

// ─── Transitions ────────────────────────────────────────────────────────────

export const transitions = {
  fast: '150ms ease',
  base: '200ms ease',
  slow: '300ms ease-out',
} as const;

// ─── Breakpoints ────────────────────────────────────────────────────────────

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
} as const;

export const maxWidth = '1200px';

// ─── Full Design System Export ──────────────────────────────────────────────

export const designSystem = {
  colors,
  fontFamilies,
  fontWeights,
  typography,
  spacing,
  radii,
  shadows,
  components,
  mountainIcon,
  topographicTexture,
  sectionDividers,
  transitions,
  breakpoints,
  maxWidth,
} as const;

export type DesignSystem = typeof designSystem;
export default designSystem;
