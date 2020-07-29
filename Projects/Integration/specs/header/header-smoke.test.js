import Header from "../../page_objects/Components/Header"
import EditionPicker from "../../page_objects/Components/EditionPicker"
import SearchBar from "../../page_objects/Components/SearchBar"


describe("Header : UI (collapsed)", () => {
  it("reaches the homepage", () => {
    Header.open()
  })

  it("contains the Header", () => {
    expect(Header.headerBadge).toExist();
  })  

  it("contains the CNNBadge", () => {
    Header.cnnBadge.waitForDisplayed()
    expect(Header.cnnBadge).toExist();
  })

  it("CNN Logo redirecting to Homepage",() =>{
    Header.cnnBadge.click()
    expect(browser).toHaveUrl(browser.config.baseUrl)
  })

  it("contains the Edition Picker", () => {
    EditionPicker.editionPicker.waitForDisplayed()
    expect(EditionPicker.editionPicker).toBeDisplayed()
  })

  it("contains the Search Button", () => {
    Header.searchButton.waitForDisplayed()
    expect(Header.searchButton).toBeDisplayed()
  })

  it("contains the Menu button", () => {
    Header.menuIcon.waitForDisplayed()
    expect(Header.menuIcon).toBeDisplayed()
  })

  it("contains the Live TV button", () => {
    Header.liveTV.waitForDisplayed()
    expect(Header.liveTV).toBeDisplayed()
    Header.liveTV.click()
    expect(browser.getUrl()).toMatch("go.cnn.com/?stream=cnn")
    browser.back()
  })

  it("contains the Search bar", () => {
    SearchBar.searchIcon.click()
    SearchBar.searchFieldHeader.waitForDisplayed()
    expect(SearchBar.searchFieldHeader).toBeDisplayed()
  })

  })

describe("Header : UI (expanded)", () => {
   
  it("contains the Edition Picker", () => {
    expect(EditionPicker.editionPicker).toBeDisplayed()
  })

  it("contains the Search Button", () => {
    expect(Header.searchButton).toBeDisplayed()
  })

  it("contains the Close button", () => {
    expect(Header.closeIcon).toBeDisplayed()
  })

  it("contains the Search bar", () => {
    SearchBar.searchFieldHeader.waitForDisplayed()
    expect(SearchBar.searchFieldHeader).toBeDisplayed()
  })  

  it("collapses the meganav when the menu icon is clicked while meganav is open", () => {
    Header.clickAndWait(Header.closeIcon, 500)
    expect(SearchBar.searchFieldHeader).toBePresent()
  })

  it("closes the edition picker if the meganav is opened while the edition picker is open", () => {
    EditionPicker.editionPicker.click()
    Header.clickAndWait(Header.menuIcon, 500)
    expect(EditionPicker.US).toBePresent()
  })
})
