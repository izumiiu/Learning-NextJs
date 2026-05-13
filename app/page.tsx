import Hello from "./components/Hello";


export default function Home() {
    console.log('What type of a component am I?');


  return (
    <main>
        <div className="text-2xl underline">Welcome to NextJs</div>
        <Hello/>
    </main>
    
  );
}
