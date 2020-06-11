import { tabs } from "./tabs.js";
(()=>{
   window.addEventListener('DOMContentLoaded',e=>{
       'use-strict';
        tabs('.tabs',".tabs__link",".tabs__section");
   }) ;
})();