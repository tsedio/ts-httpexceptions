import {expect} from "chai";
import {Exception} from "../src";

describe("Exception", () => {
  it("should use innerException", () => {
    const exception = new Exception(203, "test", new Error("test"));

    expect(exception.status).to.equal(203);
    expect(exception.toString()).to.equal("HTTP_EXCEPTION(203): test, innerException: test");
  });

  it("should use innerException as string", () => {
    const exception = new Exception(203, "test", "test");

    expect(exception.status).to.equal(203);
    expect(exception.toString()).to.equal("HTTP_EXCEPTION(203): test, innerException: test");
  });

  it("should use innerException as string", () => {
    const exception = new Exception(203, "test", 1);

    expect(exception.status).to.equal(203);
    expect(exception.toString()).to.equal("HTTP_EXCEPTION(203): test, innerException: 1");
  });

  it("should return empty message when message parameters is undefined", () => {
    const exception = new Exception(203, undefined);

    expect(exception.status).to.equal(203);
    expect(exception.toString()).to.equal("HTTP_EXCEPTION(203):");
  });
});
