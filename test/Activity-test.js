import { expect } from "chai";
import Activity from "../src/Activity";
import data from "../src/data/activity";

describe("Activity", () => {
  let userActivity
  let data

  beforeEach(() => {
    userActivity = new Activity(data)
  });
  it("should be a function", function () {
    expect(Activity).to.be.a("function");
  });
});
