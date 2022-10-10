
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/CATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("USER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/ug/index.html"}},[_v("For students")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/ug/instructors.html"}},[_v("For instructors")])])])])],1)],1)])]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("Once the app is launched (either web or desktop version), it will prompt you to enter the session you are participating in, using a dropdown.")]),_v(" "),_c('img',{attrs:{"width":"70%","src":"/images/session_select.png"}}),_v(" "),_c('br'),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('p',[_v("Ad-blockers may need to be disabled if they block pop-ups.")]),_v(" "),_m(5),_v(" "),_c('p',[_v("Pop-up windows are blocked by default on Safari. Before launching CATcher, please enable pop-ups by following the steps below:")]),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('p',[_v("Start the desktop app by clicking on the executable file; no installation is required.")]),_v(" "),_c('tabs',[_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Windows")]},proxy:true}])},[_v(" "),_c('p',[_v("For normal usage, you can run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CATcher.exe")]),_v(" and the following dialog would appear. Simply click on the \"More Info\" button and then click the \"Run Anyway\" button which would have appeared on the bottom right corner of the dialog.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/images/windows-security-warning.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/images/windows-security-warning.png","alt":""}})])]),_v(" "),_c('p',[_v("In some cases, the \"Run Anyway\" button may not appear. To troubleshoot this, you can open up \"Windows Security\" and under \"App & browser control\", click on \"Reputation-based protection settings\" and make sure CATcher is not blocked here.")]),_v(" "),_c('p',[_v("If you are using an older version of Windows, you may not be able to find the \"Reputation-based protection settings\". Under \"App and browser control\", you would instead see \"Check apps and files\". In this section, make sure it is set to \"Warn\".")])]),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Mac")]},proxy:true}])},[_v(" "),_c('p',[_v("To run CATcher on MacOS, you would need to go to \"System Preferences\" and in \"Security & Privacy\", select \"Open Anyway\" for CATcher, as shown below.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/images/mac-security-warning.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/images/mac-security-warning.png","alt":""}})])]),_v(" "),_c('h3',{attrs:{"id":"troubleshooting"}},[_c('span',{staticClass:"anchor",attrs:{"id":"troubleshooting"}}),_v("Troubleshooting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#troubleshooting","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("Copy and pasting images into the text editor for Mac Users")])]),_v(" "),_c('p',[_v("You may find you are not able to copy (Cmd+c) and paste (Cmd+v) an image from the \"Preview\" application. As a workaround, there are other ways to paste stuff into the text editor such as dragging and dropping a screenshot image or a file.")])]),_v(" "),_c('tab',{scopedSlots:_u([{key:"header",fn:function(){return [_v("Linux")]},proxy:true}])},[_v(" "),_c('p',[_v("After downloading the AppImage file, you should be able to run CATcher by clicking on the\nAppImage file.\nIf this does not work, you may need to allow the file to be executed.\nThere are 2 methods to achieve this:")]),_v(" "),_c('ul',[_c('li',[_v("From the GUI:")]),_v(" "),_c('li',[_v("Right click on the file icon")]),_v(" "),_c('li',[_v("Select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Properties")]),_v(", then select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Permissions")])]),_v(" "),_c('li',[_v("Enable the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Allow executing file as program")]),_v(" option.")]),_v(" "),_c('li',[_v("Note: the GUI menus may differ slightly on different Linux distributions.")]),_v(" "),_c('li',[_v("From the command line: Use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("chmod +x CATcher-x.y.z.AppImage")])])])])],1),_v(" "),_c('br'),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('p',[_v("If possible, also provide us with the log file saved by CATcher.")]),_v(" "),_m(11),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1)],1),_v(" "),_m(12)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"catcher-user-guide-for-students"}},[_c('span',{staticClass:"anchor",attrs:{"id":"catcher-user-guide-for-students"}}),_v("CATcher User Guide (for students)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#catcher-user-guide-for-students","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"getting-started"}},[_c('span',{staticClass:"anchor",attrs:{"id":"getting-started"}}),_v("Getting started"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("The online version of CATcher is available at "),_c('a',{attrs:{"href":"https://catcher-org.github.io/CATcher"}},[_v("https://catcher-org.github.io/CATcher")])]),_v(". Alternatively, you can download the "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/releases"}},[_v("desktop version")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"using-the-web-app"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-the-web-app"}}),_v("Using the Web app"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-the-web-app","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The CATcher web app is recommended, and can be accessed at "),_c('a',{attrs:{"href":"https://catcher-org.github.io/CATcher"}},[_v("https://catcher-org.github.io/CATcher")]),_v(". Please ensure your browser does not block pop-up windows from our web app.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"safari-users"}},[_c('span',{staticClass:"anchor",attrs:{"id":"safari-users"}}),_v("Safari users"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#safari-users","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Go to Preferences > Websites > Pop-up Windows")]),_v(" "),_c('li',[_v("For website "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("catcher-org.github.io")]),_v(", choose option "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Allow")]),_v(" "),_c('a',{attrs:{"href":"/images/safari-allow-popups.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/images/safari-allow-popups.png","alt":""}})])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"using-the-desktop-app"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-the-desktop-app"}}),_v("Using the desktop app"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-the-desktop-app","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The latest release of the CATcher desktop app can be downloaded from "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/releases"}},[_v("https://github.com/CATcher-org/CATcher/releases")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"reporting-problems"}},[_c('span',{staticClass:"anchor",attrs:{"id":"reporting-problems"}}),_v("Reporting problems"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#reporting-problems","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("If you face any issue in using CATcher, you can create a new issue in "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/issues"}},[_v("CATcher issue tracker")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("For the web app, logs are saved in your browser and can be retrieved by clicking the \""),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Download Log")]),_v("\"button.")]),_v(" "),_c('li',[_v("For the desktop app, logs can be retrieved from the following directory:\n"),_c('ul',[_c('li',[_v("Linux: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("~/.config/CATcher/logs/*.log")])]),_v(" "),_c('li',[_v("macOS: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("~/Library/Logs/CATcher/*.log")])]),_v(" "),_c('li',[_v("Windows: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("%USERPROFILE%\\AppData\\Roaming\\CATcher\\logs\\\\*.log")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v(", generated on Mon, 10 Oct 2022, 13:15:44 UTC]")])])])}
}];
  