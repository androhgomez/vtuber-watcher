// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require react
//= require react-intl
//= require react_ujs
//= require components
//= require react-intl-formatted-duration



import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
// import { FormattedNumber } from 'react-intl';
// 
import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()
import ReactRailsUJS from "react_ujs"
var componentRequireContext = require.context("./components", true, /^(?!.*__tests__\/.*$).+$/)
//window.reactRequire = require.context('react-intl-formatted-duration', true)
ReactRailsUJS.useContext(componentRequireContext)
window.componentRequireContext = componentRequireContext
