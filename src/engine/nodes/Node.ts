import {
  NodeConfig,
  INode,
  NodesTypeName,
  NodesType,
} from '../types';
import Vector from '../core/Vector';
import Layer from '../core/Layer';

export default class Node implements INode {
  position: Vector;

  size: Vector;

  type: NodesTypeName;

  layer: Layer;

  sceneName: string;

  border?: string;

  opacity?: number;

  addTo: (sceneName: string) => NodesType;

  destroy: () => void;

  removeAllEvents: () => void;

  update?: (node: NodesType) => void;

  constructor(params: NodeConfig, update?: (node: NodesType) => void) {
    this.position = params.position;
    this.size = params.size;
    this.type = 'Node';
    this.layer = params.layer;
    this.sceneName = '';

    this.border = params.border;
    this.opacity = params.opacity;

    this.addTo = null;
    this.destroy = null;
    this.removeAllEvents = null;

    if (update) {
      this.update = update;
    }
  }

  public move(v: Vector) {
    this.position.plus(v);
  }

  public clearLayer() {
    this.layer.clear();
    this.layer.update();
  }
}
