import Queue from "./utils/Queue";

const cities = ["Jena", "Erfurt", "Weimar", "Regensburg", "Hamburg", "Leipzig"];
const routes = [
  ["Erfurt", "Hamburg"],
  ["Erfurt", "Regensburg"],
  ["Erfurt", "Weimar"],
  ["Jena", "Leipzig"],
  ["Jena", "Regensburg"],
  ["Leipzig", "Berlin"],
  ["Weimar", "Jena"],
];

// an undirected, unweighted graph
const g = new Map<string, string[]>();

for (const city of cities) {
  g.set(city, []);
}

for (const route of routes) {
  g.get(route[0])?.push(route[1]);
  g.get(route[1])?.push(route[0]);
}

console.log(g);

function bfs(from: string, to: string) {
  if (from === to) return;

  let visited = new Set<string>();
  let q = new Queue<string>();
  q.add(from);

  while (!q.isEmpty()) {
    const currentCity = q.pop();
    if (!currentCity) process.exit(-1);
    process.stdout.write(currentCity + " => ");

    const destinations = g.get(currentCity);
    if (!destinations?.length) continue;

    for (const destination of destinations) {
      if (visited.has(destination)) continue;
      if (destination === to) {
        console.log(to);
        return;
      }
      q.add(destination);
      visited.add(currentCity);
    }
  }
}

bfs("Leipzig", "Hamburg");
