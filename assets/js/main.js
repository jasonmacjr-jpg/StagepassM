/*
=========================================
 StagePass
 File: main.js
 Version: 1.0.0
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initScrollAnimations();

    initStickyHeader();

    initSmoothScroll();

    initBackToTop();

});

/* ========================================
   Sticky Header
======================================== */

function initStickyHeader() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}

/* ========================================
   Scroll Animations
======================================== */

function initScrollAnimations() {

    const elements = document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.zoom"

    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:0.15

        }

    );

    elements.forEach(el => observer.observe(el));

}

/* ========================================
   Smooth Scroll
======================================== */

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/* ========================================
   Back To Top
======================================== */

function initBackToTop(){

    const btn=document.querySelector(".back-to-top");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            btn.classList.add("show");

        }else{

            btn.classList.remove("show");

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
