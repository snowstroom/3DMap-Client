import { Injectable } from '@angular/core';
import { Engine,
  Scene,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder
  } from 'babylonjs';

@Injectable()
export class Graph3dService {
  private engine: Engine;
  private scene: Scene;
  private camera: FreeCamera;
  constructor() { }

  public initSrv(cnvs: HTMLCanvasElement) {
    this.engine = new Engine(cnvs, true);
    this.scene = new Scene(this.engine);
    this.camera = new FreeCamera('camera', new Vector3(0, 5, -1), this.scene);
    this.camera.setTarget(BABYLON.Vector3.Zero());

    this.camera.attachControl(cnvs, false);
    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);
    const sphere = MeshBuilder.CreateSphere('sphere', {segments: 16, diameter: 2}, this.scene);
    sphere.position.y = 1;
    const ground = MeshBuilder.CreateGround('ground1', {height: 6, width: 6, subdivisions: 2}, this.scene);
  }

  public run() {
    this.engine.runRenderLoop(() => this.scene.render());
  }
}
