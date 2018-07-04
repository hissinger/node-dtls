
"use strict";

var util = require( 'util' );
var Packet = require( './Packet' );
var PacketSpec = require( './PacketSpec' );
var dtls = require( '../dtls' );

var DtlsServerKeyExchange = function( data ) {
    Packet.call( this, data );
};
util.inherits( DtlsServerKeyExchange, Packet );

DtlsServerKeyExchange.prototype.messageType = dtls.HandshakeType.serverKeyExchange;
DtlsServerKeyExchange.prototype.spec = new PacketSpec([
    { curveType: 'uint8' },
    { namedCurve: 'uint16' },
    { pubKey: 'var8'},
    { signature: 'var16'},
]);

module.exports = DtlsServerKeyExchange;