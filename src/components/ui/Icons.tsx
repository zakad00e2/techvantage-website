'use client';

import React from 'react';
import {
  Monitor,
  Cloud,
  Shield,
  BarChart2,
  Rocket,
  Palette,
  Trophy,
  Wrench,
  Handshake,
  Zap,
  TrendingUp,
  FileText,
  Lightbulb,
  Star,
  ShieldCheck,
  Target,
  Telescope,
  MapPin,
  Mail,
  Phone,
  Clock,
  Map,
  ClipboardList,
  DollarSign,
  Users,
  Link as LinkIcon,
  Scale,
  Timer,
  Calendar,
  CircleCheckBig,
  type LucideProps,
} from 'lucide-react';

/**
 * Icon key → Lucide component map.
 * Add new entries here whenever a new icon is needed.
 */
const iconMap: Record<string, React.FC<LucideProps>> = {
  monitor: Monitor,
  cloud: Cloud,
  shield: Shield,
  'bar-chart-2': BarChart2,
  rocket: Rocket,
  palette: Palette,
  trophy: Trophy,
  wrench: Wrench,
  handshake: Handshake,
  zap: Zap,
  'trending-up': TrendingUp,
  'file-text': FileText,
  lightbulb: Lightbulb,
  star: Star,
  'shield-check': ShieldCheck,
  target: Target,
  telescope: Telescope,
  'map-pin': MapPin,
  mail: Mail,
  phone: Phone,
  clock: Clock,
  map: Map,
  'clipboard-list': ClipboardList,
  'dollar-sign': DollarSign,
  users: Users,
  link: LinkIcon,
  scale: Scale,
  timer: Timer,
  calendar: Calendar,
  'circle-check': CircleCheckBig,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  /** Key name matching one of the entries in the icon map */
  name: string;
  /** Pixel size (applies to both width and height). Default: 24 */
  size?: number;
  /** Additional CSS classes */
  className?: string;
  /** Stroke width. Default: 2 */
  strokeWidth?: number;
}

/**
 * Renders a Lucide SVG icon by key name.
 * Falls back to a neutral circle if the key is not found.
 */
export function Icon({ name, size = 24, className = '', strokeWidth = 2 }: IconProps) {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    // Fallback: simple circle placeholder
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  }

  return <LucideIcon size={size} strokeWidth={strokeWidth} className={className} />;
}
