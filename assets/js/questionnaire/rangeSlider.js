// https://github.com/Stryzhevskyi/rangeSlider
/* eslint-disable */
import rangeSlider from 'rangeslider-pure/dist/range-slider.min';

// Initialize a new plugin instance for one element or NodeList of elements.
const slider = document.querySelector('input[type="range"]');
rangeSlider.create(slider, {
    polyfill: true, // Boolean, if true, custom markup will be created
    root: document,
    rangeClass: 'rangeSlider',
    disabledClass: 'rangeSlider--disabled',
    fillClass: 'rangeSlider__fill',
    bufferClass: 'rangeSlider__buffer',
    handleClass: 'rangeSlider__handle',
    startEvent: ['mousedown', 'touchstart', 'pointerdown'],
    moveEvent: ['mousemove', 'touchmove', 'pointermove'],
    endEvent: ['mouseup', 'touchend', 'pointerup'],
    vertical: false, // Boolean, if true slider will be displayed in vertical orientation
    min: null, // Number , 0
    max: null, // Number, 100
    step: null, // Number, 1
    value: null, // Number, center of slider
    buffer: null, // Number, in percent, 0 by default
    stick: null, // [Number stickTo, Number stickRadius] : use it if handle should stick to stickTo-th value in stickRadius
    borderRadius: 10, // Number, if you use buffer + border-radius in css for looks good,
    onInit: function () {
        console.info('onInit');
    },
    onSlideStart: function (position, value) {
        console.info('onSlideStart', 'position: ' + position, 'value: ' + value);
    },
    onSlide: function (position, value) {
        console.log('onSlide', 'position: ' + position, 'value: ' + value);
    },
    onSlideEnd: function (position, value) {
        console.warn('onSlideEnd', 'position: ' + position, 'value: ' + value);
    },
});

// update position
const triggerEvents = true; // or false
slider.rangeSlider.update({
    min: 0,
    max: 4,
    step: 1,
    value: 1.5,
    buffer: 0,
}, triggerEvents);