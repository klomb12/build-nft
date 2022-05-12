const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("nft marketplace test",function(){
    it("should create and execute market sale ",async function(){
         const Market  = await ethers.getContractFactory("NFTMarket");
         const market = await Market.deploy();
         await market.deployed();// comment 
         const marketAddress = market.address;


         const NFT  = await ethers.getContractFactory("NFT");
         const nft = await NFT.deploy(marketAddress);
         await nft.deployed();// comment 
         const nftContractAddress = nft.address;

         let listingPrice = await market.getListingPrice();
         listingPrice = listingPrice.toString(); 

         const auctionPrice = ethers.utils.parseUnits("75","ether");

         await nft.createToken("httos://www.mytokenlocation.com");
         await nft.createToken("httos://www.mytokenlocation2.com");

         await market.createMarketItem(nftContractAddress,1,auctionPrice,{value:listingPrice});
         await market.createMarketItem(nftContractAddress,2,auctionPrice,{value:listingPrice});

         const [_,buyerAddress] = await ethers.getSigners();

         await market.connect(buyerAddress).createMarketSale(nftContractAddress,2,{value: auctionPrice});

         const myNft = await market.fetchItemsCreated();
         console.log("my NFTs:",myNft);

         const items = await market.fetchMarketItems();
         console.log("items:",items);
        

    });
});