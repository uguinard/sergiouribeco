/**
 * remark-obsidian-callouts
 * Transforms Obsidian-style callouts into styled HTML divs.
 *
 * Syntax:
 *   > [!note] Optional Title
 *   > Content here
 *
 * Supported types: note, tip, info, warning, danger, caution,
 *                  important, success, question, quote, abstract
 */

import { visit } from 'unist-util-visit';

const CALLOUT_REGEX = /^\[!(\w+)\][\s+\-]?\s*(.*)?$/i;

const CALLOUT_ICONS = {
  note:      '📝',
  tip:       '💡',
  info:      'ℹ️',
  warning:   '⚠️',
  danger:    '🔥',
  caution:   '⚠️',
  important: '❗',
  success:   '✅',
  question:  '❓',
  quote:     '💬',
  abstract:  '📋',
  summary:   '📋',
  todo:      '☑️',
  failure:   '❌',
  bug:       '🐛',
  example:   '🔍',
};

export function remarkObsidianCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node, index, parent) => {
      const firstParagraph = node.children?.[0];
      if (!firstParagraph || firstParagraph.type !== 'paragraph') return;

      const firstText = firstParagraph.children?.[0];
      if (!firstText || firstText.type !== 'text') return;

      const firstLine = firstText.value.split('\n')[0];
      const match = firstLine.match(CALLOUT_REGEX);
      if (!match) return;

      const type = match[1].toLowerCase();
      const customTitle = match[2]?.trim() || '';
      const icon = CALLOUT_ICONS[type] || '📌';
      const title = customTitle || (type.charAt(0).toUpperCase() + type.slice(1));

      // Remove the first line ([!type] title) from the paragraph text
      const remainingText = firstText.value.slice(firstLine.length).replace(/^\n/, '');
      if (remainingText) {
        firstText.value = remainingText;
      } else {
        // Remove the first text node if empty
        firstParagraph.children.shift();
        if (firstParagraph.children.length === 0) {
          node.children.shift();
        }
      }

      // Build the callout HTML node
      const calloutNode = {
        type: 'html',
        value: `<div class="callout callout-${type}" data-callout="${type}">
  <div class="callout-title">
    <span class="callout-icon">${icon}</span>
    <span class="callout-title-text">${title}</span>
  </div>
  <div class="callout-content">`,
      };

      const closingNode = {
        type: 'html',
        value: `</div></div>`,
      };

      // Replace the blockquote with: opening div + children + closing div
      parent.children.splice(index, 1, calloutNode, ...node.children, closingNode);
    });
  };
}
