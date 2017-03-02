/**
 * App entry
 */

import './style.scss';

import Vue from 'vue';
import * as Clipboard from 'clipboard';

new Vue({
  el: '#glyph-maker',
  data: {
    block1: '',
    block2: '',
    block3: '',
    context: null,
    fontFamily: getComputedStyle(document.body).fontFamily,
    idc: '',
    idcList: ['⿰', '⿱', '⿲', '⿳', '⿴', '⿵', '⿶', '⿷', '⿸', '⿹', '⿺', '⿻'],
    size: 0
  },
  mounted: function () {
    (<any>this).size = (<HTMLCanvasElement>this.$refs.canvas).offsetHeight;
    (<any>this).context = (<HTMLCanvasElement>this.$refs.canvas).getContext('2d');
  },
  methods: {
    draw: function () {
      (<any>this).drawText((<any>this).block1, (<any>this).block2, (<any>this).block3);
    },
    selectIdc: function (idc: string) {
      (<any>this).idc = idc;
      (<any>this).clearCanvas();
      (<any>this).drawIdc();
    },

    clearCanvas: function () {
      (<any>this).context.clearRect(0, 0, (<any>this).size, (<any>this).size);
    },
    drawIdc: function () {
      (<any>this).context.font = `${(<any>this).size * 1.285}px ${(<any>this).fontFamily}`;
      (<any>this).context.textBaseline = 'hanging';
      (<any>this).context.fillStyle = '#d0d0d0';
      (<any>this).context.fillText((<any>this).idc, -(<any>this).size * .142, -(<any>this).size * .03);
    },
    drawText(block1: string, block2: string, block3: string) {
      (<any>this).clearCanvas();
      // (<any>this).drawIdc();

      (<any>this).context.font = `${(<any>this).size * .9}px ${(<any>this).fontFamily}`;
      (<any>this).context.fillStyle = '#000';

      switch ((<any>this).idc) {
      case '⿰':
        (<any>this).drawLeft(block1);
        (<any>this).drawRight(block2);
        break;
      case '⿱':
        (<any>this).drawTop(block1);
        (<any>this).drawBottom(block2);
        break;
      case '⿲':
        (<any>this).drawTriLeft(block1);
        (<any>this).drawTriHorizontalMiddle(block2);
        (<any>this).drawTriRight(block3);
        break;
      case '⿳':
        (<any>this).drawTriTop(block1);
        (<any>this).drawTriVerticalMiddle(block2);
        (<any>this).drawTriBottom(block3);
        break;
      case '⿴':
        (<any>this).drawRing(block1);
        (<any>this).drawCenter(block2);
        break;
      case '⿵':
        (<any>this).drawTopSurround(block1);
        (<any>this).drawBottomContent(block2);
        break;
      case '⿶':
        (<any>this).drawBottomSurround(block1);
        (<any>this).drawTopContent(block2);
        break;
      case '⿷':
        (<any>this).drawLeftSurround(block1);
        (<any>this).drawRightContent(block2);
        break;
      case '⿸':
        (<any>this).drawTopLeftSurround(block1);
        (<any>this).drawBottomRightContent(block2);
        break;
      case '⿹':
        (<any>this).drawTopRightSurround(block1);
        (<any>this).drawBottomLeftContent(block2);
        break;
      case '⿺':
        (<any>this).drawBottomLeftSurround(block1);
        (<any>this).drawTopRightContent(block2);
        break;
      }
    },
    drawLeft: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(.5, 1);
      (<any>this).context.fillText(text, (<any>this).size * .15, (<any>this).size * .12);
      (<any>this).context.restore();
    },
    drawRight: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(.5, 1);
      (<any>this).context.fillText(text, (<any>this).size * .95, (<any>this).size * .12);
      (<any>this).context.restore();
    },
    drawTriLeft: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1 / 3, 1);
      (<any>this).context.fillText(text, (<any>this).size * .12, (<any>this).size * .12);
      (<any>this).context.restore();
    },
    drawTriHorizontalMiddle: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1 / 3, 1);
      (<any>this).context.fillText(text, (<any>this).size * .06 + (<any>this).size, (<any>this).size * .12);
      (<any>this).context.restore();
    },
    drawTriRight: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1 / 3, 1);
      (<any>this).context.fillText(text, (<any>this).size * 2, (<any>this).size * .12);
      (<any>this).context.restore();
    },
    drawTop: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1, .5);
      (<any>this).context.fillText(text, (<any>this).size * .05, (<any>this).size * .18);
      (<any>this).context.restore();
    },
    drawBottom: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1, .5);
      (<any>this).context.fillText(text, (<any>this).size * .05, (<any>this).size * 1.02);
      (<any>this).context.restore();
    },
    drawTriTop: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1, 1 / 3);
      (<any>this).context.fillText(text, (<any>this).size * .05, (<any>this).size * .25);
      (<any>this).context.restore();
    },
    drawTriVerticalMiddle: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1, 1 / 3);
      (<any>this).context.fillText(text, (<any>this).size * .05, (<any>this).size * 1.12);
      (<any>this).context.restore();
    },
    drawTriBottom: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1, 1 / 3);
      (<any>this).context.fillText(text, (<any>this).size * .05, (<any>this).size * 2);
      (<any>this).context.restore();
    },
    drawRing: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1.08, 1.08);
      (<any>this).context.fillText(text, (<any>this).size * .01, (<any>this).size * .07);
      (<any>this).context.restore();
    },
    drawCenter: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(.7, .7);
      (<any>this).context.fillText(text, (<any>this).size * .25, (<any>this).size * .3);
      (<any>this).context.restore();
    },
    drawTopSurround: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1.02, 1.02);
      (<any>this).context.fillText(text, (<any>this).size * .04, (<any>this).size * .12);
      (<any>this).context.restore();
    },
    drawBottomContent: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(.65, .65);
      (<any>this).context.fillText(text, (<any>this).size * .32, (<any>this).size * .45);
      (<any>this).context.restore();
    },
    drawBottomSurround: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1.02, 1.02);
      (<any>this).context.fillText(text, (<any>this).size * .04, (<any>this).size * .12);
      (<any>this).context.restore();
    },
    drawTopContent: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(.65, .65);
      (<any>this).context.fillText(text, (<any>this).size * .32, (<any>this).size * .33);
      (<any>this).context.restore();
    },
    drawLeftSurround: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1.08, 1.08);
      (<any>this).context.fillText(text, 0, (<any>this).size * .07);
      (<any>this).context.restore();
    },
    drawRightContent: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(.65, .65);
      (<any>this).context.fillText(text, (<any>this).size * .37, (<any>this).size * .39);
      (<any>this).context.restore();
    },
    drawTopLeftSurround: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1.02, 1.02);
      (<any>this).context.fillText(text, (<any>this).size * .05, (<any>this).size * .1);
      (<any>this).context.restore();
    },
    drawBottomRightContent: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(.7, .8);
      (<any>this).context.fillText(text, (<any>this).size * .42, (<any>this).size * .34);
      (<any>this).context.restore();
    },
    drawTopRightSurround: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1.02, 1.02);
      (<any>this).context.fillText(text, (<any>this).size * .06, (<any>this).size * .11);
      (<any>this).context.restore();
    },
    drawBottomLeftContent: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(.6, .6);
      (<any>this).context.fillText(text, (<any>this).size * .42, (<any>this).size * .55);
      (<any>this).context.restore();
    },
    drawBottomLeftSurround: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(1.02, 1.02);
      (<any>this).context.fillText(text, (<any>this).size * .04, (<any>this).size * .12);
      (<any>this).context.restore();
    },
    drawTopRightContent: function (text: string) {
      (<any>this).context.save();
      (<any>this).context.scale(.7, .85);
      (<any>this).context.fillText(text, (<any>this).size * .4, (<any>this).size * .16);
      (<any>this).context.restore();
    }
  }
});

new Vue({
  el: '#radical-list',
  data: {
    radicalList: [
      {
        strokeCount: 1,
        radicals: [
          { glyph: '一', strokeOrder: 1 },
          { glyph: '丨', strokeOrder: 2 },
          { glyph: '亅', strokeOrder: 2 },
          { glyph: '丿', strokeOrder: 3 },
          { glyph: '丶', strokeOrder: 4 },
          { glyph: '乛', strokeOrder: 5 },
          { glyph: '⺄', strokeOrder: 5 },
          { glyph: '乙', strokeOrder: 5 },
          { glyph: '乚', strokeOrder: 5 }
        ]
      }, {
        strokeCount: 2,
        radicals: [
          { glyph: '二', strokeOrder: 11 },
          { glyph: '十', strokeOrder: 12 },
          { glyph: '厂', strokeOrder: 13 },
          { glyph: '匚', strokeOrder: 15 },
          { glyph: '匸', strokeOrder: 15 },
          { glyph: '⺊', strokeOrder: 21 },
          { glyph: '刂', strokeOrder: 22 },
          { glyph: '卜', strokeOrder: 24 },
          { glyph: '冂', strokeOrder: 25 },
          { glyph: '亻', strokeOrder: 32 },
          { glyph: '⺁', strokeOrder: 33 },
          { glyph: '人', strokeOrder: 34 },
          { glyph: '入', strokeOrder: 34 },
          { glyph: '八', strokeOrder: 34 },
          { glyph: '儿', strokeOrder: 35 },
          { glyph: '几', strokeOrder: 35 },
          { glyph: '⺇', strokeOrder: 35 },
          { glyph: '⺆', strokeOrder: 35 },
          { glyph: '勹', strokeOrder: 35 },
          { glyph: '⺈', strokeOrder: 35 },
          { glyph: '匕', strokeOrder: 35 },
          { glyph: '亠', strokeOrder: 41 },
          { glyph: '冫', strokeOrder: 41 },
          { glyph: '⺀', strokeOrder: 44 },
          { glyph: '讠', strokeOrder: 45 },
          { glyph: '冖', strokeOrder: 45 },
          { glyph: '卩', strokeOrder: 52 },
          { glyph: '凵', strokeOrder: 52 },
          { glyph: '⻖', strokeOrder: 52 },
          { glyph: '⻏', strokeOrder: 52 },
          { glyph: '刀', strokeOrder: 53 },
          { glyph: '力', strokeOrder: 53 },
          { glyph: '又', strokeOrder: 54 },
          { glyph: '廴', strokeOrder: 54 },
          { glyph: '厶', strokeOrder: 54 },
          { glyph: '⺋', strokeOrder: 55 }
        ]
      }, {
        strokeCount: 3,
        radicals: [
          { glyph: '干', strokeOrder: 112 },
          { glyph: '土', strokeOrder: 121 },
          { glyph: '士', strokeOrder: 121 },
          { glyph: '工', strokeOrder: 121 },
          { glyph: '扌', strokeOrder: 121 },
          { glyph: '艹', strokeOrder: 122 },
          { glyph: '寸', strokeOrder: 124 },
          { glyph: '廾', strokeOrder: 132 },
          { glyph: '大', strokeOrder: 134 },
          { glyph: '尢', strokeOrder: 135 },
          { glyph: '兀', strokeOrder: 135 },
          { glyph: '弋', strokeOrder: 154 },
          { glyph: '小', strokeOrder: 234 },
          { glyph: '⺌', strokeOrder: 243 },
          { glyph: '口', strokeOrder: 251 },
          { glyph: '囗', strokeOrder: 251 },
          { glyph: '山', strokeOrder: 252 },
          { glyph: '巾', strokeOrder: 252 },
          { glyph: '彳', strokeOrder: 332 },
          { glyph: '彡', strokeOrder: 333 },
          { glyph: '犭', strokeOrder: 353 },
          { glyph: '夕', strokeOrder: 354 },
          { glyph: '夂', strokeOrder: 354 },
          { glyph: '夊', strokeOrder: 354 },
          { glyph: '饣', strokeOrder: 355 },
          { glyph: '⺦', strokeOrder: 412 },
          { glyph: '广', strokeOrder: 413 },
          { glyph: '门', strokeOrder: 425 },
          { glyph: '氵', strokeOrder: 441 },
          { glyph: '忄', strokeOrder: 442 },
          { glyph: '⺍', strokeOrder: 443 },
          { glyph: '宀', strokeOrder: 445 },
          { glyph: '辶', strokeOrder: 454 },
          { glyph: '⻎', strokeOrder: 454 },
          { glyph: '⼹', strokeOrder: 511 },
          { glyph: '彐', strokeOrder: 511 },
          { glyph: '尸', strokeOrder: 513 },
          { glyph: '己', strokeOrder: 515 },
          { glyph: '巳', strokeOrder: 515 },
          { glyph: '弓', strokeOrder: 515 },
          { glyph: '屮', strokeOrder: 522 },
          { glyph: '女', strokeOrder: 531 },
          { glyph: '飞', strokeOrder: 534 },
          { glyph: '纟', strokeOrder: 551 },
          { glyph: '子', strokeOrder: 521 },
          { glyph: '彑', strokeOrder: 551 },
          { glyph: '马', strokeOrder: 551 },
          { glyph: '幺', strokeOrder: 554 },
          { glyph: '巛', strokeOrder: 555 }
        ]
      }, {
        strokeCount: 4,
        radicals: [
          { glyph: '⺩', strokeOrder: 1121, },
          { glyph: '无', strokeOrder: 1135, },
          { glyph: '韦', strokeOrder: 1152, },
          { glyph: '⺿', strokeOrder: 1212, },
          { glyph: '耂', strokeOrder: 1213, },
          { glyph: '木', strokeOrder: 1234, },
          { glyph: '支', strokeOrder: 1254, },
          { glyph: '犬', strokeOrder: 1344, },
          { glyph: '歹', strokeOrder: 1354, },
          { glyph: '车', strokeOrder: 1512, },
          { glyph: '牙', strokeOrder: 1523, },
          { glyph: '戈', strokeOrder: 1534, },
          { glyph: '旡', strokeOrder: 1535, },
          { glyph: '比', strokeOrder: 1535, },
          { glyph: '瓦', strokeOrder: 1554, },
          { glyph: '止', strokeOrder: 2121, },
          { glyph: '⻀', strokeOrder: 2121, },
          { glyph: '攴', strokeOrder: 2154, },
          { glyph: '⺗', strokeOrder: 2444, },
          { glyph: '日', strokeOrder: 2511, },
          { glyph: '曰', strokeOrder: 2511, },
          { glyph: '⺜', strokeOrder: 2511, },
          { glyph: '⺝', strokeOrder: 2511, },
          { glyph: '⺵', strokeOrder: 2522, },
          { glyph: '罓', strokeOrder: 2534, },
          { glyph: '贝', strokeOrder: 2534, },
          { glyph: '水', strokeOrder: 2534, },
          { glyph: '见', strokeOrder: 2535, },
          { glyph: '禸', strokeOrder: 2554, },
          { glyph: '牛', strokeOrder: 3112, },
          { glyph: '手', strokeOrder: 3112, },
          { glyph: '毛', strokeOrder: 3115, },
          { glyph: '气', strokeOrder: 3115, },
          { glyph: '⺧', strokeOrder: 3121, },
          { glyph: '攵', strokeOrder: 3134, },
          { glyph: '长', strokeOrder: 3154, },
          { glyph: '片', strokeOrder: 3215, },
          { glyph: '斤', strokeOrder: 3312, },
          { glyph: '爪', strokeOrder: 3324, },
          { glyph: '⺥', strokeOrder: 3324, },
          { glyph: '爫', strokeOrder: 3443, },
          { glyph: '父', strokeOrder: 3434, },
          { glyph: '爻', strokeOrder: 3434, },
          { glyph: '尣', strokeOrder: 3435, },
          { glyph: '⺑', strokeOrder: 3435, },
          { glyph: '⺼', strokeOrder: 3511, },
          { glyph: '月', strokeOrder: 3511, },
          { glyph: '戶', strokeOrder: 3513, },
          { glyph: '氏', strokeOrder: 3515, },
          { glyph: '欠', strokeOrder: 3534, },
          { glyph: '风', strokeOrder: 3534, },
          { glyph: '殳', strokeOrder: 3554, },
          { glyph: '文', strokeOrder: 4134, },
          { glyph: '方', strokeOrder: 4153, },
          { glyph: '火', strokeOrder: 4334, },
          { glyph: '斗', strokeOrder: 4412, },
          { glyph: '灬', strokeOrder: 4444, },
          { glyph: '⻍', strokeOrder: 4454, },
          { glyph: '礻', strokeOrder: 4524, },
          { glyph: '⺳', strokeOrder: 4534, },
          { glyph: '⺴', strokeOrder: 4535, },
          { glyph: '心', strokeOrder: 4544, },
          { glyph: '肀', strokeOrder: 5112, },
          { glyph: '爿', strokeOrder: 5213, },
          { glyph: '毋', strokeOrder: 5531, }
        ]
      }, {
        strokeCount: 5,
        radicals: [
          { glyph: '玉', strokeOrder: 11214 },
          { glyph: '示', strokeOrder: 11234 },
          { glyph: '⺬', strokeOrder: 11234 },
          { glyph: '甘', strokeOrder: 12211 },
          { glyph: '石', strokeOrder: 13251 },
          { glyph: '龙', strokeOrder: 13534 },
          { glyph: '歺', strokeOrder: 21354 },
          { glyph: '氺', strokeOrder: 24134 },
          { glyph: '目', strokeOrder: 25111 },
          { glyph: '田', strokeOrder: 25121 },
          { glyph: '皿', strokeOrder: 25221 },
          { glyph: '罒', strokeOrder: 25221 },
          { glyph: '钅', strokeOrder: 31115 },
          { glyph: '生', strokeOrder: 31121 },
          { glyph: '矢', strokeOrder: 31134 },
          { glyph: '禾', strokeOrder: 31234 },
          { glyph: '白', strokeOrder: 32511 },
          { glyph: '瓜', strokeOrder: 33544 },
          { glyph: '用', strokeOrder: 35112 },
          { glyph: '鸟', strokeOrder: 35451 },
          { glyph: '疒', strokeOrder: 41341 },
          { glyph: '立', strokeOrder: 41431 },
          { glyph: '玄', strokeOrder: 41554 },
          { glyph: '穴', strokeOrder: 44534 },
          { glyph: '衤', strokeOrder: 45234 },
          { glyph: '⺻', strokeOrder: 51121 },
          { glyph: '民', strokeOrder: 51515 },
          { glyph: '⺪', strokeOrder: 52121 },
          { glyph: '疋', strokeOrder: 52134 },
          { glyph: '皮', strokeOrder: 53254 },
          { glyph: '癶', strokeOrder: 54334 },
          { glyph: '矛', strokeOrder: 54523 },
          { glyph: '母', strokeOrder: 55414 }
        ]
      }, {
        strokeCount: 6,
        radicals: [
          { glyph: '耒', strokeOrder: 111234 },
          { glyph: '老', strokeOrder: 121335 },
          { glyph: '耳', strokeOrder: 122111 },
          { glyph: '臣', strokeOrder: 125125 },
          { glyph: '覀', strokeOrder: 125221 },
          { glyph: '襾', strokeOrder: 125221 },
          { glyph: '西', strokeOrder: 125351 },
          { glyph: '而', strokeOrder: 132522 },
          { glyph: '页', strokeOrder: 132534 },
          { glyph: '至', strokeOrder: 154121 },
          { glyph: '虍', strokeOrder: 215315 },
          { glyph: '虫', strokeOrder: 251214 },
          { glyph: '网', strokeOrder: 253434 },
          { glyph: '肉', strokeOrder: 253434 },
          { glyph: '⺮', strokeOrder: 314314 },
          { glyph: '舟', strokeOrder: 335414 },
          { glyph: '缶', strokeOrder: 311252 },
          { glyph: '舌', strokeOrder: 312251 },
          { glyph: '竹', strokeOrder: 312312 },
          { glyph: '臼', strokeOrder: 321511 },
          { glyph: '自', strokeOrder: 325111 },
          { glyph: '血', strokeOrder: 325221 },
          { glyph: '行', strokeOrder: 332112 },
          { glyph: '舛', strokeOrder: 354152 },
          { glyph: '色', strokeOrder: 355215 },
          { glyph: '齐', strokeOrder: 413432 },
          { glyph: '衣', strokeOrder: 413534 },
          { glyph: '羊', strokeOrder: 431112 },
          { glyph: '⺶', strokeOrder: 431113 },
          { glyph: '⺷', strokeOrder: 431121 },
          { glyph: '米', strokeOrder: 431234 },
          { glyph: '聿', strokeOrder: 511112 },
          { glyph: '艮', strokeOrder: 511534 },
          { glyph: '艸', strokeOrder: 523522 },
          { glyph: '羽', strokeOrder: 541541 },
          { glyph: '糸', strokeOrder: 554234 },
          { glyph: '糹', strokeOrder: 554444 }
        ]
      }, {
        strokeCount: 7,
        radicals: [
          { glyph: '麦', strokeOrder: 1121354 },
          { glyph: '镸', strokeOrder: 1211154 },
          { glyph: '走', strokeOrder: 1212134 },
          { glyph: '赤', strokeOrder: 1213234 },
          { glyph: '車', strokeOrder: 1251112 },
          { glyph: '豆', strokeOrder: 1251431 },
          { glyph: '酉', strokeOrder: 1253511 },
          { glyph: '辰', strokeOrder: 1311534 },
          { glyph: '豕', strokeOrder: 1353334 },
          { glyph: '⺸', strokeOrder: 2121112 },
          { glyph: '卤', strokeOrder: 2125341 },
          { glyph: '貝', strokeOrder: 2511134 },
          { glyph: '見', strokeOrder: 2511135 },
          { glyph: '里', strokeOrder: 2511211 },
          { glyph: '⻊', strokeOrder: 2512121 },
          { glyph: '足', strokeOrder: 2512134 },
          { glyph: '邑', strokeOrder: 2515215 },
          { glyph: '⺽', strokeOrder: 3211511 },
          { glyph: '身', strokeOrder: 3251113 },
          { glyph: '辵', strokeOrder: 3332134 },
          { glyph: '釆', strokeOrder: 3431234 },
          { glyph: '谷', strokeOrder: 3434251 },
          { glyph: '豸', strokeOrder: 3443533 },
          { glyph: '龟', strokeOrder: 3525115 },
          { glyph: '角', strokeOrder: 3535112 },
          { glyph: '⾓', strokeOrder: 3535112 },
          { glyph: '言', strokeOrder: 4111251 },
          { glyph: '辛', strokeOrder: 4143112 }
        ]
      }, {
        strokeCount: 8,
        radicals: [
          { glyph: '青', strokeCount: 11212511 },
          { glyph: '靑', strokeCount: 11212521 },
          { glyph: '長', strokeCount: 12111534 },
          { glyph: '雨', strokeCount: 12524444 },
          { glyph: '⻗', strokeCount: 12524444 },
          { glyph: '非', strokeCount: 21112111 },
          { glyph: '齿', strokeCount: 21213452 },
          { glyph: '虎', strokeCount: 21531535 },
          { glyph: '門', strokeCount: 25112511 },
          { glyph: '黾', strokeCount: 25125115 },
          { glyph: '隹', strokeCount: 32411121 },
          { glyph: '阜', strokeCount: 32515112 },
          { glyph: '𨸏', strokeCount: 32515151 },
          { glyph: '金', strokeCount: 34112431 },
          { glyph: '飠', strokeCount: 34451154 },
          { glyph: '鱼', strokeCount: 35251211 },
          { glyph: '𧢲', strokeCount: 35253434 },
          { glyph: '斉', strokeCount: 41343211 },
          { glyph: '隶', strokeCount: 51124134 }
        ]
      }, {
        strokeCount: 9,
        radicals: [
          { glyph: '革', strokeCount: 122125112 },
          { glyph: '頁', strokeCount: 132511134 },
          { glyph: '面', strokeCount: 132522111 },
          { glyph: '韭', strokeCount: 211121111 },
          { glyph: '骨', strokeCount: 255452511 },
          { glyph: '香', strokeCount: 312342511 },
          { glyph: '鬼', strokeCount: 325113554 },
          { glyph: '⻞', strokeCount: 344511511 },
          { glyph: '食', strokeCount: 344511534 },
          { glyph: '風', strokeCount: 353251214 },
          { glyph: '音', strokeCount: 414312511 },
          { glyph: '首', strokeCount: 431325111 },
          { glyph: '韋', strokeCount: 521251152 },
          { glyph: '飛', strokeCount: 534353432 }
        ]
      }, {
        strokeCount: 10,
        radicals: [
          { glyph: '鬥', strokeCount: 1121211212 },
          { glyph: '髟', strokeCount: 1211154333 },
          { glyph: '馬', strokeCount: 1211254444 },
          { glyph: '鬲', strokeCount: 1251254312 },
          { glyph: '⿁', strokeCount: 3251213554 },
          { glyph: '鬯', strokeCount: 3444445235 },
          { glyph: '高', strokeCount: 4125125251 },
          { glyph: '竜', strokeCount: 4143125115 },
          { glyph: '⻡', strokeCount: 5551325111 }
        ]
      }, {
        strokeCount: 11,
        radicals: [
          { glyph: '黄', strokeCount: 12212512134 },
          { glyph: '麥', strokeCount: 12343434354 },
          { glyph: '鹵', strokeCount: 21253444441 },
          { glyph: '鳥', strokeCount: 32511154444 },
          { glyph: '亀', strokeCount: 35251125115 },
          { glyph: '魚', strokeCount: 35251214444 },
          { glyph: '麻', strokeCount: 41312341234 },
          { glyph: '鹿', strokeCount: 41352211535 }
        ]
      }, {
        strokeCount: 12,
        radicals: [
          { glyph: '黃', strokeCount: 122112512134 },
          { glyph: '歯', strokeCount: 212143123452 },
          { glyph: '黹', strokeCount: 224314325234 },
          { glyph: '鼎', strokeCount: 251115132125 },
          { glyph: '黑', strokeCount: 254312114444 },
          { glyph: '黍', strokeCount: 312343424134 }
        ]
      }, {
        strokeCount: 13,
        radicals: [
          { glyph: '鼓', strokeCount: 1212514311254 },
          { glyph: '黽', strokeCount: 2511251211511 },
          { glyph: '鼠', strokeCount: 3215115445445 }
        ]
      }, {
        strokeCount: 14,
        radicals: [
          { glyph: '鼻', strokeCount: 32511125121132 },
          { glyph: '齊', strokeCount: 41432533543211 }
        ]
      }, {
        strokeCount: 15,
        radicals: [
          { glyph: '齒', strokeCount: 212134341343452 }
        ]
      }, {
        strokeCount: 16,
        radicals: [
          { glyph: '龍', strokeCount: 4143125111515111 }
        ]
      }, {
        strokeCount: 17,
        radicals: [
          { glyph: '龜', strokeCount: 32511255115115341 },
          { glyph: '龠', strokeCount: 34125125125125122 }
        ]
      }
    ]
  },
  mounted: function () {
    const clipboard = new Clipboard('#radical-list li');

    clipboard.on('success', (e) => {
      e.trigger.classList.add('copy-success');

      setTimeout(() => {
        e.trigger.classList.remove('copy-success');
      }, 300);
    });
  }
});

new Vue({
  el: '#stroke-list',
  data: {
    strokeList: ['㇀', '㇁', '㇂', '㇃', '㇄', '㇅', '㇆', '㇇', '㇈', '㇉', '㇊', '㇋', '㇌', '㇍', '㇎', '㇏', '㇐', '㇑', '㇒', '㇓', '㇔', '㇕', '㇖', '㇗', '㇘', '㇙', '㇚', '㇛', '㇜', '㇝', '㇞', '㇟', '㇠', '㇡', '㇢', '㇣']
  },
  mounted: function () {
    const clipboard = new Clipboard('#stroke-list li');

    clipboard.on('success', (e) => {
      e.trigger.classList.add('copy-success');

      setTimeout(() => {
        e.trigger.classList.remove('copy-success');
      }, 300);
    });
  }
});
