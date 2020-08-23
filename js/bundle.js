(function(){function o(){return Array.prototype.slice.call(document.querySelectorAll.apply(document,arguments))}if(o(".columns .column-right").length&&o(".columns .column-right-shadow").length&&!o(".columns .column-right-shadow")[0].children.length){for(const t of o(".columns .column-right")[0].children){o(".columns .column-right-shadow")[0].append(t.cloneNode(true))}}o("body > .navbar, body > .section, body > .footer").forEach(o=>{o.style.transition="0s";o.style.opacity="0"});document.querySelector("body > .navbar").style.transform="translateY(-100px)";[".column-main > .card, .column-main > .pagination, .column-main > .post-navigation",".column-left > .card, .column-right-shadow > .card",".column-right > .card"].forEach(t=>{o(t).forEach(o=>{o.style.transition="0s";o.style.opacity="0";o.style.transform="scale(0.8)";o.style.transformOrigin="center top"})});setTimeout(()=>{o("body > .navbar, body > .section, body > .footer").forEach(o=>{o.style.opacity="1";o.style.transition="opacity 0.3s ease-out, transform 0.3s ease-out"});document.querySelector("body > .navbar").style.transform="translateY(0)";[".column-main > .card, .column-main > .pagination, .column-main > .post-navigation",".column-left > .card, .column-right-shadow > .card",".column-right > .card"].forEach(t=>{let n=1;o(t).forEach(o=>{setTimeout(()=>{o.style.opacity="1";o.style.transform="";o.style.transition="opacity 0.3s ease-out, transform 0.3s ease-out"},n*100);n++})})})})();$(document).ready(()=>{const e=$("#back-to-top");const t=$("footer.footer");const n=$(".column-main");const o=$(".column-left");const s=$(".column-right");let i=0;const c=20;const l=20;let r=null;const a={base:{classname:"card has-text-centered",left:"",width:64,bottom:l}};a["desktop-hidden"]=Object.assign({},a.base,{classname:a.base.classname+" rise-up"});a["desktop-visible"]=Object.assign({},a["desktop-hidden"],{classname:a["desktop-hidden"].classname+" fade-in"});a["desktop-dock"]=Object.assign({},a["desktop-visible"],{classname:a["desktop-visible"].classname+" fade-in is-rounded",width:40});a["mobile-hidden"]=Object.assign({},a.base,{classname:a.base.classname+" fade-in",right:c});a["mobile-visible"]=Object.assign({},a["mobile-hidden"],{classname:a["mobile-hidden"].classname+" rise-up"});function d(e,t){return![].concat(Object.keys(e),Object.keys(t)).some(n=>{return!Object.prototype.hasOwnProperty.call(e,n)||!Object.prototype.hasOwnProperty.call(t,n)||t[n]!==e[n]})}function u(t){if(r!==null&&d(r,t)){return}e.attr("class",t.classname);for(const n in t){if(n==="classname"){continue}e.css(n,t[n])}r=t}function f(){return window.innerWidth>=1078}function b(){return window.innerWidth>=768&&!f()}function h(){return $(window).scrollTop()<i&&$(window).scrollTop()>0}function m(){return o.length>0}function p(){return s.length>0}function w(){if(!p()){return 0}return Math.max.apply(null,s.find(".widget").map(function(){return $(this).offset().top+$(this).outerHeight(true)}))}function k(){return $(window).scrollTop()}function g(){return $(window).scrollTop()+$(window).height()}function O(){return e.outerWidth(true)}function j(){return e.outerHeight(true)}function y(){i=$(window).scrollTop()}function v(){if(f()||b()&&!m()&&p()){let e;const o=(n.outerWidth()-n.width())/2;const s=$(window).width()-O()-c;const i=t.offset().top+j()/2+l;if(k()===0||g()<w()+o+j()){e=a["desktop-hidden"]}else if(g()<i){e=a["desktop-visible"]}else{e=Object.assign({},a["desktop-dock"],{bottom:g()-i+l})}const r=n.offset().left+n.outerWidth()+o;e=Object.assign({},e,{left:Math.min(r,s)});u(e)}else{if(!h()){u(a["mobile-hidden"])}else{u(a["mobile-visible"])}y()}}v();$(window).resize(v);$(window).scroll(v);$("#back-to-top").on("click",()=>{$("body, html").animate({scrollTop:0},400)})});(function(i,t,e,n){i('.article img:not(".not-gallery-item")').each(function(){if(i(this).parent("a").length===0){i(this).wrap('<a class="gallery-item" href="'+i(this).attr("src")+'"></a>');if(this.alt){i(this).after('<p class="has-text-centered is-size-6 caption">'+this.alt+"</p>")}}});if(typeof i.fn.lightGallery==="function"){i(".article").lightGallery({selector:".gallery-item"})}if(typeof i.fn.justifiedGallery==="function"){if(i(".justified-gallery > p > .gallery-item").length){i(".justified-gallery > p > .gallery-item").unwrap()}i(".justified-gallery").justifiedGallery()}if(!i(".columns .column-right-shadow").children().length){i(".columns .column-right-shadow").append(i(".columns .column-right").children().clone())}if(typeof t==="function"){i(".article-meta time").each(function(){i(this).text(t(i(this).attr("datetime")).fromNow())})}i(".article > .content > table").each(function(){if(i(this).width()>i(this).parent().width()){i(this).wrap('<div class="table-overflow"></div>')}});function a(){const t=i(".navbar-main .navbar-start").outerWidth()+i(".navbar-main .navbar-end").outerWidth();if(i(document).outerWidth()<t){i(".navbar-main .navbar-menu").addClass("justify-content-start")}else{i(".navbar-main .navbar-menu").removeClass("justify-content-start")}}a();i(window).resize(a);function l(t,e){const n=i(t).find(".fold i");!e?i(t).removeClass("folded"):i(t).addClass("folded");!e?n.removeClass("fa-angle-right"):n.removeClass("fa-angle-down");!e?n.addClass("fa-angle-down"):n.addClass("fa-angle-right")}function s(i){return'<span class="fold">'+(i==="unfolded"?'<i class="fas fa-angle-down"></i>':'<i class="fas fa-angle-right"></i>')+"</span>"}i("figure.highlight table").wrap('<div class="highlight-body">');if(typeof n!=="undefined"&&typeof n.article!=="undefined"&&typeof n.article.highlight!=="undefined"){i("figure.highlight").addClass("hljs");i("figure.highlight .code .line span").each(function(){const t=i(this).attr("class").split(/\s+/);if(t.length===1){i(this).addClass("hljs-"+t[0]);i(this).removeClass(t[0])}});const t=n.article.highlight.clipboard;const a=n.article.highlight.fold.trim();i("figure.highlight").each(function(){if(i(this).find("figcaption").length){i(this).find("figcaption").addClass("level is-mobile");i(this).find("figcaption").append('<div class="level-left">');i(this).find("figcaption").append('<div class="level-right">');i(this).find("figcaption div.level-left").append(i(this).find("figcaption").find("span"));i(this).find("figcaption div.level-right").append(i(this).find("figcaption").find("a"))}else{if(t||a){i(this).prepend('<figcaption class="level is-mobile"><div class="level-left"></div><div class="level-right"></div></figcaption>')}}});if(typeof e!=="undefined"&&t){i("figure.highlight").each(function(){const t="code-"+Date.now()+(Math.random()*1e3|0);const e='<a href="javascript:;" class="copy" title="Copy" data-clipboard-target="#'+t+' .code"><i class="fas fa-copy"></i></a>';i(this).attr("id",t);i(this).find("figcaption div.level-right").append(e)});new e(".highlight .copy")}if(a){i("figure.highlight").each(function(){if(i(this).find("figcaption").find("span").length>0){const t=i(this).find("figcaption").find("span");if(t[0].innerText.indexOf(">folded")>-1){t[0].innerText=t[0].innerText.replace(">folded","");i(this).find("figcaption div.level-left").prepend(s("folded"));l(this,true);return}}i(this).find("figcaption div.level-left").prepend(s(a));l(this,a==="folded")});i("figure.highlight figcaption .fold").click(function(){const t=i(this).closest("figure.highlight");l(t.eq(0),!t.hasClass("folded"))})}}const f=i("#toc");if(f.length>0){const t=i("<div>");t.attr("id","toc-mask");i("body").append(t);function r(){f.toggleClass("is-active");t.toggleClass("is-active")}f.on("click",r);t.on("click",r);i(".navbar-main .catalogue").on("click",r)}function o(i,t,e){try{t=new URL(t).hostname}catch(i){}if(!t)return false;let n;try{n=new URL(i,"http://"+t)}catch(i){return false}if(n.origin==="null")return false;const a=n.hostname;if(e){e=Array.isArray(e)?e:[e];if(e&&e.length){for(const i of e){if(a===i)return false}}}if(a!==t)return true;return false}if(typeof n!=="undefined"&&typeof n.site.url!=="undefined"&&typeof n.site.external_link!=="undefined"&&n.site.external_link.enable){i(".article .content a").filter((t,e)=>{return e.href&&!i(e).attr("href").startsWith("#")&&e.classList.length===0&&o(e.href,n.site.url,n.site.external_link.exclude)}).each((i,t)=>{t.relList.add("noopener");t.target="_blank"})}})(jQuery,window.moment,window.ClipboardJS,window.IcarusThemeSettings);/**
 * Insight search plugin
 * @author PPOffice { @link https://github.com/ppoffice }
 */
function loadInsight(config, translation) { // eslint-disable-line no-unused-vars
    const $main = $('.searchbox');
    const $input = $main.find('.searchbox-input');
    const $container = $main.find('.searchbox-body');

    function section(title) {
        return $('<section>').addClass('searchbox-result-section').append($('<header>').text(title));
    }

    function merge(ranges) {
        let last;
        const result = [];

        ranges.forEach(r => {
            if (!last || r[0] > last[1]) {
                result.push(last = r);
            } else if (r[1] > last[1]) {
                last[1] = r[1];
            }
        });

        return result;
    }

    function findAndHighlight(text, matches, maxlen) {
        if (!Array.isArray(matches) || !matches.length || !text) {
            return maxlen ? text.slice(0, maxlen) : text;
        }
        const testText = text.toLowerCase();
        const indices = matches.map(match => {
            const index = testText.indexOf(match.toLowerCase());
            if (!match || index === -1) {
                return null;
            }
            return [index, index + match.length];
        }).filter(match => {
            return match !== null;
        }).sort((a, b) => {
            return a[0] - b[0] || a[1] - b[1];
        });

        if (!indices.length) {
            return text;
        }

        let result = ''; let last = 0;
        const ranges = merge(indices);
        const sumRange = [ranges[0][0], ranges[ranges.length - 1][1]];
        if (maxlen && maxlen < sumRange[1]) {
            last = sumRange[0];
        }

        for (let i = 0; i < ranges.length; i++) {
            const range = ranges[i];
            result += text.slice(last, Math.min(range[0], sumRange[0] + maxlen));
            if (maxlen && range[0] >= sumRange[0] + maxlen) {
                break;
            }
            result += '<em>' + text.slice(range[0], range[1]) + '</em>';
            last = range[1];
            if (i === ranges.length - 1) {
                if (maxlen) {
                    result += text.slice(range[1], Math.min(text.length, sumRange[0] + maxlen + 1));
                } else {
                    result += text.slice(range[1]);
                }
            }
        }

        return result;
    }

    function searchItem(icon, title, slug, preview, url) {
        title = title != null && title !== '' ? title : translation.untitled;

        return `<a class="searchbox-result-item" href="${url}">
            <span class="searchbox-result-icon">
                <i class="fa fa-${icon}" />
            </span>
            <span class="searchbox-result-content">
                <span class="searchbox-result-title">
                    ${title}
                    ${slug ? '<span class="searchbox-result-title-secondary">(' + slug + ')</span>' : ''}
                </span>
                ${preview ? '<span class="searchbox-result-preview">' + preview + '</span>' : ''}
            </span>
        </a>`;
    }

    function sectionFactory(keywords, type, array) {
        let $searchItems;
        if (array.length === 0) return null;
        const sectionTitle = translation[type.toLowerCase()];
        switch (type) {
            case 'POSTS':
            case 'PAGES':
                $searchItems = array.map(item => {
                    const title = findAndHighlight(item.title, keywords);
                    const text = findAndHighlight(item.text, keywords, 100);
                    return searchItem('file', title, null, text, item.link);
                });
                break;
            case 'CATEGORIES':
            case 'TAGS':
                $searchItems = array.map(item => {
                    const name = findAndHighlight(item.name, keywords);
                    const slug = findAndHighlight(item.slug, keywords);
                    return searchItem(type === 'CATEGORIES' ? 'folder' : 'tag', name, slug, null, item.link);
                });
                break;
            default:
                return null;
        }
        return section(sectionTitle).append($searchItems);
    }

    function parseKeywords(keywords) {
        return keywords.split(' ').filter(keyword => {
            return !!keyword;
        }).map(keyword => {
            return keyword.toLowerCase();
        });
    }

    /**
     * Judge if a given post/page/category/tag contains all of the keywords.
     * @param Object            obj     Object to be weighted
     * @param Array<String>     fields  Object's fields to find matches
     */
    function filter(keywords, obj, fields) {
        const keywordArray = parseKeywords(keywords);
        const containKeywords = keywordArray.filter(keyword => {
            const containFields = fields.filter(field => {
                if (!Object.prototype.hasOwnProperty.call(obj, field)) {
                    return false;
                }
                if (obj[field].toLowerCase().indexOf(keyword) > -1) {
                    return true;
                }
                return false;
            });
            if (containFields.length > 0) {
                return true;
            }
            return false;
        });
        return containKeywords.length === keywordArray.length;
    }

    function filterFactory(keywords) {
        return {
            post: function(obj) {
                return filter(keywords, obj, ['title', 'text']);
            },
            page: function(obj) {
                return filter(keywords, obj, ['title', 'text']);
            },
            category: function(obj) {
                return filter(keywords, obj, ['name', 'slug']);
            },
            tag: function(obj) {
                return filter(keywords, obj, ['name', 'slug']);
            }
        };
    }

    /**
     * Calculate the weight of a matched post/page/category/tag.
     * @param Object            obj     Object to be weighted
     * @param Array<String>     fields  Object's fields to find matches
     * @param Array<Integer>    weights Weight of every field
     */
    function weight(keywords, obj, fields, weights) {
        let value = 0;
        parseKeywords(keywords).forEach(keyword => {
            const pattern = new RegExp(keyword, 'img'); // Global, Multi-line, Case-insensitive
            fields.forEach((field, index) => {
                if (Object.prototype.hasOwnProperty.call(obj, field)) {
                    const matches = obj[field].match(pattern);
                    value += matches ? matches.length * weights[index] : 0;
                }
            });
        });
        return value;
    }

    function weightFactory(keywords) {
        return {
            post: function(obj) {
                return weight(keywords, obj, ['title', 'text'], [3, 1]);
            },
            page: function(obj) {
                return weight(keywords, obj, ['title', 'text'], [3, 1]);
            },
            category: function(obj) {
                return weight(keywords, obj, ['name', 'slug'], [1, 1]);
            },
            tag: function(obj) {
                return weight(keywords, obj, ['name', 'slug'], [1, 1]);
            }
        };
    }

    function search(json, keywords) {
        const weights = weightFactory(keywords);
        const filters = filterFactory(keywords);
        const posts = json.posts;
        const pages = json.pages;
        const tags = json.tags;
        const categories = json.categories;
        return {
            posts: posts.filter(filters.post).sort((a, b) => { return weights.post(b) - weights.post(a); }).slice(0, 5),
            pages: pages.filter(filters.page).sort((a, b) => { return weights.page(b) - weights.page(a); }).slice(0, 5),
            categories: categories.filter(filters.category).sort((a, b) => { return weights.category(b) - weights.category(a); }).slice(0, 5),
            tags: tags.filter(filters.tag).sort((a, b) => { return weights.tag(b) - weights.tag(a); }).slice(0, 5)
        };
    }

    function searchResultToDOM(keywords, searchResult) {
        $container.empty();
        for (const key in searchResult) {
            $container.append(sectionFactory(parseKeywords(keywords),
                key.toUpperCase(), searchResult[key]));
        }
    }

    function scrollTo($item) {
        if ($item.length === 0) return;
        const wrapperHeight = $container[0].clientHeight;
        const itemTop = $item.position().top - $container.scrollTop();
        const itemBottom = $item[0].clientHeight + $item.position().top;
        if (itemBottom > wrapperHeight + $container.scrollTop()) {
            $container.scrollTop(itemBottom - $container[0].clientHeight);
        }
        if (itemTop < 0) {
            $container.scrollTop($item.position().top);
        }
    }

    function selectItemByDiff(value) {
        const $items = $.makeArray($container.find('.searchbox-result-item'));
        let prevPosition = -1;
        $items.forEach((item, index) => {
            if ($(item).hasClass('active')) {
                prevPosition = index;

            }
        });
        const nextPosition = ($items.length + prevPosition + value) % $items.length;
        $($items[prevPosition]).removeClass('active');
        $($items[nextPosition]).addClass('active');
        scrollTo($($items[nextPosition]));
    }

    function gotoLink($item) {
        if ($item && $item.length) {
            location.href = $item.attr('href');
        }
    }

    $.getJSON(config.contentUrl, json => {
        if (location.hash.trim() === '#insight-search') {
            $main.addClass('show');
        }
        $input.on('input', function() {
            const keywords = $(this).val();
            searchResultToDOM(keywords, search(json, keywords));
        });
        $input.trigger('input');
    });

    let touch = false;
    $(document).on('click focus', '.navbar-main .search', () => {
        $main.addClass('show');
        $main.find('.searchbox-input').focus();
    }).on('click touchend', '.searchbox-result-item', function(e) {
        if (e.type !== 'click' && !touch) {
            return;
        }
        gotoLink($(this));
        touch = false;
    }).on('click touchend', '.searchbox-close', e => {
        if (e.type !== 'click' && !touch) {
            return;
        }
        $('.navbar-main').css('pointer-events', 'none');
        setTimeout(() => {
            $('.navbar-main').css('pointer-events', 'auto');
        }, 400);
        $main.removeClass('show');
        touch = false;
    }).on('keydown', e => {
        if (!$main.hasClass('show')) return;
        switch (e.keyCode) {
            case 27: // ESC
                $main.removeClass('show'); break;
            case 38: // UP
                selectItemByDiff(-1); break;
            case 40: // DOWN
                selectItemByDiff(1); break;
            case 13: // ENTER
                gotoLink($container.find('.searchbox-result-item.active').eq(0)); break;
        }
    }).on('touchstart', e => {
        touch = true;
    }).on('touchmove', e => {
        touch = false;
    });
}
"use strict";function updateCoords(e){pointerX=(e.clientX||e.touches[0].clientX)-canvasEl.getBoundingClientRect().left,pointerY=e.clientY||e.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(e){var t=anime.random(0,360)*Math.PI/180,a=anime.random(50,180),n=[-1,1][anime.random(0,1)]*a;return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}}function createParticule(e,t){var a={};return a.x=e,a.y=t,a.color=colors[anime.random(0,colors.length-1)],a.radius=anime.random(12,24),a.endPos=setParticuleDirection(a),a.draw=function(){ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.fillStyle=a.color,ctx.fill()},a}function createCircle(e,t){var a={};return a.x=e,a.y=t,a.color="#F00",a.radius=.1,a.alpha=.5,a.lineWidth=6,a.draw=function(){ctx.globalAlpha=a.alpha,ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.lineWidth=a.lineWidth,ctx.strokeStyle=a.color,ctx.stroke(),ctx.globalAlpha=1},a}function renderParticule(e){for(var t=0;t<e.animatables.length;t++){e.animatables[t].target.draw()}}function animateParticules(e,t){for(var a=createCircle(e,t),n=[],i=0;i<numberOfParticules;i++){n.push(createParticule(e,t))}anime.timeline().add({targets:n,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule}).add({targets:a,radius:anime.random(80,120),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule,offset:0})}function debounce(e,t){var a;return function(){var n=this,i=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(n,i)},t)}}var canvasEl=document.querySelector(".fireworks");if(canvasEl){var ctx=canvasEl.getContext("2d"),numberOfParticules=30,pointerX=0,pointerY=0,tap="mousedown",colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"],setCanvasSize=debounce(function(){canvasEl.width=2*window.innerWidth,canvasEl.height=2*window.innerHeight,canvasEl.style.width=window.innerWidth+"px",canvasEl.style.height=window.innerHeight+"px",canvasEl.getContext("2d").scale(2,2)},500),render=anime({duration:1/0,update:function(){ctx.clearRect(0,0,canvasEl.width,canvasEl.height)}});document.addEventListener(tap,function(e){"sidebar"!==e.target.id&&"toggle-sidebar"!==e.target.id&&"A"!==e.target.nodeName&&"IMG"!==e.target.nodeName&&(render.play(),updateCoords(e),animateParticules(pointerX,pointerY))},!1),setCanvasSize(),window.addEventListener("resize",setCanvasSize,!1)}