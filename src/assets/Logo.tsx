import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

function Logo(props: LogoProps) {
  return (
    <svg
      width={95}
      height={81}
      viewBox="0 0 95 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#202024" d="M0 0H95V81H0z" />
      <path
        d="M7 73.313l21.25-60 23.125 60v-60l16.563 27.812M84.5 73V13L67.937 40.813"
        stroke="#FECDD3"
        strokeWidth={6}
      />
      <path
        d="M7 73.313l21.25-60 23.125 60v-60l16.563 27.812M84.5 73V13L67.937 40.813"
        stroke="#881337"
        strokeWidth={2}
      />
    </svg>
  )
}

export default Logo
