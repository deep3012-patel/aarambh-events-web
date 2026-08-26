import {
  Armchair,
  AudioLines,
  BriefcaseBusiness,
  Flower2,
  HeartHandshake,
  Music2,
  Network,
  Palette,
  PartyPopper,
  ScanEye,
  SlidersHorizontal,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { IconName } from "@/content/site";

const icons = {
  Sparkles,
  HeartHandshake,
  PartyPopper,
  BriefcaseBusiness,
  AudioLines,
  Flower2,
  Music2,
  Armchair,
  Palette,
  UsersRound,
  Network,
  SlidersHorizontal,
  ScanEye,
};

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const Component = icons[name];
  return <Component aria-hidden="true" size={size} strokeWidth={1.55} />;
}
