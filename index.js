const os = require('os');
const ifaces = os.networkInterfaces();
const colors = {
  Reset : "\x1b[0m",
  Bright : "\x1b[1m",
  Dim : "\x1b[2m",
  Underscore : "\x1b[4m",
  Blink : "\x1b[5m",
  Reverse : "\x1b[7m",
  Hidden : "\x1b[8m",

  FgBlack : "\x1b[30m",
  FgRed : "\x1b[31m",
  FgGreen : "\x1b[32m",
  FgYellow : "\x1b[33m",
  FgBlue : "\x1b[34m",
  FgMagenta : "\x1b[35m",
  FgCyan : "\x1b[36m",
  FgWhite : "\x1b[37m",

  BgBlack : "\x1b[40m",
  BgRed : "\x1b[41m",
  BgGreen : "\x1b[42m",
  BgYellow : "\x1b[43m",
  BgBlue : "\x1b[44m",
  BgMagenta : "\x1b[45m",
  BgCyan : "\x1b[46m",
  BgWhite : "\x1b[47m",
};

function logURL({color, tip, ifname, alias, address, protocol='http:', port='80', pathname='/', search}) {
  const url = `${protocol}//${address}:${port}${pathname}${search}`;
  let ethNo;
  if (alias >= 1) {
    // this single interface has multiple ipv4 addresses
    ethNo = `${ifname}:${alias}`;
  } else {
    // this interface has only one ipv4 adress
    ethNo = ifname;
  }
  console.log(color, `${tip}(${ethNo}): ${url}`);
}
function reportURL({protocol, port, color='FgBlue', tip='addressable external url', pathname, search}) {
  Object.keys(ifaces).forEach(function (ifname) {
    let alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }
      logURL({
        color: colors[color],
        tip,
        ifname,
        alias,
        address: iface.address,
        protocol,
        port,
        pathname,
        search,
      });
      ++alias;
    });
  });
}

module.exports = reportURL;
