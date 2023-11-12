// npm run build && node ./dist/preflop-eq.js | tee preflop-eq.csv
import {SuperHoldem as Table} from "./src/index";
import {IHand} from "./src/lib/Interfaces";

interface Preflop {
  hero: IHand
  villain: IHand
}

const hands: Preflop[] = [
  // AAA vs xxx
  {hero: ["Ad","Ah","Ac"], villain: ["Kd","Kh","Kc"]},
  {hero: ["Ad","Ah","Ac"], villain: ["Kd","Kh","Ks"]},
  {hero: ["Ad","Ah","Ac"], villain: ["9d","9h","9c"]},
  {hero: ["Kd","Kh","Kc"], villain: ["Ad","Ah","Ks"]},
  {hero: ["Kd","Kh","Kc"], villain: ["As","Ah","Ks"]},
  {hero: ["Qd","Qh","Qc"], villain: ["Ad","Ah","Ks"]},
  {hero: ["Jd","Jh","Jc"], villain: ["Ad","Kh","Qs"]},
  {hero: ["Jd","Jh","Jc"], villain: ["Ad","Kh","Qs"]},
  {hero: ["Jd","Jh","Jc"], villain: ["Ad","Kd","Qd"]},
  {hero: ["Jd","Jh","Jc"], villain: ["As","Ks","Qs"]},
  {hero: ["Jd","Jh","Jc"], villain: ["Ts","9s","8s"]},
  {hero: ["5d","5h","5c"], villain: ["Td","9h","8c"]},
  {hero: ["5d","5h","5c"], villain: ["Ts","9s","8s"]},
  {hero: ["5d","5h","5c"], villain: ["Ad","Kh","Qc"]},
  {hero: ["5d","5h","5c"], villain: ["As","Ks","Qs"]},
  {hero: ["2d","2h","2c"], villain: ["Kh","Qc","Jd"]},
  // AAx vs xxx
  {hero: ["Ad","Ah","Qc"], villain: ["Kd","Kh","Jc"]},
  {hero: ["Ad","Ah","Jc"], villain: ["Kd","Kh","Qc"]},
  {hero: ["Ad","Ah","Qc"], villain: ["Qd","Qh","Kc"]},
  {hero: ["Ad","Ah","Kc"], villain: ["As","Kh","Qc"]},
  {hero: ["Ad","Ah","Kc"], villain: ["As","Ks","Qs"]},
  {hero: ["Ad","Ah","Qc"], villain: ["Jd","Jh","9c"]},
  {hero: ["Ad","Ah","Kc"], villain: ["Jd","Th","9c"]},
  {hero: ["Ad","Ah","Kc"], villain: ["Jd","Th","8c"]},
  {hero: ["Ad","Ah","Kc"], villain: ["Ts","8d","6h"]},
  {hero: ["Ad","Ah","Kc"], villain: ["Js","Ts","9s"]},
  {hero: ["Ad","Ah","Kc"], villain: ["Js","Ts","9d"]},
  {hero: ["Ad","Ah","Kc"], villain: ["Js","Th","9d"]},
  {hero: ["Kd","Kh","Qc"], villain: ["Jd","Jh","Ac"]},
  {hero: ["Kd","Kh","Qc"], villain: ["Jd","Th","Ac"]},
  {hero: ["Qd","Qh","Jc"], villain: ["Ad","Kh","Tc"]},
  {hero: ["Jd","Jh","Tc"], villain: ["Ad","Kh","Qc"]},
  {hero: ["Jd","Jh","Ac"], villain: ["Ad","Kh","Qc"]},
  {hero: ["Jd","Jh","Qd"], villain: ["Ad","Kh","Qc"]},
  // AKQ vs xxx
  {hero: ["Ad","Kh","Qc"], villain: ["As","Ah","Kc"]},
  {hero: ["Ad","Kh","Qc"], villain: ["As","Ah","Jc"]},
  {hero: ["Ad","Kd","Qd"], villain: ["As","Ah","Jc"]},
  {hero: ["Ad","Kh","Qc"], villain: ["Qs","Qh","Kd"]},
  {hero: ["Ad","Kh","Qc"], villain: ["Qs","Qh","Jc"]},
  {hero: ["Ad","Kd","Qd"], villain: ["Qs","Qh","Jc"]},
  {hero: ["Ad","Kh","Qc"], villain: ["Ts","Th","9c"]},
  {hero: ["Ad","Kd","Qd"], villain: ["Ts","Th","9c"]},
  {hero: ["Ad","Kh","Qc"], villain: ["Js","Th","9c"]},
  {hero: ["Ad","Kh","Qc"], villain: ["Qs","Jh","Tc"]},
  {hero: ["Ad","Kh","Qc"], villain: ["Ks","Qh","Jc"]},
  {hero: ["Ad","Kh","Qc"], villain: ["9s","8h","7c"]},
  {hero: ["Td","9h","8c"], villain: ["As","2h","3c"]},
  {hero: ["Td","9h","8c"], villain: ["As","Kh","2c"]},
  {hero: ["Td","9h","8c"], villain: ["As","Kh","Tc"]},
  {hero: ["Td","9d","8d"], villain: ["As","2h","3c"]},
  {hero: ["Td","9d","8d"], villain: ["As","2s","3s"]},
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
