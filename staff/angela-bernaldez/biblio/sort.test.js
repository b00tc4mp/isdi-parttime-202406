const { expect } = require("chai");
const Biblio = require(".");

describe("Sort method", () => {

    it("Use sort method with an array of numbers - ascending order", () => {
      const array = [10, 3, 2, 8, 7, 5];
      const biblio = new Biblio(10, 3, 2, 8, 7, 5);
      const ascendingOrder = (a,b) => a - b
      const resultArray = array.sort(ascendingOrder);
      const resultBiblio = biblio.sort(ascendingOrder);
      for (let i = 0; i < array.length; i++)
          expect(biblio[i]).to.be.equal(array[i]);
      expect(biblio.length).to.be.equal(array.length).to.be.equal(6);
    });

    it("Use sort method with an array of numbers - descending order", () => {
        const array = [10, 3, 2, 8, 7, 5];
        const biblio = new Biblio(10, 3, 2, 8, 7, 5);
        const descendingOrder = (a,b) => b - a
        const resultArray = array.sort(descendingOrder);
        const resultBiblio = biblio.sort(descendingOrder);
        for (let i = 0; i < array.length; i++)
            expect(biblio[i]).to.be.equal(array[i]);
        expect(biblio.length).to.be.equal(array.length).to.be.equal(6);
      });

      it("Use sort method with an array of strings - alphabetical order", () => {
        const array = ['banana', 'mango', 'watermelon', 'apple', 'grapes']
        const biblio = new Biblio('banana', 'mango', 'watermelon', 'apple', 'grapes');
        const resultArray = array.sort();
        const resultBiblio = biblio.sort();
        for (let i = 0; i < array.length; i++)
            expect(biblio[i]).to.be.equal(array[i]);
        expect(biblio.length).to.be.equal(array.length).to.be.equal(5);
      });

      it("Use sort method with an array of strings - ordering according to element length", () => {
        const array = ['banana', 'mango', 'watermelon', 'apple', 'grapes']
        const biblio = new Biblio('banana', 'mango', 'watermelon', 'apple', 'grapes');
        const ascendingLength = (a,b) => a.length - b.length
        const resultArray = array.sort(ascendingLength);
        const resultBiblio = biblio.sort(ascendingLength);
        for (let i = 0; i < array.length; i++)
            expect(biblio[i]).to.be.equal(array[i]);
        expect(biblio.length).to.be.equal(array.length).to.be.equal(5);
      });
      
  });



