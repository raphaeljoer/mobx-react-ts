import { makeAutoObservable } from 'mobx';

class PaymentController {
  public isPayable: boolean;
  public name: string;

  constructor() {
    this.isPayable = true;
    this.name = 'Raphael';
    makeAutoObservable(this);
  }

  setName(name: string) {
    this.name = name;
  }

  setIsPayable(isPayable: boolean) {
    this.isPayable = isPayable;
    console.log('PaymentController: isPayable', this.isPayable);
  }
}

export const store = new PaymentController();
