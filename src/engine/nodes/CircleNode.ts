import { ICircleNode, CircleNodeConfig } from '../types';
import Node from './Node';
import Vector from '../core/Vector';

export default class CircleNode extends Node implements ICircleNode {
  color: string;

  radius: number;

  constructor(params: CircleNodeConfig) {
    super(params);
    this.type = 'CircleNode';
    this.color = params.color || '#000';
    this.radius = params.radius;
    this.size = new Vector();
  }

  public update() {
    this.size.x = this.radius * 2;
    this.size.y = this.radius * 2;
  }

  public draw() {
    this.layer.drawCircle({
      x: this.position.x,
      y: this.position.y,
      radius: this.radius,
      color: this.color,
      border: this.border,
    });
  }
}