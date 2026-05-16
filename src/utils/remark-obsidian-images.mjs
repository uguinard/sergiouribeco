/**
 * remark-obsidian-images
 * Transforms Obsidian image embeds ![[filename.jpg]] into standard markdown images.
 * The image is resolved relative to the entry's media/ folder.
 *
 * Syntax: ![[filename.jpg]] or ![[filename.jpg|alt text]]
 */

import { visit } from 'unist-util-visit';

const OBSIDIAN_IMAGE_REGEX = /!\[\[([^\]|]+?)(?:\|([^\]]*))?\]\]/g;

export function remarkObsidianImages() {
  return (tree) => {
    visit(tree, 'paragraph', (node) => {
      node.children = node.children.flatMap((child) => {
        if (child.type !== 'text') return [child];

        const text = child.value;
        if (!text.includes('![[')) return [child];

        const parts = [];
        let lastIndex = 0;
        let match;

        OBSIDIAN_IMAGE_REGEX.lastIndex = 0;
        while ((match = OBSIDIAN_IMAGE_REGEX.exec(text)) !== null) {
          // Text before the match
          if (match.index > lastIndex) {
            parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
          }

          const filename = match[1].trim();
          const alt = match[2]?.trim() || filename;

          // Emit an image node — src is relative to media/ folder
          parts.push({
            type: 'image',
            url: `./media/${filename}`,
            alt,
            title: null,
          });

          lastIndex = match.index + match[0].length;
        }

        // Remaining text after last match
        if (lastIndex < text.length) {
          parts.push({ type: 'text', value: text.slice(lastIndex) });
        }

        return parts;
      });
    });
  };
}
