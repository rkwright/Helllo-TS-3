import { MyScene } from "./MyScene";

export class Program
{
    public static main()
    {
        let scene = new MyScene();
        scene.Init();
        scene.Animate();
    }
}

Program.main();