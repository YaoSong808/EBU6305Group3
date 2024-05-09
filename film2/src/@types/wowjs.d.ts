declare module 'wow.js' {
    class WOW {
      constructor(options?: { boxClass?: string; animateClass?: string; offset?: number; mobile?: boolean; live?: boolean });
      init(): void;
      sync(): void;
    }
    export default WOW;
  }
  