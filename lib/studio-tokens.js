// Design tokens for the "ephemeral architecture studio" home redesign.
// Kept in one place so the calm/minimal palette stays consistent and the
// redesign is easy to tune or revert. These are additive and only used by the
// new home-page components (the rest of the site keeps its existing styling).

export const studioTokens = {
  background: '#f7f7f4',
  backgroundAlt: '#fafaf8',
  textPrimary: '#8e8e8e',
  textSecondary: '#b5b5b5',
  textMuted: '#c8c8c8',
  // Node hierarchy
  nodeFocused: '#7a7a7a',
  nodeInactive: '#bdbdbd',
  nodeInactiveSoft: '#c5c5c5',
  nodeFaded: 'rgba(150,150,150,0.22)',
  // Surfaces
  softBorder: 'rgba(0,0,0,0.04)',
  navBackground: 'rgba(150,150,150,0.42)',
  navText: 'rgba(255,255,255,0.92)',
  blur: 'blur(18px)',
  radius: '999px'
}

export default studioTokens
