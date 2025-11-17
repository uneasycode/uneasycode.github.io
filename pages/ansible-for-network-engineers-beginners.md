---
title: "Ansible for Network Engineers: A Beginner's Guide"
category: "Beginner"
description: "Learn Ansible automation for network engineering with multi-vendor examples including Cisco, Juniper, and Arista"
tags: ["Ansible", "Automation", "Networking", "DevOps", "Cisco", "Juniper", "Arista"]
---

# Ansible for Network Engineers: A Beginner's Guide

## Introduction to Ansible

### What is Ansible?

Ansible is an open-source automation tool that simplifies IT orchestration, configuration management, and application deployment. For network engineers, Ansible provides a powerful way to automate repetitive network tasks, manage device configurations, and ensure consistent network operations across large-scale infrastructures.

### Why Ansible for Network Engineers?

Network engineers often face challenges like:
- **Manual Configuration**: Time-consuming CLI commands on hundreds of devices
- **Configuration Drift**: Inconsistent configurations across network devices
- **Lack of Version Control**: No history of configuration changes
- **Error-Prone Tasks**: Human errors during bulk configuration changes

Ansible solves these problems by:
- **Agentless Architecture**: No software installation required on network devices
- **Declarative Automation**: Describe desired state, Ansible handles execution
- **Idempotent Operations**: Safe to run multiple times without unintended changes
- **Multi-Vendor Support**: Works with Cisco, Juniper, Arista, Nokia, and more

### Ansible Architecture Overview

<div class="mermaid-svg"><svg aria-roledescription="flowchart-v2" role="graphics-document document" viewBox="-20 -20 815.1484375 297" style="max-width: 815.148px; background-color: white;" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="100%" id="my-svg"><style>#my-svg{font-family:arial,sans-serif;font-size:14px;fill:#333;}#my-svg .error-icon{fill:#552222;}#my-svg .error-text{fill:#552222;stroke:#552222;}#my-svg .edge-thickness-normal{stroke-width:2px;}#my-svg .edge-thickness-thick{stroke-width:3.5px;}#my-svg .edge-pattern-solid{stroke-dasharray:0;}#my-svg .edge-pattern-dashed{stroke-dasharray:3;}#my-svg .edge-pattern-dotted{stroke-dasharray:2;}#my-svg .marker{fill:#333333;stroke:#333333;}#my-svg .marker.cross{stroke:#333333;}#my-svg svg{font-family:arial,sans-serif;font-size:14px;}#my-svg .label{font-family:arial,sans-serif;color:#333;}#my-svg .cluster-label text{fill:#333;}#my-svg .cluster-label span,#my-svg p{color:#333;}#my-svg .label text,#my-svg span,#my-svg p{fill:#333;color:#333;}#my-svg .node rect,#my-svg .node circle,#my-svg .node ellipse,#my-svg .node polygon,#my-svg .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#my-svg .flowchart-label text{text-anchor:middle;}#my-svg .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#my-svg .node .label{text-align:center;}#my-svg .node.clickable{cursor:pointer;}#my-svg .arrowheadPath{fill:#333333;}#my-svg .edgePath .path{stroke:#333333;stroke-width:2.0px;}#my-svg .flowchart-link{stroke:#333333;fill:none;}#my-svg .edgeLabel{background-color:#e8e8e8;text-align:center;}#my-svg .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#my-svg .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#my-svg .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#my-svg .cluster text{fill:#333;}#my-svg .cluster span,#my-svg p{color:#333;}#my-svg div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#my-svg .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#my-svg :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g><marker orient="auto" markerHeight="12" markerWidth="12" markerUnits="userSpaceOnUse" refY="5" refX="6" viewBox="0 0 10 10" class="marker flowchart" id="my-svg_flowchart-pointEnd"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 0 L 10 5 L 0 10 z"/></marker><marker orient="auto" markerHeight="12" markerWidth="12" markerUnits="userSpaceOnUse" refY="5" refX="4.5" viewBox="0 0 10 10" class="marker flowchart" id="my-svg_flowchart-pointStart"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 5 L 10 10 L 10 0 z"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5" refX="11" viewBox="0 0 10 10" class="marker flowchart" id="my-svg_flowchart-circleEnd"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5" refX="-1" viewBox="0 0 10 10" class="marker flowchart" id="my-svg_flowchart-circleStart"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5.2" refX="12" viewBox="0 0 11 11" class="marker cross flowchart" id="my-svg_flowchart-crossEnd"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5.2" refX="-1" viewBox="0 0 11 11" class="marker cross flowchart" id="my-svg_flowchart-crossStart"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"/></marker><g class="root"><g class="clusters"/><g class="edgePaths"><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-B" id="L-A-B-0" d="M68.586,55L68.586,60.5C68.586,66,68.586,77,68.586,87.117C68.586,97.233,68.586,106.467,68.586,111.083L68.586,115.7"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-B LE-C" id="L-B-C-0" d="M68.586,152L68.586,157.5C68.586,163,68.586,174,68.586,182.783C68.586,191.567,68.586,198.133,68.586,201.417L68.586,204.7"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-D LE-E" id="L-D-E-0" d="M225.945,55L225.945,60.5C225.945,66,225.945,77,254.451,89.19C282.956,101.38,339.966,114.76,368.472,121.45L396.977,128.14"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-E LE-F" id="L-E-F-0" d="M432.598,160L432.598,164.167C432.598,168.333,432.598,176.667,432.598,184.117C432.598,191.567,432.598,198.133,432.598,201.417L432.598,204.7"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-G LE-E" id="L-G-E-0" d="M352.039,55L352.039,60.5C352.039,66,352.039,77,359.632,87.071C367.225,97.142,382.41,106.285,390.003,110.856L397.596,115.427"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-H LE-E" id="L-H-E-0" d="M513.156,55L513.156,60.5C513.156,66,513.156,77,505.563,87.071C497.971,97.142,482.785,106.285,475.192,110.856L467.599,115.427"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-I LE-E" id="L-I-E-0" d="M706.563,63L706.563,67.167C706.563,71.333,706.563,79.667,666.848,90.864C627.134,102.061,547.706,116.122,507.992,123.153L468.277,130.184"/></g><g class="edgeLabels"><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g><g class="edgeLabel"><g transform="translate(0, 0)" class="label"><foreignObject height="0" width="0"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel"></span></div></foreignObject></g></g></g><g class="nodes"><g transform="translate(68.5859375, 31.5)" data-id="A" data-node="true" id="flowchart-A-0" class="node default default flowchart-label"><rect height="47" width="135.125" y="-23.5" x="-67.5625" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-60.0625, -16)" style="" class="label"><rect/><foreignObject height="32" width="120.125"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Control Machine<br />Your Laptop/Server</span></div></foreignObject></g></g><g transform="translate(68.5859375, 136.5)" data-id="B" data-node="true" id="flowchart-B-1" class="node default default flowchart-label"><rect height="31" width="137.171875" y="-15.5" x="-68.5859375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-61.0859375, -8)" style="" class="label"><rect/><foreignObject height="16" width="122.171875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">SSH/Telnet/Netconf</span></div></foreignObject></g></g><g transform="translate(68.5859375, 233.5)" data-id="C" data-node="true" id="flowchart-C-3" class="node default default flowchart-label"><rect height="47" width="137.171875" y="-23.5" x="-68.5859375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-61.0859375, -16)" style="" class="label"><rect/><foreignObject height="32" width="122.171875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Target Devices<br />Routers &amp; Switches</span></div></foreignObject></g></g><g transform="translate(225.9453125, 31.5)" data-id="D" data-node="true" id="flowchart-D-4" class="node default default flowchart-label"><rect height="47" width="79.59375" y="-23.5" x="-39.796875" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-32.296875, -16)" style="" class="label"><rect/><foreignObject height="32" width="64.59375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Ansible<br />Playbooks</span></div></foreignObject></g></g><g transform="translate(432.59765625, 136.5)" data-id="E" data-node="true" id="flowchart-E-5" class="node default default flowchart-label"><rect height="47" width="60.921875" y="-23.5" x="-30.4609375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-22.9609375, -16)" style="" class="label"><rect/><foreignObject height="32" width="45.921875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Ansible<br />Engine</span></div></foreignObject></g></g><g transform="translate(432.59765625, 233.5)" data-id="F" data-node="true" id="flowchart-F-7" class="node default default flowchart-label"><rect height="47" width="178.4375" y="-23.5" x="-89.21875" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-81.71875, -16)" style="" class="label"><rect/><foreignObject height="32" width="163.4375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Modules<br />cli_command, netconf_get</span></div></foreignObject></g></g><g transform="translate(352.0390625, 31.5)" data-id="G" data-node="true" id="flowchart-G-8" class="node default default flowchart-label"><rect height="47" width="72.59375" y="-23.5" x="-36.296875" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-28.796875, -16)" style="" class="label"><rect/><foreignObject height="32" width="57.59375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Inventory<br />hosts.ini</span></div></foreignObject></g></g><g transform="translate(513.15625, 31.5)" data-id="H" data-node="true" id="flowchart-H-10" class="node default default flowchart-label"><rect height="47" width="149.640625" y="-23.5" x="-74.8203125" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-67.3203125, -16)" style="" class="label"><rect/><foreignObject height="32" width="134.640625"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Variables<br />group_vars/host_vars</span></div></foreignObject></g></g><g transform="translate(706.5625, 31.5)" data-id="I" data-node="true" id="flowchart-I-12" class="node default default flowchart-label"><rect height="63" width="137.171875" y="-31.5" x="-68.5859375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-61.0859375, -24)" style="" class="label"><rect/><foreignObject height="48" width="122.171875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Ansible Tower/AWX<br />Web Interface<br />Optional</span></div></foreignObject></g></g></g></g></g></svg></div>

## Installing Ansible

### System Requirements

- **Control Machine**: Linux, macOS, or Windows (via WSL)
- **Python**: Version 3.8 or newer
- **Network Access**: SSH/telnet access to network devices

### Installation on Linux (Ubuntu/Debian)

```bash
# Update package lists
sudo apt update

# Install Python and pip
sudo apt install python3 python3-pip -y

# Install Ansible using pip (recommended)
pip3 install ansible

# Verify installation
ansible --version
```

### Installation on macOS

```bash
# Using Homebrew
brew install ansible

# Using pip
pip3 install ansible

# Verify installation
ansible --version
```

### Installation on Windows (WSL)

```bash
# Install WSL first, then use Linux commands above
# Or use pip directly in Windows
pip install ansible
```

### Post-Installation Configuration

```bash
# Create Ansible directory structure
mkdir -p ~/ansible/{inventory,playbooks,roles}
cd ~/ansible

# Generate SSH key for passwordless authentication
ssh-keygen -t rsa -b 2048 -f ~/.ssh/id_rsa_ansible

# Test installation
ansible localhost -m ping
```

## Ansible Components for Network Engineers

### 1. Inventory File

The inventory file defines which devices Ansible will manage.

**Basic Inventory Structure (`hosts.ini`):**
```ini
[cisco_routers]
R1 ansible_host=192.168.1.10
R2 ansible_host=192.168.1.11

[juniper_switches]
SW1 ansible_host=192.168.1.20
SW2 ansible_host=192.168.1.21

[arista_switches]
ASW1 ansible_host=192.168.1.30
ASW2 ansible_host=192.168.1.31

[routers:children]
cisco_routers
juniper_switches

[network_devices:children]
routers
arista_switches
```

### 2. Playbooks

Playbooks are YAML files that define automation tasks.

**Basic Playbook Structure:**
```yaml
---
- name: Network Device Configuration
  hosts: network_devices
  connection: network_cli
  gather_facts: no

  tasks:
    - name: Run show command
      ios_command:
        commands: show version
      register: output

    - name: Debug output
      debug:
        msg: "{{ output.stdout_lines }}"
```

### 3. Variables

Variables allow customization of playbooks.

**Group Variables (`group_vars/cisco_routers.yml`):**
```yaml
ansible_network_os: ios
ansible_user: admin
ansible_password: "{{ vaulted_password }}"
ansible_connection: network_cli
ansible_become: yes
ansible_become_method: enable
enable_password: "{{ vaulted_enable_pass }}"

# Device-specific variables
logging_server: 192.168.1.100
snmp_community: public
```

**Host Variables (`host_vars/R1.yml`):**
```yaml
hostname: Router-1
loopback_ip: 10.1.1.1
management_ip: 192.168.1.10
interfaces:
  - name: GigabitEthernet0/0
    ip: 172.16.1.1
    mask: 255.255.255.0
  - name: GigabitEthernet0/1
    ip: 172.16.2.1
    mask: 255.255.255.0
```

### 4. Modules

Ansible modules are reusable units of code.

**Common Network Modules:**
- `cli_command`: Execute CLI commands
- `netconf_get`: Retrieve NETCONF data
- `netconf_config`: Configure via NETCONF
- `command`: Execute commands on control machine

### 5. Facts and Facts Gathering

Facts are information Ansible collects about target devices.

```yaml
---
- name: Gather facts
  hosts: cisco_routers
  gather_facts: no

  tasks:
    - name: Gather network device facts
      ios_facts:
      register: ios_facts

    - name: Display facts
      debug:
        msg: |
          Device: {{ ios_facts.ansible_net_hostname }}
          OS Version: {{ ios_facts.ansible_net_version }}
          Uptime: {{ ios_facts.ansible_net_uptime }}
```

## Sample Network Topology

Our demo topology includes multiple vendor devices connected in a typical enterprise network:

<div class="mermaid-svg"><svg aria-roledescription="flowchart-v2" role="graphics-document document" viewBox="-20 -20 644.1015625 1011" style="max-width: 644.102px; background-color: white;" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="100%" id="my-svg"><style>#my-svg{font-family:arial,sans-serif;font-size:14px;fill:#333;}#my-svg .error-icon{fill:#552222;}#my-svg .error-text{fill:#552222;stroke:#552222;}#my-svg .edge-thickness-normal{stroke-width:2px;}#my-svg .edge-thickness-thick{stroke-width:3.5px;}#my-svg .edge-pattern-solid{stroke-dasharray:0;}#my-svg .edge-pattern-dashed{stroke-dasharray:3;}#my-svg .edge-pattern-dotted{stroke-dasharray:2;}#my-svg .marker{fill:#333333;stroke:#333333;}#my-svg .marker.cross{stroke:#333333;}#my-svg svg{font-family:arial,sans-serif;font-size:14px;}#my-svg .label{font-family:arial,sans-serif;color:#333;}#my-svg .cluster-label text{fill:#333;}#my-svg .cluster-label span,#my-svg p{color:#333;}#my-svg .label text,#my-svg span,#my-svg p{fill:#333;color:#333;}#my-svg .node rect,#my-svg .node circle,#my-svg .node ellipse,#my-svg .node polygon,#my-svg .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#my-svg .flowchart-label text{text-anchor:middle;}#my-svg .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#my-svg .node .label{text-align:center;}#my-svg .node.clickable{cursor:pointer;}#my-svg .arrowheadPath{fill:#333333;}#my-svg .edgePath .path{stroke:#333333;stroke-width:2.0px;}#my-svg .flowchart-link{stroke:#333333;fill:none;}#my-svg .edgeLabel{background-color:#e8e8e8;text-align:center;}#my-svg .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#my-svg .labelBkg{background-color:rgba(232, 232, 232, 0.5);}#my-svg .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#my-svg .cluster text{fill:#333;}#my-svg .cluster span,#my-svg p{color:#333;}#my-svg div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#my-svg .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}#my-svg :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style><g><marker orient="auto" markerHeight="12" markerWidth="12" markerUnits="userSpaceOnUse" refY="5" refX="6" viewBox="0 0 10 10" class="marker flowchart" id="my-svg_flowchart-pointEnd"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 0 L 10 5 L 0 10 z"/></marker><marker orient="auto" markerHeight="12" markerWidth="12" markerUnits="userSpaceOnUse" refY="5" refX="4.5" viewBox="0 0 10 10" class="marker flowchart" id="my-svg_flowchart-pointStart"><path style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 0 5 L 10 10 L 10 0 z"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5" refX="11" viewBox="0 0 10 10" class="marker flowchart" id="my-svg_flowchart-circleEnd"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5" refX="-1" viewBox="0 0 10 10" class="marker flowchart" id="my-svg_flowchart-circleStart"><circle style="stroke-width: 1; stroke-dasharray: 1, 0;" class="arrowMarkerPath" r="5" cy="5" cx="5"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5.2" refX="12" viewBox="0 0 11 11" class="marker cross flowchart" id="my-svg_flowchart-crossEnd"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"/></marker><marker orient="auto" markerHeight="11" markerWidth="11" markerUnits="userSpaceOnUse" refY="5.2" refX="-1" viewBox="0 0 11 11" class="marker cross flowchart" id="my-svg_flowchart-crossStart"><path style="stroke-width: 2; stroke-dasharray: 1, 0;" class="arrowMarkerPath" d="M 1,1 l 9,9 M 10,1 l -9,9"/></marker><g class="root"><g class="clusters"><g id="subGraph2" class="cluster default flowchart-label"><rect height="113" width="243.62890625" y="113" x="0" ry="0" rx="0" style=""/><g transform="translate(77.845703125, 113)" class="cluster-label"><foreignObject height="16" width="87.9375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Edge Network</span></div></foreignObject></g></g><g id="subGraph1" class="cluster default flowchart-label"><rect height="371" width="331.19921875" y="292" x="127.9296875" ry="0" rx="0" style=""/><g transform="translate(250.732421875, 292)" class="cluster-label"><foreignObject height="16" width="85.59375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Core Network</span></div></foreignObject></g></g><g id="subGraph0" class="cluster default flowchart-label"><rect height="242" width="329.46875" y="729" x="274.6328125" ry="0" rx="0" style=""/><g transform="translate(401.625, 729)" class="cluster-label"><foreignObject height="16" width="75.484375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Data Center</span></div></foreignObject></g></g></g><g class="edgePaths"><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-B" id="L-A-B-0" d="M325.75,35.18L290.593,42.65C255.436,50.12,185.122,65.06,149.965,78.03C114.809,91,114.809,102,114.809,110.783C114.809,119.567,114.809,126.133,114.809,129.417L114.809,132.7"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-C" id="L-A-C-0" d="M338.006,47L328.01,52.5C318.013,58,298.02,69,288.024,80C278.027,91,278.027,102,278.027,116.917C278.027,131.833,278.027,150.667,278.027,169.5C278.027,188.333,278.027,207.167,278.027,222.083C278.027,237,278.027,248,278.027,259C278.027,270,278.027,281,276.405,289.871C274.782,298.742,271.537,305.483,269.914,308.854L268.291,312.225"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-D" id="L-A-D-0" d="M362.413,47L358.129,52.5C353.844,58,345.276,69,340.991,80C336.707,91,336.707,102,336.707,116.917C336.707,131.833,336.707,150.667,336.707,169.5C336.707,188.333,336.707,207.167,336.707,222.083C336.707,237,336.707,248,336.707,259C336.707,270,336.707,281,336.707,295.917C336.707,310.833,336.707,329.667,336.707,349.833C336.707,370,336.707,391.5,333.422,407.022C330.137,422.545,323.567,432.09,320.282,436.862L316.997,441.634"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-E" id="L-A-E-0" d="M387.872,47L389.547,52.5C391.221,58,394.569,69,396.244,80C397.918,91,397.918,102,397.918,116.917C397.918,131.833,397.918,150.667,397.918,169.5C397.918,188.333,397.918,207.167,397.918,222.083C397.918,237,397.918,248,397.918,259C397.918,270,397.918,281,397.918,295.917C397.918,310.833,397.918,329.667,397.918,349.833C397.918,370,397.918,391.5,397.918,413C397.918,434.5,397.918,456,397.918,477.5C397.918,499,397.918,520.5,393.276,536.111C388.633,551.722,379.348,561.445,374.706,566.306L370.063,571.167"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-F" id="L-A-F-0" d="M427.639,47L438.621,52.5C449.602,58,471.565,69,482.546,80C493.527,91,493.527,102,493.527,116.917C493.527,131.833,493.527,150.667,493.527,169.5C493.527,188.333,493.527,207.167,493.527,222.083C493.527,237,493.527,248,493.527,259C493.527,270,493.527,281,493.527,295.917C493.527,310.833,493.527,329.667,493.527,349.833C493.527,370,493.527,391.5,493.527,413C493.527,434.5,493.527,456,493.527,477.5C493.527,499,493.527,520.5,493.527,542C493.527,563.5,493.527,585,493.527,605.167C493.527,625.333,493.527,644.167,493.527,659.083C493.527,674,493.527,685,493.527,696C493.527,707,493.527,718,486.352,727.723C479.176,737.447,464.825,745.893,457.649,750.117L450.474,754.34"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-A LE-G" id="L-A-G-0" d="M435.688,41.589L455.142,47.991C474.596,54.392,513.505,67.196,532.96,79.098C552.414,91,552.414,102,552.414,116.917C552.414,131.833,552.414,150.667,552.414,169.5C552.414,188.333,552.414,207.167,552.414,222.083C552.414,237,552.414,248,552.414,259C552.414,270,552.414,281,552.414,295.917C552.414,310.833,552.414,329.667,552.414,349.833C552.414,370,552.414,391.5,552.414,413C552.414,434.5,552.414,456,552.414,477.5C552.414,499,552.414,520.5,552.414,542C552.414,563.5,552.414,585,552.414,605.167C552.414,625.333,552.414,644.167,552.414,659.083C552.414,674,552.414,685,552.414,696C552.414,707,552.414,718,552.414,732.917C552.414,747.833,552.414,766.667,552.414,786.833C552.414,807,552.414,828.5,542.378,844.969C532.342,861.437,512.27,872.874,502.235,878.593L492.199,884.311"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-B LE-H" id="L-B-H-0" d="M85.192,201L81.275,205.167C77.357,209.333,69.522,217.667,65.605,227.333C61.688,237,61.688,248,61.688,259C61.688,270,61.688,281,61.688,291.117C61.688,301.233,61.688,310.467,61.688,315.083L61.688,319.7"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-B LE-C" id="L-B-C-0" d="M157.812,201L163.5,205.167C169.188,209.333,180.565,217.667,186.253,227.333C191.941,237,191.941,248,191.941,259C191.941,270,191.941,281,195.647,290.055C199.352,299.11,206.763,306.22,210.468,309.776L214.173,313.331"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-C LE-D" id="L-C-D-0" d="M250.828,380L250.828,385.5C250.828,391,250.828,402,253.887,412.257C256.947,422.514,263.065,432.028,266.125,436.785L269.184,441.542"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-D LE-E" id="L-D-E-0" d="M292.309,509L292.309,514.5C292.309,520,292.309,531,295.564,541.27C298.819,551.541,305.329,561.081,308.584,565.852L311.839,570.622"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-E LE-F" id="L-E-F-0" d="M336.32,638L336.32,642.167C336.32,646.333,336.32,654.667,336.32,664.333C336.32,674,336.32,685,336.32,696C336.32,707,336.32,718,340.185,727.068C344.05,736.135,351.78,743.27,355.645,746.838L359.51,750.405"/><path marker-end="url(#my-svg_flowchart-pointEnd)" style="fill:none;" class="edge-thickness-normal edge-pattern-solid flowchart-link LS-F LE-G" id="L-F-G-0" d="M397.531,817L397.531,822.5C397.531,828,397.531,839,400.607,849.258C403.682,859.516,409.832,869.033,412.908,873.791L415.983,878.549"/></g><g class="edgeLabels"><g transform="translate(114.80859375, 80)" class="edgeLabel"><g transform="translate(-14.3984375, -8)" class="label"><foreignObject height="16" width="28.796875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">SSH</span></div></foreignObject></g></g><g transform="translate(278.02734375, 169.5)" class="edgeLabel"><g transform="translate(-14.3984375, -8)" class="label"><foreignObject height="16" width="28.796875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">SSH</span></div></foreignObject></g></g><g transform="translate(336.70703125, 259)" class="edgeLabel"><g transform="translate(-14.3984375, -8)" class="label"><foreignObject height="16" width="28.796875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">SSH</span></div></foreignObject></g></g><g transform="translate(397.91796875, 348.5)" class="edgeLabel"><g transform="translate(-14.3984375, -8)" class="label"><foreignObject height="16" width="28.796875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">SSH</span></div></foreignObject></g></g><g transform="translate(493.52734375, 413)" class="edgeLabel"><g transform="translate(-14.3984375, -8)" class="label"><foreignObject height="16" width="28.796875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">SSH</span></div></foreignObject></g></g><g transform="translate(552.4140625, 477.5)" class="edgeLabel"><g transform="translate(-14.3984375, -8)" class="label"><foreignObject height="16" width="28.796875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">SSH</span></div></foreignObject></g></g><g transform="translate(61.6875, 259)" class="edgeLabel"><g transform="translate(-20.625, -8)" class="label"><foreignObject height="16" width="41.25"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">Gig0/0</span></div></foreignObject></g></g><g transform="translate(191.94140625, 259)" class="edgeLabel"><g transform="translate(-20.625, -8)" class="label"><foreignObject height="16" width="41.25"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">Gig0/1</span></div></foreignObject></g></g><g transform="translate(250.828125, 413)" class="edgeLabel"><g transform="translate(-20.625, -8)" class="label"><foreignObject height="16" width="41.25"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">Gig0/1</span></div></foreignObject></g></g><g transform="translate(292.30859375, 542)" class="edgeLabel"><g transform="translate(-25.6875, -8)" class="label"><foreignObject height="16" width="51.375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">ge-0/0/1</span></div></foreignObject></g></g><g transform="translate(336.3203125, 696)" class="edgeLabel"><g transform="translate(-25.6875, -8)" class="label"><foreignObject height="16" width="51.375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">ge-0/0/2</span></div></foreignObject></g></g><g transform="translate(397.53125, 850)" class="edgeLabel"><g transform="translate(-30.359375, -8)" class="label"><foreignObject height="16" width="60.71875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="edgeLabel">Ethernet1</span></div></foreignObject></g></g></g><g class="nodes"><g transform="translate(114.80859375, 169.5)" data-id="B" data-node="true" id="flowchart-B-1" class="node default default flowchart-label"><rect height="63" width="96.75" y="-31.5" x="-48.375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-40.875, -24)" style="" class="label"><rect/><foreignObject height="48" width="81.75"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Cisco Router<br />R1<br />192.168.1.10</span></div></foreignObject></g></g><g transform="translate(250.828125, 348.5)" data-id="C" data-node="true" id="flowchart-C-3" class="node default default flowchart-label"><rect height="63" width="95.921875" y="-31.5" x="-47.9609375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-40.4609375, -24)" style="" class="label"><rect/><foreignObject height="48" width="80.921875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Cisco Router<br />R2<br />192.168.1.11</span></div></foreignObject></g></g><g transform="translate(292.30859375, 477.5)" data-id="D" data-node="true" id="flowchart-D-5" class="node default default flowchart-label"><rect height="63" width="106.046875" y="-31.5" x="-53.0234375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-45.5234375, -24)" style="" class="label"><rect/><foreignObject height="48" width="91.046875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Juniper Switch<br />SW1<br />192.168.1.20</span></div></foreignObject></g></g><g transform="translate(336.3203125, 606.5)" data-id="E" data-node="true" id="flowchart-E-7" class="node default default flowchart-label"><rect height="63" width="106.046875" y="-31.5" x="-53.0234375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-45.5234375, -24)" style="" class="label"><rect/><foreignObject height="48" width="91.046875"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Juniper Switch<br />SW2<br />192.168.1.21</span></div></foreignObject></g></g><g transform="translate(439.21875, 914.5)" data-id="G" data-node="true" id="flowchart-G-11" class="node default default flowchart-label"><rect height="63" width="96.75" y="-31.5" x="-48.375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-40.875, -24)" style="" class="label"><rect/><foreignObject height="48" width="81.75"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Arista Switch<br />ASW2<br />192.168.1.31</span></div></foreignObject></g></g><g transform="translate(397.53125, 785.5)" data-id="F" data-node="true" id="flowchart-F-9" class="node default default flowchart-label"><rect height="63" width="96.75" y="-31.5" x="-48.375" ry="0" rx="0" style="" class="basic label-container"/><g transform="translate(-40.875, -24)" style="" class="label"><rect/><foreignObject height="48" width="81.75"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Arista Switch<br />ASW1<br />192.168.1.30</span></div></foreignObject></g></g><g transform="translate(380.71875, 23.5)" data-id="A" data-node="true" id="flowchart-A-0" class="node default default flowchart-label"><rect height="47" width="109.9375" y="-23.5" x="-54.96875" ry="0" rx="0" style="fill:#e1f5fe;" class="basic label-container"/><g transform="translate(-47.46875, -16)" style="" class="label"><rect/><foreignObject height="32" width="94.9375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Ansible Control<br />Machine</span></div></foreignObject></g></g><g transform="translate(61.6875, 348.5)" data-id="H" data-node="true" id="flowchart-H-13" class="node default default flowchart-label"><rect height="47" width="62.484375" y="-23.5" x="-31.2421875" ry="0" rx="0" style="fill:#f5f5f5;" class="basic label-container"/><g transform="translate(-23.7421875, -16)" style="" class="label"><rect/><foreignObject height="32" width="47.484375"><div style="display: inline-block; white-space: nowrap;" xmlns="http://www.w3.org/1999/xhtml"><span class="nodeLabel">Internet<br />Cloud</span></div></foreignObject></g></g></g></g></g></svg></div>

## Sample Playbooks

### Inventory File (hosts.ini)

```ini
[control_machine]
ansible ansible_host=127.0.0.1 ansible_connection=local

[cisco_routers]
R1 ansible_host=192.168.1.10
R2 ansible_host=192.168.1.11

[juniper_switches]
SW1 ansible_host=192.168.1.20
SW2 ansible_host=192.168.1.21

[arista_switches]
ASW1 ansible_host=192.168.1.30
ASW2 ansible_host=192.168.1.31

[network_devices:children]
cisco_routers
juniper_switches
arista_switches
```

### Group Variables (group_vars/cisco_routers.yml)

```yaml
ansible_network_os: ios
ansible_user: cisco
ansible_password: ciscopassword
ansible_connection: network_cli
ansible_become: yes
ansible_become_method: enable
enable_password: enablepassword

logging_host: 192.168.1.100
snmp_community: networkmonitoring
```

### 1. Show Commands Playbook

This playbook demonstrates running show commands across different vendors.

```yaml
---
- name: Network Device Show Commands
  hosts: network_devices
  connection: network_cli
  gather_facts: no

  tasks:
    - name: Show version - Cisco
      ios_command:
        commands: show version | include Version
      register: version_output
      when: "'cisco_routers' in group_names"

    - name: Show version - Juniper
      junos_command:
        commands: show version | match hostname
      register: version_output
      when: "'juniper_switches' in group_names"

    - name: Show version - Arista
      eos_command:
        commands: show version | include Software
      register: version_output
      when: "'arista_switches' in group_names"

    - name: Display version information
      debug:
        msg: |
          Device: {{ inventory_hostname }}
          Version Info: {{ version_output.stdout_lines[0] | join(' ') }}

    - name: Show interfaces - Cisco
      ios_command:
        commands: show ip interface brief
      register: int_output
      when: "'cisco_routers' in group_names"

    - name: Show interfaces - Juniper
      junos_command:
        commands: show interfaces terse
      register: int_output
      when: "'juniper_switches' in group_names"

    - name: Show interfaces - Arista
      eos_command:
        commands: show ip interface brief
      register: int_output
      when: "'arista_switches' in group_names"

    - name: Display interface information
      debug:
        msg: "{{ int_output.stdout_lines }}"
```

**Sample Execution Output:**

```bash
$ ansible-playbook show_commands.yml -i hosts.ini

PLAY [Network Device Show Commands] ***************************

TASK [Show version - Cisco] **********************************
ok: [R1]
ok: [R2]

TASK [Show version - Juniper] *******************************
ok: [SW1]
ok: [SW2]

TASK [Show version - Arista] ********************************
ok: [ASW1]
ok: [ASW2]

TASK [Display version information] **************************
ok: [R1] => {
    "msg": "Device: R1\nVersion Info: Cisco IOS Software, IOSv Software (VIOS-ADVENTERPRISEK9-M), Version 15.7(3)M3"
}
ok: [R2] => {
    "msg": "Device: R2\nVersion Info: Cisco IOS Software, IOSv Software (VIOS-ADVENTERPRISEK9-M), Version 15.7(3)M3"
}
ok: [SW1] => {
    "msg": "Device: SW1\nVersion Info: Hostname: SW1-core"
}
ok: [SW2] => {
    "msg": "Device: SW2\nVersion Info: Hostname: SW2-edge"
}
ok: [ASW1] => {
    "msg": "Device: ASW1\nVersion Info: Arista EOS Software, Version 4.25.4M"
}
ok: [ASW2] => {
    "msg": "Device: ASW2\nVersion Info: Arista EOS Software, Version 4.25.4M"
}

TASK [Show interfaces - Cisco] *****************************
ok: [R1]
ok: [R2]

TASK [Show interfaces - Juniper] ***************************
ok: [SW1]
ok: [SW2]

TASK [Show interfaces - Arista] ****************************
ok: [ASW1]
ok: [ASW2]

TASK [Display interface information] ***********************
ok: [R1] => {
    "msg": [
        "Interface                  IP-Address      OK? Method Status                Protocol",
        "GigabitEthernet0/0         192.168.1.1     YES manual up                    up",
        "GigabitEthernet0/1         unassigned      YES NVRAM  up                    up",
        "GigabitEthernet0/2         10.1.1.1        YES manual up                    up"
    ]
}
ok: [SW1] => {
    "msg": [
        "Interface               Admin Link Proto    Local                 Remote",
        "cbp0                    up    up",
        "demux0                  up    up",
        "dsc                     up    up",
        "em0                     up    up   inet     10.0.0.1/8",
        "em1                     up    down",
        "ge-0/0/0               up    down",
        "ge-0/0/1               up    up   inet     192.168.1.20/24"
    ]
}
ok: [ASW1] => {
    "msg": [
        "Interface              IP Address         Status     Protocol         MTU    Owner",
        "Management1            192.168.1.30/24   up         up              1500",
        "Ethernet1              unassigned         down       down            1500",
        "Ethernet2              172.16.1.1/24     up         up              1500"
    ]
}

PLAY RECAP **************************************************
R1          : ok=3    changed=0    unreachable=0    failed=0
R2          : ok=3    changed=0    unreachable=0    failed=0
SW1         : ok=3    changed=0    unreachable=0    failed=0
SW2         : ok=3    changed=0    unreachable=0    failed=0
ASW1        : ok=3    changed=0    unreachable=0    failed=0
ASW2        : ok=3    changed=0    unreachable=0    failed=0
```

### 2. Configuration Pull Playbook

This playbook collects configurations from network devices and saves them locally.

```yaml
---
- name: Network Device Configuration Backup
  hosts: network_devices
  connection: network_cli
  gather_facts: no

  tasks:
    - name: Create backup directory
      file:
        path: "./backups/{{ inventory_hostname }}"
        state: directory
      delegate_to: localhost
      run_once: true

    - name: Backup Cisco running configuration
      ios_command:
        commands: show running-config
      register: config_output
      when: "'cisco_routers' in group_names"

    - name: Backup Juniper configuration
      junos_command:
        commands: show configuration | display set
      register: config_output
      when: "'juniper_switches' in group_names"

    - name: Backup Arista running configuration
      eos_command:
        commands: show running-config
      register: config_output
      when: "'arista_switches' in group_names"

    - name: Save configuration to file
      copy:
        content: |
          # Configuration backup for {{ inventory_hostname }}
          # Date: {{ ansible_date_time.iso8601 }}
          # Device: {{ inventory_hostname }}
          {{ config_output.stdout[0] | default(config_output.stdout_lines | join('\n')) }}
        dest: "./backups/{{ inventory_hostname }}/{{ inventory_hostname }}_{{ ansible_date_time.iso8601 }}.cfg"
      delegate_to: localhost

    - name: Git add and commit backup
      shell: |
        cd backups
        git add {{ inventory_hostname }}/{{ inventory_hostname }}_{{ ansible_date_time.iso8601 }}.cfg
        git commit -m "Backup {{ inventory_hostname }} configuration"
      delegate_to: localhost
      run_once: true
      ignore_errors: yes
```

**Sample Execution Output:**

```bash
$ ansible-playbook config_backup.yml -i hosts.ini

PLAY [Network Device Configuration Backup] *******************

TASK [Create backup directory] *******************************
ok: [R1 -> localhost]

TASK [Backup Cisco running configuration] ********************
ok: [R1]
ok: [R2]

TASK [Backup Juniper configuration] **************************
ok: [SW1]
ok: [SW2]

TASK [Backup Arista running configuration] ******************
ok: [ASW1]
ok: [ASW2]

TASK [Save configuration to file] ****************************
ok: [R1 -> localhost] =>
  "path": "/home/ansible/backups/R1/R1_2023-08-15T14-30-45.cfg",
  "size": 3456
ok: [R2 -> localhost] =>
  "path": "/home/ansible/backups/R2/R2_2023-08-15T14-30-45.cfg"
ok: [SW1 -> localhost] =>
  "path": "/home/ansible/backups/SW1/SW1_2023-08-15T14-30-45.cfg"
ok: [SW2 -> localhost] =>
  "path": "/home/ansible/backups/SW2/SW2_2023-08-15T14-30-45.cfg"
ok: [ASW1 -> localhost] =>
  "path": "/home/ansible/backups/ASW1/ASW1_2023-08-15T14-30-45.cfg"
ok: [ASW2 -> localhost] =>
  "path": "/home/ansible/backups/ASW2/ASW2_2023-08-15T14-30-45.cfg"

TASK [Git add and commit backup] *****************************
changed: [R1 -> localhost]

PLAY RECAP **************************************************
R1          : ok=5    changed=0    unreachable=0    failed=0
R2          : ok=4    changed=0    unreachable=0    failed=0
SW1         : ok=4    changed=0    unreachable=0    failed=0
SW2         : ok=4    changed=0    unreachable=0    failed=0
ASW1        : ok=4    changed=0    unreachable=0    failed=0
ASW2        : ok=4    changed=0    unreachable=0    failed=0
```

**Sample Backup File Content (R1.cfg created):**

```text
# Configuration backup for R1
# Date: 2023-08-15T14:30:45+00:00
# Device: R1
Building configuration...

Current configuration : 3456 bytes
!
! Last configuration change at 14:25:30 UTC Wed Aug 15 2023 by ansible
!
version 15.7
service timestamps debug datetime msec
service timestamps log datetime msec
!
hostname R1
!
boot-start-marker
boot-end-marker
!
!
username cisco privilege 15 secret 9 $9$ABCDEFGHIJK
!
!
interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
 duplex auto
 speed auto
 media-type rj45
!
interface GigabitEthernet0/1
 no ip address
 shutdown
 duplex auto
 speed auto
 media-type rj45
!
interface GigabitEthernet0/2
 ip address 10.1.1.1 255.255.255.0
 duplex auto
 speed auto
 media-type rj45
!
router ospf 1
 network 10.1.1.0 0.0.0.255 area 0
!
ip default-gateway 192.168.1.254
ip http server
ip http authentication local
ip http secure-server
!
!
line con 0
 exec-timeout 0 0
 privilege level 15
 logging synchronous
line aux 0
 exec-timeout 0 0
 privilege level 15
 logging synchronous
line vty 0 4
 privilege level 15
 logging synchronous
 transport input ssh
!
end
```

**Sample Backup File Content (SW1.cfg created - Juniper set format):**

```bash
# Configuration backup for SW1
# Date: 2023-08-15T14:30:45+00:00
# Device: SW1
set version 18.3R3-S4.5
set system host-name SW1-core
set system root-authentication encrypted-password "$6$abcdefghijklmnop"
set system login user ansible uid 2001
set system login user ansible class super-user
set system login user ansible authentication encrypted-password "$6$qrstuvwxyz123"
set system services ssh
set system services netconf ssh
set system syslog archive size 100k
set system syslog archive files 5
set interfaces ge-0/0/1 unit 0 family inet address 192.168.1.20/24
set interfaces ge-0/0/1 unit 0 family inet address 192.168.2.20/24
set interfaces lo0 unit 0 family inet address 10.0.0.1/32
set protocols ospf area 0.0.0.0 interface ge-0/0/1.0
set protocols ospf area 0.0.0.0 interface lo0.0 passive
set protocols lldp interface all
set routing-options router-id 10.0.0.1
```

### 3. Configuration Push Playbook

This playbook pushes configuration changes to network devices.

```yaml
---
- name: Network Device Configuration Updates
  hosts: network_devices
  connection: network_cli
  gather_facts: no

  vars:
    new_hostname: "{{ inventory_hostname }}_updated"

  tasks:
    - name: Backup current configuration (Cisco)
      ios_command:
        commands: show running-config
      register: current_config
      when: "'cisco_routers' in group_names"

    - name: Update hostname - Cisco
      ios_config:
        lines:
          - hostname {{ new_hostname }}
        save_when: changed
      when: "'cisco_routers' in group_names"

    - name: Configure logging server - Cisco
      ios_config:
        lines:
          - logging host {{ logging_host }}
        save_when: changed
      when: "'cisco_routers' in group_names"

    - name: Configure SNMP - Cisco
      ios_config:
        lines:
          - snmp-server community {{ snmp_community }} RO
        save_when: changed
      when: "'cisco_routers' in group_names"

    - name: Update hostname - Juniper
      junos_config:
        lines:
          - set system host-name {{ new_hostname }}
      when: "'juniper_switches' in group_names"

    - name: Configure logging server - Juniper
      junos_config:
        lines:
          - set system syslog host {{ logging_host }} any any
      when: "'juniper_switches' in group_names"

    - name: Configure SNMP - Juniper
      junos_config:
        lines:
          - set snmp community {{ snmp_community }} authorization read-only
      when: "'juniper_switches' in group_names"

    - name: Update hostname - Arista
      eos_config:
        lines:
          - hostname {{ new_hostname }}
        save_when: changed
      when: "'arista_switches' in group_names"

    - name: Configure logging server - Arista
      eos_config:
        lines:
          - logging host {{ logging_host }}
        save_when: changed
      when: "'arista_switches' in group_names"

    - name: Configure SNMP - Arista
      eos_config:
        lines:
          - snmp-server community {{ snmp_community }} ro
        save_when: changed
      when: "'arista_switches' in group_names"

    - name: Verify configuration
      pause:
        prompt: "Verify the changes before continuing?"
        seconds: 30

    - name: Save configuration - Cisco
      ios_command:
        commands: write memory
      when: "'cisco_routers' in group_names"

    - name: Save configuration - Juniper
      junos_command:
        commands: commit
      when: "'juniper_switches' in group_names"

    - name: Save configuration - Arista
      eos_command:
        commands: write memory
      when: "'arista_switches' in group_names"
```

**Sample Execution Output:**

```bash
$ ansible-playbook config_push.yml -i hosts.ini

PLAY [Network Device Configuration Updates] ******************

TASK [Backup current configuration (Cisco)] ******************
ok: [R1]
ok: [R2]

TASK [Update hostname - Cisco] *******************************
changed: [R1]
changed: [R2]

TASK [Configure logging server - Cisco] *********************
changed: [R1]
changed: [R2]

TASK [Configure SNMP - Cisco] *******************************
ok: [R1]
ok: [R2]

TASK [Update hostname - Juniper] *****************************
changed: [SW1]
changed: [SW2]

TASK [Configure logging server - Juniper] *******************
changed: [SW1]
changed: [SW2]

TASK [Configure SNMP - Juniper] *****************************
changed: [SW1]
changed: [SW2]

TASK [Update hostname - Arista] *****************************
changed: [ASW1]
changed: [ASW2]

TASK [Configure logging server - Arista] *******************
ok: [ASW1]
ok: [ASW2]

TASK [Configure SNMP - Arista] *****************************
ok: [ASW1]
ok: [ASW2]

TASK [Verify configuration] *********************************
Pausing for 30 seconds
(ctrl+C then 'C' = continue early, ctrl+C then 'A' = abort)
ok: [R1]

TASK [Save configuration - Cisco] ***************************
ok: [R1]
ok: [R2]

TASK [Save configuration - Juniper] *************************
ok: [SW1]
ok: [SW2]

TASK [Save configuration - Arista] **************************
ok: [ASW1]
ok: [ASW2]

PLAY RECAP **************************************************
R1          : ok=9    changed=3    unreachable=0    failed=0
R2          : ok=8    changed=3    unreachable=0    failed=0
SW1         : ok=8    changed=3    unreachable=0    failed=0
SW2         : ok=8    changed=3    unreachable=0    failed=0
ASW1        : ok=8    changed=1    unreachable=0    failed=0
ASW2        : ok=8    changed=1    unreachable=0    failed=0
```

**Verification of Changes (post-playbook commands):**

```bash
# Verify Cisco hostnames changed
$ ansible cisco_routers -m ios_command -a "commands='show running-config | include hostname'" -i hosts.ini

R1 | CHANGED | rc=0 >>
hostname R1_updated

R2 | CHANGED | rc=0 >>
hostname R2_updated

# Verify Juniper hostnames changed
