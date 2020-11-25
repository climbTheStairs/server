const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $id = document.getElementById.bind(document);
const $head = document.head || document;
const $body = document.body || document;
const create = (tag, ...props) => {
    return Object.assign(document.createElement(tag), ...props);
};
const randStr = (length = 20, charTypes = null) => {
    const allChars = {
        l: "abcdefghijklmnopqrstuvwxyz",
        u: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        n: "0123456789",
    };
    const chars = Object.values({
        ...allChars,
        ...charTypes,
    }).map((x) => x || "").join("");
    const res = [];
    while (length--)
        res.push(chars[~~(Math.random() * chars.length)]);
    return res.join("");
};
Element.prototype.CSS = (props) => {
    Object.assign(this.style, props);
    return this;
};
Element.prototype.fade = (callback, speed = 500) => {
    this.CSS({
        transition: `opacity ${speed}ms`,
        opacity: 0,
    });
    setTimeout(() => {
        callback();
        this.style.opacity = "";
        setTimeout(() => {
            this.style.transition = "";
        }, speed);
    }, speed);
    return this;
};
