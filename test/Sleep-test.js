import { expect } from "chai";
import Sleep from "../src/Sleep";
import sleepRepo from "../src/data/sleep";


describe("Sleep", function () {
    let sleepRepository;
    let userSleep;
    
    beforeEach(() => {
        sleepRepository = sleepRepo
        userSleep = new Sleep(sleepRepository)
    })

    it("it should be a function", function(){
        expect(Sleep).to.be.a("function")
    })

    it("should be an instance of Sleep", function (){
        expect(userSleep).to.be.an.instanceOf(Sleep)
    })
})