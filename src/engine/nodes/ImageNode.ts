import { ImageNodeConfig, IImageNode } from '../types';
import Node from './Node';

export default class ImageNode extends Node implements IImageNode {
  img: HTMLImageElement;

  srcX: number;

  srcY: number;

  dh: number;

  dw: number;

  constructor(params: ImageNodeConfig) {
    super(params);
    this.type = 'ImageNode';
    this.img = params.img;
    this.srcX = params.srcPosition.x;
    this.srcY = params.srcPosition.y;
    this.dh = params.dh || this.size.y;
    this.border = params.border;

    const ratio = (this.dh * 100) / this.size.y;
    this.dw = Math.ceil((this.size.x * ratio) / 100);
  }

  public draw() {
    this.layer.drawImage({
      x: this.position.x,
      y: this.position.y,
      img: this.img,
      srcX: this.srcX,
      srcY: this.srcY,
      width: this.size.x,
      height: this.size.y,
      dw: this.dw,
      dh: this.dh,
      border: this.border,
    });
  }
}