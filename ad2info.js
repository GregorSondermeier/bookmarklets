/////////////////////////////////////////////////////////////////////////////////
//         a bookmarklet to add 'ts=<timestamp>' to current url         //
/////////////////////////////////////////////////////////////////////////////////

var split = window.location.href.split('?'),
    url = split[0],
    params = (split[1] || '').split('&').map((param) => param.split('=')),
    idx = params.findIndex((param) => param[0] == 'ad2info');
 
if (idx != -1) {
	params.splice(idx, 1);
} else {
    params.push(['ad2info']);
}
 
window.location.href = `${url}?${params.map((param) => param.join('=')).join('&')}`;