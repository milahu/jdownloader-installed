/**
 * @author coalado
 */
try {
    log = Envjs.logger('Envjs.Core');
    while (true) {
        var loc = null;
        if (document.getElementById('downloadB') != null) {
            loc = document.getElementById('downloadB').href;
        }
        console.log(loc);
        if (org.jdownloader.tests.EnvTest.validateUrl(loc)) {
         break;
        }

        Envjs.tick();
    }
} catch (e) {
    console.log(e + "");
}