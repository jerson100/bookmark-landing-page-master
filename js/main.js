import { tabs } from "./tabs.js";
import { toggleMenu } from "./toggle.js";
import { resizeDocument } from "./resize.js";
(()=>{
   window.addEventListener('DOMContentLoaded',e=>{
         'use-strict';
         tabs('.tabs',".tabs__link",".tabs__section");
         toggleMenu('.nav-menu__btn',".header","header--active");
         resizeDocument(
               [
                  {
                        media : '(min-width: 1440px)',
                        action : () => {
                              document.querySelector(".header")
                                      .classList.remove("header--active");
                        }
                  }
               ]
         );
   }) ;
})();