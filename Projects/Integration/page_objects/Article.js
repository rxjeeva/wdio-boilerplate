import Page from "../../shared_objects/Page";

class Article extends Page {
      
  nOpen(path) {
    super.open(path);
  }
}

export default new Article();
