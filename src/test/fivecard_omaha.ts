import {FiveCardOmaha as Table} from "../index";
import Board from "../lib/Board";
import * as assert from "assert";

describe("5card Omaha", function () {

  it('STRAIGHT FLUSH - invalid', (done) => {
    const result = new Table()
      .addPlayer(["As", "Th", "9h", "Jh", "6s"])
      .addPlayer(["Ad", "Tc", "9c", "8c", "5c"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Qh", "5d", "8h"])
          .setTurn("3s")
          .setRiver("4s")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('STRAIGHT FLUSH - valid', (done) => {
    const result = new Table()
      .addPlayer(["Ah", "Th", "9h", "2s", "7d"])
      .addPlayer(["As", "Tc", "9c", "8c", "7c"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Qh", "Jh", "8h"])
          .setTurn("3s")
          .setRiver("4s")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });


  it('STRAIGHT FLUSH - valid', (done) => {
    const result = new Table()
      .addPlayer(["Ah", "Th", "9h", "Jh", "6s"])
      .addPlayer(["As", "Tc", "9c", "8c", "5c"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Qh", "5d", "8h"])
          .setTurn("7h")
          .setRiver("6h")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('QUADS - valid', (done) => {
    const result = new Table()
      .addPlayer(["Ah", "Th", "Tc", "2h", "2c"])
      .addPlayer(["As", "3c", "4c", "5c", "6c"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Td", "Ts", "8h"])
          .setTurn("3s")
          .setRiver("3d")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('QUADS - invalid', (done) => {
    const result = new Table()
      .addPlayer(["Ah", "Th", "Tc", "Ts", "4d"])
      .addPlayer(["As", "3c", "4c", "5c", "6c"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Td", "2s", "4h"])
          .setTurn("3s")
          .setRiver("9d")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('QUADS - valid', (done) => {
    const result = new Table()
      .addPlayer(["Ah", "Kh", "4d", "2s", "2c"])
      .addPlayer(["Ac", "Ad", "5c", "6c", "7d"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Td", "2d", "2h"])
          .setTurn("Ts")
          .setRiver("Tc")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('FULL HOUSE - invalid', (done) => {
    const result = new Table()
      .addPlayer(["As", "Jh", "Jd", "Jc", "2s"])
      .addPlayer(["7c", "9d", "Qc", "Qs", "2d"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Td", "Ad", "Ac"])
          .setTurn("Ts")
          .setRiver("Tc")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('THREE OF A KIND - valid', (done) => {
    const result = new Table()
      .addPlayer(["As", "9s", "2d", "3c", "4d"])
      .addPlayer(["7c", "9d", "Qd", "Qs", "4h"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Ad", "5c", "5d"])
          .setTurn("Ac")
          .setRiver("Jc")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('THREE OF A KIND - invalid', (done) => {
    const result = new Table()
      .addPlayer(["3c", "As", "Ad", "Ac", "2s"])
      .addPlayer(["7c", "9d", "Qd", "Qs", "2c"])
      .boardAction((board: Board) => {
        board
          .setFlop(["9s", "5c", "5d"])
          .setTurn("2d")
          .setRiver("Qc")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('TWO PAIRS', (done) => {
    const result = new Table()
      .addPlayer(["3c", "5s", "Ad", "Ac", "2s"])
      .addPlayer(["7c", "9d", "Kd", "Js", "2d"])
      .boardAction((board: Board) => {
        board
          .setFlop(["3s", "5c", "6d"])
          .setTurn("Ks")
          .setRiver("Qc")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('ONE PAIR', (done) => {
    const result = new Table()
      .addPlayer(["3c", "5s", "Ad", "Ac", "2s"])
      .addPlayer(["7c", "9d", "Kd", "Js", "2c"])
      .boardAction((board: Board) => {
        board
          .setFlop(["3s", "4c", "6d"])
          .setTurn("Ks")
          .setRiver("Qc")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('STRAIGHT - valid', (done) => {
    const result = new Table()
      .addPlayer(["3c", "5s", "4s", "2s", "Ks"])
      .addPlayer(["7c", "9c", "Kd", "Js", "Ah"])
      .boardAction((board: Board) => {
        board
          .setFlop(["2d", "3d", "4h"])
          .setTurn("6d")
          .setRiver("Qc")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('FLUSH vs STRAIGHT', (done) => {
    const result = new Table()
      .addPlayer(["Th", "9h", "2s", "7d", "Jd"])
      .addPlayer(["Tc", "9c", "8c", "7c", "Js"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Ac", "As", "8h"])
          .setTurn("7h")
          .setRiver("Jh")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 100.00);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 0);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0);

    done();

  });

  it('TRIPS vs STRAIGHT 2', (done) => {
    const result = new Table()
      .addPlayer(["Th", "9h", "2s", "7d", "3d"])
      .addPlayer(["Tc", "9c", "8c", "7c", "3s"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Ac", "As", "8h"])
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 8.37);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 59.78);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 31.85);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 31.85);

    done();

  });

  it('TRIPS vs STRAIGHT 3', (done) => {
    const result = new Table()
      .addPlayer(["Th", "9h", "2s", "7d", "3h"])
      .addPlayer(["Tc", "9c", "8c", "7c", "3d"])
      .boardAction((board: Board) => {
        board
          .setFlop(["Ac", "As", "7h"])
          .setTurn("Jh")
        //.setRiver("7h")
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 21.05);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 10.53);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 68.42);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 68.42);

    done();

  });

  it('RANDOM 2', (done) => {
    const result = new Table()
      .addPlayer(["8d", "4s", "3d", "4c", "As"])
      .addPlayer(["Qh", "Kh", "3h", "7c", "Ac"])
      .boardAction((board: Board) => {
        board
          .setFlop(["9c", "Js", "9d"])
      })
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 51.82);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 48.04);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 0.13);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 0.13);

    done();

  });

  it('50/50', (done) => {
    const result = new Table()
      .addPlayer(["7s", "6s", "5s", "4s", "3s"])
      .addPlayer(["7d", "6d", "5d", "4d", "3d"])
      .calculate();
    assert.equal(Math.round(result.getPlayers()[0].getWinsPercentage()), 4);
    assert.equal(Math.round(result.getPlayers()[1].getWinsPercentage()), 4);
    assert.equal(Math.round(result.getPlayers()[0].getTiesPercentage()), 92);
    assert.equal(Math.round(result.getPlayers()[1].getTiesPercentage()), 92);

    done();

  }).timeout(3e3);

  it('EXHAUSTIVE', (done) => {
    const result = new Table()
      .addPlayer(["9h", "7s", "6d", "3c", "2d"])
      .addPlayer(["Ts", "Qc", "Td", "7d", "6c"])
      .exhaustive()
      .calculate();
    assert.equal(result.getPlayers()[0].getWinsPercentage(), 26.72);
    assert.equal(result.getPlayers()[1].getWinsPercentage(), 66.66);
    assert.equal(result.getPlayers()[0].getTiesPercentage(), 6.62);
    assert.equal(result.getPlayers()[1].getTiesPercentage(), 6.62);

    done();

  }).timeout(2e4);

});
