/*
 * _(:з」∠)_
 * Created by Shuqiao Zhang in 2019.
 * https://zhangshuqiao.org
 */

/*
 * This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 */
// 注意：live2d_path 参数应使用绝对路径
const live2d_path = "https://cdn.staticaly.com/gh/stevenjoezhang/live2d-widget@latest/";
//const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
// function loadExternalResource(url, type) {
//     return new Promise((resolve, reject) => {
//         let tag;

//         if (type === "css") {
//             tag = document.createElement("link");
//             tag.rel = "stylesheet";
//             tag.href = url;
//         }
//         else if (type === "js") {
//             tag = document.createElement("script");
//             tag.src = url;
//         }
//         if (tag) {
//             tag.onload = () => resolve(url);
//             tag.onerror = () => reject(url);
//             document.head.appendChild(tag);
//         }
//     });
// }


window.addEventListener("load", () => {
    "use strict";

    if ((!CSS.supports("clip-path", "circle(110px at center)") && !CSS.supports("-webkit-clip-path", "circle(120px at center)"))
        || screen.width < 768) {
        document.getElementById("stage").innerHTML = '<img src="/img/avatar.jpeg">';
        return;
    }

    let apiPath = "https://live2d.fghrsh.net/api", state = 0,
        modelId = 1,
        modelTexturesId = 7;

    loadModel(modelId, modelTexturesId);

    function loadModel(modelId, modelTexturesId) {
        localStorage.setItem("modelId", modelId);
        if (modelTexturesId === undefined) modelTexturesId = 0;
        localStorage.setItem("modelTexturesId", modelTexturesId);
        loadlive2d("live2d", `${apiPath}/get/?id=${modelId}-${modelTexturesId}`, null);
        console.log("live2d", `模型 ${modelId}-${modelTexturesId} 加载完成`);
        setTimeout(() => {
            coverPosition("80%");
            state = 2;
        }, 2000);
    }

    function loadRandModel() {
        const modelId = localStorage.getItem("modelId"),
            modelTexturesId = localStorage.getItem("modelTexturesId");
        fetch(`${apiPath}/rand_textures/?id=${modelId}-${modelTexturesId}`)
            .then(response => response.json())
            .then(result => {
                loadModel(modelId, result.textures.id);
                setTimeout(() => {
                    state = 2;
                    coverPosition("80%");
                    document.getElementById("refresh").setAttribute("href", "javascript:refresh()");
                }, 1000);
            });
    }

    function loadOtherModel() {
        const modelId = localStorage.getItem("modelId");
        fetch(`${apiPath}/switch/?id=${modelId}`)
            .then(response => response.json())
            .then(result => {
                loadModel(result.model.id);
                document.getElementById("info").setAttribute("href", "javascript:changeModel()");
            });
    }

    function coverPosition(pos) {
        document.getElementById("cover").style.bottom = pos;
    }

    window.info = function () {
        fetch("https://v1.hitokoto.cn")
            .then(response => response.json())
            .then(result => {
                alert("「" + result.hitokoto + "」——" + result.from);
            });
    };

    window.refresh = function () {
        state = 0;
        coverPosition("10%");
        document.getElementById("refresh").setAttribute("href", "javascript:void(0)");
        setTimeout(loadRandModel, 1000);
    };

    window.changeModel = function () {
        state = 0;
        coverPosition("10%");
        document.getElementById("info").setAttribute("href", "javascript:void(0)");
        setTimeout(loadOtherModel, 1000);
    };

    document.getElementById("handle").addEventListener("click", () => {
        if (state === 1) {
            state = 2;
            coverPosition("80%");
        }
        else if (state === 2) {
            state = 1;
            coverPosition("20%");
        }
    });

});
