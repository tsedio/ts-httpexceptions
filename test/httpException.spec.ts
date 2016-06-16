import * as Chai from 'chai';
import {Exception} from "../lib/exception";
import {BadGateway} from "../lib/badgateway";
import {BadRequest} from "../lib/badrequest";
import {Forbidden} from "../lib/forbidden";
import {GatewayTimeout} from "../lib/gatewaytimeout";
import {InternalServerError} from "../lib/internalservererror";
import {MethodNotAllowed} from "../lib/methodnotallowed";
import {NotAcceptable} from "../lib/notacceptable";
import {NotFound} from "../lib/notfound";
import {NotImplemented} from "../lib/notimplemented";
import {PaymentRequired} from "../lib/paymentrequired";
import {ProxyError} from "../lib/proxyerror";
import {ServiceUnvailable} from "../lib/serviceunvailable";
import {Unauthorized} from "../lib/unauthorized";


var expect = Chai.expect;

describe('HttpExceptions', function(){

    describe('Exception', function(){
        it('should use innerException', function(){

            var exception = new Exception(203, 'test', new Error('test'));

            expect(exception.status).to.equal(203);
            expect(exception.toString()).to.equal('HttpException(203): test, innerException: test');

        });

        it('should use innerException as string', function(){

            var exception = new Exception(203, 'test', 'test');

            expect(exception.status).to.equal(203);
            expect(exception.toString()).to.equal('HttpException(203): test, innerException: test');

        });

        it('should use innerException as string', function(){

            var exception = new Exception(203, 'test', 1);

            expect(exception.status).to.equal(203);
            expect(exception.toString()).to.equal('HttpException(203): test, innerException: 1');

        });

        it('should return empty message when message parameters is undefined', function(){

            var exception = new Exception(203, undefined);

            expect(exception.status).to.equal(203);
            expect(exception.toString()).to.equal('HttpException(203):');

        });
    });

    describe('BadGateway', function(){
        it('should emit an exception', function(){

            try{
                throw new BadGateway('message');
            }catch(err){
                expect(err).to.be.an('object');
                expect(err instanceof Exception).to.be.true;
                expect(err.status).to.equal(502);
                expect(err.toString()).to.equal('BAD_GATEWAY(502): message');
            }

        });
    });


    describe('BadRequest', function() {

        it('should emit an exception', function () {

            try {
                throw new BadRequest('Parameters required [t1,t2]');
            } catch (err) {

                expect(err.status).to.equal(400);
                expect(err.toString()).to.equal('BAD_REQUEST(400): Parameters required [t1,t2]');
            }

        });
    });


    describe('Forbidden', function() {
        it('should emit an exception', function () {

            try {
                throw new Forbidden('message');
            } catch (err) {
                expect(err.status).to.equal(403);
                expect(err.toString()).to.equal('FORBIDDEN(403): message');
            }

        });
    });

    describe('GatewayTimeout', function() {

        it('should emit an exception', function () {

            try {
                throw new GatewayTimeout('message');
            } catch (err) {
                expect(err.status).to.equal(504);
            }

        });
    });

    describe('InternalServerError', function() {

        it('should emit an exception', function () {

            try {
                throw new InternalServerError('message');
            } catch (err) {
                expect(err.status).to.equal(500);
            }

        });
    });

    describe('MethodNotAllowed', function() {

        it('should emit an exception', function () {

            try {
                throw new MethodNotAllowed('message');
            } catch (err) {
                expect(err.status).to.equal(405);
            }

        });
    });

    describe('NotAcceptable', function() {

        it('should emit an exception', function () {

            try {
                throw new NotAcceptable('message');
            } catch (err) {
                expect(err.status).to.equal(406);
            }

        });
    });


    describe('NotFound', function() {

        it('should emit an  exception', function () {

            try {
                throw new NotFound('message');
            } catch (err) {


                expect(err.status).to.equal(404);
            }

        });
    });

    describe('NotImplemented', function() {

        it('should emit an exception', function () {

            try {
                throw new NotImplemented('message');
            } catch (err) {
                expect(err.status).to.equal(501);
            }

        });
    });

    describe('PaymentRequired', function() {

        it('should emit an exception', function () {

            try {
                throw new PaymentRequired('message');
            } catch (err) {
                expect(err.status).to.equal(402);
            }

        });
    });

    describe('ProxyError', function() {

        it('should emit an exception', function () {

            try {
                throw new ProxyError('message');
            } catch (err) {
                expect(err.status).to.equal(502);
            }

        });
    });

    describe('ServiceUnvailable', function() {

        it('should emit an exception', function () {

            try {
                throw new ServiceUnvailable('message');
            } catch (err) {
                expect(err.status).to.equal(503);
            }

        });
    });

    describe('Unauthorized', function() {

        it('should emit an exception', function () {

            try {
                throw new Unauthorized('message');
            } catch (err) {
                expect(err.status).to.equal(401);
            }

        });
    });
});
