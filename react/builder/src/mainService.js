export default class MainService {
  dataList = "";
  constructor({ targetEl }) {
    this.targetEl = targetEl;
  }

  init(dataList) {
    this.dataList = dataList.flat(2).join("");
  }
}
