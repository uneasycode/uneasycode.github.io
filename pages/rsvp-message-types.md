---
title: "RSVP Message Types and Link Protection Fast Reroute"
layout: page
permalink: /rsvp-message-types/
---

# RSVP Message Types and Link Protection Fast Reroute

**Understanding RSVP message types is crucial for troubleshooting MPLS Traffic Engineering tunnels. When link protection is enabled, specific message flows occur during failures that network engineers must understand.**


## RSVP Message Types Overview

RSVP uses several message types to establish, maintain, and tear down LSP tunnels:

### **Primary Messages**
- **PATH**: Sent downstream from headend to tailend to establish path state
- **RESV**: Sent upstream from tailend to headend to make reservations
- **PathTear**: Tears down path state (downstream direction)
- **ResvTear**: Tears down reservation state (upstream direction)

### **Error and Confirmation Messages**
- **PathErr**: Reports path-related errors (sent upstream)
- **ResvErr**: Reports reservation-related errors (sent downstream)
- **ResvConf**: Confirms successful reservation (sent downstream)



## Message Flow During Normal Operation

### **1. LSP Establishment**

```bash
# Normal LSP setup sequence
1. Headend → PATH message → Tailend
2. Tailend → RESV message → Headend
3. LSP established and operational
```

**Sample PATH message debug output:**
```bash
Router# debug ip rsvp messages

*Oct  7 10:15:23.456: RSVP: 10.1.1.1_1->10.5.5.5_1[10.1.1.1]: 
  Sending Path message to 192.168.12.2
*Oct  7 10:15:23.456: RSVP-PATH: building hop object with src addr: 192.168.12.1
*Oct  7 10:15:23.456: RSVP: session 10.5.5.5_1[10.1.1.1]: 
  Path message sent successfully
```

**Sample RESV message debug output:**
```bash
*Oct  7 10:15:23.892: RSVP: session 10.5.5.5_1[10.1.1.1]: 
  Received Resv message from 192.168.23.3 (on GigabitEthernet0/1)
*Oct  7 10:15:23.892: RSVP-RESV: Admitting new reservation: 1132CE2C
*Oct  7 10:15:23.893: RSVP-RESV: reservation was installed: 1132CE2C
*Oct  7 10:15:23.893: %LINEPROTO-5-UPDOWN: Line protocol on Interface Tunnel1, changed state to up
```

### **2. Periodic Refresh**

```bash
# RSVP soft-state refresh (default 30 seconds)
*Oct  7 10:15:53.456: RSVP: 10.1.1.1_1->10.5.5.5_1[10.1.1.1]: 
  Path refresh, Event: periodic refresh
*Oct  7 10:15:53.892: RSVP: 10.1.1.1_1->10.5.5.5_1[10.1.1.1]: 
  Resv refresh, Event: periodic refresh
```

## Link Protection Fast Reroute Configuration

### **Enable Fast Reroute on Primary Tunnel**

```bash
# Headend router configuration
Router(config)# interface tunnel 100
Router(config-if)# tunnel destination 10.5.5.5
Router(config-if)# tunnel mpls traffic-eng path-option 1 explicit name PRIMARY_PATH
Router(config-if)# tunnel mpls traffic-eng fast-reroute  # Enable FRR
```

### **Configure Backup Tunnel**

```bash
# Point of Local Repair (PLR) configuration
Router(config)# interface tunnel 200
Router(config-if)# tunnel mode mpls traffic-eng
Router(config-if)# tunnel destination 10.3.3.3  # Merge Point (MP)
Router(config-if)# tunnel mpls traffic-eng path-option 1 explicit name BACKUP_PATH

# Assign backup tunnel to protect interface
Router(config)# interface GigabitEthernet0/1
Router(config-if)# mpls traffic-eng backup-path tunnel 200
```

### **Verify Fast Reroute Status**

```bash
# Check FRR protection status
Router# show mpls traffic-eng fast-reroute database

LSP Head: 10.1.1.1, Tunnel ID: 100, LSP ID: 1
  Output Interface: GigabitEthernet0/1, PHop: 10.2.2.2
  FRR Protection: Requested
  Backup Interface: Tunnel200, NHop: 10.4.4.4
  Status: Protected
```

## Message Flow During Link Failure

When a protected link fails, the following message sequence occurs:

### **Phase 1: Failure Detection and Fast Reroute Activation**

```bash
# Interface goes down - immediate detection
*Oct  7 10:20:15.123: %LINK-3-UPDOWN: Interface GigabitEthernet0/1, changed state to down
*Oct  7 10:20:15.124: RSVP-FRR: Activating backup tunnel 200 for LSP 10.1.1.1_100
*Oct  7 10:20:15.124: MPLS-TE-FRR: Protected LSP 10.1.1.1_100 switched to backup path
```

### **Phase 2: Error Signaling**

```bash
# PathErr sent upstream to headend
*Oct  7 10:20:15.125: RSVP: 10.1.1.1_100->10.5.5.5_1[10.1.1.1]: 
  Sending PathErr message to 192.168.12.1
*Oct  7 10:20:15.125: RSVP-PERR: Error Code: 24 (Routing Problem)
*Oct  7 10:20:15.125: RSVP-PERR: Error Value: 1 (Bad Explicit Route)
```

### **Phase 3: Headend Reroute**

```bash
# Headend receives PathErr and initiates reroute
*Oct  7 10:20:15.456: RSVP: session 10.5.5.5_1[10.1.1.1]: 
  Received PathErr message from 192.168.12.2
*Oct  7 10:20:15.456: RSVP-PATH: PathErr received, initiating reroute
*Oct  7 10:20:15.457: MPLS-TE: Tunnel100 - trying to come up on secondary path-option
*Oct  7 10:20:15.458: RSVP: 10.1.1.1_100->10.5.5.5_1[10.1.1.1]: 
  Sending new PATH message via alternate route
```

## Tcpdump Packet Captures

### **Capturing RSVP Messages**

```bash
# Basic RSVP packet capture
tcpdump -i any -n protocol 46 -v -w rsvp_capture.pcap

# More specific capture with IP addresses
tcpdump -i any -n host 10.1.1.1 and host 10.2.2.2 and protocol 46 -v -w rsvp_messages.pcap
```

### **Sample RSVP PATH Message Packet**

```
10:15:23.456789 IP 10.1.1.1 > 10.2.2.2: RSVP: PATH Message
    RSVP Version: 1, Flags: 0x00
    Message Type: PATH (1)
    Message Length: 148
    Send TTL: 254
    SESSION Object:
        Class: 1, C-Type: 7 (IPv4 LSP)
        Destination: 10.5.5.5
        Tunnel ID: 100
        Extended Tunnel ID: 10.1.1.1
    HOP Object:
        Class: 3, C-Type: 1 (IPv4)
        Neighbor Address: 10.1.1.1
        Logical Interface: 0x12345678
    EXPLICIT_ROUTE Object:
        Class: 20, C-Type: 1
        Subobject: IPv4 Prefix 10.2.2.2/32 (Strict)
        Subobject: IPv4 Prefix 10.3.3.3/32 (Strict)
        Subobject: IPv4 Prefix 10.5.5.5/32 (Strict)
    SESSION_ATTRIBUTE Object:
        Class: 207, C-Type: 7
        Setup Priority: 7
        Hold Priority: 7
        Flags: 0x07 (Local Protection Desired)
        Session Name: "Primary_Tunnel"
```

### **Sample RSVP RESV Message Packet**

```
10:15:23.892456 IP 10.3.3.3 > 10.2.2.2: RSVP: RESV Message
    RSVP Version: 1, Flags: 0x00
    Message Type: RESV (2)
    Message Length: 112
    Send TTL: 254
    SESSION Object:
        Class: 1, C-Type: 7 (IPv4 LSP)
        Destination: 10.5.5.5
        Tunnel ID: 100
    HOP Object:
        Class: 3, C-Type: 1 (IPv4)
        Neighbor Address: 10.3.3.3
        Logical Interface: 0x87654321
    LABEL Object:
        Class: 16, C-Type: 1
        Label: 24 (0x18)
    FILTER_SPEC Object:
        Class: 10, C-Type: 7 (IPv4 LSP)
        Sender Address: 10.1.1.1
        LSP ID: 100
```

### **Sample PathErr Message During Link Failure**

```
10:20:15.125789 IP 10.2.2.2 > 10.1.1.1: RSVP: PATH_ERR Message
    RSVP Version: 1, Flags: 0x00
    Message Type: PATH_ERR (3)
    Message Length: 96
    Send TTL: 254
    SESSION Object:
        Class: 1, C-Type: 7 (IPv4 LSP)
        Destination: 10.5.5.5
        Tunnel ID: 100
    ERROR_SPEC Object:
        Class: 6, C-Type: 1 (IPv4)
        Error Node: 10.2.2.2
        Error Code: 24 (Routing Problem)
        Error Value: 1 (Bad Explicit Route)
        Error Text: "Interface GigabitEthernet0/1 down"
```

## Troubleshooting Commands

### **Monitor RSVP Messages**

```bash
# Debug RSVP message processing
Router# debug ip rsvp messages
Router# debug mpls traffic-eng fast-reroute events

# Show current RSVP sessions
Router# show ip rsvp sender
Router# show ip rsvp reservation

# Check FRR database
Router# show mpls traffic-eng fast-reroute database
Router# show mpls traffic-eng fast-reroute log reroutes
```

### **Verify Message Flows**

```bash
# Check RSVP neighbor states
Router# show ip rsvp neighbor

# Verify tunnel status
Router# show mpls traffic-eng tunnel summary
Router# show mpls traffic-eng tunnel detail

# Monitor path changes
Router# show mpls traffic-eng topology path destination 10.5.5.5
```

## Common Message Flow Scenarios

### **Scenario 1: Successful FRR Protection**
1. **Link failure detected** → Interface down
2. **Traffic switched** → Backup tunnel activated
3. **PathErr sent** → Upstream to headend
4. **Headend reroutes** → New PATH via alternate route
5. **New RESV received** → LSP re-established

### **Scenario 2: No Protection Available**
1. **Link failure detected** → Interface down
2. **No backup tunnel** → Traffic dropped
3. **PathTear/ResvTear** → LSP torn down completely
4. **Headend calculates new path** → Full reroute
5. **New LSP established** → Longer convergence time

### **Scenario 3: Backup Tunnel Failure**
1. **Primary link fails** → FRR activates
2. **Backup tunnel fails** → Secondary failure
3. **Multiple PathErr messages** → Error cascade
4. **LSP tears down** → Complete failure
5. **Headend must find alternative** → Manual intervention may be needed

## Key Takeaways

- **RSVP uses soft state** - periodic refresh messages maintain LSP state
- **Fast Reroute provides sub-50ms protection** - local repair at point of failure
- **PathErr messages trigger headend reroute** - optimize path after FRR activation
- **Backup tunnels must be pre-established** - protection requires planning
- **Message debugging is crucial** - understand flow for effective troubleshooting
- **Tcpdump captures provide detailed analysis** - packet-level view of RSVP operations

**Pro Tip:** Always monitor both the data plane (traffic flow) and control plane (RSVP messages) when troubleshooting MPLS TE issues. The message flows tell you exactly what RSVP is thinking during failures and recoveries.