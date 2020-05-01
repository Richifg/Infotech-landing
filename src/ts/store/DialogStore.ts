import { observable } from 'mobx';
import { TAsyncState } from 'interfaces/types';

class DialogStore {
  @observable visible: boolean;
  @observable state: TAsyncState;
  @observable title: string;
  @observable text: string;

  constructor() {
    this.visible = false;
    this.state = 'INIT';
    this.title = '';
    this.text = '';
  }

  isSuccess(): boolean {
    return this.state === 'SUCCESS';
  }
  isFailure(): boolean {
    return this.state === 'ERROR';
  }
  isLoading(): boolean {
    return this.state === 'LOADING';
  }
  isCompleted(): boolean {
    return this.state === 'SUCCESS' || this.state === 'ERROR';
  }
  isInit(): boolean {
    return this.state === 'INIT';
  }

  setSuccess(): void {
    this.state = 'SUCCESS';
  }
  setFailure(): void {
    this.state = 'ERROR';
  }
  setLoading(): void {
    this.state = 'LOADING';
  }
  setInit(): void {
    this.state = 'INIT';
  }
}

export default DialogStore;
