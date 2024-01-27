const r = document.querySelector(':root')

function whiteTheme() {

    // FONT
    r.style.setProperty('--font-dm-sans', '"DM Sans", sans-serif')

    // FONT COLORS
    r.style.setProperty('--font-main-color', '#404040')
    r.style.setProperty('--font-bright-color', '#858585')
    r.style.setProperty('--font-card-color', 'white')

    // BG COLORS
    r.style.setProperty('--bg-page', '#E8E8E8')
    r.style.setProperty('--bg-nav', '#CCC')
    r.style.setProperty('--bg-nav-brighter', '#E8E8E8')
    r.style.setProperty('--bg-nav-bright', '#E8E8E8')
    r.style.setProperty('--bg-icon', 'blue')
    r.style.setProperty('--bg-arrow-color', '#858585')

    // GENERAL COLORS
    r.style.setProperty('--bright-color', 'black')
    r.style.setProperty('--dark-color', 'white')
    r.style.setProperty('--footer-bg', ' linear-gradient(to right, #FF6666, #B266FF)')
}

function darkTheme() {
    // FONT
    r.style.setProperty('--font-dm-sans', '"DM Sans", sans-serif')

    // FONT COLORS
    r.style.setProperty('--font-main-color', '#B3B3B3')
    r.style.setProperty('--font-bright-color', '#A7A7A7')
        r.style.setProperty('--font-card-color', 'white')

    // BG COLORS
    r.style.setProperty('--bg-page', 'black')
    r.style.setProperty('--bg-nav', '#121212')
    r.style.setProperty('--bg-nav-brighter', '#333')
    r.style.setProperty('--bg-nav-bright', '#242424')
    r.style.setProperty('--bg-icon', '#131313')
    r.style.setProperty('--bg-arrow-color', 'rgba(0,0,0,7)')

    // GENERAL COLORS
    r.style.setProperty('--bright-color', 'white')
    r.style.setProperty('--dark-color', 'black')
    r.style.setProperty('--footer-bg', ' linear-gradient(to right, #bf19a2,#4194ff)')
}

function greenTheme() {
    // FONT
    r.style.setProperty('--font-dm-sans', '"DM Sans", sans-serif')

    // FONT COLORS
    r.style.setProperty('--font-main-color', '#e1ede6')
    r.style.setProperty('--font-bright-color', '#e8e6e6')
    r.style.setProperty('--font-card-color', 'white')

    // BG COLORS
    r.style.setProperty('--bg-page', '#1DB954')
    r.style.setProperty('--bg-nav', '#137837') 
    r.style.setProperty('--bg-nav-brighter', '#0d5225')
    r.style.setProperty('--bg-nav-bright', '#1DB954')
    r.style.setProperty('--bg-icon', '')
    r.style.setProperty('--bg-arrow-color', 'rgba(0,0,0,7)')

    // GENERAL COLORS
    r.style.setProperty('--bright-color', 'white')
    r.style.setProperty('--dark-color', '#191414')
    r.style.setProperty('--footer-bg', ' linear-gradient(to right, #800080, #2a43bf)')
}

function blueTheme() {
// FONT
r.style.setProperty('--font-dm-sans', '"DM Sans", sans-serif')

// FONT COLORS
r.style.setProperty('--font-main-color', '#bdc8ff')
r.style.setProperty('--font-bright-color', '#fff')
r.style.setProperty('--font-card-color', 'white')

// BG COLORS
r.style.setProperty('--bg-page', '#001485')
r.style.setProperty('--bg-nav', '#1a32ba')
r.style.setProperty('--bg-nav-brighter', '#536dfc')
r.style.setProperty('--bg-nav-bright', '#536dfc')
r.style.setProperty('--bg-icon', '#FF1493')
r.style.setProperty('--bg-arrow-color', 'rgba(156, 172, 255)')

// GENERAL COLORS
r.style.setProperty('--bright-color', 'white') 
r.style.setProperty('--dark-color', '#001485')
r.style.setProperty('--footer-bg', 'linear-gradient(to right, #90941e, #13a824)')

}