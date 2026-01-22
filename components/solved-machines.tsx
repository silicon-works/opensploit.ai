"use client";

type Difficulty = "Easy" | "Medium" | "Hard" | "Insane";

interface Machine {
  name: string;
  difficulty: Difficulty;
  platform: string;
}

// Dummy machines - replace with actual solved machines later
const machines: Machine[] = [
  { name: "Lame", difficulty: "Easy", platform: "HTB" },
  { name: "Shocker", difficulty: "Easy", platform: "HTB" },
  { name: "Bashed", difficulty: "Easy", platform: "HTB" },
  { name: "Nibbles", difficulty: "Easy", platform: "HTB" },
  { name: "Beep", difficulty: "Easy", platform: "HTB" },
  { name: "Cronos", difficulty: "Medium", platform: "HTB" },
  { name: "Nineveh", difficulty: "Medium", platform: "HTB" },
  { name: "Sense", difficulty: "Easy", platform: "HTB" },
  { name: "Solidstate", difficulty: "Medium", platform: "HTB" },
  { name: "Node", difficulty: "Medium", platform: "HTB" },
  { name: "Valentine", difficulty: "Easy", platform: "HTB" },
  { name: "Poison", difficulty: "Medium", platform: "HTB" },
  { name: "Sunday", difficulty: "Easy", platform: "HTB" },
  { name: "Tartarsauce", difficulty: "Medium", platform: "HTB" },
  { name: "DevOops", difficulty: "Medium", platform: "HTB" },
  { name: "Hawk", difficulty: "Medium", platform: "HTB" },
  { name: "Netmon", difficulty: "Easy", platform: "HTB" },
  { name: "Bastion", difficulty: "Easy", platform: "HTB" },
  { name: "Writeup", difficulty: "Easy", platform: "HTB" },
  { name: "Heist", difficulty: "Easy", platform: "HTB" },
  { name: "Obscurity", difficulty: "Medium", platform: "HTB" },
  { name: "Resolute", difficulty: "Medium", platform: "HTB" },
  { name: "Monteverde", difficulty: "Medium", platform: "HTB" },
  { name: "Sauna", difficulty: "Easy", platform: "HTB" },
  { name: "Tabby", difficulty: "Easy", platform: "HTB" },
  { name: "Buff", difficulty: "Easy", platform: "HTB" },
  { name: "Blunder", difficulty: "Easy", platform: "HTB" },
  { name: "Doctor", difficulty: "Easy", platform: "HTB" },
  { name: "Academy", difficulty: "Easy", platform: "HTB" },
  { name: "Laboratory", difficulty: "Easy", platform: "HTB" },
  { name: "Delivery", difficulty: "Easy", platform: "HTB" },
  { name: "Tenet", difficulty: "Medium", platform: "HTB" },
  { name: "Scriptkiddie", difficulty: "Easy", platform: "HTB" },
  { name: "Armageddon", difficulty: "Easy", platform: "HTB" },
  { name: "Knife", difficulty: "Easy", platform: "HTB" },
  { name: "Pit", difficulty: "Medium", platform: "HTB" },
  { name: "Seal", difficulty: "Medium", platform: "HTB" },
  { name: "Previse", difficulty: "Easy", platform: "HTB" },
  { name: "Horizontall", difficulty: "Easy", platform: "HTB" },
  { name: "Forge", difficulty: "Medium", platform: "HTB" },
  { name: "Shibboleth", difficulty: "Medium", platform: "HTB" },
  { name: "Pandora", difficulty: "Easy", platform: "HTB" },
  { name: "Paper", difficulty: "Easy", platform: "HTB" },
  { name: "Timelapse", difficulty: "Easy", platform: "HTB" },
  { name: "Meta", difficulty: "Medium", platform: "HTB" },
  { name: "Opensource", difficulty: "Easy", platform: "HTB" },
  { name: "Photobomb", difficulty: "Easy", platform: "HTB" },
  { name: "RedPanda", difficulty: "Easy", platform: "HTB" },
  { name: "Shoppy", difficulty: "Easy", platform: "HTB" },
  { name: "UpDown", difficulty: "Medium", platform: "HTB" },
  { name: "Ambassador", difficulty: "Medium", platform: "HTB" },
  { name: "Forgot", difficulty: "Medium", platform: "HTB" },
  { name: "Precious", difficulty: "Easy", platform: "HTB" },
  { name: "Metatwo", difficulty: "Easy", platform: "HTB" },
  { name: "Busqueda", difficulty: "Easy", platform: "HTB" },
  { name: "MonitorsTwo", difficulty: "Easy", platform: "HTB" },
  { name: "Pilgrimage", difficulty: "Easy", platform: "HTB" },
  { name: "Topology", difficulty: "Easy", platform: "HTB" },
  { name: "Keeper", difficulty: "Easy", platform: "HTB" },
  { name: "Sandworm", difficulty: "Medium", platform: "HTB" },
  { name: "Sau", difficulty: "Easy", platform: "HTB" },
  { name: "Zipping", difficulty: "Medium", platform: "HTB" },
  { name: "Clicker", difficulty: "Medium", platform: "HTB" },
  { name: "Devvortex", difficulty: "Easy", platform: "HTB" },
  { name: "Codify", difficulty: "Easy", platform: "HTB" },
  { name: "Manager", difficulty: "Medium", platform: "HTB" },
  { name: "Hospital", difficulty: "Medium", platform: "HTB" },
  { name: "Surveillance", difficulty: "Medium", platform: "HTB" },
  { name: "Skyfall", difficulty: "Insane", platform: "HTB" },
  { name: "Jab", difficulty: "Medium", platform: "HTB" },
  { name: "Pov", difficulty: "Medium", platform: "HTB" },
  { name: "Headless", difficulty: "Easy", platform: "HTB" },
  { name: "Bizness", difficulty: "Easy", platform: "HTB" },
  { name: "IClean", difficulty: "Medium", platform: "HTB" },
  { name: "Runner", difficulty: "Medium", platform: "HTB" },
  { name: "BoardLight", difficulty: "Easy", platform: "HTB" },
  { name: "Blurry", difficulty: "Medium", platform: "HTB" },
  { name: "GreenHorn", difficulty: "Easy", platform: "HTB" },
  { name: "Mailing", difficulty: "Easy", platform: "HTB" },
  { name: "Cicada", difficulty: "Easy", platform: "HTB" },
  { name: "Chemistry", difficulty: "Easy", platform: "HTB" },
];

// Create rotated versions for visual variety (deterministic, no hydration issues)
const rotateArray = <T,>(arr: T[], offset: number): T[] => [
  ...arr.slice(offset),
  ...arr.slice(0, offset),
];

const column1 = machines;
const column2 = rotateArray(machines, 27);
const column3 = rotateArray(machines, 54);

function MachineCard({ machine }: { machine: Machine }) {
  return (
    <div data-slot="machine" data-difficulty={machine.difficulty.toLowerCase()}>
      <span data-slot="platform">{machine.platform}</span>
      <span data-slot="name">{machine.name}</span>
      <span data-slot="difficulty">{machine.difficulty}</span>
      <span data-slot="status">PWNED</span>
    </div>
  );
}

function MachineColumn({
  machines,
  speed,
}: {
  machines: Machine[];
  speed: "slow" | "medium" | "fast";
}) {
  // Duplicate the list for seamless infinite scroll
  const items = [...machines, ...machines];

  return (
    <div data-slot="column" data-speed={speed}>
      <div data-slot="scroll">
        {items.map((machine, index) => (
          <MachineCard key={`${machine.name}-${index}`} machine={machine} />
        ))}
      </div>
    </div>
  );
}

export function SolvedMachines() {
  return (
    <section data-component="solved-machines" suppressHydrationWarning>
      <div data-slot="header">
        <h2>Machines Solved</h2>
        <p>
          Autonomous penetration testing in action. Each machine below was
          compromised by OpenSploit with zero human intervention.
        </p>
      </div>
      <div data-slot="ticker">
        <div data-slot="gradient-top" />
        <div data-slot="columns">
          <MachineColumn machines={column1} speed="slow" />
          <MachineColumn machines={column2} speed="medium" />
          <MachineColumn machines={column3} speed="fast" />
        </div>
        <div data-slot="gradient-bottom" />
      </div>
    </section>
  );
}
