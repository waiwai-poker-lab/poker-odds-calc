import {SuperHoldem as Table} from "../index";
import Board from "../lib/Board";
import * as assert from "assert";

describe("Super Hold'em", function () {
  it('STRAIGHT FLUSH', (done) => {
    const result = new Table()
      .addPlayer(["As", "Qs", "Ks"])
      .addPlayer(["Td", "Tc", "Ad"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Js", "Ts", "5h"])
          .setTurn("Th")
      })
      .calculate();
    
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    done();
  });

  it('QUADS', (done) => {
    const result = new Table()
      .addPlayer(["Td", "Tc", "Th"])
      .addPlayer(["Qc", "Ks", "Kd"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Js", "Ts", "5h"])
          .setTurn("Qh")
      })
      .calculate();
    
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    done();
  });
})
