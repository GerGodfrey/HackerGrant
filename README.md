⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.
# The Hacker Grant Repository
<p align="center">
    <br>
    <img src="images/HackerGrant_logo.png" width="500"/>
    <br>
<p>

## Description
This repository contains the source code and related resources for The Hacker Grant, a Web3 crowdfunding platform designed support talented hackers. 
## Problem
While the Ethereum developer community is expanding and thriving, many hackers and aspiring developers cannot afford to attend global hackathons. Resolving this lack of resources, would allow hackers:

- To networking in person
- To learn about the latest advancements
- Get valuable insights and practical experience

At the same time, for those who support hackers, would allow them to:

- Increase engagement with their projects
- Have direct access to talent pool
- Keep fostering the strong sense of community


## Proposed Solution

Our solution consist in a crowfunding platform to connect hackers and supporters 

1. The hacker sign up in the platform and provide some basic info, his github link and his public address, the system assess the hacker using a large language model, if the hacker is approved his profile is published in the platform
2. Supporters sign up in the platform and check the published hackers profiles and select those who want to support, they transfer the resources from their wallets to a escrow account created with a smart contract and hold the resources until the hacker's campaign is finished
3. When the requested amount is reached, the platform transfers the balance to the hacker's wallet and he can use the resources to cover his trip's expenses  


## Platform Components
<p align="center">
    <br>
        <img src="images/components.jpg" width="1000"/>
    <br>
<p>


The Platform consists of the following main components:
1.	**Scaffold.eth**: Developtment framework that allows to setup the frontend to smart contracts. 
2.	**NEXT.js**  to create full-stack Web applications by extending the latest React features
3.	**Nouns:**  on-chain avatar community, our look & feel is inspired by the nouns universe
4.	**Quicknode:** A set of APIs to input the info provided by the hacker, including his wallet activity
5.	**Langchain** LLM model to assess the hacker's profile
6. **WordID** The hacker will attest the information is accurate using this component 
7. **Airstack** To verify that the hacker attended the hackaton querying the POAP sent to his wallet
8. **Polygon** The blockchain to store and execute the smart contracts

## Our Source
1. Web Page: https://hackergrant-gergodfrey.vercel.app/
2. Pitch Deck: https://docs.google.com/presentation/d/1G0yVV3pKGYza3zQVh9iyFlfafEisoh4rjYtnfoAO5CE/edit?usp=sharing
3. Final Design Figma https://www.figma.com/file/nUbB6dd0KzDWUIWMu5cR21/FanLane?type=design&node-id=1003-22493&t=pA1L3lfjZQJjtO5b-0 

## Our Repos 
1.https://github.com/GerGodfrey/HackerGrant
## SC Info
    0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
    0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
    0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
## Contribution
We welcome any contributions to the development and improvement of The Hacker Grant! If you would like to contribute, please follow these steps:
1.	Clone this repository to your local machine.
2.	Make the necessary changes or improvements. 
3.	Ensure thorough testing of the changes.
4.	Create a detailed pull request explaining the changes made and their purpose.
## Team
Danya
Francisco 
Diego
Gerardo
Gustavo

<p align="center">
    <br>
    <img src="images/team.jpg" width="500"/>
    <br>
<p>





