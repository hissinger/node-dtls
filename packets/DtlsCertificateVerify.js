
"use strict";

var util = require( 'util' );
var Packet = require( './Packet' );
var PacketSpec = require( './PacketSpec' );
var dtls = require( '../dtls' );

var DtlsCertificateVerify = function( data ) {
    Packet.call( this, data );
};
util.inherits( DtlsCertificateVerify, Packet );

DtlsCertificateVerify.prototype.messageType = dtls.HandshakeType.certificateVerify;
DtlsCertificateVerify.prototype.spec = new PacketSpec([
    { signature: 'var16' }
]);

module.exports = DtlsCertificateVerify;
