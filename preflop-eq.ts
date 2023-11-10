// npm run build && node ./dist/preflop-eq.js | tee preflop-eq.csv
import {SuperHoldem as Table} from "./src/index";
import {IHand} from "./src/lib/Interfaces";

interface Preflop {
  hero: IHand
  villain: IHand
}

const hands: Preflop[] = [
  // AAA vs xxx
  // {hero: ["Ad","Ah","Ac"], villain: ["Kd","Kh","Kc"]},
  // {hero: ["Ad","Ah","Ac"], villain: ["Kd","Kh","Ks"]},
  // {hero: ["Ad","Ah","Ac"], villain: ["9d","9h","9c"]},
  // {hero: ["Kd","Kh","Kc"], villain: ["Ad","Ah","Ks"]},
  // {hero: ["Kd","Kh","Kc"], villain: ["As","Ah","Ks"]},
  // {hero: ["Qd","Qh","Qc"], villain: ["Ad","Ah","Ks"]},
  // {hero: ["Jd","Jh","Jc"], villain: ["Ad","Kh","Qs"]},
  // {hero: ["Jd","Jh","Jc"], villain: ["Ad","Kh","Qs"]},
  // {hero: ["Jd","Jh","Jc"], villain: ["Ad","Kd","Qd"]},
  // {hero: ["Jd","Jh","Jc"], villain: ["As","Ks","Qs"]},
  // {hero: ["Jd","Jh","Jc"], villain: ["Ts","9s","8s"]},
  // {hero: ["5d","5h","5c"], villain: ["Td","9h","8c"]},
  // {hero: ["5d","5h","5c"], villain: ["Ts","9s","8s"]},
  {hero: ["5d","5h","5c"], villain: ["Ad","Kh","Qc"]},
  {hero: ["5d","5h","5c"], villain: ["As","Ks","Qs"]},
  {hero: ["2d","2h","2c"], villain: ["Kh","Qc","Jd"]},
  // AAx vs xxx
  {hero: ["Ad","Ah","Qc"], villain: ["Kd","Kh","Jc"]},
  {hero: ["Ad","Ah","Jc"], villain: ["Kd","Kh","Qc"]},
]

console.log("Hero,Villain,Hero Win EQ,Hero Tie EQ,Villain Win EQ,Villain Tie EQ")
hands.forEach(hand => {
  const result = new Table()
    .addPlayer(hand.hero)
    .addPlayer(hand.villain)
    .calculate()
  const hWin = result.getPlayers()[0].getWinsPercentage() 
  const hTie = result.getPlayers()[0].getTiesPercentage() 
  const vWin = result.getPlayers()[1].getWinsPercentage() 
  const vTie = result.getPlayers()[1].getTiesPercentage() 
  console.log(`${hand.hero.join('')},${hand.villain.join('')},${hWin},${hTie},${vWin},${vTie}`)
})
