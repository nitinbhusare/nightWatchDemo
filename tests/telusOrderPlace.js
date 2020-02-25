module.exports = {
  'Placeing Order On Telus' : function (client) {
    client
      .url('http://www.telus.com')
      .waitForElementVisible('body', 1000)
      .assert.title(`Phones, Internet and TV on Canada's fastest network | TELUS`)
      .pause(5000)
	  .waitForElementVisible('button#main-nav-list-item-0', 1000)
	  .click('button#main-nav-list-item-0')
	  .waitForElementVisible('a.sc-kEYyzF.kHNpSx', 1000)
	  .click('a.sc-kEYyzF.kHNpSx')
	  .assert.title(`Cell Phones & iPhones - Shop $0 Smartphone Deals | TELUS`)
	  .waitForElementVisible('a#samsung-galaxy-s20-ultra-5g_brand_name', 1000)
	  .click('a#samsung-galaxy-s20-ultra-5g_brand_name')
	  .pause(2000)
	  .assert.title(`Samsung Galaxy S20 Ultra 5G: Price & Features | TELUS`)
	  .waitForElementVisible('button#storagesize_512', 1000)
	  .click('button#storagesize_512')
	  .pause(2000)
	  .waitForElementVisible('a.Button__StyledButton-sa7xo3-0.sc-jTzLTM.fQBCuB', 1000)
	  .click('a.Button__StyledButton-sa7xo3-0.sc-jTzLTM.fQBCuB')
	  .pause(2000)
	  .assert.title(`Customize your device and plan | TELUS`)
	  .assert.containsText('h2.Heading__StyledHeading-mpz92r-0.kRjIba', 'Review device selection.')
	  .pause(2000)
      .end()
  }
}


