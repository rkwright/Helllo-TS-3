requirejs.config({
    baseUrl: "./",

    paths: {
        "three": "https://cdnjs.cloudflare.com/ajax/libs/three.js/99/three.min",
        "myScene": "./MyScene"
    },
});

requirejs(["Program"], (Program) =>
{

});