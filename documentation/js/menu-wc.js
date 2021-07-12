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
                    <a href="index.html" data-type="index-link">smartsoft-test-back-end documentation</a>
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
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigModule.html" data-type="entity-link" >ConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TableDataModule.html" data-type="entity-link" >TableDataModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableDataModule-80d69cf269e9089ce9900615a6feca1f"' : 'data-target="#xs-injectables-links-module-TableDataModule-80d69cf269e9089ce9900615a6feca1f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableDataModule-80d69cf269e9089ce9900615a6feca1f"' :
                                        'id="xs-injectables-links-module-TableDataModule-80d69cf269e9089ce9900615a6feca1f"' }>
                                        <li class="link">
                                            <a href="injectables/TableDataOneService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableDataOneService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TableDataThreeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableDataThreeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TableDataTwoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableDataTwoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableModule-b54da066f3d8b6ad12aa4b8e4af1eca3"' : 'data-target="#xs-injectables-links-module-TableModule-b54da066f3d8b6ad12aa4b8e4af1eca3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-b54da066f3d8b6ad12aa4b8e4af1eca3"' :
                                        'id="xs-injectables-links-module-TableModule-b54da066f3d8b6ad12aa4b8e4af1eca3"' }>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableStructureModule.html" data-type="entity-link" >TableStructureModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableStructureModule-3ef46450c71e0987e09c9c29200dba5f"' : 'data-target="#xs-injectables-links-module-TableStructureModule-3ef46450c71e0987e09c9c29200dba5f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableStructureModule-3ef46450c71e0987e09c9c29200dba5f"' :
                                        'id="xs-injectables-links-module-TableStructureModule-3ef46450c71e0987e09c9c29200dba5f"' }>
                                        <li class="link">
                                            <a href="injectables/TableStructureService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableStructureService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ConfiguracionController.html" data-type="entity-link" >ConfiguracionController</a>
                            </li>
                            <li class="link">
                                <a href="classes/Constantes.html" data-type="entity-link" >Constantes</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataOneDto.html" data-type="entity-link" >DataOneDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataThreeDto.html" data-type="entity-link" >DataThreeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataTwoDto.html" data-type="entity-link" >DataTwoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableDataController.html" data-type="entity-link" >TableDataController</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableDataOneEntity.html" data-type="entity-link" >TableDataOneEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableDataThreeEntity.html" data-type="entity-link" >TableDataThreeEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableDataTwoEntity.html" data-type="entity-link" >TableDataTwoEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableEntity.html" data-type="entity-link" >TableEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableStructureEntity.html" data-type="entity-link" >TableStructureEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Yaml.html" data-type="entity-link" >Yaml</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableDataOneService.html" data-type="entity-link" >TableDataOneService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableDataThreeService.html" data-type="entity-link" >TableDataThreeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableDataTwoService.html" data-type="entity-link" >TableDataTwoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableStructureService.html" data-type="entity-link" >TableStructureService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IResponseGeneryInterface.html" data-type="entity-link" >IResponseGeneryInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResponseTables.html" data-type="entity-link" >IResponseTables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});