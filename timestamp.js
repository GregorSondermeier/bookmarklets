/////////////////////////////////////////////////////////////////////////////////
//         a bookmarklet to add 'timestamp=<timestamp>' to current url         //
/////////////////////////////////////////////////////////////////////////////////

var split = window.location.href.split('?'),
    url = split[0],
    params = (split[1] || '').split('&').map((param) => param.split('=')),
    idx = params.findIndex((param) => param[0] == 'timestamp');
 
if (idx != -1) {
    params[idx][1] = new Date().getTime();
} else {
    params.push(['timestamp', new Date().getTime()]);
}
 
window.location.href = `${url}?${params.map((param) => param.join('=')).join('&')}`;