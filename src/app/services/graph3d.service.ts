import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Engine,
  Scene,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Mesh
  } from 'babylonjs';

@Injectable()
export class Graph3dService {
  private engine: Engine;
  private scene: Scene;
  private camera: FreeCamera;
  private img;
  constructor(
    private _http: Http
  ) { }

  public initSrv(cnvs: HTMLCanvasElement) {
    this.engine = new Engine(cnvs, true);
    this.scene = new Scene(this.engine);
    this.camera = new FreeCamera('camera', new Vector3(0, 5, -1), this.scene);
    this.camera.setTarget(BABYLON.Vector3.Zero());

    this.camera.attachControl(cnvs, false);
    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);
    const ground = Mesh.CreateGroundFromHeightMap('ground', 'assets/1.png',
      100, 100, 10, 0, 10, this.scene, false);
  }

  public run() {
    this.engine.runRenderLoop(() => this.scene.render());
  }
}
