import angular from 'angular';

class HomeController {
  constructor() {
    this.exampleDonutOptions = { legend: { display: true } };
    this.exampleDonutLabels =["Sleeping", "Coding", "Exercising", "Partying", "Relaxing"];
    this.exampleDonutData = [40, 10, 10, 20, 20];
  }
}

export {HomeController};