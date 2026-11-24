/**
 * Megatec Scroll-Driven Illustrations
 * monday.com-inspired scroll animations using GSAP ScrollTrigger
 * Version 1.0
 */

(function() {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Wait for GSAP to load
    function initScrollIllustrations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            console.warn('GSAP or ScrollTrigger not loaded');
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        // If reduced motion, show all elements immediately without animation
        if (prefersReducedMotion) {
            document.querySelectorAll('.scroll-scene, .scroll-element').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            return;
        }

        // Initialize hero scene animations
        initHeroScene();

        // Initialize industry scenes
        initIndustryScenes();

        // Initialize floating elements
        initFloatingElements();

        // Initialize scroll progress indicators
        initScrollProgress();

        // Initialize staggered reveals
        initStaggeredReveals();
    }

    /**
     * Hero Scene - Main landing illustration
     */
    function initHeroScene() {
        const heroScene = document.querySelector('.hero-illustration-container') || document.querySelector('.hero-illustration');
        if (!heroScene) return;

        const elements = heroScene.querySelectorAll('.hero-element');
        const connections = heroScene.querySelectorAll('.connection-line');

        // Initial entrance animation
        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: heroScene,
                start: 'top 80%',
                end: 'center center',
                scrub: 1
            }
        });

        // Animate main elements with stagger
        heroTl.fromTo(elements,
            {
                opacity: 0,
                y: 60,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.08,
                ease: 'power3.out'
            }
        );

        // Animate connection lines (SVG stroke animation)
        if (connections.length > 0) {
            connections.forEach(line => {
                const length = line.getTotalLength ? line.getTotalLength() : 100;
                gsap.set(line, {
                    strokeDasharray: length,
                    strokeDashoffset: length
                });
            });

            heroTl.to(connections, {
                strokeDashoffset: 0,
                stagger: 0.1,
                ease: 'power2.inOut'
            }, '-=0.5');
        }

        // Parallax effect on scroll
        gsap.to(heroScene.querySelectorAll('.parallax-slow'), {
            scrollTrigger: {
                trigger: heroScene,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: -50
        });

        gsap.to(heroScene.querySelectorAll('.parallax-fast'), {
            scrollTrigger: {
                trigger: heroScene,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: -100
        });
    }

    /**
     * Industry Scenes - Individual industry illustrations
     */
    function initIndustryScenes() {
        const industryScenes = document.querySelectorAll('.industry-illustration, .industry-scene');

        industryScenes.forEach(scene => {
            const elements = scene.querySelectorAll('.scene-element');
            const industryType = scene.dataset.industry;

            // Create timeline for this scene
            const sceneTl = gsap.timeline({
                scrollTrigger: {
                    trigger: scene,
                    start: 'top 75%',
                    end: 'center center',
                    scrub: 0.5,
                    toggleActions: 'play none none reverse'
                }
            });

            // Industry-specific animations
            switch(industryType) {
                case 'construction':
                    animateConstruction(scene, sceneTl);
                    break;
                case 'hightech':
                    animateHighTech(scene, sceneTl);
                    break;
                case 'it':
                    animateIT(scene, sceneTl);
                    break;
                case 'aerospace':
                    animateAerospace(scene, sceneTl);
                    break;
                case 'oil':
                    animateOilGas(scene, sceneTl);
                    break;
                default:
                    animateGeneric(scene, sceneTl);
            }
        });
    }

    /**
     * Construction Industry Animation
     * Building rises floor by floor, crane moves
     */
    function animateConstruction(scene, tl) {
        const building = scene.querySelector('.building');
        const floors = scene.querySelectorAll('.floor');
        const crane = scene.querySelector('.crane');
        const craneArm = scene.querySelector('.crane-arm');
        const beams = scene.querySelectorAll('.beam');
        const workers = scene.querySelectorAll('.worker');

        // Building foundation
        if (building) {
            tl.fromTo(building,
                { scaleY: 0, transformOrigin: 'bottom' },
                { scaleY: 1, duration: 1, ease: 'power2.out' }
            );
        }

        // Floors rising one by one
        if (floors.length > 0) {
            tl.fromTo(floors,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, stagger: 0.15, ease: 'power2.out' },
                '-=0.5'
            );
        }

        // Crane swing
        if (craneArm) {
            tl.fromTo(craneArm,
                { rotation: -15, transformOrigin: 'left center' },
                { rotation: 15, duration: 2, ease: 'power1.inOut', yoyo: true, repeat: -1 },
                '-=1'
            );
        }

        // Structural beams moving into place
        if (beams.length > 0) {
            tl.fromTo(beams,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.1, ease: 'back.out(1.5)' },
                '-=1'
            );
        }

        // Workers appear
        if (workers.length > 0) {
            tl.fromTo(workers,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, stagger: 0.08, ease: 'back.out(1.7)' },
                '-=0.5'
            );
        }
    }

    /**
     * High-Tech Industry Animation
     * Circuit patterns, data flow, digital connections
     */
    function animateHighTech(scene, tl) {
        const circuits = scene.querySelectorAll('.circuit-path');
        const nodes = scene.querySelectorAll('.data-node');
        const dataFlows = scene.querySelectorAll('.data-flow');
        const screens = scene.querySelectorAll('.screen');
        const chips = scene.querySelectorAll('.chip');

        // Circuit paths draw themselves
        if (circuits.length > 0) {
            circuits.forEach(circuit => {
                const length = circuit.getTotalLength ? circuit.getTotalLength() : 200;
                gsap.set(circuit, {
                    strokeDasharray: length,
                    strokeDashoffset: length
                });
            });
            tl.to(circuits, {
                strokeDashoffset: 0,
                stagger: 0.1,
                duration: 1.5,
                ease: 'power2.inOut'
            });
        }

        // Data nodes pulse in
        if (nodes.length > 0) {
            tl.fromTo(nodes,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, stagger: 0.05, ease: 'elastic.out(1, 0.5)' },
                '-=1'
            );
        }

        // Screen displays activate
        if (screens.length > 0) {
            tl.fromTo(screens,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, stagger: 0.1, ease: 'power2.out' },
                '-=0.5'
            );
        }

        // Chips glow effect
        if (chips.length > 0) {
            tl.fromTo(chips,
                { filter: 'brightness(0.5)' },
                { filter: 'brightness(1.2)', stagger: 0.1, duration: 0.5 },
                '-=0.3'
            );
        }

        // Data flow animation (continuous)
        if (dataFlows.length > 0) {
            dataFlows.forEach(flow => {
                gsap.to(flow, {
                    x: '+=20',
                    opacity: 0.5,
                    duration: 1,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            });
        }
    }

    /**
     * IT Industry Animation
     * Server racks, network connections, dashboard panels
     */
    function animateIT(scene, tl) {
        const servers = scene.querySelectorAll('.server');
        const networkLines = scene.querySelectorAll('.network-line');
        const dashboards = scene.querySelectorAll('.dashboard');
        const statusLights = scene.querySelectorAll('.status-light');
        const dataPackets = scene.querySelectorAll('.data-packet');

        // Servers slide in
        if (servers.length > 0) {
            tl.fromTo(servers,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.1, ease: 'power3.out' }
            );
        }

        // Network lines connect
        if (networkLines.length > 0) {
            networkLines.forEach(line => {
                const length = line.getTotalLength ? line.getTotalLength() : 150;
                gsap.set(line, {
                    strokeDasharray: length,
                    strokeDashoffset: length
                });
            });
            tl.to(networkLines, {
                strokeDashoffset: 0,
                stagger: 0.08,
                duration: 1,
                ease: 'power2.inOut'
            }, '-=0.5');
        }

        // Status lights blink on
        if (statusLights.length > 0) {
            tl.fromTo(statusLights,
                { opacity: 0 },
                { opacity: 1, stagger: 0.03, ease: 'steps(1)' },
                '-=0.3'
            );
            // Continuous blinking
            statusLights.forEach((light, i) => {
                gsap.to(light, {
                    opacity: 0.3,
                    duration: 0.5 + (i * 0.1),
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    delay: i * 0.1
                });
            });
        }

        // Dashboards fade in
        if (dashboards.length > 0) {
            tl.fromTo(dashboards,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, stagger: 0.15, ease: 'power2.out' },
                '-=0.3'
            );
        }

        // Data packets flow
        if (dataPackets.length > 0) {
            dataPackets.forEach(packet => {
                gsap.to(packet, {
                    motionPath: {
                        path: packet.dataset.path || 'M0,0 L100,0',
                        align: 'self'
                    },
                    duration: 2,
                    repeat: -1,
                    ease: 'none'
                });
            });
        }
    }

    /**
     * Aerospace & Defense Animation
     * Aircraft, satellite orbits, radar sweeps
     */
    function animateAerospace(scene, tl) {
        const aircraft = scene.querySelector('.aircraft');
        const satellite = scene.querySelector('.satellite');
        const radarSweep = scene.querySelector('.radar-sweep');
        const orbitPath = scene.querySelector('.orbit-path');
        const controlPanels = scene.querySelectorAll('.control-panel');
        const signals = scene.querySelectorAll('.signal-wave');

        // Aircraft fly in
        if (aircraft) {
            tl.fromTo(aircraft,
                { x: -200, y: 50, opacity: 0, rotation: -10 },
                { x: 0, y: 0, opacity: 1, rotation: 0, duration: 1.5, ease: 'power2.out' }
            );
        }

        // Satellite appears and orbits
        if (satellite) {
            tl.fromTo(satellite,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' },
                '-=1'
            );
            // Continuous orbit
            gsap.to(satellite, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'none',
                transformOrigin: '200% 200%'
            });
        }

        // Radar sweep animation
        if (radarSweep) {
            gsap.to(radarSweep, {
                rotation: 360,
                duration: 4,
                repeat: -1,
                ease: 'none',
                transformOrigin: 'bottom center'
            });
        }

        // Control panels activate
        if (controlPanels.length > 0) {
            tl.fromTo(controlPanels,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, stagger: 0.1, ease: 'power2.out' },
                '-=0.5'
            );
        }

        // Signal waves pulse
        if (signals.length > 0) {
            signals.forEach((signal, i) => {
                gsap.to(signal, {
                    scale: 2,
                    opacity: 0,
                    duration: 2,
                    repeat: -1,
                    ease: 'power2.out',
                    delay: i * 0.3
                });
            });
        }
    }

    /**
     * Oil & Gas Industry Animation
     * Refinery, pipelines, drilling platform
     */
    function animateOilGas(scene, tl) {
        const refinery = scene.querySelector('.refinery');
        const pipelines = scene.querySelectorAll('.pipeline');
        const platform = scene.querySelector('.drilling-platform');
        const tanks = scene.querySelectorAll('.storage-tank');
        const flames = scene.querySelectorAll('.flame');
        const oilFlow = scene.querySelectorAll('.oil-flow');

        // Refinery builds up
        if (refinery) {
            tl.fromTo(refinery,
                { scaleY: 0, transformOrigin: 'bottom' },
                { scaleY: 1, duration: 1.2, ease: 'power2.out' }
            );
        }

        // Pipelines connect
        if (pipelines.length > 0) {
            pipelines.forEach(pipe => {
                const length = pipe.getTotalLength ? pipe.getTotalLength() : 200;
                gsap.set(pipe, {
                    strokeDasharray: length,
                    strokeDashoffset: length
                });
            });
            tl.to(pipelines, {
                strokeDashoffset: 0,
                stagger: 0.1,
                duration: 1.5,
                ease: 'power2.inOut'
            }, '-=0.8');
        }

        // Storage tanks fill
        if (tanks.length > 0) {
            tl.fromTo(tanks,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, stagger: 0.1, ease: 'power2.out' },
                '-=1'
            );
        }

        // Drilling platform
        if (platform) {
            tl.fromTo(platform,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
                '-=0.5'
            );
        }

        // Flames flicker
        if (flames.length > 0) {
            flames.forEach(flame => {
                gsap.to(flame, {
                    scaleY: 1.2,
                    scaleX: 0.9,
                    duration: 0.3 + Math.random() * 0.3,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    transformOrigin: 'bottom center'
                });
            });
        }

        // Oil flow through pipes
        if (oilFlow.length > 0) {
            oilFlow.forEach(flow => {
                gsap.to(flow, {
                    x: '+=30',
                    duration: 1.5,
                    repeat: -1,
                    ease: 'none'
                });
            });
        }
    }

    /**
     * Generic Animation Fallback
     */
    function animateGeneric(scene, tl) {
        const elements = scene.querySelectorAll('.scene-element');
        tl.fromTo(elements,
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.1, ease: 'power3.out' }
        );
    }

    /**
     * Floating Elements - Background decorative elements
     */
    function initFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-element');

        floatingElements.forEach((el, i) => {
            const duration = 3 + (i * 0.5);
            const delay = i * 0.2;

            gsap.to(el, {
                y: '-=15',
                rotation: 5,
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: delay
            });
        });
    }

    /**
     * Scroll Progress Indicator
     */
    function initScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) return;

        gsap.to(progressBar, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3
            }
        });
    }

    /**
     * Staggered Reveal Animation
     */
    function initStaggeredReveals() {
        const staggerGroups = document.querySelectorAll('.scroll-stagger');

        staggerGroups.forEach(group => {
            const items = group.querySelectorAll('.stagger-item');

            gsap.fromTo(items,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: group,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    /**
     * Industry Card Hover Effects (non-scroll)
     */
    function initIndustryCardHovers() {
        const cards = document.querySelectorAll('.industry-card');

        cards.forEach(card => {
            const icon = card.querySelector('.industry-icon');

            card.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    scale: 1.1,
                    rotation: 5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }

    /**
     * Initialize on DOM ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollIllustrations);
    } else {
        initScrollIllustrations();
    }

    // Export for external use
    window.MegatecScrollIllustrations = {
        init: initScrollIllustrations,
        refresh: function() {
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }
    };

})();
