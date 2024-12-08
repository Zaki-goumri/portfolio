import { useTheme } from 'next-themes'

export function CustomLogo() {
  const { theme } = useTheme()

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="95" stroke={theme === 'dark' ? '#ffffff' : '#000000'} strokeWidth="10" />
      <path
        d="M60 140L100 60L140 140"
        stroke={theme === 'dark' ? '#ffffff' : '#000000'}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M80 110H120"
        stroke={theme === 'dark' ? '#ffffff' : '#000000'}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  )
}

