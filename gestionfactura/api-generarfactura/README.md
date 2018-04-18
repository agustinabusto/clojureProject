# ss

generated using Luminus version "2.9.10.49"

FIXME

## Preconfiguration with chrome:

(http://stackoverflow.com/questions/20035101/no-access-control-allow-origin-header-is-present-on-the-requested-resource)
The easy way is to just add the extension in google chrome to allow access using CORS.

(https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US)

Just enable this extension whenever you want allow access to no 'access-control-allow-origin' header request.

Or

In Windows, paste this command in run window

chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
this will open a new chrome browser which allow access to no 'access-control-allow-origin' header request.

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein run

## License

Copyright © 2016 FIXME
