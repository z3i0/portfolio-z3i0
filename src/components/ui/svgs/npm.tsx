import type { SVGProps } from "react";

const Npm = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect width="24" height="24" rx="3" fill="#CB3837" />
    <path d="M4.5 4.5h15v15h-7.5v-11.25h-3.75v11.25h-3.75v-15z" fill="#FFF" />
  </svg>
);

export { Npm };
