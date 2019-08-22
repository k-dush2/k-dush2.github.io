class TouchEmulator {
    constructor(){
      this.touches = []; // 全タッチを保持
    }
  
    touchstart(id, point,target){
      const touch = this.createTouch(id, target, point);
  
      // touchesに追加
      this.touches.push(touch);
  
      this.triggerTouchEvent('touchstart', touch);
      console.log("emustart")  
    }
  
    touchmove(id, point){
      const index = this.touches.findIndex(t => t.identifier === id);
      const target = this.touches[index].target;
  
      const touch = this.createTouch(id, target, point);
  
      // touchesを更新
      this.touches[index] = touch;
  
      this.triggerTouchEvent('touchmove', touch);
    }
  
    touchend(s, point){
      const target = s.target;
  
      const touch = this.createTouch(s.identifier, target, point);
  
      // touchesから除去
      this.touches = this.touches.filter(t => t.identifier !== id);
  
      this.triggerTouchEvent('touchend', touch);  
      console.log("emuend")  
    }
    createTouch(identifier, target, point){
        return new Touch({
          identifier,
          target,
          clientX: point.x,
          clientY: point.y,
          pageX: point.x + window.pageXOffset,
          pageY: point.y + window.pageYOffset,
          radiusX: 10,
          radiusY: 10,
          force: 1
        });  
      }
    
      // TouchEventを作って発火する
      triggerTouchEvent(name, touch) {
        // targetが同じTouchを取り出す
        const targetTouches = this.touches.filter(t => t.target === touch.target);
        const event = new TouchEvent(name, {
          touches: this.touches,
          targetTouches,
          changedTouches: [touch],
          bubbles: true, // これがないとバブリングしない
          cancelable: true,
          view: window
        });
        touch.target.dispatchEvent(event);
      }
}