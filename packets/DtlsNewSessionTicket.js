
"use strict";

var util = require( 'util' );
var Packet = require( './Packet' );
var PacketSpec = require( './PacketSpec' );
var dtls = require( '../dtls' );

var DtlsNewSessionTicket = function( data ) {
    Packet.call( this, data );
};
util.inherits( DtlsNewSessionTicket, Packet );

DtlsNewSessionTicket.prototype.messageType = dtls.HandshakeType.newSessionTicket;
DtlsNewSessionTicket.prototype.spec = new PacketSpec([
    { lifeTime: 'uint32' },
    { signature: 'var16'},
]);

module.exports = DtlsNewSessionTicket;