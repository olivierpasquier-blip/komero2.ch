/* Crisp, modern 100% vector SVG boutique illustrations (zero external images) */

export function ArtisanBoutiqueCounterSvg({
  className = 'w-full h-full',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Comptoir de boutique artisanale avec bouquet de fleurs fraîches et tasse de café"
    >
      <defs>
        <linearGradient id="boutiqueWallBg" x1="0" y1="0" x2="360" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="55%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#ECFDF5" />
        </linearGradient>
        <linearGradient id="sunbeamGlow" x1="40" y1="0" x2="210" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="oakSurface" x1="0" y1="146" x2="0" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D6A97A" />
          <stop offset="35%" stopColor="#B88352" />
          <stop offset="100%" stopColor="#8C5A32" />
        </linearGradient>
        <linearGradient id="ceramicVase" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="cupBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      {/* Warm sunlit boutique backdrop */}
      <rect width="360" height="220" fill="url(#boutiqueWallBg)" />

      {/* Arched shop window on left */}
      <path
        d="M22 146V52C22 28 42 14 68 14C94 14 114 28 114 52V146H22Z"
        fill="#DBEAFE"
        fillOpacity="0.65"
        stroke="#CBD5E1"
        strokeWidth="3"
      />
      <line x1="68" y1="16" x2="68" y2="146" stroke="#CBD5E1" strokeWidth="2.5" />
      <line x1="22" y1="78" x2="114" y2="78" stroke="#CBD5E1" strokeWidth="2.5" />
      <polygon points="22,18 114,18 188,146 66,146" fill="url(#sunbeamGlow)" />

      {/* Minimalist floating wooden shelves on right */}
      <rect x="218" y="48" width="120" height="6" rx="3" fill="#B88352" />
      <rect x="234" y="24" width="18" height="24" rx="4" fill="#10B981" fillOpacity="0.82" />
      <rect x="258" y="30" width="22" height="18" rx="4" fill="#2563EB" fillOpacity="0.75" />
      <circle cx="304" cy="36" r="12" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />

      <rect x="230" y="96" width="108" height="6" rx="3" fill="#B88352" />
      <rect x="246" y="70" width="20" height="26" rx="9" fill="#CBD5E1" />
      <rect x="274" y="76" width="16" height="20" rx="3" fill="#0F172A" fillOpacity="0.78" />
      <rect x="298" y="68" width="24" height="28" rx="5" fill="#A7F3D0" stroke="#059669" strokeWidth="1.5" />

      {/* Oak shop counter */}
      <rect x="0" y="146" width="360" height="74" fill="url(#oakSurface)" />
      <rect x="0" y="146" width="360" height="4" fill="#FEF3C7" fillOpacity="0.55" />

      {/* Soft shadows on counter */}
      <ellipse cx="144" cy="176" rx="44" ry="9" fill="#5C3A1E" fillOpacity="0.28" />
      <ellipse cx="244" cy="180" rx="38" ry="8" fill="#5C3A1E" fillOpacity="0.26" />

      {/* Seasonal flower bouquet in artisan ceramic vase */}
      <g>
        {/* Stems & eucalyptus foliage */}
        <path d="M144 108C136 86 118 70 104 60" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
        <path d="M144 108C144 82 142 62 144 42" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
        <path d="M144 108C156 84 170 68 186 58" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
        <path d="M144 108C130 88 122 78 118 52" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M144 108C158 88 168 78 172 48" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />

        {/* Leaves */}
        <ellipse cx="110" cy="78" rx="11" ry="5.5" transform="rotate(-30 110 78)" fill="#10B981" />
        <ellipse cx="178" cy="76" rx="11" ry="5.5" transform="rotate(28 178 76)" fill="#059669" />
        <ellipse cx="122" cy="96" rx="9" ry="4.5" transform="rotate(-20 122 96)" fill="#34D399" />
        <ellipse cx="166" cy="96" rx="9" ry="4.5" transform="rotate(22 166 96)" fill="#34D399" />

        {/* Blossoms (coral, amber, royal blue, cream) */}
        <circle cx="104" cy="58" r="11" fill="#FB7185" />
        <circle cx="104" cy="58" r="4" fill="#FEF08A" />

        <circle cx="144" cy="40" r="13" fill="#F59E0B" />
        <circle cx="144" cy="40" r="5" fill="#FFFBEB" />

        <circle cx="185" cy="56" r="11" fill="#3B82F6" />
        <circle cx="185" cy="56" r="4" fill="#EFF6FF" />

        <circle cx="122" cy="52" r="9.5" fill="#FDE68A" />
        <circle cx="122" cy="52" r="3.5" fill="#D97706" />

        <circle cx="168" cy="48" r="10" fill="#FDA4AF" />
        <circle cx="168" cy="48" r="3.5" fill="#FFF1F2" />

        <circle cx="145" cy="68" r="9" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <circle cx="145" cy="68" r="3.5" fill="#F59E0B" />

        {/* Handcrafted ribbed ceramic vase */}
        <path
          d="M126 106H162L168 156C169 168 160 176 144 176C128 176 119 168 120 156L126 106Z"
          fill="url(#ceramicVase)"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />
        <rect x="122" y="102" width="44" height="8" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
        <line x1="126" y1="132" x2="162" y2="132" stroke="#10B981" strokeWidth="3" strokeOpacity="0.65" />
        <line x1="125" y1="140" x2="163" y2="140" stroke="#2563EB" strokeWidth="2" strokeOpacity="0.45" />
      </g>

      {/* Artisan coffee cup & saucer on right */}
      <g>
        {/* Saucer */}
        <ellipse cx="244" cy="176" rx="34" ry="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
        <ellipse cx="244" cy="175" rx="22" ry="4.5" fill="#E2E8F0" />

        {/* Cup handle */}
        <path
          d="M266 144C276 144 278 162 264 164"
          stroke="#1E293B"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Cup body */}
        <path
          d="M220 136H268L264 165C263 172 255 176 244 176C233 176 225 172 224 165L220 136Z"
          fill="url(#cupBody)"
        />
        {/* Coffee crema & latte art */}
        <ellipse cx="244" cy="136" rx="24" ry="6" fill="#92400E" />
        <ellipse cx="244" cy="136" rx="18" ry="4" fill="#D97706" />
        <path d="M238 136C241 133 247 133 250 136C247 138 241 138 238 136Z" fill="#FEF3C7" />

        {/* Gentle steam wisps */}
        <path d="M236 124C233 116 240 110 237 102" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
        <path d="M250 122C247 114 254 108 251 100" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      </g>

      {/* Small wooden counter tag ("NOUVEAUTÉ") */}
      <g transform="translate(26 154)">
        <rect x="0" y="0" width="66" height="26" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
        <circle cx="12" cy="13" r="4" fill="#10B981" />
        <rect x="21" y="9" width="34" height="3.5" rx="1.75" fill="#1E293B" />
        <rect x="21" y="15.5" width="22" height="3" rx="1.5" fill="#64748B" />
      </g>
    </svg>
  );
}

export function ArtisanStorefrontSvg({
  className = 'w-full h-full',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Devanture moderne d'une boutique artisanale de quartier avec vitrine illuminée et plantes"
    >
      <defs>
        <linearGradient id="skyBackdrop" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient id="windowGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
      </defs>

      <rect width="360" height="220" fill="url(#skyBackdrop)" />

      {/* Building facade */}
      <rect x="28" y="22" width="304" height="174" rx="10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />

      {/* Shop fascia sign */}
      <rect x="44" y="34" width="272" height="30" rx="6" fill="#1E293B" />
      <circle cx="64" cy="49" r="6" fill="#10B981" />
      <rect x="78" y="45" width="116" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.92" />
      <rect x="242" y="44" width="58" height="10" rx="5" fill="#2563EB" />

      {/* Striped boutique awning */}
      <g>
        <path d="M40 68H320L328 94H32L40 68Z" fill="#059669" />
        <path d="M76 68H112L114 94H72L76 68Z" fill="#ECFDF5" />
        <path d="M148 68H184L184 94H148L148 68Z" fill="#ECFDF5" />
        <path d="M220 68H256L260 94H218L220 68Z" fill="#ECFDF5" />
        <path d="M292 68H320L328 94H294L292 68Z" fill="#10B981" />
      </g>

      {/* Main illuminated display window */}
      <rect x="48" y="102" width="174" height="84" rx="6" fill="url(#windowGlow)" stroke="#334155" strokeWidth="3" />
      {/* Interior display shelves & artisan pieces */}
      <line x1="60" y1="138" x2="210" y2="138" stroke="#B45309" strokeWidth="2.5" strokeOpacity="0.45" />
      <line x1="60" y1="166" x2="210" y2="166" stroke="#B45309" strokeWidth="2.5" strokeOpacity="0.45" />
      {/* Products on upper shelf */}
      <rect x="72" y="116" width="20" height="22" rx="4" fill="#2563EB" fillOpacity="0.8" />
      <circle cx="118" cy="126" r="11" fill="#FB7185" />
      <circle cx="118" cy="126" r="4" fill="#FEF08A" />
      <rect x="144" y="114" width="24" height="24" rx="12" fill="#10B981" />
      <rect x="180" y="118" width="18" height="20" rx="3" fill="#F59E0B" />
      {/* Products on lower shelf */}
      <rect x="70" y="148" width="34" height="18" rx="4" fill="#0F172A" fillOpacity="0.82" />
      <rect x="116" y="146" width="38" height="20" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <circle cx="176" cy="156" r="10" fill="#3B82F6" fillOpacity="0.8" />
      {/* Glass sheen */}
      <polygon points="48,102 108,102 74,186 48,186" fill="#FFFFFF" fillOpacity="0.35" />

      {/* Entrance door */}
      <rect x="236" y="102" width="76" height="94" rx="5" fill="#1E293B" />
      <rect x="246" y="112" width="56" height="48" rx="3" fill="#DBEAFE" />
      <rect x="256" y="128" width="36" height="14" rx="4" fill="#10B981" />
      <circle cx="300" cy="172" r="3" fill="#FDE68A" />

      {/* Potted plants flanking entrance */}
      <g transform="translate(18 156)">
        <rect x="4" y="18" width="18" height="22" rx="3" fill="#B45309" />
        <circle cx="13" cy="12" r="11" fill="#10B981" />
        <circle cx="7" cy="15" r="7" fill="#059669" />
      </g>
      <g transform="translate(320 156)">
        <rect x="4" y="18" width="18" height="22" rx="3" fill="#B45309" />
        <circle cx="13" cy="12" r="11" fill="#10B981" />
        <circle cx="19" cy="15" r="7" fill="#059669" />
      </g>

      {/* Clean pavement line */}
      <rect x="0" y="196" width="360" height="24" fill="#E2E8F0" />
      <line x1="0" y1="196" x2="360" y2="196" stroke="#CBD5E1" strokeWidth="2" />
    </svg>
  );
}
