import type { SVGProps } from "react";

const Vue = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 15.5L18.5 4.2h-3.6L12 9.2 9.1 4.2H5.5L12 15.5z" fill="#35495E" />
    <path d="M2.5 4.2L12 20.7 21.5 4.2h-3.6L12 14.2 6.1 4.2H2.5z" fill="#41B883" />
  </svg>
);

export { Vue };
