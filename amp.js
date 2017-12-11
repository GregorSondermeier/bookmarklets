/////////////////////////////////////////////////////////////////////////////////
//               a bookmarklet to add 'service=amp' to current url             //
/////////////////////////////////////////////////////////////////////////////////
var split = window.location.href.split('?'),
    url = split[0],
    params = (split[1] || '').split('&').map((param) => param.split('=')),
    idx = params.findIndex((param) => param[0] == 'service');
 
if (idx != -1) {
    params[idx][1] = 'amp';
} else {
    params.push(['service', 'amp']);
}
 
window.location.href = `${url}?${params.map((param) => param.join('=')).join('&')}`;