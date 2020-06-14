import { tabs } from "./tabs.js";
import { toggleMenu } from "./toggle.js";
(()=>{
   window.addEventListener('DOMContentLoaded',e=>{
         'use-strict';
         tabs('.tabs',".tabs__link",".tabs__section");
         toggleMenu('.nav-menu__btn',".header","header--active");
   }) ;
})();