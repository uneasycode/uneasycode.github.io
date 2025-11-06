---
title: "ISIS Adjacency Basics"
category: "Basic"
description: "Basic ISIS Adjacency Setup and packet Flow"
tags: ["ISIS", "Basic", "Routing"]
---

# ISIS Adjacency Setup and Messaging

**ISIS Adjaceny setup is different from OSPF in many ways. It's a three step process**

## Setting up Adjacency 

**ISIS Hello Packet** is known as an IIH(Intermediate-System-to-Intermediate-System Hello). Here is how it looks like
```
22:19:02.755094 aa:c1:ab:83:45:9c (oui Unknown) > 09:00:2b:00:00:05 (oui Unknown), 802.3, length 1500: LLC, dsap OSI (0xfe) Individual, ssap OSI (0xfe) Command, ctrl 0x03: OSI NLPID IS-IS (0x83): length 1497
	p2p IIH, hlen: 20, v: 1, pdu-v: 1, sys-id-len: 6 (0), max-area: 3 (0)
	0x0000:  8314 0100 1101 0000
	  source-id: 0102.5500.0001, holding time: 30s, Flags: [Level 2 only]
	  circuit-id: 0x2f, PDU length: 1497
	  0x0000:  0201 0255 0000 0100 1e05 d92f
	    Authentication TLV #10, length: 17
	      HMAC-MD5 password: f4006f0daea748240b27d569e6ea0819 (unchecked)
	      0x0000:  36f4 006f 0dae a748 240b 27d5 69e6 ea08
	      0x0010:  19
	    Protocols supported TLV #129, length: 1
	      NLPID(s): IPv4 (0xcc)
	      0x0000:  cc
	    Area address(es) TLV #1, length: 4
	      Area address (length: 3): 49.0001
	      0x0000:  0349 0001
	    IPv4 Interface address(es) TLV #132, length: 4
	      IPv4 interface address: 10.255.3.24
	      0x0000:  0aff 0318
	    Restart Signaling TLV #211, length: 1
	      Flags [none]
	      0x0000:  00
	    Point-to-point Adjacency State TLV #240, length: 15
	      Adjacency State: Up (0)
	      Extended Local circuit-ID: 0x0000002f
	      Neighbor System-ID: 0102.5500.0002
	      Neighbor Extended Local circuit-ID: 0x0000002e
	      0x0000:  0000 0000 2f01 0255 0000 0200 0000 2e
	    Padding TLV #8, length: 255
	      0x0000:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x0010:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x0020:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x0030:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x0040:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x0050:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x0060:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x0070:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x0080:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x0090:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x00a0:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x00b0:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x00c0:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x00d0:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x00e0:  0000 0000 0000 0000 0000 0000 0000 0000
	      0x00f0:  0000 0000 0008 ff00 0000 0000 0000 00
```


## 3 Way Handshake



##### The first packet going out of the ISIS device is an IIH (Hello Packet)

##### If we receive the Hello Packet we go and update our P2P Adjancency TLV

##### Next When we send the Hello, we send it with the Adjacency TLV set.

##### This way when remote side receives the second Hello it knows that the System Sending this Hello has also received the Hello Sent by this local System

##### When both Sides have an Adj TLV other than down, then the Adjacency moves to up


## Exchanging LSPs

##### LSPs are exchanged via ISIS through flooding. This is similar to how OSPF shares its information


## MOre packet Types
##### CSNP

##### PSNP
