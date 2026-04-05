function getNodeText(node) {
  if (!node) {
    return '';
  }

  if (node.type === 'text') {
    return node.value || '';
  }

  if (!Array.isArray(node.children)) {
    return '';
  }

  return node.children.map((child) => getNodeText(child)).join('');
}

function ensureClass(node, className) {
  node.properties ||= {};

  const current = node.properties.className;
  const classList = Array.isArray(current)
    ? [...current]
    : typeof current === 'string'
      ? [current]
      : [];

  if (!classList.includes(className)) {
    classList.push(className);
  }

  node.properties.className = classList;
}

function isElement(node, tagName) {
  return node?.type === 'element' && node.tagName === tagName;
}

function decorateNode(node) {
  if (!isElement(node, 'h2') && !isElement(node, 'h3')) {
    return;
  }

  const text = getNodeText(node).trim();
  ensureClass(node, 'lesson-heading');

  if (node.tagName === 'h2') {
    const sectionMatch = text.match(/^Section\s+(\d+)/i);

    if (sectionMatch) {
      ensureClass(node, 'lesson-heading-section');
      node.properties ||= {};
      node.properties['data-section-number'] = sectionMatch[1];
      return;
    }

    ensureClass(node, 'lesson-heading-chapter');
    return;
  }

  if (/^Example\s+\d+/i.test(text)) {
    ensureClass(node, 'lesson-heading-example');
    return;
  }

  if (/story lab:/i.test(text) || /^[“"]/.test(text)) {
    ensureClass(node, 'lesson-heading-feature');
    return;
  }

  ensureClass(node, 'lesson-heading-subsection');
}

function decorateChildren(children) {
  if (!Array.isArray(children)) {
    return;
  }

  for (let index = 0; index < children.length; index += 1) {
    const node = children[index];

    if (node?.type === 'element') {
      decorateNode(node);

      const text = getNodeText(node).trim();
      const next = children[index + 1];

      if (isElement(node, 'h3')) {
        const classNames = Array.isArray(node.properties?.className) ? node.properties.className : [];

        if (classNames.includes('lesson-heading-example') && isElement(next, 'ul')) {
          ensureClass(next, 'lesson-example-list');
        }
      }

      if (
        isElement(node, 'p')
        && /:$/.test(text)
        && (isElement(next, 'ul') || isElement(next, 'ol'))
      ) {
        ensureClass(node, 'lesson-list-label');
        ensureClass(next, 'lesson-labeled-list');
        ensureClass(next, `lesson-labeled-list-${next.tagName}`);
      }
    }

    if (Array.isArray(node?.children)) {
      decorateChildren(node.children);
    }
  }
}

export function lessonMarkdownPlugin() {
  return (tree) => {
    decorateChildren(tree.children);
  };
}
