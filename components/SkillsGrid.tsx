"use client";

import {
  Apple,
  Atom,
  Blinds,
  Boxes,
  Braces,
  Cloud,
  Code2,
  FileCode2,
  GitBranch,
  Globe,
  KanbanSquare,
  MonitorSmartphone,
  Network,
  Palette,
  Smartphone,
  Sparkles,
  Workflow
} from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "@/data/site";

const iconMap = {
  smartphone: Smartphone,
  apple: Apple,
  box: Boxes,
  braces: Braces,
  code: Code2,
  "file-code": FileCode2,
  "monitor-smartphone": MonitorSmartphone,
  palette: Palette,
  atom: Atom,
  sparkles: Sparkles,
  "git-branch": GitBranch,
  "kanban-square": KanbanSquare,
  cloud: Cloud,
  network: Network,
  globe: Globe,
  workflow: Workflow
};

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((skill, index) => {
        const Icon = iconMap[skill.icon as keyof typeof iconMap] ?? Blinds;
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            whileHover={{ y: -4 }}
            className="tech-card"
          >
            <div className="flex items-start gap-4">
              <div className="tech-icon-wrap">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">{skill.name}</p>
                <p className="mt-1 text-sm text-slate-500">Technology / workflow capability</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
