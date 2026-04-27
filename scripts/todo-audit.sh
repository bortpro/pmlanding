#!/bin/bash
# ────────────────────────────────────────────────────────────────────────────
# TODO Audit Script
# Greps the entire ProductMountain codebase for TODO comments.
# Run: bash scripts/todo-audit.sh
# ────────────────────────────────────────────────────────────────────────────

echo ""
echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║  ProductMountain — TODO Audit                                     ║"
echo "║  Handoff items for real content & API integration                  ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""

grep -rn "TODO" \
  --include="*.tsx" \
  --include="*.ts" \
  --include="*.css" \
  app/ components/ styles/ \
  | grep -v "node_modules" \
  | grep -v ".next" \
  | while IFS= read -r line; do
    echo "  → $line"
  done

echo ""
echo "────────────────────────────────────────────────────────────────────────"
echo "Total TODOs: $(grep -rn 'TODO' --include='*.tsx' --include='*.ts' --include='*.css' app/ components/ styles/ | grep -v node_modules | grep -v .next | wc -l | tr -d ' ')"
echo "────────────────────────────────────────────────────────────────────────"
echo ""
