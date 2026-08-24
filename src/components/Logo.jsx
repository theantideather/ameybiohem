export default function Logo({ size = 34, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1.5" />
      <path
        d="M24 6C24 6 12 18.4 12 27.2C12 33.9 17.4 39 24 39C30.6 39 36 33.9 36 27.2C36 18.4 24 6 24 6Z"
        fill="url(#greenaid-drop)"
      />
      <path
        d="M24 39C24 39 24 30 31 25"
        stroke="#052110"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <defs>
        <linearGradient id="greenaid-drop" x1="12" y1="6" x2="36" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#63E685" />
          <stop offset="1" stopColor="#1D7A3C" />
        </linearGradient>
      </defs>
    </svg>
  )
}
