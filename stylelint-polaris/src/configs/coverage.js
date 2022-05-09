/**
 * Stylelint config to ensure compliance with Polaris and improve coverage.
 */

/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  plugins: ['stylelint-scss', '../plugins/global-disallowed-list'],
  rules: {
    'at-rule-disallowed-list': [['keyframes'], {severity: 'warning'}],
    'color-named': ['never', {severity: 'warning'}],
    'color-no-hex': [true, {severity: 'warning'}],
    'declaration-property-value-disallowed-list': [
      {
        display: ['grid', 'flex'],
        top: [/^(?!var\(--p-).+$/],
        bottom: [/^(?!var\(--p-).+$/],
        left: [/^(?!var\(--p-).+$/],
        right: [/^(?!var\(--p-).+$/],
        width: [/^(?!var\(--p-).+$/],
        height: [/^(?!var\(--p-).+$/],
        // Allow `0`, `1`, values between 0 and 1 (limit 2 decimal places), and custom properties
        // https://regex101.com/r/kIlVrQ/1
        opacity: [/^(?!0|1)\d$|^\d{2,}|^[1-9]+\.|^\d+\.\d+\.|^0\.\d{3,}/],
        'z-index': [/^(?!var\(--p-).+$/],
        'font-weight': [/(\$.*|[0-9]+)/],
      },
      {severity: 'warning'},
    ],
    'function-disallowed-list': [
      [
        'brightness',
        'contrast',
        'hue-rotate',
        'hsl',
        'hsla',
        'invert',
        'rgb',
        'rgba',
        'sepia',
      ],
      {severity: 'warning'},
    ],
    'property-disallowed-list': [
      [
        'position',
        'grid',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'justify-content',
        'align-items',
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        'grid-template',
        'grid-template-areas',
        'grid-template-rows',
        'grid-template-columns',
        'grid-area',
        'display',
      ],
      {severity: 'warning'},
    ],
    'unit-disallowed-list': [
      ['px', 'rem', 'em', 's', 'ms'],
      {severity: 'warning'},
    ],
    'scss/function-color-relative': [true, {severity: 'warning'}],
    'stylelint-polaris/global-disallowed-list': [
      [
        // Legacy Sass API
        'color(',
        'filter(',
        'map-extend',
        'color-multiply',
        'skeleton-shimmer',
        'rem(',
        'px(',
        'em(',
        // Legacy custom properties
        '--p-button-font',
        '--p-badge-font',
        '--p-override-loading-z-index',
        '--p-override-none',
        '--p-override-transparent',
        '--p-override-one',
        '--p-override-visible',
        '--p-override-zero',
        '--p-non-null-content',
        '--p-badge-mix-blend-mode',
        '--p-range-slider-thumb-scale',
        '--p-duration-1-0-0',
        '--p-duration-1-5-0',
        '--p-border-radius-base',
        '--p-border-radius-wide',
        '--p-border-radius-full',
        '--p-text-field-focus-ring-border-radius',
        '--p-card-shadow',
        '--p-popover-shadow',
        '--p-modal-shadow',
        '--p-top-bar-shadow',
        '--p-button-drop-shadow',
        '--p-button-inner-shadow',
        '--p-button-pressed-inner-shadow',
        '--p-control-border-width',
        '--p-thin-border-subdued',
        '--p-banner-border-default',
        '--p-banner-border-success',
        '--p-banner-border-highlight',
        '--p-banner-border-warning',
        '--p-banner-border-critical',
        '--p-button-group-item-spacing',
        '--p-choice-margin',
        '--p-text-field-spinner-offset',
        '--p-text-field-focus-ring-offset',
        '--p-icon-size',
        '--p-range-slider-thumb-size-base',
        '--p-choice-size',
        '--p-range-slider-thumb-size-active',
        // Other warnings
        ' * $',
        '$border-radius-data',
        '$border-width-data',
        '$borders-data',
        '$color-palette-data',
        '$duration-data',
        '$easing-data',
        '$color-filter-palette-data',
        '$layout-width-data',
        '$navigation-width',
        '$shadows-data',
        '$spacing-data',
        '$typography-condensed',
        '$font-family-data',
        '$line-height-data',
        '$font-size-data',
        '$global-elements',
        '$fixed-element-stacking-order',
      ],
      {severity: 'warning'},
    ],
  },
};