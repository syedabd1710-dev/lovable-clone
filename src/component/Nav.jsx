import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex h-16 w-full items-center justify-center bg-transparent">
      <div className="flex w-full max-w-6xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition hover:opacity-70"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M151.083 0c83.413 0 151.061 67.819 151.061 151.467v57.6h50.283c83.413 0 151.082 67.797 151.082 151.466 0 83.691-67.626 151.467-151.082 151.467H0V151.467C0 67.84 67.627 0 151.083 0z"
              fill="url(#paint0_radial)"
            />
            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(92.545 118.724 174.844) scale(480.474 650.325)"
              >
                <stop offset=".25" stopColor="#FE7B02" />
                <stop offset=".433" stopColor="#FE4230" />
                <stop offset=".548" stopColor="#FE529A" />
                <stop offset=".654" stopColor="#DD67EE" />
                <stop offset=".95" stopColor="#4B73FF" />
              </radialGradient>
            </defs>
          </svg>

          <span className="text-xl font-bold tracking-tight">Lovable</span>
        </Link>

        

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm transition hover:bg-gray-100"
          >
            Log in
          </Link>

          <Link
            href="/get-started"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}