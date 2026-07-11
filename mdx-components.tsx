import type { MDXComponents } from 'mdx/types';

// Allows customising built-in components used across MDX content.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-3xl font-bold text-primary mb-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold text-primary mt-8 mb-3" {...props} />,
    p: (props) => <p className="leading-relaxed mb-4 text-slate-700" {...props} />,
    a: (props) => <a className="text-primary underline decoration-accent" {...props} />,
    ...components,
  };
}
