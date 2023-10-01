import '../styles/globals.css';
import Link from 'next/link';
import { marked } from 'marked';

const mdSrc = `
## General
  **tobifasc.at** is a VPS running CentOS. 
  There are multiple services, mostly in docker containers, made accessible by an nginx reverse proxy. 
  Before I explain what those services are I want to talk about my VPN:
  
## Wireguard 
  _Why a VPN?_ I want to avoid security problems by having as little as possible open to the internet. 
  By setting up my own VPN I can make specific services available only inside this private network where no bad actor should be able to enter.

  _What made me choose [wireguard](https://www.wireguard.com/) as my VPN?_ I heard from a friend that it's fast... 
  I looked it up and saw that it seems secure... And easy enough to setup... 
  I have never set up any other VPN so why not wireguard.

  To install in CentOS run:
  \`\`\`
  $ sudo yum install epel-release elrepo-release
  $ sudo yum install yum-plugin-elrepo
  $ sudo yum install kmod-wireguard wireguard-tools
  \`\`\`

  To create the interface configuration you need a private and publickey:
  \`\`\`
  $ wg genkey | tee privatekey | wg pubkey > publickey
  \`\`\`
  
  To configure a client it also needs a private and publickey. Additionally you can create a pre-shared key like this:

  \`\`\`
  $ wg genpsk
  \`\`\`
  
  Afterwards create \`/etc/wireguard/wg0.conf\` on the server:

  \`\`\`
  [Interface]
  Address = a.b.c.1/24
  ListenPort = 51820
  PrivateKey = ...

  [Peer]
  PublicKey = ...
  PresharedKey = ...
  AllowedIPs = a.b.c.2/32
  
  \`\`\`

  On e.g. a Linux client the configuration file \`/etc/wireguard/wg0.conf\` could look like this:

  \`\`\`
  [Interface]
  Address = a.b.c.2
  PrivateKey = ...
  DNS = a.b.c.1

  [Peer]
  PublicKey = ...
  PresharedKey = ...
  Endpoint = w.x.y.z:51820
  AllowedIPs = a.b.c.1/32
  
  \`\`\`

  Here \`w.x.y.z\` is your public IP.

  After the configuration is done you can start the interface on the server by running 
  
  \`\`\`
  $ wg-quick up wg0
  \`\`\`

  and then doing the same on the client.


## Docker
  - pi-hole
  - vaultwarden
  - www.tobifasc.at
  

## nginx
  - Reverse proxy 
  - Forwarding

  `;
  
function getMarkdownText() {
  var rawMarkup = marked.parse(mdSrc);
  return { __html: rawMarkup };
}

export default function Dotfiles() {
  return (
    <>
      <div className="container mx-auto text-center p-10">
        <h1 className="text-4xl md:text-7xl font-bold">Server-Setup</h1>
      </div>
      <div className="lg:mx-20 xl:mx-80 p-10">
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={getMarkdownText()}></div>
      </div>
    </>
  )
}
