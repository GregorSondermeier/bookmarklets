/**
 * a bookmarklet to reload the current location with an added timestamp query paramater
 */

const searchParams = new URLSearchParams(location.search);

searchParams.set('ts', new Date().getTime());

location.search = searchParams.toString();
