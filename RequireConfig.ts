requirejs.config({
    baseUrl: "./",

    paths: {
        "three": "https://cdnjs.cloudflare.com/ajax/libs/three.js/91/three.min",
        "myScene": "./MyScene"
    },

    shim: {
        "myScene": {
            deps: ["three"]
        }
    }
});

requirejs(["Program"], (Program) =>
{

});