// Theme (Light / Dark)
const THEME_STORAGE_KEY = 'theme';

// Detect if current page is home page and add class to body
(function() {
    const currentPath = window.location.pathname;
    const isHomePage = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/index.html');
        if (isMobile) {
            if (currentIndex === 0 && dir === -1) {
                ignoreScrollEvent = true;
                nextReal = middleSlides.length - 1;
                // Forzar centrado exacto y limpiar animaciones
                scrollAnimToken++;
                setActive(nextReal);
                viewport.scrollLeft = getTargetScrollLeftForSlide(middleSlides[nextReal]);
                centerSlide(middleSlides[nextReal], 'auto');
                setTimeout(() => { ignoreScrollEvent = false; }, 80);
                return;
            }
            if (currentIndex === middleSlides.length - 1 && dir === 1) {
                ignoreScrollEvent = true;
                nextReal = 0;
                scrollAnimToken++;
                setActive(nextReal);
                viewport.scrollLeft = getTargetScrollLeftForSlide(middleSlides[nextReal]);
                centerSlide(middleSlides[nextReal], 'auto');
                setTimeout(() => { ignoreScrollEvent = false; }, 80);
                return;
            }
        }

function getInitialTheme() {
    return getStoredTheme() || getSystemTheme();
}

function applyTheme(theme) {
    const safeTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', safeTheme);
    document.documentElement.style.colorScheme = safeTheme;
    
    // Add/remove dark-mode class on body for navbar styling
    if (safeTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function getTranslationValue(lang, key, fallback) {
    try {
        if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
            return translations[lang][key];
        }
    } catch {
        // ignore
    }
    return fallback;
}

function updateThemeToggleLabel() {
    const themeToggleInput = document.getElementById('themeToggle');
    const themeMenuBtn = document.getElementById('themeMenuBtn');
    if (!themeMenuBtn) return;

    const isDark = (themeToggleInput && themeToggleInput.checked) || document.documentElement.getAttribute('data-theme') === 'dark';
    const labelKey = isDark ? 'theme_dark' : 'theme_light';
    const lang = localStorage.getItem('language') || 'es';
    const fallback = labelKey === 'theme_dark' ? 'Modo oscuro' : 'Modo claro';
    const label = getTranslationValue(lang, labelKey, fallback);

    themeMenuBtn.setAttribute('aria-label', label);
    themeMenuBtn.setAttribute('title', label);
}

window.updateThemeToggleLabel = updateThemeToggleLabel;

function syncThemeMenuSelection(theme) {
    document.querySelectorAll('.theme-menu-item[data-theme]').forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.theme === theme);
    });
}

function setTheme(theme) {
    const safeTheme = theme === 'dark' ? 'dark' : 'light';
    applyTheme(safeTheme);

    // Keep the toggle in sync; CSS uses :has(#themeToggle:checked)
    const themeToggleInput = document.getElementById('themeToggle');
    if (themeToggleInput) {
        themeToggleInput.checked = safeTheme === 'dark';
    }

    try {
        localStorage.setItem(THEME_STORAGE_KEY, safeTheme);
    } catch {
        // ignore
    }

    syncThemeMenuSelection(safeTheme);
    updateThemeToggleLabel();
}

// Apply initial theme early (before DOMContentLoaded)
applyTheme(getInitialTheme());

document.addEventListener('DOMContentLoaded', () => {
    const initialTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const themeToggleInput = document.getElementById('themeToggle');
    if (themeToggleInput) {
        themeToggleInput.checked = initialTheme === 'dark';
        themeToggleInput.addEventListener('change', () => {
            setTheme(themeToggleInput.checked ? 'dark' : 'light');
        });
    }

    // Gear dropdown options
    const themeMenu = document.getElementById('themeMenu');
    document.querySelectorAll('.theme-menu-item[data-theme]').forEach((btn) => {
        btn.addEventListener('click', () => {
            setTheme(btn.dataset.theme);
            if (themeMenu) themeMenu.open = false;
        });
    });

    // Close theme menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!themeMenu || !themeMenu.open) return;
        if (!themeMenu.contains(e.target)) themeMenu.open = false;
    });

    // Close theme menu on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (themeMenu && themeMenu.open) themeMenu.open = false;
    });

    // Initial active state
    syncThemeMenuSelection(initialTheme);
});

// Initialize label once DOM is ready (safe for all pages)

document.addEventListener('DOMContentLoaded', () => {
    updateThemeToggleLabel();

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        // Close menu when clicking outside (on the overlay)
        navMenu.addEventListener('click', (e) => {
            if (e.target === navMenu) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');

function isDarkModeActive() {
    const htmlTheme = document.documentElement.getAttribute('data-theme');
    if (htmlTheme === 'dark') return true;
    const themeToggleInput = document.getElementById('themeToggle');
    return !!(themeToggleInput && themeToggleInput.checked);
}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class to navbar on mobile
    if (navbar) {
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    if (header) {
        const dark = isDarkModeActive();
        if (currentScroll > 100) {
            header.style.boxShadow = dark
                ? '0 10px 30px rgba(0, 0, 0, 0.45)'
                : '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = dark
                ? '0 6px 18px rgba(0, 0, 0, 0.30)'
                : '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .value-card, .about-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Pre-select plan from URL parameter
if (window.location.pathname.includes('contacto.html') || window.location.pathname.endsWith('/contacto')) {
    const urlParams = new URLSearchParams(window.location.search);
    const planParam = urlParams.get('plan');
    
    if (planParam) {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            serviceSelect.value = planParam;
            // Add a highlight effect to show it was pre-selected
            serviceSelect.style.borderColor = 'var(--primary-color)';
            serviceSelect.style.boxShadow = '0 0 0 3px rgba(0, 166, 232, 0.1)';
            setTimeout(() => {
                serviceSelect.style.borderColor = '';
                serviceSelect.style.boxShadow = '';
            }, 2000);
        }
    }
}

// Contact Form Handler (for contacto.html)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formStatus = document.getElementById('formStatus');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.';
            formStatus.className = 'form-status error';
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Scroll indicator hide on scroll
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// Image Modal for Portfolio
function openImageModal(src, alt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    if (modal && modalImg) {
        modal.style.display = 'flex';
        modalImg.src = src.replace('w=800', 'w=1920'); // Load higher resolution
        if (caption) caption.innerHTML = alt;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

// Portfolio Carousel (portafolio.html)
function initPortfolioCarousel() {
    const carousel = document.querySelector('.portfolio-carousel[data-carousel="portfolio"]');
    if (!carousel) return;

    // Interaction mode: only allow navigation via arrow buttons (desktop/tablet),
    // pero en móvil (<=480px) se permite swipe/touch scroll.
    const isMobile = window.matchMedia('(max-width: 480px)').matches;
    const ARROWS_ONLY = !isMobile;

    // Dots should match (and optionally navigate) each real dashboard.
    const DOTS_CLICKABLE = true;

    if (ARROWS_ONLY) {
        carousel.classList.add('arrows-only');
    } else {
        carousel.classList.remove('arrows-only');
    }

    if (DOTS_CLICKABLE) {
        carousel.classList.add('dots-clickable');
    }

    const viewport = carousel.querySelector('#portfolioViewport');
    const track = carousel.querySelector('#portfolioTrack');
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    const dotsWrap = carousel.querySelector('[data-carousel-dots]');
    const currentEl = carousel.querySelector('.portfolio-current');
    const totalEl = carousel.querySelector('.portfolio-total');

    if (!viewport || !track) return;

    if (ARROWS_ONLY) {
        // Keep the viewport scrollable so arrow-driven `scrollLeft` updates always work.
        // (Some browsers can ignore programmatic scrolling when overflow-x is forced to hidden.)
        viewport.style.overflowX = 'auto';
        viewport.style.cursor = 'default';
        // Keep snap behavior defined in CSS.
    }

    const realSlides = Array.from(track.querySelectorAll('.portfolio-slide'));
    if (realSlides.length === 0) return;

    const lang = localStorage.getItem('language') || 'es';
    const labels = {
        es: { dot: 'Ir al caso', prev: 'Anterior', next: 'Siguiente' },
        en: { dot: 'Go to case', prev: 'Previous', next: 'Next' }
    };
    const ui = labels[lang] || labels.es;

    if (prevBtn) prevBtn.setAttribute('aria-label', ui.prev);
    if (nextBtn) nextBtn.setAttribute('aria-label', ui.next);

    const realCount = realSlides.length;

    // Extra buffer clones so it never feels like it has an "end".
    // Total sets rendered: head-N ... head-1 + middle + tail-1 ... tail-N
    const LOOP_SETS = 3;

    // Mark middle set (real) indices
    realSlides.forEach((s, i) => {
        s.setAttribute('data-real-index', String(i));
        s.setAttribute('data-set', 'middle');
    });

    // Build loop: [head clones] + [middle real] + [tail clones]
    // Buffering multiple clone sets avoids ever hitting a visible "start/end".
    for (let rep = LOOP_SETS; rep >= 1; rep--) {
        const headFrag = document.createDocumentFragment();
        realSlides.forEach((s) => {
            const idx = s.getAttribute('data-real-index') || '0';
            const head = s.cloneNode(true);
            head.setAttribute('data-clone', 'true');
            head.setAttribute('data-real-index', idx);
            head.setAttribute('data-set', `head-${rep}`);
            headFrag.appendChild(head);
        });
        track.insertBefore(headFrag, track.firstChild);
    }

    for (let rep = 1; rep <= LOOP_SETS; rep++) {
        const tailFrag = document.createDocumentFragment();
        realSlides.forEach((s) => {
            const idx = s.getAttribute('data-real-index') || '0';
            const tail = s.cloneNode(true);
            tail.setAttribute('data-clone', 'true');
            tail.setAttribute('data-real-index', idx);
            tail.setAttribute('data-set', `tail-${rep}`);
            tailFrag.appendChild(tail);
        });
        track.appendChild(tailFrag);
    }

    const slides = Array.from(track.querySelectorAll('.portfolio-slide'));
    const middleSlides = slides.filter((s) => s.getAttribute('data-set') === 'middle');

    let currentIndex = 0; // real index
    let scrollTimer = null;
    let isJumping = false;
    let isInteracting = false;
    let isArrowAnimating = false;
    let scrollAnimToken = 0;
    let drag = { active: false, startX: 0, startScrollLeft: 0 };
    let activeDomEl = null;

    function getMiddleEquivalentSlide(slide) {
        if (!slide) return null;
        const realIdx = clampLoopIndex(Number(slide.getAttribute('data-real-index') || String(currentIndex)));
        return middleSlides[realIdx] || null;
    }

    function finalizeAfterMove() {
        carousel.classList.add('is-snapping');
        scrollAnimToken++;

        // Always work with the middle-set slide for the current real index.
        const middleTarget = middleSlides[currentIndex];
        if (!middleTarget) {
            carousel.classList.remove('is-snapping');
            return;
        }

        // Apply visual states immediately (classes switch but cards already at their sizes).
        applyStatesFromCentered(middleTarget);

        // Ensure perfect centering - scroll to center position.
        const targetLeft = getTargetScrollLeftForSlide(middleTarget);
        viewport.scrollLeft = targetLeft;

        requestAnimationFrame(() => {
            carousel.classList.remove('is-snapping');
        });
    }

    function clampLoopIndex(index) {
        return ((index % realCount) + realCount) % realCount;
    }

    function getCenteredSlide() {
        const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
        let best = null;
        let bestDist = Number.POSITIVE_INFINITY;

        slides.forEach((slide) => {
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            const dist = Math.abs(slideCenter - viewportCenter);
            if (dist < bestDist) {
                bestDist = dist;
                best = slide;
            }
        });

        return best;
    }

    function centerSlide(slide, behavior = 'smooth') {
        if (!slide) return;
        const target = slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
        viewport.scrollTo({ left: target, behavior });
    }

    function getTargetScrollLeftForSlide(slide) {
        if (!slide) return viewport.scrollLeft;
        return slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
    }

    function snapToCentered() {
        const centered = getCenteredSlide();
        if (!centered) return;
        const target = Math.round(getTargetScrollLeftForSlide(centered));
        if (Math.abs(viewport.scrollLeft - target) < 0.5) return;
        viewport.scrollLeft = target;
    }

    function easeInOutCubic(t) {
        // Smooth cubic-bezier(0.4, 0, 0.2, 1) for professional feel
        return t < 0.5 
            ? 2 * t * t * (3 - 2 * t)
            : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function animateScrollTo(left, durationMs = 600) {
        const target = left;
        const startLeft = viewport.scrollLeft;
        const delta = target - startLeft;
        const token = ++scrollAnimToken;

        if (Math.abs(delta) < 0.5) return Promise.resolve();

        return new Promise((resolve) => {
            const start = performance.now();
            function tick(now) {
                if (token !== scrollAnimToken) return resolve();

                const elapsed = now - start;
                const t = Math.min(1, Math.max(0, elapsed / durationMs));
                
                // Smooth ease-in-out - cubic-bezier(0.4, 0, 0.2, 1)
                const eased = t < 0.5 
                    ? 2 * t * t 
                    : 1 - Math.pow(-2 * t + 2, 2) / 2;
                
                viewport.scrollLeft = startLeft + delta * eased;

                if (t >= 1) return resolve();
                requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }

    function clearStates() {
        slides.forEach((slide) => {
            slide.classList.remove('is-active', 'is-prev', 'is-next', 'is-prev2', 'is-next2', 'is-prev3', 'is-next3', 'is-prev4', 'is-next4', 'is-far');
        });
    }

    function applyStatesFromCentered(centeredEl) {
        if (!centeredEl) return;

        const centeredIdx = slides.indexOf(centeredEl);
        if (centeredIdx < 0) return;

        const activeReal = clampLoopIndex(Number(centeredEl.getAttribute('data-real-index') || '0'));
        currentIndex = activeReal;
        activeDomEl = centeredEl;
        if (currentEl) currentEl.textContent = String(currentIndex + 1);
        if (totalEl) totalEl.textContent = String(realCount);

        // Default everything to far.
        slides.forEach((slide) => {
            slide.classList.remove('is-active', 'is-prev', 'is-next', 'is-prev2', 'is-next2', 'is-prev3', 'is-next3', 'is-prev4', 'is-next4');
            slide.classList.add('is-far');
        });

        const order = [0, -1, 1, -2, 2, -3, 3, -4, 4];
        const map = {
            0: 'is-active',
            '-1': 'is-prev',
            1: 'is-next',
            '-2': 'is-prev2',
            2: 'is-next2',
            '-3': 'is-prev3',
            3: 'is-next3',
            '-4': 'is-prev4',
            4: 'is-next4'
        };

        order.forEach((offset) => {
            const idx = centeredIdx + offset;
            if (idx < 0 || idx >= slides.length) return;
            const el = slides[idx];
            if (!el) return;
            el.classList.remove('is-far');

            if (offset === 0) {
                // Allow clones to be active temporarily so wrap transitions are seamless.
                el.classList.add('is-active');
            } else {
                el.classList.add(map[String(offset)]);
            }
        });

        if (dotsWrap) {
            dotsWrap.querySelectorAll('.portfolio-dot').forEach((dot, i) => {
                dot.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
            });
        }
    }

    function setActive(realIndex) {
        const safe = clampLoopIndex(realIndex);
        const activeEl = middleSlides[safe];
        applyStatesFromCentered(activeEl);
    }

    function goToReal(index, behavior = 'smooth') {
        const safe = clampLoopIndex(index);
        const slideEl = middleSlides[safe];

        if (behavior === 'auto') {
            currentIndex = safe;
            applyStatesFromCentered(slideEl);
            centerSlide(slideEl, 'auto');
            return;
        }

        isArrowAnimating = true;
        isInteracting = true;

        const targetLeft = getTargetScrollLeftForSlide(slideEl);
        animateScrollTo(targetLeft)
            .then(() => {
                currentIndex = safe;
                finalizeAfterMove();
            })
            .catch(() => {
                // ignore
            })
            .finally(() => {
                isInteracting = false;
                isArrowAnimating = false;
            });
    }

    function getAdjacentSlide(fromEl, dir) {
        if (!fromEl) return null;
        const i = slides.indexOf(fromEl);
        if (i < 0) return null;
        let nextIndex = i + dir;
        if (nextIndex < 0) nextIndex = slides.length - 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        return slides[nextIndex] || null;
    }

    function pickSlideForRealIndex(fromEl, dir, realIndex) {
        const key = String(realIndex);
        const candidates = slides.filter((s) => s.getAttribute('data-real-index') === key);
        if (candidates.length === 0) return null;

        // Prefer the candidate that is actually in the direction of travel.
        const fromLeft = fromEl ? fromEl.offsetLeft : viewport.scrollLeft;
        if (dir > 0) {
            let best = null;
            let bestDist = Number.POSITIVE_INFINITY;
            for (const c of candidates) {
                const d = c.offsetLeft - fromLeft;
                if (d > 0 && d < bestDist) {
                    bestDist = d;
                    best = c;
                }
            }
            if (best) return best;
            // Wrap: take the first occurrence.
            return candidates.reduce((a, b) => (a.offsetLeft < b.offsetLeft ? a : b));
        }

        if (dir < 0) {
            let best = null;
            let bestDist = Number.POSITIVE_INFINITY;
            for (const c of candidates) {
                const d = fromLeft - c.offsetLeft;
                if (d > 0 && d < bestDist) {
                    bestDist = d;
                    best = c;
                }
            }
            if (best) return best;
            // Wrap: take the last occurrence.
            return candidates.reduce((a, b) => (a.offsetLeft > b.offsetLeft ? a : b));
        }

        return candidates[0];
    }

    function forceRecenterToMiddle() {
        // Make sure we never drift into head/tail extremes (prevents a visible "end").
        // This is a synchronous scrollLeft jump; call it while `is-snapping` is active.
        for (let guard = 0; guard < 4; guard++) {
            const centered = getCenteredSlide();
            if (!centered) return;
            const set = centered.getAttribute('data-set');
            if (set === 'middle') return;
            const stride = getSetStride();
            if (!stride) return;

            if (set && set.startsWith('tail-')) {
                const rep = Number(set.split('-')[1] || '1');
                viewport.scrollLeft -= stride * rep;
            } else if (set && set.startsWith('head-')) {
                const rep = Number(set.split('-')[1] || '1');
                viewport.scrollLeft += stride * rep;
            } else {
                return;
            }
        }
    }

    function goStep(dir) {
        if (isArrowAnimating) return;

        // Carrusel NO infinito en móvil
        const isMobile = window.matchMedia('(max-width: 480px)').matches;
        let nextReal = clampLoopIndex(currentIndex + dir);
        if (isMobile) {
            if ((currentIndex === 0 && dir === -1) || (currentIndex === middleSlides.length - 1 && dir === 1)) {
                // No hacer nada, ya estamos en el extremo
                return;
            }
        }
        const targetEl = middleSlides[nextReal];
        if (!targetEl) return;

        isArrowAnimating = true;
        isInteracting = true;

        const targetLeft = getTargetScrollLeftForSlide(targetEl);
        animateScrollTo(targetLeft)
            .then(() => {
                currentIndex = nextReal;
                finalizeAfterMove();
            })
            .catch(() => {
                // ignore
            })
            .finally(() => {
                isInteracting = false;
                isArrowAnimating = false;
            });
    }

    function getSetStride() {
        const mid0 = middleSlides[0];
        const tail0 = slides.find((s) => s.getAttribute('data-set') === 'tail-1' && s.getAttribute('data-real-index') === '0');
        if (!mid0 || !tail0) return 0;
        // Distance between equivalent slides across adjacent sets
        return tail0.offsetLeft - mid0.offsetLeft;
    }

    function recenterIfNeeded() {
        if (isJumping) return;
        const centered = getCenteredSlide();
        if (!centered) return;
        const set = centered.getAttribute('data-set');
        if (set === 'middle') return;

        const realIdx = clampLoopIndex(Number(centered.getAttribute('data-real-index') || '0'));
        const middleEquivalent = middleSlides[realIdx];
        if (!middleEquivalent) return;

        isJumping = true;
        // Jump to the equivalent slide in the middle set (exact position), keeping it centered.
        // This avoids drift caused by variable slide widths when `.is-active` changes flex-basis.
        viewport.scrollLeft = getTargetScrollLeftForSlide(middleEquivalent);

        requestAnimationFrame(() => {
            isJumping = false;
        });
    }

    if (dotsWrap) {
        dotsWrap.innerHTML = '';
        for (let i = 0; i < realCount; i++) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'portfolio-dot';
            btn.setAttribute('aria-label', `${ui.dot} ${i + 1}`);
            btn.setAttribute('aria-current', i === 0 ? 'true' : 'false');
            if (DOTS_CLICKABLE) {
                btn.addEventListener('click', () => goToReal(i));
            } else {
                // Indicator only (no click / no keyboard focus)
                btn.setAttribute('aria-disabled', 'true');
                btn.tabIndex = -1;
            }
            dotsWrap.appendChild(btn);
        }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goStep(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => goStep(1));

    if (!ARROWS_ONLY) {
        // Wheel -> horizontal (trackpad/mouse): makes it feel like a real slider.
        viewport.addEventListener(
            'wheel',
            (e) => {
                // If user is already doing horizontal wheel, keep it.
                const dominantVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
                if (!dominantVertical) return;

                e.preventDefault();
                isInteracting = true;
                viewport.scrollLeft += e.deltaY;

                if (scrollTimer) window.clearTimeout(scrollTimer);
                scrollTimer = window.setTimeout(() => {
                    isInteracting = false;
                    recenterIfNeeded();
                    const centered = getCenteredSlide();
                    if (!centered) return;
                    const realIdx = Number(centered.getAttribute('data-real-index') || '0');
                    setActive(realIdx);
                    // Gentle snap after wheel
                    centerSlide(centered, 'smooth');
                }, 160);
            },
            { passive: false }
        );
    }

    if (!ARROWS_ONLY) {
        // Drag support with mouse/pointer for smoother control.
        viewport.addEventListener('pointerdown', (e) => {
            // Only primary button
            if (e.button !== 0) return;
            drag.active = true;
            isInteracting = true;
            drag.startX = e.clientX;
            drag.startScrollLeft = viewport.scrollLeft;
            viewport.setPointerCapture?.(e.pointerId);
        });

        viewport.addEventListener('pointermove', (e) => {
            if (!drag.active) return;
            const dx = e.clientX - drag.startX;
            viewport.scrollLeft = drag.startScrollLeft - dx;
        });
    }

    function endDrag() {
        if (!drag.active) return;
        drag.active = false;
        if (scrollTimer) window.clearTimeout(scrollTimer);
        // Carrusel NO infinito en móvil: solo recentrar si caemos en un clon
        const isMobile = window.matchMedia('(max-width: 480px)').matches;
        const centered = getCenteredSlide();
        if (centered && isMobile) {
            const set = centered.getAttribute('data-set');
            const realIdx = Number(centered.getAttribute('data-real-index') || '0');
            if (set !== 'middle') {
                const target = middleSlides[realIdx];
                if (target) {
                    ignoreScrollEvent = true;
                    scrollAnimToken++;
                    setActive(realIdx);
                    viewport.scrollLeft = getTargetScrollLeftForSlide(target);
                    centerSlide(target, 'auto');
                    setTimeout(() => { ignoreScrollEvent = false; }, 80);
                }
                return;
            }
        }
        scrollTimer = window.setTimeout(() => {
            isInteracting = false;
            const centered = getCenteredSlide();
            if (!centered) return;
            const realIdx = Number(centered.getAttribute('data-real-index') || '0');
            const set = centered.getAttribute('data-set');
            if (realIdx === 0 && viewport.scrollLeft < centered.offsetLeft) {
                const last = middleSlides[middleSlides.length - 1];
                viewport.scrollLeft = getTargetScrollLeftForSlide(last);
                setActive(middleSlides.length - 1);
                return;
            }
            if (realIdx === middleSlides.length - 1 && viewport.scrollLeft > centered.offsetLeft) {
                const first = middleSlides[0];
                viewport.scrollLeft = getTargetScrollLeftForSlide(first);
                setActive(0);
                return;
            }
            setActive(realIdx);
            centerSlide(centered, 'smooth');
        }, 120);
    }

    if (!ARROWS_ONLY) {
        viewport.addEventListener('pointerup', endDrag);
        viewport.addEventListener('pointercancel', endDrag);
    }

    if (!ARROWS_ONLY) {
        // Keyboard support when the viewport is focused
        document.addEventListener('DOMContentLoaded', () => {
            // --- THEME TOGGLE ---
            const initialTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const themeToggleInput = document.getElementById('themeToggle');
            if (themeToggleInput) {
                themeToggleInput.checked = initialTheme === 'dark';
                themeToggleInput.addEventListener('change', () => {
                    setTheme(themeToggleInput.checked ? 'dark' : 'light');
                });
            }
            const themeMenu = document.getElementById('themeMenu');
            document.querySelectorAll('.theme-menu-item[data-theme]').forEach((btn) => {
                btn.addEventListener('click', () => {
                    setTheme(btn.dataset.theme);
                    if (themeMenu) themeMenu.open = false;
                });
            });
            document.addEventListener('click', (e) => {
                if (!themeMenu || !themeMenu.open) return;
                if (!themeMenu.contains(e.target)) themeMenu.open = false;
            });
            document.addEventListener('keydown', (e) => {
                if (e.key !== 'Escape') return;
                if (themeMenu && themeMenu.open) themeMenu.open = false;
            });
            syncThemeMenuSelection(initialTheme);
            updateThemeToggleLabel();

            // --- MOBILE MENU ---
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            if (hamburger && navMenu) {
                hamburger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    navMenu.classList.toggle('active');
                    hamburger.classList.toggle('active');
                });
                navMenu.addEventListener('click', (e) => {
                    if (e.target === navMenu) {
                        navMenu.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                });
            }
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu) navMenu.classList.remove('active');
                    if (hamburger) hamburger.classList.remove('active');
                });
            });
        });
    // Find all mission sections (index.html and acerca-de.html)
    const missionSections = document.querySelectorAll('.mission');
    
    missionSections.forEach(section => {
        const valuesGrid = section.querySelector('.values-grid');
        const dots = section.querySelectorAll('.scroll-indicators .dot');
        
        if (!valuesGrid || dots.length === 0) return;
        
        let scrollTimer;
        
        valuesGrid.addEventListener('scroll', () => {
            if (scrollTimer) clearTimeout(scrollTimer);
            
            scrollTimer = setTimeout(() => {
                const scrollLeft = valuesGrid.scrollLeft;
                const cardWidth = valuesGrid.querySelector('.value-card')?.offsetWidth || 0;
                const gap = 24; // 1.5rem
                const scrollWidth = cardWidth + gap;
                
                const currentIndex = Math.round(scrollLeft / scrollWidth);
                
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }, 100);
        }, { passive: true });
        
        // Click on dots to scroll to that card
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const cardWidth = valuesGrid.querySelector('.value-card')?.offsetWidth || 0;
                const gap = 24;
                const scrollWidth = cardWidth + gap;
                
                valuesGrid.scrollTo({
                    left: index * scrollWidth,
                    behavior: 'smooth'
                });
            });
        });
    });
}
