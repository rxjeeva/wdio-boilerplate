const cheerio = require("cheerio")
require ('../../config/index')

class Page {
  get hamburgerNav() {
    return $("#hamburger-nav")
  }

}
export default Page
