import Image from "next/image";
import { RandomFox } from "../components/RandomFox";
const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  return (
    <div>
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <header>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </header>
        <body>
          <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`}/>
        </body>
        <footer>
          <h1 className="text-3xl font-bold underline">bye world!</h1>
        </footer>
      </main>
    </div>
  );
}