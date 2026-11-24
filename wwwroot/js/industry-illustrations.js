/**
 * Megatec Industry SVG Illustrations
 * Inline SVG templates for scroll-driven animations
 */

const MegatecIllustrations = {

    /**
     * Hero Combined Industries Illustration
     * Features elements from Construction, Aerospace, and Oil & Gas
     */
    heroScene: `
        <svg class="hero-svg" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Project Management Industries Illustration">
            <defs>
                <!-- Gradients -->
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#E8F4FD"/>
                    <stop offset="100%" stop-color="#F8F5ED"/>
                </linearGradient>
                <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#E5E7EB"/>
                    <stop offset="100%" stop-color="#9CA3AF"/>
                </linearGradient>
                <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#1dace8"/>
                    <stop offset="100%" stop-color="#0a7399"/>
                </linearGradient>
                <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stop-color="#F59E0B"/>
                    <stop offset="50%" stop-color="#EF4444"/>
                    <stop offset="100%" stop-color="#FBBF24"/>
                </linearGradient>

                <!-- Clip paths -->
                <clipPath id="windowClip">
                    <rect x="0" y="0" width="20" height="15" rx="2"/>
                </clipPath>
            </defs>

            <!-- Background -->
            <rect width="1000" height="500" fill="url(#skyGradient)" class="hero-element parallax-slow"/>

            <!-- Ground plane -->
            <path d="M0 420 Q250 400 500 420 Q750 440 1000 420 L1000 500 L0 500 Z" fill="#E5D9C5" class="hero-element ground"/>

            <!-- Connection lines (animated paths) -->
            <g class="connection-lines">
                <path class="connection-line hero-element" d="M200 350 Q350 300 500 320 Q650 340 800 300" stroke="#1dace8" stroke-width="2" fill="none" stroke-dasharray="10,5"/>
                <path class="connection-line hero-element" d="M150 380 L300 350 L450 370 L600 340 L750 360 L900 330" stroke="#1dace8" stroke-width="1.5" fill="none" opacity="0.5"/>
            </g>

            <!-- CONSTRUCTION SECTION (Left) -->
            <g class="construction-group" transform="translate(50, 100)">
                <!-- Building under construction -->
                <g class="building hero-element">
                    <!-- Foundation -->
                    <rect x="30" y="280" width="180" height="40" fill="#6B7280" rx="2"/>

                    <!-- Building structure -->
                    <rect x="40" y="120" width="160" height="160" fill="url(#buildingGradient)" class="building-main"/>

                    <!-- Floors -->
                    <g class="floors">
                        <rect x="50" y="130" width="140" height="35" fill="#93C5FD" opacity="0.7" class="floor hero-element"/>
                        <rect x="50" y="175" width="140" height="35" fill="#93C5FD" opacity="0.7" class="floor hero-element"/>
                        <rect x="50" y="220" width="140" height="35" fill="#93C5FD" opacity="0.7" class="floor hero-element"/>
                        <rect x="50" y="265" width="140" height="8" fill="#93C5FD" opacity="0.7" class="floor hero-element"/>
                    </g>

                    <!-- Windows grid -->
                    <g fill="#60A5FA" opacity="0.8">
                        <rect x="55" y="135" width="18" height="12" rx="1"/>
                        <rect x="78" y="135" width="18" height="12" rx="1"/>
                        <rect x="101" y="135" width="18" height="12" rx="1"/>
                        <rect x="124" y="135" width="18" height="12" rx="1"/>
                        <rect x="147" y="135" width="18" height="12" rx="1"/>
                    </g>
                </g>

                <!-- Crane -->
                <g class="crane hero-element">
                    <!-- Crane tower -->
                    <rect x="220" y="80" width="15" height="240" fill="#FF8C42"/>
                    <rect x="217" y="320" width="21" height="10" fill="#6B7280"/>

                    <!-- Crane arm -->
                    <g class="crane-arm">
                        <rect x="220" y="75" width="120" height="10" fill="#FF8C42"/>
                        <rect x="335" y="60" width="8" height="30" fill="#6B7280"/>
                        <!-- Cable -->
                        <line x1="339" y1="90" x2="339" y2="180" stroke="#374151" stroke-width="2"/>
                        <!-- Hook -->
                        <path d="M334 180 L344 180 L344 195 Q339 200 334 195 Z" fill="#6B7280"/>
                    </g>

                    <!-- Counter weight -->
                    <rect x="180" y="70" width="40" height="20" fill="#6B7280"/>
                </g>

                <!-- Construction beams -->
                <g class="beams">
                    <rect x="260" y="200" width="60" height="8" fill="#9CA3AF" class="beam hero-element"/>
                    <rect x="250" y="230" width="70" height="8" fill="#9CA3AF" class="beam hero-element"/>
                    <rect x="270" y="260" width="50" height="8" fill="#9CA3AF" class="beam hero-element"/>
                </g>

                <!-- Workers -->
                <g class="workers">
                    <circle cx="100" cy="295" r="8" fill="#FFD166" class="worker hero-element"/>
                    <circle cx="140" cy="295" r="8" fill="#FFD166" class="worker hero-element"/>
                    <circle cx="260" cy="308" r="8" fill="#FFD166" class="worker hero-element"/>
                </g>
            </g>

            <!-- AEROSPACE SECTION (Center) -->
            <g class="aerospace-group" transform="translate(380, 50)">
                <!-- Satellite -->
                <g class="satellite hero-element" transform="translate(100, 30)">
                    <rect x="-15" y="-8" width="30" height="16" fill="#9CA3AF" rx="3"/>
                    <!-- Solar panels -->
                    <rect x="-55" y="-5" width="38" height="10" fill="#3B82F6" class="solar-panel"/>
                    <rect x="17" y="-5" width="38" height="10" fill="#3B82F6" class="solar-panel"/>
                    <!-- Antenna -->
                    <circle cx="0" cy="-12" r="4" fill="#60A5FA"/>
                </g>

                <!-- Orbit path -->
                <ellipse cx="100" cy="100" rx="150" ry="80" fill="none" stroke="#60A5FA" stroke-width="1" stroke-dasharray="8,4" opacity="0.3" class="orbit-path hero-element"/>

                <!-- Aircraft -->
                <g class="aircraft hero-element" transform="translate(50, 150)">
                    <!-- Fuselage -->
                    <ellipse cx="60" cy="15" rx="55" ry="12" fill="#9CA3AF"/>
                    <!-- Cockpit -->
                    <ellipse cx="105" cy="15" rx="15" ry="10" fill="#60A5FA" opacity="0.8"/>
                    <!-- Wings -->
                    <path d="M40 15 L20 45 L80 45 L60 15" fill="#6B7280" class="aircraft-wing"/>
                    <!-- Tail -->
                    <path d="M10 15 L0 0 L20 15" fill="#6B7280"/>
                    <!-- Engine -->
                    <ellipse cx="50" cy="45" rx="8" ry="4" fill="#374151"/>
                </g>

                <!-- Radar station -->
                <g class="radar hero-element" transform="translate(160, 320)">
                    <rect x="-15" y="0" width="30" height="60" fill="#1E3A5F" class="radar-base"/>
                    <path d="M0 0 L-40 -50 A50 50 0 0 1 40 -50 Z" fill="#10B981" opacity="0.3" class="radar-sweep"/>
                    <circle cx="0" cy="-5" r="8" fill="#1E3A5F"/>
                </g>

                <!-- Signal waves -->
                <g class="signals" transform="translate(160, 260)">
                    <circle cx="0" cy="0" r="20" fill="none" stroke="#10B981" stroke-width="2" opacity="0.6" class="signal-wave hero-element"/>
                    <circle cx="0" cy="0" r="35" fill="none" stroke="#10B981" stroke-width="2" opacity="0.4" class="signal-wave hero-element"/>
                    <circle cx="0" cy="0" r="50" fill="none" stroke="#10B981" stroke-width="2" opacity="0.2" class="signal-wave hero-element"/>
                </g>

                <!-- Control panels (floating UI elements) -->
                <g class="control-panels">
                    <g class="control-panel hero-element" transform="translate(0, 220)">
                        <rect x="0" y="0" width="70" height="45" fill="white" rx="6" stroke="#E5E7EB"/>
                        <rect x="8" y="8" width="54" height="4" fill="#E5E7EB" rx="2"/>
                        <rect x="8" y="16" width="40" height="4" fill="#1dace8" rx="2"/>
                        <rect x="8" y="24" width="30" height="4" fill="#E5E7EB" rx="2"/>
                        <circle cx="55" cy="35" r="6" fill="#10B981"/>
                    </g>
                </g>
            </g>

            <!-- OIL & GAS SECTION (Right) -->
            <g class="oil-gas-group" transform="translate(680, 100)">
                <!-- Refinery -->
                <g class="refinery hero-element">
                    <!-- Main tower -->
                    <rect x="40" y="100" width="40" height="180" fill="#6B7280"/>
                    <rect x="35" y="90" width="50" height="15" fill="#4B5563"/>

                    <!-- Secondary tower -->
                    <rect x="100" y="140" width="30" height="140" fill="#6B7280"/>
                    <rect x="95" y="130" width="40" height="15" fill="#4B5563"/>

                    <!-- Distillation column details -->
                    <circle cx="60" cy="130" r="12" fill="#4B5563"/>
                    <circle cx="60" cy="170" r="12" fill="#4B5563"/>
                    <circle cx="60" cy="210" r="12" fill="#4B5563"/>

                    <!-- Flame stack -->
                    <rect x="150" y="80" width="12" height="200" fill="#4B5563"/>
                    <g class="flame hero-element">
                        <path d="M156 80 Q166 50 156 30 Q146 50 156 80" fill="url(#flameGradient)"/>
                        <path d="M156 75 Q162 55 156 40 Q150 55 156 75" fill="#FBBF24"/>
                    </g>
                </g>

                <!-- Pipelines -->
                <g class="pipelines">
                    <path d="M80 200 Q120 200 140 220 Q160 240 200 240" stroke="#4B5563" stroke-width="8" fill="none" stroke-linecap="round" class="pipeline hero-element"/>
                    <path d="M80 200 Q120 200 140 220 Q160 240 200 240" stroke="#F59E0B" stroke-width="4" fill="none" stroke-linecap="round" class="pipeline-inner"/>

                    <path d="M130 160 L180 160 L180 200" stroke="#4B5563" stroke-width="6" fill="none" stroke-linecap="round" class="pipeline hero-element"/>
                </g>

                <!-- Storage tanks -->
                <g class="storage-tanks">
                    <g class="storage-tank hero-element" transform="translate(200, 200)">
                        <ellipse cx="30" cy="0" rx="30" ry="10" fill="#6B7280"/>
                        <rect x="0" y="0" width="60" height="80" fill="#6B7280"/>
                        <ellipse cx="30" cy="80" rx="30" ry="10" fill="#4B5563"/>
                        <!-- Tank level indicator -->
                        <rect x="10" y="30" width="40" height="40" fill="#F59E0B" opacity="0.6"/>
                    </g>

                    <g class="storage-tank hero-element" transform="translate(270, 220)">
                        <ellipse cx="25" cy="0" rx="25" ry="8" fill="#6B7280"/>
                        <rect x="0" y="0" width="50" height="60" fill="#6B7280"/>
                        <ellipse cx="25" cy="60" rx="25" ry="8" fill="#4B5563"/>
                        <rect x="8" y="20" width="34" height="30" fill="#F59E0B" opacity="0.6"/>
                    </g>
                </g>

                <!-- Drilling platform (offshore feel) -->
                <g class="drilling-platform hero-element" transform="translate(220, 320)">
                    <rect x="0" y="0" width="80" height="8" fill="#374151"/>
                    <rect x="10" y="8" width="8" height="50" fill="#4B5563" class="platform-leg"/>
                    <rect x="62" y="8" width="8" height="50" fill="#4B5563" class="platform-leg"/>
                    <rect x="30" y="-30" width="20" height="30" fill="#6B7280"/>
                </g>
            </g>

            <!-- DATA FLOW INDICATORS (connecting all sections) -->
            <g class="data-indicators">
                <g class="data-node hero-element" transform="translate(350, 350)">
                    <circle cx="0" cy="0" r="12" fill="white" stroke="#1dace8" stroke-width="2"/>
                    <circle cx="0" cy="0" r="6" fill="#1dace8"/>
                </g>
                <g class="data-node hero-element" transform="translate(500, 380)">
                    <circle cx="0" cy="0" r="12" fill="white" stroke="#1dace8" stroke-width="2"/>
                    <circle cx="0" cy="0" r="6" fill="#1dace8"/>
                </g>
                <g class="data-node hero-element" transform="translate(650, 360)">
                    <circle cx="0" cy="0" r="12" fill="white" stroke="#1dace8" stroke-width="2"/>
                    <circle cx="0" cy="0" r="6" fill="#1dace8"/>
                </g>
            </g>

            <!-- MEGATEC BADGE -->
            <g class="megatec-badge hero-element parallax-fast" transform="translate(850, 420)">
                <rect x="0" y="0" width="120" height="50" rx="8" fill="white" stroke="#E5E7EB"/>
                <text x="60" y="22" text-anchor="middle" font-size="10" fill="#86868b" font-family="var(--font-family)">Powered by</text>
                <text x="60" y="38" text-anchor="middle" font-size="12" fill="#1d1d1f" font-weight="600" font-family="var(--font-family)">Primavera</text>
            </g>
        </svg>
    `,

    /**
     * Construction Industry Illustration
     */
    construction: `
        <svg class="industry-svg construction-scene" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" data-industry="construction" aria-label="Construction Industry Illustration">
            <defs>
                <linearGradient id="constSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#E0F2FE"/>
                    <stop offset="100%" stop-color="#F8F5ED"/>
                </linearGradient>
                <linearGradient id="constBuildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#D1D5DB"/>
                    <stop offset="100%" stop-color="#9CA3AF"/>
                </linearGradient>
                <pattern id="blueprintGrid" patternUnits="userSpaceOnUse" width="20" height="20">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1dace8" stroke-width="0.5" opacity="0.2"/>
                </pattern>
            </defs>

            <!-- Background -->
            <rect width="800" height="450" fill="url(#constSkyGradient)"/>

            <!-- Blueprint grid overlay -->
            <rect width="800" height="450" fill="url(#blueprintGrid)" class="scene-element" opacity="0.3"/>

            <!-- Ground -->
            <rect x="0" y="380" width="800" height="70" fill="#D4A574" class="scene-element ground"/>
            <rect x="0" y="380" width="800" height="5" fill="#C4956A"/>

            <!-- MAIN BUILDING -->
            <g class="building scene-element" transform="translate(100, 80)">
                <!-- Foundation -->
                <rect x="0" y="290" width="250" height="30" fill="#6B7280" rx="2"/>

                <!-- Building structure -->
                <rect x="10" y="40" width="230" height="250" fill="url(#constBuildingGradient)" stroke="#6B7280" stroke-width="2"/>

                <!-- Floors with windows -->
                <g class="floors">
                    <g class="floor scene-element">
                        <rect x="20" y="50" width="210" height="55" fill="#E5E7EB"/>
                        <g fill="#93C5FD">
                            <rect x="30" y="60" width="35" height="35" rx="2"/>
                            <rect x="75" y="60" width="35" height="35" rx="2"/>
                            <rect x="120" y="60" width="35" height="35" rx="2"/>
                            <rect x="165" y="60" width="35" height="35" rx="2"/>
                        </g>
                    </g>
                    <g class="floor scene-element">
                        <rect x="20" y="115" width="210" height="55" fill="#E5E7EB"/>
                        <g fill="#93C5FD">
                            <rect x="30" y="125" width="35" height="35" rx="2"/>
                            <rect x="75" y="125" width="35" height="35" rx="2"/>
                            <rect x="120" y="125" width="35" height="35" rx="2"/>
                            <rect x="165" y="125" width="35" height="35" rx="2"/>
                        </g>
                    </g>
                    <g class="floor scene-element">
                        <rect x="20" y="180" width="210" height="55" fill="#E5E7EB"/>
                        <g fill="#93C5FD">
                            <rect x="30" y="190" width="35" height="35" rx="2"/>
                            <rect x="75" y="190" width="35" height="35" rx="2"/>
                            <rect x="120" y="190" width="35" height="35" rx="2"/>
                            <rect x="165" y="190" width="35" height="35" rx="2"/>
                        </g>
                    </g>
                    <g class="floor scene-element">
                        <rect x="20" y="245" width="210" height="40" fill="#E5E7EB"/>
                        <rect x="90" y="255" width="70" height="30" fill="#6B7280" rx="2"/>
                    </g>
                </g>
            </g>

            <!-- CRANE -->
            <g class="crane scene-element" transform="translate(400, 50)">
                <!-- Crane tower -->
                <rect x="0" y="30" width="20" height="300" fill="#FF8C42"/>
                <rect x="-5" y="330" width="30" height="15" fill="#6B7280"/>

                <!-- Tower cross-bracing -->
                <g stroke="#FFD166" stroke-width="2">
                    <line x1="0" y1="50" x2="20" y2="100"/>
                    <line x1="20" y1="50" x2="0" y2="100"/>
                    <line x1="0" y1="100" x2="20" y2="150"/>
                    <line x1="20" y1="100" x2="0" y2="150"/>
                    <line x1="0" y1="150" x2="20" y2="200"/>
                    <line x1="20" y1="150" x2="0" y2="200"/>
                </g>

                <!-- Crane arm (animated) -->
                <g class="crane-arm scene-element">
                    <!-- Main arm -->
                    <rect x="0" y="20" width="180" height="15" fill="#FF8C42"/>
                    <!-- Arm support cables -->
                    <line x1="10" y1="0" x2="10" y2="20" stroke="#374151" stroke-width="2"/>
                    <line x1="10" y1="0" x2="80" y2="20" stroke="#374151" stroke-width="2"/>
                    <line x1="10" y1="0" x2="150" y2="20" stroke="#374151" stroke-width="2"/>
                    <!-- Trolley -->
                    <rect x="140" y="35" width="25" height="15" fill="#6B7280"/>
                    <!-- Cable -->
                    <line x1="152" y1="50" x2="152" y2="150" stroke="#374151" stroke-width="3"/>
                    <!-- Hook -->
                    <path d="M145 150 L160 150 L160 170 Q152 180 145 170 Z" fill="#6B7280"/>

                    <!-- Structural beam being lifted -->
                    <rect x="130" y="175" width="80" height="12" fill="#9CA3AF" stroke="#6B7280" class="beam scene-element"/>
                </g>

                <!-- Counter arm -->
                <rect x="-80" y="20" width="80" height="12" fill="#FF8C42"/>
                <rect x="-75" y="32" width="40" height="30" fill="#6B7280"/>
            </g>

            <!-- SECONDARY STRUCTURE -->
            <g class="structure scene-element" transform="translate(520, 180)">
                <!-- Steel frame -->
                <g stroke="#6B7280" stroke-width="4" fill="none">
                    <rect x="0" y="0" width="120" height="180"/>
                    <line x1="0" y1="60" x2="120" y2="60"/>
                    <line x1="0" y1="120" x2="120" y2="120"/>
                    <line x1="40" y1="0" x2="40" y2="180"/>
                    <line x1="80" y1="0" x2="80" y2="180"/>
                </g>

                <!-- Diagonal bracing -->
                <g stroke="#9CA3AF" stroke-width="2">
                    <line x1="0" y1="0" x2="40" y2="60"/>
                    <line x1="40" y1="0" x2="0" y2="60"/>
                    <line x1="80" y1="60" x2="120" y2="120"/>
                </g>
            </g>

            <!-- BEAMS ON GROUND -->
            <g class="beams">
                <rect x="650" y="350" width="100" height="15" fill="#9CA3AF" stroke="#6B7280" class="beam scene-element"/>
                <rect x="660" y="330" width="80" height="15" fill="#9CA3AF" stroke="#6B7280" class="beam scene-element"/>
                <rect x="670" y="310" width="60" height="15" fill="#9CA3AF" stroke="#6B7280" class="beam scene-element"/>
            </g>

            <!-- WORKERS -->
            <g class="workers">
                <g class="worker scene-element" transform="translate(200, 355)">
                    <circle cx="0" cy="0" r="10" fill="#FFD166"/>
                    <rect x="-6" y="10" width="12" height="20" fill="#3B82F6" rx="2"/>
                </g>
                <g class="worker scene-element" transform="translate(280, 355)">
                    <circle cx="0" cy="0" r="10" fill="#FFD166"/>
                    <rect x="-6" y="10" width="12" height="20" fill="#EF4444" rx="2"/>
                </g>
                <g class="worker scene-element" transform="translate(450, 355)">
                    <circle cx="0" cy="0" r="10" fill="#FFD166"/>
                    <rect x="-6" y="10" width="12" height="20" fill="#10B981" rx="2"/>
                </g>
            </g>

            <!-- EQUIPMENT -->
            <g class="equipment scene-element" transform="translate(50, 340)">
                <!-- Concrete mixer -->
                <ellipse cx="30" cy="20" rx="25" ry="15" fill="#F59E0B"/>
                <rect x="5" y="20" width="50" height="25" fill="#6B7280" rx="3"/>
                <circle cx="15" cy="45" r="8" fill="#374151"/>
                <circle cx="45" cy="45" r="8" fill="#374151"/>
            </g>

            <!-- PROJECT TIMELINE INDICATOR -->
            <g class="timeline scene-element" transform="translate(50, 420)">
                <rect x="0" y="0" width="700" height="8" fill="#E5E7EB" rx="4"/>
                <rect x="0" y="0" width="450" height="8" fill="#1dace8" rx="4"/>
                <circle cx="450" cy="4" r="8" fill="#1dace8"/>
                <text x="460" y="8" font-size="10" fill="#6B7280" font-family="var(--font-family)">65% Complete</text>
            </g>

            <!-- FLOATING UI ELEMENTS -->
            <g class="floating-ui">
                <g class="scene-element" transform="translate(620, 50)">
                    <rect x="0" y="0" width="150" height="80" fill="white" rx="8" stroke="#E5E7EB"/>
                    <text x="12" y="20" font-size="11" fill="#6B7280" font-family="var(--font-family)">Schedule Status</text>
                    <rect x="12" y="30" width="126" height="6" fill="#E5E7EB" rx="3"/>
                    <rect x="12" y="30" width="90" height="6" fill="#10B981" rx="3"/>
                    <text x="12" y="55" font-size="10" fill="#374151" font-family="var(--font-family)">On Track</text>
                    <circle cx="130" cy="50" r="12" fill="#10B981" opacity="0.2"/>
                    <path d="M125 50 L128 53 L135 46" stroke="#10B981" stroke-width="2" fill="none"/>
                </g>
            </g>
        </svg>
    `,

    /**
     * Aerospace & Defense Industry Illustration
     */
    aerospace: `
        <svg class="industry-svg aerospace-scene" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" data-industry="aerospace" aria-label="Aerospace and Defense Industry Illustration">
            <defs>
                <linearGradient id="aeroSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#1E3A5F"/>
                    <stop offset="50%" stop-color="#3B82F6"/>
                    <stop offset="100%" stop-color="#93C5FD"/>
                </linearGradient>
                <radialGradient id="earthGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#60A5FA" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#60A5FA" stop-opacity="0"/>
                </radialGradient>
                <linearGradient id="aircraftBody" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#E5E7EB"/>
                    <stop offset="50%" stop-color="#F3F4F6"/>
                    <stop offset="100%" stop-color="#D1D5DB"/>
                </linearGradient>
            </defs>

            <!-- Sky background -->
            <rect width="800" height="450" fill="url(#aeroSkyGradient)"/>

            <!-- Stars -->
            <g class="stars" fill="white">
                <circle cx="50" cy="30" r="1.5" opacity="0.8"/>
                <circle cx="120" cy="60" r="1" opacity="0.6"/>
                <circle cx="200" cy="20" r="1.5" opacity="0.9"/>
                <circle cx="300" cy="50" r="1" opacity="0.5"/>
                <circle cx="400" cy="25" r="2" opacity="0.8"/>
                <circle cx="500" cy="45" r="1" opacity="0.6"/>
                <circle cx="600" cy="15" r="1.5" opacity="0.7"/>
                <circle cx="700" cy="55" r="1" opacity="0.5"/>
                <circle cx="750" cy="30" r="2" opacity="0.9"/>
            </g>

            <!-- Earth curve at bottom -->
            <ellipse cx="400" cy="550" rx="500" ry="150" fill="#1E40AF" opacity="0.3"/>
            <ellipse cx="400" cy="560" rx="480" ry="140" fill="url(#earthGlow)"/>

            <!-- SATELLITE -->
            <g class="satellite scene-element" transform="translate(600, 80)">
                <!-- Main body -->
                <rect x="-20" y="-12" width="40" height="24" fill="#9CA3AF" rx="4" stroke="#6B7280"/>

                <!-- Solar panels -->
                <g class="solar-panel scene-element">
                    <rect x="-80" y="-8" width="55" height="16" fill="#1E40AF"/>
                    <g stroke="#3B82F6" stroke-width="1">
                        <line x1="-75" y1="-8" x2="-75" y2="8"/>
                        <line x1="-65" y1="-8" x2="-65" y2="8"/>
                        <line x1="-55" y1="-8" x2="-55" y2="8"/>
                        <line x1="-45" y1="-8" x2="-45" y2="8"/>
                        <line x1="-35" y1="-8" x2="-35" y2="8"/>
                    </g>
                </g>
                <g class="solar-panel scene-element">
                    <rect x="25" y="-8" width="55" height="16" fill="#1E40AF"/>
                    <g stroke="#3B82F6" stroke-width="1">
                        <line x1="30" y1="-8" x2="30" y2="8"/>
                        <line x1="40" y1="-8" x2="40" y2="8"/>
                        <line x1="50" y1="-8" x2="50" y2="8"/>
                        <line x1="60" y1="-8" x2="60" y2="8"/>
                        <line x1="70" y1="-8" x2="70" y2="8"/>
                    </g>
                </g>

                <!-- Antenna dish -->
                <ellipse cx="0" cy="-20" rx="12" ry="6" fill="#D1D5DB" stroke="#9CA3AF"/>
                <line x1="0" y1="-12" x2="0" y2="-20" stroke="#6B7280" stroke-width="2"/>

                <!-- Status lights -->
                <circle cx="-10" cy="0" r="3" fill="#10B981" class="status-light"/>
                <circle cx="10" cy="0" r="3" fill="#3B82F6" class="status-light"/>
            </g>

            <!-- Orbit path -->
            <ellipse cx="400" cy="200" rx="350" ry="150" fill="none" stroke="#60A5FA" stroke-width="1" stroke-dasharray="15,10" opacity="0.4" class="orbit-path scene-element"/>

            <!-- AIRCRAFT -->
            <g class="aircraft scene-element" transform="translate(150, 200)">
                <!-- Fuselage -->
                <path d="M0 20 Q20 5 100 5 L180 5 Q200 5 210 15 L210 25 Q200 35 180 35 L100 35 Q20 35 0 20 Z" fill="url(#aircraftBody)" stroke="#9CA3AF"/>

                <!-- Cockpit windows -->
                <ellipse cx="195" cy="20" rx="12" ry="8" fill="#60A5FA" opacity="0.8"/>
                <ellipse cx="180" cy="20" rx="8" ry="6" fill="#93C5FD" opacity="0.6"/>

                <!-- Wings -->
                <path d="M80 20 L40 70 L50 75 L100 35" fill="#D1D5DB" stroke="#9CA3AF" class="aircraft-wing"/>
                <path d="M80 20 L40 -30 L50 -35 L100 5" fill="#D1D5DB" stroke="#9CA3AF" class="aircraft-wing"/>

                <!-- Tail -->
                <path d="M15 20 L0 -15 L10 -20 L25 5" fill="#9CA3AF"/>
                <path d="M20 10 L5 10 L0 -5 L15 5" fill="#6B7280"/>

                <!-- Engines -->
                <ellipse cx="70" cy="70" rx="12" ry="6" fill="#6B7280"/>
                <ellipse cx="70" cy="-30" rx="12" ry="6" fill="#6B7280"/>

                <!-- Engine glow -->
                <ellipse cx="60" cy="70" rx="8" ry="4" fill="#F59E0B" opacity="0.6"/>
                <ellipse cx="60" cy="-30" rx="8" ry="4" fill="#F59E0B" opacity="0.6"/>
            </g>

            <!-- RADAR STATION -->
            <g class="radar scene-element" transform="translate(650, 350)">
                <!-- Base structure -->
                <rect x="-30" y="20" width="60" height="80" fill="#1E3A5F"/>
                <rect x="-40" y="100" width="80" height="20" fill="#374151"/>

                <!-- Radar dish -->
                <g class="radar-dish">
                    <ellipse cx="0" cy="0" rx="40" ry="20" fill="#6B7280" stroke="#4B5563" stroke-width="2"/>
                    <ellipse cx="0" cy="0" rx="30" ry="15" fill="#9CA3AF"/>
                    <circle cx="0" cy="0" r="8" fill="#374151"/>
                </g>

                <!-- Radar sweep animation area -->
                <g class="radar-sweep scene-element" transform="translate(0, -50)">
                    <path d="M0 50 L-60 -30 A80 80 0 0 1 60 -30 Z" fill="#10B981" opacity="0.2"/>
                </g>

                <!-- Signal waves -->
                <g class="signals" transform="translate(0, -50)">
                    <circle r="30" fill="none" stroke="#10B981" stroke-width="2" opacity="0.6" class="signal-wave scene-element"/>
                    <circle r="50" fill="none" stroke="#10B981" stroke-width="2" opacity="0.4" class="signal-wave scene-element"/>
                    <circle r="70" fill="none" stroke="#10B981" stroke-width="2" opacity="0.2" class="signal-wave scene-element"/>
                </g>
            </g>

            <!-- CONTROL CENTER (floating panel) -->
            <g class="control-panel scene-element" transform="translate(50, 300)">
                <rect x="0" y="0" width="180" height="120" fill="rgba(255,255,255,0.95)" rx="12" stroke="#E5E7EB"/>

                <!-- Header -->
                <rect x="0" y="0" width="180" height="30" fill="#1E3A5F" rx="12 12 0 0"/>
                <text x="15" y="20" font-size="11" fill="white" font-family="var(--font-family)">Mission Control</text>
                <circle cx="160" cy="15" r="5" fill="#10B981"/>

                <!-- Data displays -->
                <text x="15" y="50" font-size="9" fill="#6B7280" font-family="var(--font-family)">Altitude</text>
                <text x="15" y="65" font-size="14" fill="#1E3A5F" font-weight="600" font-family="var(--font-family)">35,000 ft</text>

                <text x="100" y="50" font-size="9" fill="#6B7280" font-family="var(--font-family)">Speed</text>
                <text x="100" y="65" font-size="14" fill="#1E3A5F" font-weight="600" font-family="var(--font-family)">Mach 0.85</text>

                <!-- Progress bar -->
                <text x="15" y="85" font-size="9" fill="#6B7280" font-family="var(--font-family)">Mission Progress</text>
                <rect x="15" y="92" width="150" height="6" fill="#E5E7EB" rx="3"/>
                <rect x="15" y="92" width="105" height="6" fill="#3B82F6" rx="3"/>
                <text x="15" y="110" font-size="9" fill="#374151" font-family="var(--font-family)">70% Complete</text>
            </g>

            <!-- SECONDARY AIRCRAFT (smaller, background) -->
            <g class="aircraft scene-element" transform="translate(450, 120) scale(0.5)">
                <path d="M0 20 Q20 5 100 5 L180 5 Q200 5 210 15 L210 25 Q200 35 180 35 L100 35 Q20 35 0 20 Z" fill="#9CA3AF" opacity="0.6"/>
                <path d="M80 20 L40 70 L50 75 L100 35" fill="#6B7280" opacity="0.6"/>
                <path d="M80 20 L40 -30 L50 -35 L100 5" fill="#6B7280" opacity="0.6"/>
            </g>

            <!-- DATA CONNECTION LINES -->
            <g class="connections">
                <path d="M230 220 Q350 180 580 90" stroke="#60A5FA" stroke-width="1.5" fill="none" stroke-dasharray="8,4" opacity="0.5" class="connection-line scene-element"/>
                <path d="M600 110 Q620 250 650 300" stroke="#10B981" stroke-width="1.5" fill="none" stroke-dasharray="8,4" opacity="0.5" class="connection-line scene-element"/>
            </g>

            <!-- FLOATING STATUS INDICATORS -->
            <g class="status-indicators">
                <g class="scene-element" transform="translate(300, 50)">
                    <rect x="0" y="0" width="100" height="40" fill="rgba(255,255,255,0.9)" rx="8"/>
                    <circle cx="20" cy="20" r="8" fill="#10B981"/>
                    <text x="35" y="17" font-size="9" fill="#6B7280" font-family="var(--font-family)">Systems</text>
                    <text x="35" y="28" font-size="11" fill="#10B981" font-weight="600" font-family="var(--font-family)">Online</text>
                </g>
            </g>
        </svg>
    `,

    /**
     * Oil & Gas Industry Illustration
     */
    oilGas: `
        <svg class="industry-svg oil-gas-scene" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" data-industry="oil" aria-label="Oil and Gas Industry Illustration">
            <defs>
                <linearGradient id="oilSkyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#FED7AA"/>
                    <stop offset="100%" stop-color="#F8F5ED"/>
                </linearGradient>
                <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#60A5FA"/>
                    <stop offset="100%" stop-color="#3B82F6"/>
                </linearGradient>
                <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stop-color="#F59E0B"/>
                    <stop offset="40%" stop-color="#EF4444"/>
                    <stop offset="100%" stop-color="#FCD34D"/>
                </linearGradient>
                <linearGradient id="tankGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#6B7280"/>
                    <stop offset="50%" stop-color="#9CA3AF"/>
                    <stop offset="100%" stop-color="#6B7280"/>
                </linearGradient>
            </defs>

            <!-- Sky -->
            <rect width="800" height="300" fill="url(#oilSkyGradient)"/>

            <!-- Water -->
            <rect x="0" y="300" width="800" height="150" fill="url(#waterGradient)" opacity="0.8"/>

            <!-- Water waves -->
            <g class="waves" opacity="0.3">
                <path d="M0 320 Q100 310 200 320 Q300 330 400 320 Q500 310 600 320 Q700 330 800 320" stroke="white" stroke-width="2" fill="none"/>
                <path d="M0 340 Q100 330 200 340 Q300 350 400 340 Q500 330 600 340 Q700 350 800 340" stroke="white" stroke-width="1.5" fill="none"/>
            </g>

            <!-- OFFSHORE PLATFORM -->
            <g class="drilling-platform scene-element" transform="translate(500, 180)">
                <!-- Platform legs -->
                <rect x="-60" y="80" width="15" height="150" fill="#374151" class="platform-leg"/>
                <rect x="45" y="80" width="15" height="150" fill="#374151" class="platform-leg"/>
                <rect x="-10" y="80" width="15" height="150" fill="#374151" class="platform-leg"/>

                <!-- Cross bracing -->
                <g stroke="#4B5563" stroke-width="3">
                    <line x1="-52" y1="100" x2="-2" y2="180"/>
                    <line x1="-2" y1="100" x2="-52" y2="180"/>
                    <line x1="5" y1="100" x2="52" y2="180"/>
                    <line x1="52" y1="100" x2="5" y2="180"/>
                </g>

                <!-- Main deck -->
                <rect x="-80" y="60" width="160" height="25" fill="#6B7280"/>
                <rect x="-85" y="55" width="170" height="10" fill="#4B5563"/>

                <!-- Structures on deck -->
                <rect x="-70" y="20" width="40" height="40" fill="#9CA3AF"/>
                <rect x="-20" y="0" width="30" height="60" fill="#6B7280"/>
                <rect x="20" y="10" width="50" height="50" fill="#9CA3AF"/>

                <!-- Derrick -->
                <g class="derrick">
                    <path d="M-5 0 L5 0 L15 -80 L-15 -80 Z" fill="none" stroke="#374151" stroke-width="3"/>
                    <line x1="0" y1="-80" x2="0" y2="-100" stroke="#374151" stroke-width="4"/>
                    <!-- Cross bracing on derrick -->
                    <line x1="-10" y1="-20" x2="10" y2="-40" stroke="#4B5563" stroke-width="2"/>
                    <line x1="10" y1="-20" x2="-10" y2="-40" stroke="#4B5563" stroke-width="2"/>
                    <line x1="-8" y1="-45" x2="8" y2="-65" stroke="#4B5563" stroke-width="2"/>
                </g>

                <!-- Helipad -->
                <circle cx="45" cy="35" r="20" fill="#374151" stroke="white" stroke-width="2"/>
                <text x="45" y="40" text-anchor="middle" font-size="12" fill="white" font-weight="bold">H</text>

                <!-- Crane on platform -->
                <g transform="translate(-50, 10)">
                    <rect x="0" y="0" width="8" height="30" fill="#F59E0B"/>
                    <rect x="0" y="-5" width="40" height="6" fill="#F59E0B"/>
                </g>
            </g>

            <!-- REFINERY (onshore) -->
            <g class="refinery scene-element" transform="translate(50, 100)">
                <!-- Main distillation tower -->
                <rect x="0" y="80" width="50" height="180" fill="url(#tankGradient)"/>
                <ellipse cx="25" cy="80" rx="25" ry="8" fill="#9CA3AF"/>
                <ellipse cx="25" cy="260" rx="25" ry="8" fill="#6B7280"/>

                <!-- Tower details -->
                <g fill="#4B5563">
                    <ellipse cx="25" cy="110" rx="20" ry="5"/>
                    <ellipse cx="25" cy="150" rx="20" ry="5"/>
                    <ellipse cx="25" cy="190" rx="20" ry="5"/>
                    <ellipse cx="25" cy="230" rx="20" ry="5"/>
                </g>

                <!-- Secondary tower -->
                <rect x="70" y="120" width="35" height="140" fill="url(#tankGradient)"/>
                <ellipse cx="87" cy="120" rx="17" ry="6" fill="#9CA3AF"/>

                <!-- Flare stack -->
                <rect x="120" y="60" width="12" height="200" fill="#4B5563"/>
                <rect x="118" y="55" width="16" height="8" fill="#6B7280"/>

                <!-- Flame -->
                <g class="flame scene-element">
                    <path d="M126 55 Q140 25 126 0 Q112 25 126 55" fill="url(#flameGrad)"/>
                    <path d="M126 50 Q135 30 126 10 Q117 30 126 50" fill="#FCD34D"/>
                </g>

                <!-- Secondary flame glow -->
                <ellipse cx="126" cy="40" rx="20" ry="30" fill="#F59E0B" opacity="0.2"/>
            </g>

            <!-- STORAGE TANKS -->
            <g class="storage-tanks">
                <g class="storage-tank scene-element" transform="translate(180, 180)">
                    <ellipse cx="40" cy="0" rx="40" ry="12" fill="#9CA3AF"/>
                    <rect x="0" y="0" width="80" height="80" fill="url(#tankGradient)"/>
                    <ellipse cx="40" cy="80" rx="40" ry="12" fill="#6B7280"/>
                    <!-- Tank level -->
                    <rect x="5" y="30" width="70" height="45" fill="#F59E0B" opacity="0.5"/>
                    <!-- Tank details -->
                    <line x1="40" y1="0" x2="40" y2="80" stroke="#4B5563" stroke-width="1"/>
                    <rect x="30" y="-20" width="20" height="20" fill="#6B7280"/>
                </g>

                <g class="storage-tank scene-element" transform="translate(280, 200)">
                    <ellipse cx="35" cy="0" rx="35" ry="10" fill="#9CA3AF"/>
                    <rect x="0" y="0" width="70" height="60" fill="url(#tankGradient)"/>
                    <ellipse cx="35" cy="60" rx="35" ry="10" fill="#6B7280"/>
                    <rect x="5" y="20" width="60" height="35" fill="#F59E0B" opacity="0.5"/>
                </g>
            </g>

            <!-- PIPELINES -->
            <g class="pipelines">
                <!-- Main pipeline -->
                <path d="M50 280 Q150 290 250 270 Q350 250 450 280" stroke="#4B5563" stroke-width="12" fill="none" stroke-linecap="round" class="pipeline scene-element"/>
                <path d="M50 280 Q150 290 250 270 Q350 250 450 280" stroke="#F59E0B" stroke-width="6" fill="none" stroke-linecap="round" class="pipeline-inner"/>

                <!-- Pipeline from tanks -->
                <path d="M220 260 L220 290" stroke="#4B5563" stroke-width="8" fill="none" class="pipeline scene-element"/>
                <path d="M315 260 L315 275 L350 275" stroke="#4B5563" stroke-width="8" fill="none" class="pipeline scene-element"/>

                <!-- Pipeline to platform -->
                <path d="M450 280 Q475 300 500 320" stroke="#4B5563" stroke-width="10" fill="none" stroke-linecap="round" class="pipeline scene-element"/>

                <!-- Animated oil flow indicators -->
                <g class="oil-flow scene-element">
                    <circle cx="100" cy="285" r="4" fill="#1F2937"/>
                    <circle cx="200" cy="275" r="4" fill="#1F2937"/>
                    <circle cx="300" cy="265" r="4" fill="#1F2937"/>
                    <circle cx="400" cy="275" r="4" fill="#1F2937"/>
                </g>
            </g>

            <!-- SUPPLY VESSEL -->
            <g class="vessel scene-element" transform="translate(650, 350)">
                <path d="M0 20 L10 40 L90 40 L100 20 L90 10 L10 10 Z" fill="#6B7280"/>
                <rect x="30" y="0" width="40" height="15" fill="#9CA3AF"/>
                <rect x="45" y="-15" width="10" height="15" fill="#4B5563"/>
            </g>

            <!-- CONTROL PANEL -->
            <g class="control-panel scene-element" transform="translate(620, 50)">
                <rect x="0" y="0" width="160" height="100" fill="rgba(255,255,255,0.95)" rx="10" stroke="#E5E7EB"/>

                <text x="12" y="22" font-size="11" fill="#374151" font-weight="600" font-family="var(--font-family)">Production Monitor</text>

                <!-- Production bar -->
                <text x="12" y="42" font-size="9" fill="#6B7280" font-family="var(--font-family)">Daily Output</text>
                <rect x="12" y="48" width="136" height="8" fill="#E5E7EB" rx="4"/>
                <rect x="12" y="48" width="115" height="8" fill="#F59E0B" rx="4"/>
                <text x="130" y="56" font-size="8" fill="#374151" font-family="var(--font-family)">85%</text>

                <!-- Status indicators -->
                <g transform="translate(12, 70)">
                    <circle cx="8" cy="8" r="6" fill="#10B981"/>
                    <text x="20" y="12" font-size="9" fill="#374151" font-family="var(--font-family)">Platform Online</text>
                </g>
                <g transform="translate(90, 70)">
                    <circle cx="8" cy="8" r="6" fill="#3B82F6"/>
                    <text x="20" y="12" font-size="9" fill="#374151" font-family="var(--font-family)">Pipeline Active</text>
                </g>
            </g>

            <!-- DATA NODES -->
            <g class="data-nodes">
                <g class="data-node scene-element" transform="translate(126, 55)">
                    <circle r="8" fill="white" stroke="#F59E0B" stroke-width="2"/>
                    <circle r="4" fill="#F59E0B"/>
                </g>
                <g class="data-node scene-element" transform="translate(220, 180)">
                    <circle r="8" fill="white" stroke="#1dace8" stroke-width="2"/>
                    <circle r="4" fill="#1dace8"/>
                </g>
                <g class="data-node scene-element" transform="translate(500, 80)">
                    <circle r="8" fill="white" stroke="#1dace8" stroke-width="2"/>
                    <circle r="4" fill="#1dace8"/>
                </g>
            </g>

            <!-- CONNECTION LINES -->
            <g class="connections" opacity="0.4">
                <path d="M126 63 Q170 100 220 180" stroke="#1dace8" stroke-width="1.5" fill="none" stroke-dasharray="6,4" class="connection-line scene-element"/>
                <path d="M228 180 Q350 150 492 80" stroke="#1dace8" stroke-width="1.5" fill="none" stroke-dasharray="6,4" class="connection-line scene-element"/>
            </g>
        </svg>
    `,

    /**
     * Get illustration by industry type
     */
    getIllustration: function(type) {
        const illustrations = {
            'hero': this.heroScene,
            'construction': this.construction,
            'aerospace': this.aerospace,
            'oil': this.oilGas,
            'oilgas': this.oilGas
        };
        return illustrations[type.toLowerCase()] || this.heroScene;
    },

    /**
     * Inject illustration into container
     */
    inject: function(containerId, type) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.getIllustration(type);
        }
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MegatecIllustrations;
} else {
    window.MegatecIllustrations = MegatecIllustrations;
}
