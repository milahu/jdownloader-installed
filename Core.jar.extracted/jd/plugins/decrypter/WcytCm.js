/*@DecrypterPlugin(revision = "$Revision: 27737 $", interfaceVersion = 3, names = { "wcrypt.com" }, urls = { "http://(?:www\\.)?wcrypt\\.com/([A-Za-z0-9]{8})" }, flags = { 0 })*/
//JS Plugin
var inlineJsFilter = function(type, script) {

    if (script.indexOf("<!--") == 0) {
        return null;
    }
    return script;
}
var requestFilter = function(url) {


    var domain = url.replace('http://', '')
        .replace('https://', '')
        .split(/[/?#]/)[0];



    return "wcrypt.com" == domain;

}


function decryptUrl(url) {


    var regex = utils.regex(url, utils.getSupportedPattern());
    var uid = regex.getMatch(0);
    if (!uid) return;


    var env = utils.createBrowser(inlineJsFilter, requestFilter);
    env.loadPage(url);
    var document = env.getDocument();
    var captchaCorrect = false;
    while (!captchaCorrect) {
        var iFrame = document.getElementById('link_iframe');
        var form = iFrame.contentDocument.forms[0];
        var captchaPath = form.getElementsByTagName('img')[0].src;
        var c = utils.getCaptchaCode(captchaPath);
        utils.log("Captcha: " + c);
        if (c == null) {
            break;
        }

        form.elements['secpic'].value = c;
        form.submit();

        var innerIframe = iFrame.contentDocument.getElementsByTagName('iframe')[0];
        utils.log(innerIframe);
        captchaCorrect = innerIframe !== undefined;
        if (!captchaCorrect) {
            utils.log("Captcha Wrong");
        }
    }

    utils.addLink(innerIframe.src);


}