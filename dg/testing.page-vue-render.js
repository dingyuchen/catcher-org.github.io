
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/CATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("This page contains information useful for testing of CATcher.")]),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('panel',{attrs:{"type":"seamless","panelId":"configuring-settings-json"},scopedSlots:_u([{key:"header",fn:function(){return [_c('h5',{attrs:{"id":"configuring-settings-json"}},[_c('span',{staticClass:"anchor",attrs:{"id":"configuring-settings-json"}}),_v("Configuring "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("settings.json")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#configuring-settings-json","onclick":"event.stopPropagation()"}})])]},proxy:true}])},[_v(" "),_c('p',[_v("If the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("public_data")]),_v(" repository was forked, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("settings.json")]),_v(" file would look like this:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs json"}},[_c('span',[_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"openPhases\"")]),_v(" : ["),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"phaseBugReporting\"")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"phaseTeamResponse\"")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"phaseTesterResponse\"")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"phaseModeration\"")]),_v("],\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"phaseBugReporting\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"bugreporting\"")]),_v(",\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"phaseTeamResponse\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"pe-results\"")]),_v(",\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"phaseTesterResponse\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"bugreporting\"")]),_v(",\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"phaseModeration\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"pe-evaluation\"")]),_v("\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("openPhases")]),_v(" property specifies the phases that are open. It is recommended to leave all the phases open for testing purposes. Do note that the Tutor Moderation phase is still under development.")]),_v(" "),_c('p',[_v("The other four properties specify the name of the repositories that CATcher will store and retrieve from. In the example above, CATcher will retrieve issues from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bugreporting")]),_v(" repository for the Bug Reporting and Tester Response phases, and will retrieve issues from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pe-results")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pe-evaluation")]),_v(" repositories for the Team Response and Tutor Moderation phases accordingly. If the repositories do not exist, CATcher will create them automatically.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("The repositories used for the Bug Reporting and Tester Response phases will be stored on the "),_c('strong',[_v("user's")]),_v(" GitHub account, while the repositories used for the Team Response and Tutor Moderation phases will be stored on the "),_c('strong',[_v("organisation's")]),_v(" GitHub account.")])])],1),_v(" "),_c('panel',{attrs:{"type":"seamless","panelId":"configuring-data-csv"},scopedSlots:_u([{key:"header",fn:function(){return [_c('h5',{attrs:{"id":"configuring-data-csv"}},[_c('span',{staticClass:"anchor",attrs:{"id":"configuring-data-csv"}}),_v("Configuring "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data.csv")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#configuring-data-csv","onclick":"event.stopPropagation()"}})])]},proxy:true}])},[_v(" "),_c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data.csv")]),_v(" file contains three columns - the role of the user (Student, Tutor and Admin), the user's GitHub username and the team allocated to the user. Do add your own username to this file in order to use CATcher.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Do note the following:")]),_v(" "),_c('ul',[_c('li',[_v("Students and Tutors must have be allocated to a team.")]),_v(" "),_c('li',[_v("Tutors can be allocated to multiple teams, but each team allocated must be on its own row.")])])])],1),_v(" "),_m(5),_v(" "),_c('p',[_v("In CATcher, submitting a bug in the Bug Reporting phase will create a GitHub issue in the corresponding repository with the appropriate format and labels. For subsequent phases, the responses are stored as comments of that particular issue, and these comments must be of a certain format for CATcher to parse them correctly.")]),_v(" "),_c('panel',{attrs:{"type":"seamless","panelId":"team-response-phase"},scopedSlots:_u([{key:"header",fn:function(){return [_c('h5',{attrs:{"id":"team-response-phase"}},[_c('span',{staticClass:"anchor",attrs:{"id":"team-response-phase"}}),_v("Team Response Phase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#team-response-phase","onclick":"event.stopPropagation()"}})])]},proxy:true}])},[_v(" "),_c('p',[_c('strong',[_v("Comment Format:")])]),_v(" "),_c('div',[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Team's Response\n")]),_c('span',[_v("\n")]),_c('span',[_v("{team's response}\n")]),_c('span',[_v("\n")]),_c('span',[_v("## Duplicate status (if any):\n")]),_c('span',[_v("Duplicate of #{issue-number}\n")])])]),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Team's Response\n")]),_c('span',[_v("Yes, we missed this.\n")]),_c('span',[_v("But it's a minor bug.\n")]),_c('span',[_v("\n")]),_c('span',[_v("## Duplicate status (if any):\n")]),_c('span',[_v("Duplicate of #1234\n")])])])]),_v(" "),_c('p',[_c('strong',[_v("Issue Labels required:")])]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("severity.*")]),_v(", e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("severity.Low")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.*")]),_v(", e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.DocumentationBug")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutorial.*")]),_v(", e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutorial.CS2103T-W12")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team.*")]),_v(", e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team.3")])])])]),_v(" "),_c('panel',{attrs:{"type":"seamless","panelId":"tester-response-phase"},scopedSlots:_u([{key:"header",fn:function(){return [_c('h5',{attrs:{"id":"tester-response-phase"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tester-response-phase"}}),_v("Tester Response Phase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tester-response-phase","onclick":"event.stopPropagation()"}})])]},proxy:true}])},[_v(" "),_c('p',[_c('strong',[_v("Comment Format:")])]),_v(" "),_c('div',[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Team's Response\n")]),_c('span',[_v("\n")]),_c('span',[_v("{team's response}\n")]),_c('span',[_v("\n")]),_c('span',[_v("# Items for the Tester to Verify\n")]),_c('span',[_v("## :question: {type of verification}\n")]),_c('span',[_v("\n")]),_c('span',[_v("{description}\n")]),_c('span',[_v("\n")]),_c('span',[_v("- [ ] I disagree\n")]),_c('span',[_v("\n")]),_c('span',[_v("**Reason for disagreement:**\n")]),_c('span',[_v("[replace this with your reason]\n")]),_c('span',[_v("\n")]),_c('span',[_v("-------------------\n")])])]),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Team's Response\n")]),_c('span',[_v("\n")]),_c('span',[_v("Description of team's response\n")]),_c('span',[_v("# Items for the Tester to Verify\n")]),_c('span',[_v("## :question: Issue response\n")]),_c('span',[_v("\n")]),_c('span',[_v("Team chose `Rejected`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("- [ ] I disagree\n")]),_c('span',[_v("\n")]),_c('span',[_v("**Reason for disagreement:**\n")]),_c('span',[_v("[replace this with your reason]\n")]),_c('span',[_v("\n")]),_c('span',[_v("-------------------\n")]),_c('span',[_v("## :question: Issue severity\n")]),_c('span',[_v("\n")]),_c('span',[_v("Team chose `Low`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Originally `High`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("- [ ] I disagree\n")]),_c('span',[_v("\n")]),_c('span',[_v("**Reason for disagreement:**\n")]),_c('span',[_v("[replace this with your reason]\n")]),_c('span',[_v("\n")]),_c('span',[_v("-------------------\n")]),_c('span',[_v("## :question: Issue type\n")]),_c('span',[_v("\n")]),_c('span',[_v("Team chose `DocumentationBug`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Originally `FunctionalityBug`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("- [ ] I disagree\n")]),_c('span',[_v("\n")]),_c('span',[_v("**Reason for disagreement:**\n")]),_c('span',[_v("[replace this with your reason]\n")]),_c('span',[_v("\n")]),_c('span',[_v("-------------------\n")])])])]),_v(" "),_c('p',[_c('strong',[_v("Issue Labels required:")])]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("severity.*")]),_v(", e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("severity.Low")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.*")]),_v(", e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.DocumentationBug")])])])]),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_c('panel',{attrs:{"type":"seamless","panelId":"session-json-file"},scopedSlots:_u([{key:"header",fn:function(){return [_c('h5',{attrs:{"id":"session-json-file"}},[_c('span',{staticClass:"anchor",attrs:{"id":"session-json-file"}}),_v("Session JSON file"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#session-json-file","onclick":"event.stopPropagation()"}})])]},proxy:true}])},[_v(" "),_c('p',[_v("The format of the JSON file to be submitted is as follows:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs json"}},[_c('span',[_v("{\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"profiles\"")]),_v(": [\n")]),_c('span',[_v("    {\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"profileName\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"CATcher\"")]),_v(",\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("\"encodedText\"")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"CATcher-org/public_data\"")]),_v("\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("  ]\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("The JSON file supplied should only consist of "),_c('strong',[_v("one key-pair value")]),_v(", where the key is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"profiles\"")]),_v(" and the value is an array of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Profiles")]),_v(", where each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Profile")]),_v(" is an object containing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("profileName")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("encodedText")]),_v(" fields.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("profileName")]),_v(" refers to the profile name displayed in the session select page. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("encodedText")]),_v(" refers to the repository which stores the required settings for your custom session. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("encodedText")]),_v(" will be in the format of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("organisation/repository")]),_v(".")]),_v(" "),_c('blockquote',[_c('p',[_c('strong',[_v("Note")]),_v(": You "),_c('strong',[_v("must")]),_v(" have both of these fields in each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Profile")]),_v(" and the values for these fields "),_c('strong',[_v("should not be empty")]),_v("! Else, the JSON file that you have supplied will not be parsed successfully.")])])]),_v(" "),_c('hr'),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('hr'),_v(" "),_m(12),_v(" "),_c('p',[_v("Because the above Jasmine framework does not test the DOM, we require the Angular TestBed Utility functions to set up component tests for testing HTML / view changes of components in CATcher.")]),_v(" "),_c('p',[_v("Steps to set up component tests:")]),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('hr'),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('p',[_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("end-to-end tests")]},proxy:true}])},[_v("E2E tests")]),_v(" can be executed using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run e2e")]),_v(". You should see CATcher launch in an instance of Google Chrome, with some automated actions occurring on it. Note: Google Chrome needs to be installed on the machine.")],1),_v(" "),_m(19),_v(" "),_m(20),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_v("Relevant Browsers must be installed prior to running tests (i.e. Chrome, Firefox).")])]),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('p',[_v("E2E Tests are run with the following stages:")]),_v(" "),_m(27),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1)],1),_v(" "),_m(28)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"testing"}},[_c('span',{staticClass:"anchor",attrs:{"id":"testing"}}),_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-custom-catcher-sessions"}},[_c('span',{staticClass:"anchor",attrs:{"id":"setting-up-custom-catcher-sessions"}}),_v("Setting up custom CATcher sessions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-custom-catcher-sessions","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Sometimes, it may be useful to create and use your own custom CATcher session for manual testing, instead of using the default session on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CATcher-org")]),_v(" that is shared among the CATcher developers.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"setting-up-github-repositories"}},[_c('span',{staticClass:"anchor",attrs:{"id":"setting-up-github-repositories"}}),_v("Setting up GitHub repositories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-github-repositories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("A repository containing the settings for the custom session must be set up for CATcher to store and retrieve the issues properly. The easiest way to do this is to fork the "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/public_data"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CATcher-org/public_data")]),_v(" repository")]),_v(" and to edit the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("settings.json")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data.csv")]),_v(" files accordingly.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"populating-issues-in-catcher-repositories"}},[_c('span',{staticClass:"anchor",attrs:{"id":"populating-issues-in-catcher-repositories"}}),_v("Populating issues in CATcher repositories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#populating-issues-in-catcher-repositories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"loading-the-custom-session"}},[_c('span',{staticClass:"anchor",attrs:{"id":"loading-the-custom-session"}}),_v("Loading the custom session"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#loading-the-custom-session","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The custom session will not be present in the default dropdown list on CATcher's startup page, so it can be loaded by clicking on the "),_c('strong',[_v("file icon")]),_v(" beside the session dropdown. Following which, submit a file with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".json")]),_v(" file extension, where the format is specified below.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"testing-with-jasmine"}},[_c('span',{staticClass:"anchor",attrs:{"id":"testing-with-jasmine"}}),_v("Testing with Jasmine"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing-with-jasmine","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Jasmine is a behavior-driven development framework specific for testing JavaScript code. We follow the Jasmine Style Guide loosely for our tests (Link under "),_c('a',{attrs:{"href":"#resources-for-jasmine"}},[_v("Resources for Jasmine")]),_v("). One main guideline is that a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("describe")]),_v(" block should be created for each method / scenario under test, and an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("it")]),_v(" block should be created for each property being verified.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Resources:")])])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('a',{attrs:{"href":"https://github.com/CareMessagePlatform/jasmine-styleguide"}},[_v("Jasmine Style Guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://jasmine.github.io/api/3.6/global"}},[_v("Official Jasmine documentation")]),_v(" : This is the official Jasmine documentation for Jasmine 3.6")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://jasmine.github.io/2.0/introduction.html"}},[_v("Introduction to Jasmine 2.0")]),_v(" : This is a good summary / introduction of Jasmine test features")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"angular-testbed-utility"}},[_c('span',{staticClass:"anchor",attrs:{"id":"angular-testbed-utility"}}),_v("Angular testBed utility"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular-testbed-utility","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Configure the testing module through "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TestBed")]),_v(" function "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("configureTestingModule")]),_v(" with the corresponding component's settings")]),_v(" "),_c('li',[_v("Use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TestBed")]),_v(" function to create the component (fixture) to be tested")]),_v(" "),_c('li',[_v("Observe HTML changes in the fixture during testing of functions by querying HTML elements of the fixture")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can refer to the "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/blob/master/tests/app/shared/issue/assignee/assignee.component.spec.ts"}},[_v("AssigneeComponent test")]),_v(" under our main repository for more details on how to set up a component test in CATcher.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('strong',[_v("Resources:")])])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/testing-components-basics"}},[_v("Angular Guide - Basics of testing components")]),_v(" : Official Angular developer guide for the basics of component tests")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/api/core/testing/ComponentFixture"}},[_v("Angular Guide - Component Fixture")]),_v(" : Official Angular developer guide on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ComponentFixture")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.digitalocean.com/community/tutorials/angular-introduction-unit-testing#:~:text=Fixtures%20have%20access%20to%20a,Angular%20to%20run%20change%20detection."}},[_v("Introduction to Unit Testing in Angular")]),_v(" : Useful article on how to test component fixtures")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"e2e-testing"}},[_c('span',{staticClass:"anchor",attrs:{"id":"e2e-testing"}}),_v("E2E testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#e2e-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"running-e2e-tests"}},[_c('span',{staticClass:"anchor",attrs:{"id":"running-e2e-tests"}}),_v("Running E2E tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#running-e2e-tests","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Unlike the production version of CATcher, we do not use the actual GitHub API in the E2E tests. Mock data is used to simulate the GitHub API. You can run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:test")]),_v(" to run CATcher in this \"offline\" mode (to further develop or debug the E2E tests).\nThe following additional parameters would allow for further customisation,")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"text-align":"center"}},[_v("Additional Parameter")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Default")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Description")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Full Command Example")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Command Explanation")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--protractor-config=e2e/protractor.*.conf.js")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("protractor.conf.js")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Allows selection of the Protractor configuration file")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run e2e -- --protractor-config=e2e/protractor.firefox.conf.js")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Runs E2E Tests on the Firefox Browser")])]),_v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--suite=*")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("All Suites")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Runs E2E Tests for specific suites")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run e2e -- --suite=login,bugReporting")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("Run E2E Tests from Login and BugReporting Suites only")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"troubleshooting-conflicts-between-the-versions-of-the-browser-and-browser-driver"}},[_c('span',{staticClass:"anchor",attrs:{"id":"troubleshooting-conflicts-between-the-versions-of-the-browser-and-browser-driver"}}),_v("Troubleshooting conflicts between the versions of the browser and browser driver"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#troubleshooting-conflicts-between-the-versions-of-the-browser-and-browser-driver","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("If tests fail on your machine due to mismatches between the versions of the browser and the browser driver, you can use the "),_c('a',{attrs:{"href":"https://github.com/angular/webdriver-manager#readme"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("webdriver-manager")])]),_v(" tool to install the right version of the driver.  By default, running "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("webdriver-manager update")]),_v(" updates all drivers to the latest version, but particular versions can be specified as options.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"protractor-configuration"}},[_c('span',{staticClass:"anchor",attrs:{"id":"protractor-configuration"}}),_v("Protractor Configuration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#protractor-configuration","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("E2E Tests are run using "),_c('a',{attrs:{"href":"http://www.protractortest.org/#/"}},[_v("Protractor")]),_v(" testing framework.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Protractor primarily requires the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.conf.js")]),_v(" files to define E2E Testing Environments (this includes Browser Details, Base URL, etc...)")]),_v(" "),_c('li',[_v("The base configuration data is stored in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("protractor.base.conf.js")]),_v(" which is then extended by separate configuration files for individual browsers as well as the CI/CD pipeline.")]),_v(" "),_c('li',[_v("E2E Tests are typically split into "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Page-Objects Files")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Test Files")]),_v(" in accordance with the "),_c('a',{attrs:{"href":"http://www.protractortest.org/#/style-guide"}},[_v("Protractor Style Guide")]),_v(" (more information regarding the interaction between the aforementioned filetypes can be found there).")]),_v(" "),_c('li',[_v("E2E Tests are also grouped into suites based on the Application's Phase (i.e. Login, Bug-Reporting). Currently defined suite information is located in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("protractor.base.conf.js")]),_v(" file as well.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"how-the-e2e-tests-work"}},[_c('span',{staticClass:"anchor",attrs:{"id":"how-the-e2e-tests-work"}}),_v("How the E2E tests work"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-the-e2e-tests-work","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Build CATcher using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" architecture\n"),_c('ul',[_c('li',[_v("Using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" build configuration located in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("angular.json")]),_v(" under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("projects.catcher.architect.configurations")]),_v(" we build a version of CATcher within a test environment that replaces "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/environments/environment.ts")]),_v(" with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/environments/environment.test.ts")]),_v(" on runtime. This file provides data that allows CATcher to switch into \"E2E test\" mode.")])])]),_v(" "),_c('li',[_v("Provide Test Environment Information\n"),_c('ul',[_c('li',[_v("The Test Environment (in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/environments/environment.test.ts")]),_v(") provides information such as,\n"),_c('ul',[_c('li',[_v("Login Credentials (Username).")]),_v(" "),_c('li',[_v("User Role and Team Information.")]),_v(" "),_c('li',[_v("A "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" flag that is set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("true")]),_v(", so that CATcher switches into \"E2E test mode\"")])])])])]),_v(" "),_c('li',[_v("Mock Service Injections\n"),_c('ul',[_c('li',[_v("Once CATcher switches to E2E test mode, it creates mocks of some services, in order to simulate behaviour that is outside the scope of E2E Testing. This includes authentication, and communication with GitHub (via its APIs).")]),_v(" "),_c('li',[_v("These Service Injections are carried out in the respective "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*-module.ts")]),_v(" files with the help of Factories (located in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/src/app/core/services/factories")]),_v(") that check the current build environment and make the Service Replacements accordingly.")])])]),_v(" "),_c('li',[_v("Browser Action Automation using Protractor\n"),_c('ul',[_c('li',[_v("With the application ready for testing, we then utilize "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Protractor")]),_v(" to run test cases that are located in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/e2e")]),_v(" directory.")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v(", generated on Mon, 10 Oct 2022, 13:15:44 UTC]")])])])}
}];
  