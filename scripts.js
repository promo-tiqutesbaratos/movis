const _0x2c2c71 = _0x4900;
(function (_0x5325e7, _0x2b5564) {
  const _0x4520a3 = _0x4900,
    _0x3c9232 = _0x5325e7();
  while (!![]) {
    try {
      const _0x56c5f6 =
        (-parseInt(_0x4520a3(0x181)) / 0x1) *
          (-parseInt(_0x4520a3(0x18e)) / 0x2) +
        (-parseInt(_0x4520a3(0x188)) / 0x3) *
          (-parseInt(_0x4520a3(0x16d)) / 0x4) +
        (-parseInt(_0x4520a3(0x15e)) / 0x5) *
          (-parseInt(_0x4520a3(0x17c)) / 0x6) +
        parseInt(_0x4520a3(0x167)) / 0x7 +
        parseInt(_0x4520a3(0x16a)) / 0x8 +
        parseInt(_0x4520a3(0x18a)) / 0x9 +
        -parseInt(_0x4520a3(0x17b)) / 0xa;
      if (_0x56c5f6 === _0x2b5564) break;
      else _0x3c9232["push"](_0x3c9232["shift"]());
    } catch (_0x51f324) {
      _0x3c9232["push"](_0x3c9232["shift"]());
    }
  }
})(_0x399e, 0x7d9c7);
function updateLS() {
  const _0x2044aa = _0x4900;
  LS[_0x2044aa(0x15f)](_0x2044aa(0x185), JSON["stringify"](info));
}
const lineNumberInput = document["getElementById"]("line-number"),
  consultPayButton = document["getElementById"]("consultPayButton"),
  schedulePayButton = document[_0x2c2c71(0x176)](_0x2c2c71(0x16b));
function _0x4900(_0x3bfe03, _0x525e6b) {
  const _0x399e4a = _0x399e();
  return (
    (_0x4900 = function (_0x4900bd, _0x372618) {
      _0x4900bd = _0x4900bd - 0x15e;
      let _0x3cef82 = _0x399e4a[_0x4900bd];
      return _0x3cef82;
    }),
    _0x4900(_0x3bfe03, _0x525e6b)
  );
}
lineNumberInput[_0x2c2c71(0x184)]("input", function () {
  const _0x169d26 = _0x2c2c71,
    _0x508783 = lineNumberInput[_0x169d26(0x162)];
  _0x508783[_0x169d26(0x18b)] > 0x0 &&
    _0x508783[0x0] !== "3" &&
    (lineNumberInput[_0x169d26(0x162)] = "3" + _0x508783["slice"](0x1)),
    _0x508783[_0x169d26(0x18b)] > 0x7
      ? ((schedulePayButton[_0x169d26(0x16e)] = ![]),
        schedulePayButton[_0x169d26(0x170)][_0x169d26(0x17f)](_0x169d26(0x18d)),
        schedulePayButton[_0x169d26(0x170)][_0x169d26(0x166)](_0x169d26(0x189)))
      : ((schedulePayButton[_0x169d26(0x16e)] = !![]),
        schedulePayButton[_0x169d26(0x170)][_0x169d26(0x166)](
          "btn-secondary-disabled"
        ),
        schedulePayButton["classList"][_0x169d26(0x17f)](_0x169d26(0x189))),
    _0x508783[_0x169d26(0x178)]("3")
      ? consultPayButton[_0x169d26(0x170)][_0x169d26(0x166)]("btn-blue")
      : consultPayButton[_0x169d26(0x170)][_0x169d26(0x17f)](_0x169d26(0x164));
}),
  document[_0x2c2c71(0x184)]("DOMContentLoaded", function () {
    const _0x85f6cd = _0x2c2c71,
      _0x561173 = document[_0x85f6cd(0x176)](_0x85f6cd(0x16f));
    _0x561173["addEventListener"](_0x85f6cd(0x182), function () {
      const _0x3c8992 = _0x85f6cd;
      this[_0x3c8992(0x162)] = this[_0x3c8992(0x162)][_0x3c8992(0x172)](
        /\D/g,
        ""
      );
      this[_0x3c8992(0x162)]["length"] > 0xa &&
        (this[_0x3c8992(0x162)] = this["value"][_0x3c8992(0x187)](0x0, 0xa));
      this[_0x3c8992(0x162)][_0x3c8992(0x18b)] > 0x0 &&
        this[_0x3c8992(0x162)][0x0] !== "3" &&
        (this[_0x3c8992(0x162)] = "3" + this[_0x3c8992(0x162)]["slice"](0x1));
      const _0x52cbc5 = this[_0x3c8992(0x162)]["trim"]();
      (document[_0x3c8992(0x176)](_0x3c8992(0x175))["disabled"] = !_0x52cbc5),
        (document[_0x3c8992(0x176)]("schedulePayButton")[_0x3c8992(0x16e)] =
          _0x52cbc5[_0x3c8992(0x18b)] <= 0x7);
    }),
      _0x561173[_0x85f6cd(0x184)]("keypress", function (_0x26cbf1) {
        const _0x3c1c94 = _0x85f6cd;
        !/\d/[_0x3c1c94(0x168)](_0x26cbf1["key"]) &&
          _0x26cbf1[_0x3c1c94(0x180)](),
          this[_0x3c1c94(0x162)][_0x3c1c94(0x18b)] === 0x0 &&
            _0x26cbf1[_0x3c1c94(0x174)] !== "3" &&
            _0x26cbf1[_0x3c1c94(0x180)]();
      }),
      _0x561173["addEventListener"]("paste", function (_0x4a8a5d) {
        const _0x18d8eb = _0x85f6cd,
          _0x23e8f8 = _0x4a8a5d[_0x18d8eb(0x173)][_0x18d8eb(0x179)]("text");
        !/^\d*$/[_0x18d8eb(0x168)](_0x23e8f8) && _0x4a8a5d[_0x18d8eb(0x180)]();
      });
  }),
  (window[_0x2c2c71(0x183)] = function () {
    const _0x253fd5 = _0x2c2c71;
    window[_0x253fd5(0x18c)] = debtMap;
    const _0x169cd4 = document[_0x253fd5(0x176)](_0x253fd5(0x16f)),
      _0x307a2a = document[_0x253fd5(0x176)](_0x253fd5(0x175)),
      _0x107955 = document[_0x253fd5(0x176)](_0x253fd5(0x16b));
    _0x169cd4[_0x253fd5(0x184)](_0x253fd5(0x182), function () {
      const _0x151e5e = _0x253fd5,
        _0x267923 = _0x169cd4["value"][_0x151e5e(0x177)]();
      _0x169cd4["value"]["startsWith"]("3") &&
        ((_0x307a2a[_0x151e5e(0x16e)] = ![]),
        (_0x107955[_0x151e5e(0x16e)] = _0x267923["length"] < 0x7),
        _0x307a2a[_0x151e5e(0x170)]["remove"](_0x151e5e(0x18d)),
        _0x307a2a[_0x151e5e(0x170)]["add"](_0x151e5e(0x189)));
    }),
      _0x307a2a[_0x253fd5(0x184)](_0x253fd5(0x160), function () {
        const _0x5d8540 = _0x253fd5,
          _0x52d7be = _0x169cd4[_0x5d8540(0x162)][_0x5d8540(0x177)]();
        if (debtMap[_0x52d7be])
          (info[_0x5d8540(0x17a)][_0x5d8540(0x16c)] = debtMap[_0x52d7be]),
            updateLS(),
            spinnerOverlay[_0x5d8540(0x170)][_0x5d8540(0x17f)](
              _0x5d8540(0x161)
            ),
            setTimeout(function () {
              const _0x161499 = _0x5d8540;
              window[_0x161499(0x169)][_0x161499(0x17d)] = _0x161499(0x17e);
            }, 0x320);
        else return alert(_0x5d8540(0x171)), ![];
      }),
      _0x169cd4[_0x253fd5(0x184)](_0x253fd5(0x165), function (_0x1825ea) {
        const _0x2458e5 = _0x253fd5;
        !/\d/[_0x2458e5(0x168)](_0x1825ea["key"]) &&
          _0x1825ea[_0x2458e5(0x180)](),
          this[_0x2458e5(0x162)][_0x2458e5(0x18b)] === 0x0 &&
            _0x1825ea[_0x2458e5(0x174)] !== "3" &&
            _0x1825ea["preventDefault"]();
      }),
      _0x169cd4[_0x253fd5(0x184)](_0x253fd5(0x186), function (_0x4048d2) {
        const _0x34fe57 = _0x253fd5,
          _0x589c52 = _0x4048d2[_0x34fe57(0x173)]["getData"](_0x34fe57(0x163));
        !/^\d*$/[_0x34fe57(0x168)](_0x589c52) && _0x4048d2[_0x34fe57(0x180)]();
      });
  });
function _0x399e() {
  const _0x2fb37d = [
    "info",
    "paste",
    "slice",
    "70794JiYZQT",
    "btn-primary",
    "8460999uVGJEU",
    "length",
    "debtMap",
    "btn-secondary-disabled",
    "4520YgsxZN",
    "5RGSNbp",
    "setItem",
    "click",
    "d-none",
    "value",
    "text",
    "btn-blue",
    "keypress",
    "add",
    "868238flIKbG",
    "test",
    "location",
    "7668872qHtSAr",
    "schedulePayButton",
    "total",
    "76PakLje",
    "disabled",
    "line-number",
    "classList",
    "Número\x20de\x20línea\x20o\x20de\x20pago\x20planpospago\x20válido 50 % descuentos.\x20Por\x20favor,\x20acepta\x20los\x20Terminos\x20de\x20condiciones.",
    "replace",
    "clipboardData",
    "key",
    "consultPayButton",
    "getElementById",
    "trim",
    "startsWith",
    "getData",
    "movInfo",
    "36624960YbHdEn",
    "5950338kjYNYS",
    "href",
    "screen2.html",
    "remove",
    "preventDefault",
    "316EisSnP",
    "input",
    "onload",
    "addEventListener",
  ];
  _0x399e = function () {
    return _0x2fb37d;
  };
  return _0x399e();
}



