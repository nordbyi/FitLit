import { expect } from "chai";
import Hydration from "../src/Hydration";
import hydrationData from "../src/data/hydration";

describe('Hydration', function(){
    let data 
    let userHydrate
    beforeEach(()=>{
        data = hydrationData
        userHydrate = new Hydration(data)
    })

    it("Should be a function", function () {
        expect(Hydration).to.be.a("function");
    });

    it("Should be an instance of User", function () {
        expect(userHydrate).to.be.an.instanceof(Hydration);
    });

    it("Should have a property that hold hydration data", function (){
        expect(userHydrate.data).to.deep.equal(data)
    })

    it("Should track average ounces of water consumed per day for all time", function () {
        expect(userHydrate.calcAvgWaterConsumption(1)).to.equal(67)
    })

    it("Should have water consumed by date", function() {
        expect(userHydrate.consumeBydate(1,'2019/06/15')).to.equal(37)
    })

    it("Should be able to calculate water each day over a week", function() {
        expect(userHydrate.returnWeeklyWaterConsumption(1, '2019/06/15')).to.deep.equal([37, 75, 47, 85, 42, 87, 94])
        expect(userHydrate.returnWeeklyWaterConsumption(1, '2019/06/21')).to.deep.equal([37, 75, 47, 85, 42, 87, 94])
    })

})