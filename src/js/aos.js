import AOS from "aos";

export function aosInit() {
  AOS.init({ duration: 800, offset: 200 });
}
