const OSP = new fullpage('#fullpage', {
    autoScrolling:true,
    scrollHorizontally:true,
    fitToSection: true,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',

    navigation: true,
    menu: '#menu',
    anchors: ['inicio', 'medio-ambiente', 'problematica', 'oceanos', 'biodiversidad', 'biodiversidad#2', 'solar-panel','consejos', 'consejos#2'],
    showActiveTooltip: false, 

    sectionColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
});
