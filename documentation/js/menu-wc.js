'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">paper-dashboard-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminLayoutModule.html" data-type="entity-link" >AdminLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminLayoutModule-6314cac95ef85d9f5ce3e31942553d6a128ac6298c5c8839b9d334c5b4632dd89f57d1f7a602918b4882205de5ae4e2a7da79310f6b3685bd13cde114edf4619"' : 'data-bs-target="#xs-components-links-module-AdminLayoutModule-6314cac95ef85d9f5ce3e31942553d6a128ac6298c5c8839b9d334c5b4632dd89f57d1f7a602918b4882205de5ae4e2a7da79310f6b3685bd13cde114edf4619"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminLayoutModule-6314cac95ef85d9f5ce3e31942553d6a128ac6298c5c8839b9d334c5b4632dd89f57d1f7a602918b4882205de5ae4e2a7da79310f6b3685bd13cde114edf4619"' :
                                            'id="xs-components-links-module-AdminLayoutModule-6314cac95ef85d9f5ce3e31942553d6a128ac6298c5c8839b9d334c5b4632dd89f57d1f7a602918b4882205de5ae4e2a7da79310f6b3685bd13cde114edf4619"' }>
                                            <li class="link">
                                                <a href="components/CreateReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TypographyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TypographyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpgradeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpgradeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-364ddd8114ff1d828011a3b6541a1b37daf04dd80522dba5bc1eebff3f25fdb622dec4a8521c31389b7cc8ee4cdc72fa7e280286eff7db37a1a7947514bac173"' : 'data-bs-target="#xs-components-links-module-AppModule-364ddd8114ff1d828011a3b6541a1b37daf04dd80522dba5bc1eebff3f25fdb622dec4a8521c31389b7cc8ee4cdc72fa7e280286eff7db37a1a7947514bac173"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-364ddd8114ff1d828011a3b6541a1b37daf04dd80522dba5bc1eebff3f25fdb622dec4a8521c31389b7cc8ee4cdc72fa7e280286eff7db37a1a7947514bac173"' :
                                            'id="xs-components-links-module-AppModule-364ddd8114ff1d828011a3b6541a1b37daf04dd80522dba5bc1eebff3f25fdb622dec4a8521c31389b7cc8ee4cdc72fa7e280286eff7db37a1a7947514bac173"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-9b1a9f69b8161d743f8b0812bb172a6bcbf825411466372647bcdd8ba499b276b14adb425005de64ab1e000a858f160afc4bcf3da8dd8857473b93a1b03aeb92"' : 'data-bs-target="#xs-components-links-module-AuthModule-9b1a9f69b8161d743f8b0812bb172a6bcbf825411466372647bcdd8ba499b276b14adb425005de64ab1e000a858f160afc4bcf3da8dd8857473b93a1b03aeb92"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-9b1a9f69b8161d743f8b0812bb172a6bcbf825411466372647bcdd8ba499b276b14adb425005de64ab1e000a858f160afc4bcf3da8dd8857473b93a1b03aeb92"' :
                                            'id="xs-components-links-module-AuthModule-9b1a9f69b8161d743f8b0812bb172a6bcbf825411466372647bcdd8ba499b276b14adb425005de64ab1e000a858f160afc4bcf3da8dd8857473b93a1b03aeb92"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FixedPluginModule.html" data-type="entity-link" >FixedPluginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FixedPluginModule-339953b96209ca5ce1fd2cad3b7d406ec6d4acfbadfc4a4cfff6147bbf1ee83bff868a0f2c3eca5784151169fdbd5445414f793c8fd085ec2988796a2ea245b6"' : 'data-bs-target="#xs-components-links-module-FixedPluginModule-339953b96209ca5ce1fd2cad3b7d406ec6d4acfbadfc4a4cfff6147bbf1ee83bff868a0f2c3eca5784151169fdbd5445414f793c8fd085ec2988796a2ea245b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FixedPluginModule-339953b96209ca5ce1fd2cad3b7d406ec6d4acfbadfc4a4cfff6147bbf1ee83bff868a0f2c3eca5784151169fdbd5445414f793c8fd085ec2988796a2ea245b6"' :
                                            'id="xs-components-links-module-FixedPluginModule-339953b96209ca5ce1fd2cad3b7d406ec6d4acfbadfc4a4cfff6147bbf1ee83bff868a0f2c3eca5784151169fdbd5445414f793c8fd085ec2988796a2ea245b6"' }>
                                            <li class="link">
                                                <a href="components/FixedPluginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FixedPluginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link" >FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FooterModule-22010c067a1d8190025c3b0f0cf7af7ec8657104d43e4e7fe61bd277318d4645e82e294cd82002cc29e969da9fbcc39bc1089b71925e5caaa453ca536172b4c2"' : 'data-bs-target="#xs-components-links-module-FooterModule-22010c067a1d8190025c3b0f0cf7af7ec8657104d43e4e7fe61bd277318d4645e82e294cd82002cc29e969da9fbcc39bc1089b71925e5caaa453ca536172b4c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-22010c067a1d8190025c3b0f0cf7af7ec8657104d43e4e7fe61bd277318d4645e82e294cd82002cc29e969da9fbcc39bc1089b71925e5caaa453ca536172b4c2"' :
                                            'id="xs-components-links-module-FooterModule-22010c067a1d8190025c3b0f0cf7af7ec8657104d43e4e7fe61bd277318d4645e82e294cd82002cc29e969da9fbcc39bc1089b71925e5caaa453ca536172b4c2"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavbarModule.html" data-type="entity-link" >NavbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NavbarModule-c10fe110afa54e3c5002a4aed8f2f1bcc8821ffc3c567e0771b295f972e1ab9bb75abe8530cbf05840fd672e3e5da0d60e205e2b7989b657f0e54d8c6ea2bd88"' : 'data-bs-target="#xs-components-links-module-NavbarModule-c10fe110afa54e3c5002a4aed8f2f1bcc8821ffc3c567e0771b295f972e1ab9bb75abe8530cbf05840fd672e3e5da0d60e205e2b7989b657f0e54d8c6ea2bd88"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavbarModule-c10fe110afa54e3c5002a4aed8f2f1bcc8821ffc3c567e0771b295f972e1ab9bb75abe8530cbf05840fd672e3e5da0d60e205e2b7989b657f0e54d8c6ea2bd88"' :
                                            'id="xs-components-links-module-NavbarModule-c10fe110afa54e3c5002a4aed8f2f1bcc8821ffc3c567e0771b295f972e1ab9bb75abe8530cbf05840fd672e3e5da0d60e205e2b7989b657f0e54d8c6ea2bd88"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link" >SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SidebarModule-4e53bc6154efd72966f54729cccd16bb8ac825f49ecae2214d4f458fbdc5b39bc9810c33a173a333aa760d6e315141589991d95f46e2c16caa858c793fee18ed"' : 'data-bs-target="#xs-components-links-module-SidebarModule-4e53bc6154efd72966f54729cccd16bb8ac825f49ecae2214d4f458fbdc5b39bc9810c33a173a333aa760d6e315141589991d95f46e2c16caa858c793fee18ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-4e53bc6154efd72966f54729cccd16bb8ac825f49ecae2214d4f458fbdc5b39bc9810c33a173a333aa760d6e315141589991d95f46e2c16caa858c793fee18ed"' :
                                            'id="xs-components-links-module-SidebarModule-4e53bc6154efd72966f54729cccd16bb8ac825f49ecae2214d4f458fbdc5b39bc9810c33a173a333aa760d6e315141589991d95f46e2c16caa858c793fee18ed"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CreateReportComponent.html" data-type="entity-link" >CreateReportComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/PdFreeAngularcliPage.html" data-type="entity-link" >PdFreeAngularcliPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RouteInfo.html" data-type="entity-link" >RouteInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableData.html" data-type="entity-link" >TableData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableData-1.html" data-type="entity-link" >TableData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});