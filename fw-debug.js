/////////////////////////////////////////////////////////////////////////////////
//             a bookmarklet to add 'fw-debug=true' to current url             //
/////////////////////////////////////////////////////////////////////////////////

var split = window.location.href.split('?'),
    url = split[0],
    params = (split[1] || '').split('&').map((param) => param.split('=')),
    idx = params.findIndex((param) => param[0] == 'fw-debug');

if (idx != -1) {
    params[idx][1] = params[idx][1] == 'true' ? 'false' : 'true';
} else {
    params.push(['fw-debug', 'true']);
}

 window.location.href = `${url}?${params.map((param) => param.join('=')).join('&')}`;
