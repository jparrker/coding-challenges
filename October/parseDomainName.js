function parseDomainName(url) {
	//replace leading stuff with empty string
  // split and grab first value
  return url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0]
}

console.log( parseDomainName('http://github.com/carbonfive/raygun'), 'github')

console.log( parseDomainName('http://www.zombie-bites.com'), 'zombie-bites')

console.log(parseDomainName('https://www.cnet.com'), 'cnet')