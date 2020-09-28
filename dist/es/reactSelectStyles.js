import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _templateObject = _taggedTemplateLiteral(['\n  .Select {\n    position: relative;\n  }\n  .Select,\n  .Select div,\n  .Select input,\n  .Select span {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  .Select.is-disabled > .Select-control {\n    background-color: #f9f9f9;\n  }\n  .Select.is-disabled > .Select-control:hover {\n    box-shadow: none;\n  }\n  .Select.is-disabled .Select-arrow-zone {\n    cursor: default;\n    pointer-events: none;\n    opacity: 0.35;\n  }\n  .Select-control {\n    background-color: #fff;\n    border-color: #d9d9d9 #ccc #b3b3b3;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    color: #333;\n    cursor: default;\n    display: table;\n    border-spacing: 0;\n    border-collapse: separate;\n    height: 36px;\n    outline: none;\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n  }\n  .Select-control:hover {\n    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  }\n  .Select-control .Select-input:focus {\n    outline: none;\n  }\n  .is-searchable.is-open > .Select-control {\n    cursor: text;\n  }\n  .is-open > .Select-control {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    background: #fff;\n    border-color: #b3b3b3 #ccc #d9d9d9;\n  }\n  .is-open > .Select-control > .Select-arrow {\n    border-color: transparent transparent #999;\n    border-width: 0 5px 5px;\n  }\n  .is-searchable.is-focused:not(.is-open) > .Select-control {\n    cursor: text;\n  }\n  .is-focused:not(.is-open) > .Select-control {\n    border-color: #007eff;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n  }\n  .Select-placeholder,\n  .Select--single > .Select-control .Select-value {\n    bottom: 0;\n    color: #aaa;\n    left: 0;\n    line-height: 34px;\n    padding-left: 10px;\n    padding-right: 10px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .has-value.Select--single > .Select-control .Select-value .Select-value-label,\n  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n    color: #333;\n  }\n  .has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n    cursor: pointer;\n    text-decoration: none;\n  }\n  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n    color: #007eff;\n    outline: none;\n    text-decoration: underline;\n  }\n  .Select-input {\n    height: 34px;\n    padding-left: 10px;\n    padding-right: 10px;\n    vertical-align: middle;\n  }\n  .Select-input > input {\n    width: 100%;\n    background: none transparent;\n    border: 0 none;\n    box-shadow: none;\n    cursor: default;\n    display: inline-block;\n    font-family: inherit;\n    font-size: inherit;\n    margin: 0;\n    outline: none;\n    line-height: 14px;\n    /* For IE 8 compatibility */\n    padding: 8px 0 12px;\n    /* For IE 8 compatibility */\n    -webkit-appearance: none;\n  }\n  .is-focused .Select-input > input {\n    cursor: text;\n  }\n  .has-value.is-pseudo-focused .Select-input {\n    opacity: 0;\n  }\n  .Select-control:not(.is-searchable) > .Select-input {\n    outline: none;\n  }\n  .Select-loading-zone {\n    cursor: pointer;\n    display: table-cell;\n    position: relative;\n    text-align: center;\n    vertical-align: middle;\n    width: 16px;\n  }\n  .Select-loading {\n    -webkit-animation: Select-animation-spin 400ms infinite linear;\n    -o-animation: Select-animation-spin 400ms infinite linear;\n    animation: Select-animation-spin 400ms infinite linear;\n    width: 16px;\n    height: 16px;\n    box-sizing: border-box;\n    border-radius: 50%;\n    border: 2px solid #ccc;\n    border-right-color: #333;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n  }\n  .Select-clear-zone {\n    -webkit-animation: Select-animation-fadeIn 200ms;\n    -o-animation: Select-animation-fadeIn 200ms;\n    animation: Select-animation-fadeIn 200ms;\n    color: #999;\n    cursor: pointer;\n    display: table-cell;\n    position: relative;\n    text-align: center;\n    vertical-align: middle;\n    width: 17px;\n  }\n  .Select-clear-zone:hover {\n    color: #D0021B;\n  }\n  .Select-clear {\n    display: inline-block;\n    font-size: 18px;\n    line-height: 1;\n  }\n  .Select--multi .Select-clear-zone {\n    width: 17px;\n  }\n  .Select-arrow-zone {\n    cursor: pointer;\n    display: table-cell;\n    position: relative;\n    text-align: center;\n    vertical-align: middle;\n    width: 25px;\n    padding-right: 5px;\n  }\n  .Select-arrow {\n    border-color: #999 transparent transparent;\n    border-style: solid;\n    border-width: 5px 5px 2.5px;\n    display: inline-block;\n    height: 0;\n    width: 0;\n  }\n  .is-open .Select-arrow,\n  .Select-arrow-zone:hover > .Select-arrow {\n    border-top-color: #666;\n  }\n  .Select--multi .Select-multi-value-wrapper {\n    display: inline-block;\n  }\n  .Select .Select-aria-only {\n    display: inline-block;\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    clip: rect(0, 0, 0, 0);\n    overflow: hidden;\n  }\n  @-webkit-keyframes Select-animation-fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  @keyframes Select-animation-fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  .Select-menu-outer {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-top-color: #e6e6e6;\n    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n    box-sizing: border-box;\n    margin-top: -1px;\n    max-height: 200px;\n    position: absolute;\n    top: 100%;\n    width: 100%;\n    z-index: 1;\n    -webkit-overflow-scrolling: touch;\n  }\n  .Select-menu {\n    max-height: 198px;\n    overflow-y: auto;\n  }\n  .Select-option {\n    box-sizing: border-box;\n    background-color: #fff;\n    color: #666666;\n    cursor: pointer;\n    display: block;\n    padding: 8px 10px;\n  }\n  .Select-option:last-child {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  .Select-option.is-selected {\n    background-color: #f5faff;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 126, 255, 0.04);\n    color: #333;\n  }\n  .Select-option.is-focused {\n    background-color: #ebf5ff;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 126, 255, 0.08);\n    color: #333;\n  }\n  .Select-option.is-disabled {\n    color: #cccccc;\n    cursor: default;\n  }\n  .Select-noresults {\n    box-sizing: border-box;\n    color: #999999;\n    cursor: default;\n    display: block;\n    padding: 8px 10px;\n  }\n  .Select--multi .Select-input {\n    vertical-align: middle;\n    margin-left: 10px;\n    padding: 0;\n  }\n  .Select--multi.has-value .Select-input {\n    margin-left: 5px;\n  }\n  .Select--multi .Select-value {\n    background-color: #ebf5ff;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 126, 255, 0.08);\n    border-radius: 2px;\n    border: 1px solid #c2e0ff;\n    /* Fallback color for IE 8 */\n    border: 1px solid rgba(0, 126, 255, 0.24);\n    color: #007eff;\n    display: inline-block;\n    font-size: 0.9em;\n    line-height: 1.4;\n    margin-left: 5px;\n    margin-top: 5px;\n    vertical-align: top;\n  }\n  .Select--multi .Select-value-icon,\n  .Select--multi .Select-value-label {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .Select--multi .Select-value-label {\n    border-bottom-right-radius: 2px;\n    border-top-right-radius: 2px;\n    cursor: default;\n    padding: 2px 5px;\n  }\n  .Select--multi a.Select-value-label {\n    color: #007eff;\n    cursor: pointer;\n    text-decoration: none;\n  }\n  .Select--multi a.Select-value-label:hover {\n    text-decoration: underline;\n  }\n  .Select--multi .Select-value-icon {\n    cursor: pointer;\n    border-bottom-left-radius: 2px;\n    border-top-left-radius: 2px;\n    border-right: 1px solid #c2e0ff;\n    /* Fallback color for IE 8 */\n    border-right: 1px solid rgba(0, 126, 255, 0.24);\n    padding: 1px 5px 3px;\n  }\n  .Select--multi .Select-value-icon:hover,\n  .Select--multi .Select-value-icon:focus {\n    background-color: #d8eafd;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 113, 230, 0.08);\n    color: #0071e6;\n  }\n  .Select--multi .Select-value-icon:active {\n    background-color: #c2e0ff;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 126, 255, 0.24);\n  }\n  .Select--multi.is-disabled .Select-value {\n    background-color: #fcfcfc;\n    border: 1px solid #e3e3e3;\n    color: #333;\n  }\n  .Select--multi.is-disabled .Select-value-icon {\n    cursor: not-allowed;\n    border-right: 1px solid #e3e3e3;\n  }\n  .Select--multi.is-disabled .Select-value-icon:hover,\n  .Select--multi.is-disabled .Select-value-icon:focus,\n  .Select--multi.is-disabled .Select-value-icon:active {\n    background-color: #fcfcfc;\n  }\n  @keyframes Select-animation-spin {\n    to {\n      transform: rotate(1turn);\n    }\n  }\n  @-webkit-keyframes Select-animation-spin {\n    to {\n      -webkit-transform: rotate(1turn);\n    }\n  }\n\n  .VirtualSelectGrid {\n    z-index: 1;\n  }\n\n  .VirtualizedSelectOption {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0 .5rem;\n  }\n  .VirtualizedSelectFocusedOption {\n    background-color: rgba(0, 126, 255, 0.1);\n  }\n  .VirtualizedSelectDisabledOption {\n    opacity: 0.5;\n  }\n'], ['\n  .Select {\n    position: relative;\n  }\n  .Select,\n  .Select div,\n  .Select input,\n  .Select span {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  .Select.is-disabled > .Select-control {\n    background-color: #f9f9f9;\n  }\n  .Select.is-disabled > .Select-control:hover {\n    box-shadow: none;\n  }\n  .Select.is-disabled .Select-arrow-zone {\n    cursor: default;\n    pointer-events: none;\n    opacity: 0.35;\n  }\n  .Select-control {\n    background-color: #fff;\n    border-color: #d9d9d9 #ccc #b3b3b3;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    color: #333;\n    cursor: default;\n    display: table;\n    border-spacing: 0;\n    border-collapse: separate;\n    height: 36px;\n    outline: none;\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n  }\n  .Select-control:hover {\n    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  }\n  .Select-control .Select-input:focus {\n    outline: none;\n  }\n  .is-searchable.is-open > .Select-control {\n    cursor: text;\n  }\n  .is-open > .Select-control {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    background: #fff;\n    border-color: #b3b3b3 #ccc #d9d9d9;\n  }\n  .is-open > .Select-control > .Select-arrow {\n    border-color: transparent transparent #999;\n    border-width: 0 5px 5px;\n  }\n  .is-searchable.is-focused:not(.is-open) > .Select-control {\n    cursor: text;\n  }\n  .is-focused:not(.is-open) > .Select-control {\n    border-color: #007eff;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n  }\n  .Select-placeholder,\n  .Select--single > .Select-control .Select-value {\n    bottom: 0;\n    color: #aaa;\n    left: 0;\n    line-height: 34px;\n    padding-left: 10px;\n    padding-right: 10px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .has-value.Select--single > .Select-control .Select-value .Select-value-label,\n  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n    color: #333;\n  }\n  .has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n    cursor: pointer;\n    text-decoration: none;\n  }\n  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n    color: #007eff;\n    outline: none;\n    text-decoration: underline;\n  }\n  .Select-input {\n    height: 34px;\n    padding-left: 10px;\n    padding-right: 10px;\n    vertical-align: middle;\n  }\n  .Select-input > input {\n    width: 100%;\n    background: none transparent;\n    border: 0 none;\n    box-shadow: none;\n    cursor: default;\n    display: inline-block;\n    font-family: inherit;\n    font-size: inherit;\n    margin: 0;\n    outline: none;\n    line-height: 14px;\n    /* For IE 8 compatibility */\n    padding: 8px 0 12px;\n    /* For IE 8 compatibility */\n    -webkit-appearance: none;\n  }\n  .is-focused .Select-input > input {\n    cursor: text;\n  }\n  .has-value.is-pseudo-focused .Select-input {\n    opacity: 0;\n  }\n  .Select-control:not(.is-searchable) > .Select-input {\n    outline: none;\n  }\n  .Select-loading-zone {\n    cursor: pointer;\n    display: table-cell;\n    position: relative;\n    text-align: center;\n    vertical-align: middle;\n    width: 16px;\n  }\n  .Select-loading {\n    -webkit-animation: Select-animation-spin 400ms infinite linear;\n    -o-animation: Select-animation-spin 400ms infinite linear;\n    animation: Select-animation-spin 400ms infinite linear;\n    width: 16px;\n    height: 16px;\n    box-sizing: border-box;\n    border-radius: 50%;\n    border: 2px solid #ccc;\n    border-right-color: #333;\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n  }\n  .Select-clear-zone {\n    -webkit-animation: Select-animation-fadeIn 200ms;\n    -o-animation: Select-animation-fadeIn 200ms;\n    animation: Select-animation-fadeIn 200ms;\n    color: #999;\n    cursor: pointer;\n    display: table-cell;\n    position: relative;\n    text-align: center;\n    vertical-align: middle;\n    width: 17px;\n  }\n  .Select-clear-zone:hover {\n    color: #D0021B;\n  }\n  .Select-clear {\n    display: inline-block;\n    font-size: 18px;\n    line-height: 1;\n  }\n  .Select--multi .Select-clear-zone {\n    width: 17px;\n  }\n  .Select-arrow-zone {\n    cursor: pointer;\n    display: table-cell;\n    position: relative;\n    text-align: center;\n    vertical-align: middle;\n    width: 25px;\n    padding-right: 5px;\n  }\n  .Select-arrow {\n    border-color: #999 transparent transparent;\n    border-style: solid;\n    border-width: 5px 5px 2.5px;\n    display: inline-block;\n    height: 0;\n    width: 0;\n  }\n  .is-open .Select-arrow,\n  .Select-arrow-zone:hover > .Select-arrow {\n    border-top-color: #666;\n  }\n  .Select--multi .Select-multi-value-wrapper {\n    display: inline-block;\n  }\n  .Select .Select-aria-only {\n    display: inline-block;\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    clip: rect(0, 0, 0, 0);\n    overflow: hidden;\n  }\n  @-webkit-keyframes Select-animation-fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  @keyframes Select-animation-fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  .Select-menu-outer {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-top-color: #e6e6e6;\n    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n    box-sizing: border-box;\n    margin-top: -1px;\n    max-height: 200px;\n    position: absolute;\n    top: 100%;\n    width: 100%;\n    z-index: 1;\n    -webkit-overflow-scrolling: touch;\n  }\n  .Select-menu {\n    max-height: 198px;\n    overflow-y: auto;\n  }\n  .Select-option {\n    box-sizing: border-box;\n    background-color: #fff;\n    color: #666666;\n    cursor: pointer;\n    display: block;\n    padding: 8px 10px;\n  }\n  .Select-option:last-child {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  .Select-option.is-selected {\n    background-color: #f5faff;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 126, 255, 0.04);\n    color: #333;\n  }\n  .Select-option.is-focused {\n    background-color: #ebf5ff;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 126, 255, 0.08);\n    color: #333;\n  }\n  .Select-option.is-disabled {\n    color: #cccccc;\n    cursor: default;\n  }\n  .Select-noresults {\n    box-sizing: border-box;\n    color: #999999;\n    cursor: default;\n    display: block;\n    padding: 8px 10px;\n  }\n  .Select--multi .Select-input {\n    vertical-align: middle;\n    margin-left: 10px;\n    padding: 0;\n  }\n  .Select--multi.has-value .Select-input {\n    margin-left: 5px;\n  }\n  .Select--multi .Select-value {\n    background-color: #ebf5ff;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 126, 255, 0.08);\n    border-radius: 2px;\n    border: 1px solid #c2e0ff;\n    /* Fallback color for IE 8 */\n    border: 1px solid rgba(0, 126, 255, 0.24);\n    color: #007eff;\n    display: inline-block;\n    font-size: 0.9em;\n    line-height: 1.4;\n    margin-left: 5px;\n    margin-top: 5px;\n    vertical-align: top;\n  }\n  .Select--multi .Select-value-icon,\n  .Select--multi .Select-value-label {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  .Select--multi .Select-value-label {\n    border-bottom-right-radius: 2px;\n    border-top-right-radius: 2px;\n    cursor: default;\n    padding: 2px 5px;\n  }\n  .Select--multi a.Select-value-label {\n    color: #007eff;\n    cursor: pointer;\n    text-decoration: none;\n  }\n  .Select--multi a.Select-value-label:hover {\n    text-decoration: underline;\n  }\n  .Select--multi .Select-value-icon {\n    cursor: pointer;\n    border-bottom-left-radius: 2px;\n    border-top-left-radius: 2px;\n    border-right: 1px solid #c2e0ff;\n    /* Fallback color for IE 8 */\n    border-right: 1px solid rgba(0, 126, 255, 0.24);\n    padding: 1px 5px 3px;\n  }\n  .Select--multi .Select-value-icon:hover,\n  .Select--multi .Select-value-icon:focus {\n    background-color: #d8eafd;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 113, 230, 0.08);\n    color: #0071e6;\n  }\n  .Select--multi .Select-value-icon:active {\n    background-color: #c2e0ff;\n    /* Fallback color for IE 8 */\n    background-color: rgba(0, 126, 255, 0.24);\n  }\n  .Select--multi.is-disabled .Select-value {\n    background-color: #fcfcfc;\n    border: 1px solid #e3e3e3;\n    color: #333;\n  }\n  .Select--multi.is-disabled .Select-value-icon {\n    cursor: not-allowed;\n    border-right: 1px solid #e3e3e3;\n  }\n  .Select--multi.is-disabled .Select-value-icon:hover,\n  .Select--multi.is-disabled .Select-value-icon:focus,\n  .Select--multi.is-disabled .Select-value-icon:active {\n    background-color: #fcfcfc;\n  }\n  @keyframes Select-animation-spin {\n    to {\n      transform: rotate(1turn);\n    }\n  }\n  @-webkit-keyframes Select-animation-spin {\n    to {\n      -webkit-transform: rotate(1turn);\n    }\n  }\n\n  .VirtualSelectGrid {\n    z-index: 1;\n  }\n\n  .VirtualizedSelectOption {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0 .5rem;\n  }\n  .VirtualizedSelectFocusedOption {\n    background-color: rgba(0, 126, 255, 0.1);\n  }\n  .VirtualizedSelectDisabledOption {\n    opacity: 0.5;\n  }\n']);

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle(_templateObject);