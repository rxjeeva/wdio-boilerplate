import Page from '../../../shared_objects/Page';

class Ads extends Page {
  get adSlot() {
    return $('#ad_rect_atf_01');
  }
  
}

export default new Ads();

