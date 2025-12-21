import React from 'react';

// Definitions from docs/design-document.md
export const THEME_PRESETS: Record<string, React.CSSProperties> = {
    'mono-luxe': {
        '--color-primary': '#000000',
        '--color-primary-contrast': '#FFFFFF',
        '--color-secondary': '#6B7280',
        '--color-bg-app': '#F5F5F5',
        '--color-bg-surface': '#FFFFFF',
        '--color-text-main': '#111111',
        '--color-text-muted': '#6B7280',
        '--color-border': '#E5E5E5',
        '--radius-sm': '0px',
        '--radius-md': '0px',
        '--radius-lg': '0px',
        '--shadow-depth': 'none',
    } as React.CSSProperties,

    'fresh-market': {
        '--color-primary': '#4CAF50',
        '--color-primary-contrast': '#FFFFFF',
        '--color-secondary': '#FF9800',
        '--color-bg-app': '#F1F8E9',
        '--color-bg-surface': '#FFFFFF',
        '--color-text-main': '#2E3B2F',
        '--color-text-muted': '#556B57',
        '--color-border': '#C8E6C9',
        '--radius-sm': '8px',
        '--radius-md': '16px',
        '--radius-lg': '24px',
        '--shadow-depth': '0px 4px 15px rgba(76, 175, 80, 0.15)',
    } as React.CSSProperties,

    'tech-ocean': {
        '--color-primary': '#2563EB',
        '--color-primary-contrast': '#FFFFFF',
        '--color-secondary': '#64748B',
        '--color-bg-app': '#0F172A',
        '--color-bg-surface': '#1E293B',
        '--color-text-main': '#F8FAFC',
        '--color-text-muted': '#94A3B8',
        '--color-border': '#334155',
        '--radius-sm': '4px',
        '--radius-md': '8px',
        '--radius-lg': '12px',
        '--shadow-depth': '0px 1px 3px rgba(0,0,0,0.5)',
    } as React.CSSProperties,
};

interface ThemeOverrides {
    primary_color?: string;
    font_family?: string;
}

export const applyTheme = (presetName: string = 'mono-luxe', overrides: ThemeOverrides) => {
    const base = THEME_PRESETS[presetName] || THEME_PRESETS['mono-luxe'];

    const themeStyles: React.CSSProperties = {
        ...base,
    };

    // Inject API overrides
    if (overrides.primary_color) {
        themeStyles['--color-primary'] = overrides.primary_color;
        // In a real app, we would calculate contrast here using a color lib
        themeStyles['--color-primary-contrast'] = '#ffffff';
    }

    if (overrides.font_family) {
        themeStyles['--font-heading'] = overrides.font_family;
        themeStyles['--font-body'] = overrides.font_family;
    }

    return themeStyles;
};