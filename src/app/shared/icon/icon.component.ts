import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @switch (name()) {
        @case ('user') { <path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/> }
        @case ('book') { <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 5.5v14"/> }
        @case ('flag') { <path d="M5 22V4"/><path d="M5 4h12l-2 4 2 4H5"/> }
        @case ('check') { <path d="m5 12 4 4L19 6"/><circle cx="12" cy="12" r="10"/> }
        @case ('code') { <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/> }
        @case ('terminal') { <rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/> }
        @case ('spark') { <path d="m12 3-1.4 4.1L6.5 8.5l4.1 1.4L12 14l1.4-4.1 4.1-1.4-4.1-1.4zM5 14l-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8zM19 14l-.7 1.8-1.8.7 1.8.7L19 19l.7-1.8 1.8-.7-1.8-.7z"/> }
        @case ('coins') { <ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/> }
        @case ('shop') { <path d="M3 10h18l-2-6H5zM5 10v10h14V10M9 20v-6h6v6"/><path d="M3 10c0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0"/> }
        @case ('map') { <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/> }
        @case ('chat') { <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 10h8M8 14h5"/> }
        @case ('grid') { <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/> }
        @case ('home') { <path d="m3 11 9-8 9 8v10h-6v-7H9v7H3z"/> }
        @case ('network') { <rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-2h14v2"/> }
        @case ('bell') { <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/> }
        @case ('search') { <circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/> }
        @case ('arrow') { <path d="m9 18 6-6-6-6"/> }
        @case ('menu') { <path d="M4 7h16M4 12h16M4 17h16"/> }
        @case ('close') { <path d="m6 6 12 12M18 6 6 18"/> }
        @case ('clock') { <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/> }
        @default { <circle cx="12" cy="12" r="9"/> }
      }
    </svg>
  `,
  styles: `:host{display:inline-flex;width:1.15rem;height:1.15rem}svg{width:100%;height:100%}`
})
export class IconComponent { readonly name = input.required<string>(); }
