import infoData from "../../public/json/info.json";

export const InfoObj = {
  data: infoData,
  get phoneReg() {
    const reg = new RegExp(
      "^\\+([0-9])*\\(([0-9]{3})*\\)([0-9]{3})*-([0-9]{2,2})*-([0-9]{2,2})*$",
      "giu"
    );
    let phoneA = reg.exec(this.data.phone_mask);
    //console.log(phoneA);
    let result: string = "";
    if (phoneA && phoneA.length > 0) {
      result = phoneA.slice(1, phoneA.length).join("");
      result = result.replaceAll("undefined", "");
      //   for (let item = 0; item < phoneA.length; item++) {
      //     item > 0 && phoneA[item] !== undefined ? (result += phoneA[item]) : "";
      //   }
    }
    return result;
  },
  get city() {
    return this.data.city;
  },
  get district() {
    return this.data.district;
  },
  get street() {
    return this.data.street;
  },
  get appartment() {
    return this.data.appartment;
  },
  get phone_mask() {
    return this.data.phone_mask;
  },
  get FullAdress() {
    let result: string = `г.${this.city}, р-н ${this.district}, ул. ${this.street}, ${this.appartment}`;
    return result;
  },
};
